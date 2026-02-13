<template>
  <div id="contact" class="py-15 md:py-28 mx-auto px-6 bg-gray-100">
    <div class="text-center">
      <h2 class="text-4xl font-bold">CONTATO</h2>
      <hr class="border-y-2 border-blue-500 w-10 mx-auto my-8 rounded" />
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        Sinta-se à vontade para entrar em contato comigo enviando o formulário
        abaixo e retornarei o mais breve possível.
      </p>
    </div>
    <form
      action="https://getform.io/f/8f633616-a370-41f7-9f57-3968e852c92d"
      class="max-w-3xl mx-auto bg-white p-10 text-gray-600 font-medium shadow-lg mt-8"
      method="POST"
    >
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          class="bg-gray-200 w-full rounded p-2 text-xl my-4"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
          class="bg-gray-200 w-full rounded p-2 text-xl my-4"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Digite sua mensagem"
          rows="{5}"
          class="bg-gray-200 w-full rounded p-2 text-xl my-4"
        ></textarea>
      </div>
      <div class="text-right">
        <button
          type="submit"
          class="bg-blue-500 py-4 rounded px-8 text-xl text-white shadow-lg hover:bg-blue-600"
        >
          Enviar
        </button>
      </div>
    </form>
  </div>
</template>
