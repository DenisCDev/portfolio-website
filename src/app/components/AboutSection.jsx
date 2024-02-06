"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Habilidades",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Next.js</li>
        <li>Spring Boot</li>
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
        <li>Ciência da Computação</li>
        <em>Universidade Cruzeiro do Sul Virtual</em>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <Link href='https://www.coursera.org/account/accomplishments/certificate/8GTWGD9JR77J' target="_blank" className="text-white hover:text-yellow-500"><li>Fundamentos do design da experiência do usuário UX - Google</li></Link>
        <Link href='https://www.cloudskillsboost.google/public_profiles/18698d44-e14f-4338-b6b3-6e015b323d41/badges/1696274' target="_blank" className="text-white hover:text-yellow-500"><li>Google Cloud Essentials - Google</li></Link>
        <Link href='https://empresas.descomplica.com.br/#/certificado/7e3cd356-2012-41f5-b715-a6af58e7b08a' target="_blank" className="text-white hover:text-yellow-500"><li>Design Thinking, UX e Metodologias Ágeis - Nubank</li></Link>
        <Link href='https://drive.google.com/file/d/1P8PAad_ZuuSwVQUzEm1r04tOMSxQjVts/view' target="_blank" className="text-white hover:text-yellow-500"><li>Discover Trilha Conectar - Rocketseat</li></Link>
        <Link href='https://drive.google.com/file/d/1ZChCvEEHDa_bgfFw091uZ7jau2ghUCk7/view' target="_blank" className="text-white hover:text-yellow-500"><li>Desenvolvedor Back-end  - Tech4me</li></Link>
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
            Sou um desenvolvedor especializado em front-end apaixonado pela criação de soluções inovadoras. Com uma formação em Ciência da Computação em andamento, busco constantemente aprimorar minhas habilidades técnicas e aplicá-las em projetos desafiadores. Tenho experiência em desenvolvimento web, com um histórico de modernização de sistemas legados e criação de soluções eficazes. Sou um comunicador eficiente e trabalho bem em equipes colaborativas. Estou sempre disposto a aprender e aberto a novos desafios.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Habilidades{" "}
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
