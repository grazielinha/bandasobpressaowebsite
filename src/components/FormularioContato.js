'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import InputMask from 'react-input-mask';

function FormularioContato() {
  const [state, handleSubmit] = useForm("xeojjyak");

  if (state.succeeded) {
    return <p>Sua mensagem foi enviada!</p>;
  }

  return (
    <div className="mt-2 mb-8 w-full bg-azulPrincipalEscuro p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="nome" className="mb-2 font-semibold">Nome*</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome Completo"
            className="p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <label htmlFor="email" className="mb-2 font-semibold">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@exemplo.com"
            className="p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label htmlFor="telefone" className="mb-2 font-semibold">Telefone</label>
          <InputMask
            mask="(99) 99999-9999"
            maskChar=""
            id="telefone"
            name="telefone"
            placeholder="(XX) XXXXX-XXXX"
            className="p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          >
            {(inputProps) => <input {...inputProps} type="tel" />}
          </InputMask>
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <label htmlFor="message" className="mb-2 font-semibold">Mensagem*</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Escreva sua mensagem aqui..."
            className="p-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="mt-5 p-2 bg-blue-200 text-blue-600 font-semibold rounded hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioContato;
