<div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
  <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 animate-fade-in">
    <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Entrar na sua conta</h2>

    <form className="space-y-4">
      <div>
        <label htmlFor="identifier" className="text-sm text-gray-700 block mb-1">
          Email, telefone ou nome de usuário
        </label>
        <input
          type="text"
          id="identifier"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Digite seu email, telefone ou nome de usuário"
        />
      </div>

      <div>
        <label htmlFor="password" className="text-sm text-gray-700 block mb-1">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
          placeholder="Digite sua senha"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-md transition duration-300"
      >
        Entrar
      </button>

      <div className="text-center mt-4">
        <a href="#" className="text-sm text-pink-600 hover:underline">Esqueceu sua senha?</a>
      </div>
    </form>
  </div>
</div>
