"use client"
import React, { useState } from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaMedium } from 'react-icons/fa';
import Link from "next/link";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xwkdgbpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!"); // Use alert for notification
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      alert(`Erro ao enviar mensagem: ${error.message}`);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Fale comigo
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Estou sempre aberto a conversar, entre em contato por essa área para nos falarmos
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/DenisCDev" target="_blank">
            <FaGithub size={40} className="text-white hover:text-yellow-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/denis-scarabelli/" target="_blank">
            <FaLinkedin size={40} className="text-white hover:text-yellow-500" />
          </Link>
          <Link href="https://www.instagram.com/denis.desenvolvedor" target="_blank">
            <FaInstagram size={40} className="text-white hover:text-yellow-500" />
          </Link>
          <Link href="https://medium.com/@denisscarabelli5" target="_blank">
            <FaMedium size={40} className="text-white hover:text-yellow-500" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Seu email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="seuemail@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Assunto
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              value={formData.subject}
              onChange={handleInputChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="O assunto é..."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Vamos falar sobre..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
