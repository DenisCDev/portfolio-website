"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Linguagens",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "skills-2",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Spring Boot</li>
      </ul>
    ),
  },
  {
    title: "Banco de Dados",
    id: "skills-3",
    content: (
      <ul className="list-disc pl-2">
        <li>MySQL</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Universidade Cruzeiro do SUl Virtual</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Fundamentos do design da experiência do usuário UX - Google</li>
        <li>Google Cloud Essentials - Google</li>
        <li>Design Thinking, UX e Metodologias Ágeis - Nubank</li>
        <li>Discover Trilha Conectar - Rocketseat</li>
        <li>Desenvolvedor Back-end  - Tech4me</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg">
          Sou um desenvolvedor web apaixonado pela criação de soluções inovadoras. Com uma formação em Ciência da Computação em andamento, busco constantemente aprimorar minhas habilidades técnicas e aplicá-las em projetos desafiadores. Tenho experiência em desenvolvimento full-stack, com um histórico de modernização de sistemas legados e criação de soluções eficazes. Sou um comunicador eficiente e trabalho bem em equipes colaborativas. Estou sempre disposto a aprender e aberto a novos desafios.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Linguagens{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills-2")}
              active={tab === "skills-2"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills-3")}
              active={tab === "skills-3"}
            >
              {" "}
              Banco de Dados{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Educação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
