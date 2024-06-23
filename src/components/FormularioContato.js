const FormularioContato = () => {
    return (
      <div className="mt-2 mb-8 w-full bg-blue-400 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
        <form className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="nome" className="mb-2 font-semibold">Nome*</label>
            <input
              type="text"
              id="nome"
              name="nome"
              className="p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <label htmlFor="email" className="mb-2 font-semibold">Email*</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
            <label htmlFor="telefone" className="mb-2 font-semibold">Telefone</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              className="p-2 mb-4 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label htmlFor="mensagem" className="mb-2 font-semibold">Mensagem*</label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows="6"
              className="p-2 border text-black rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            ></textarea>
            <button
              type="submit"
              className="mt-5 p-2 bg-blue-200 text-blue-600 font-semibold rounded hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default FormularioContato;
  