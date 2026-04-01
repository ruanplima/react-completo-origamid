import React from 'react';
import '../../../style-global.css';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado
// Essa é a função utilizado para realizar o POST
// fetch('https://ranekapi.origamid.dev/json/api/usuario', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// form é o objeto com os dados do formulário
//   body: JSON.stringify(form),
// });
// Mostre uma mensagem na tela, caso a resposta da API seja positiva

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [sucesso, setSucesso] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => setSucesso(response.ok));
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
      <h1>Exercício - Input</h1>

      <form method="POST" onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          name="senha"
          id="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">CEP:</label>
        <input
          type="text"
          name="cep"
          id="cep"
          value={form.cep}
          onChange={handleChange}
        />

        <label htmlFor="rua">Rua:</label>
        <input
          type="text"
          name="rua"
          id="rua"
          value={form.rua}
          onChange={handleChange}
        />

        <label htmlFor="numero">Número:</label>
        <input
          type="number"
          name="numero"
          id="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro:</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade:</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">UF:</label>
        <input
          type="text"
          name="estado"
          id="estado"
          value={form.estado}
          onChange={handleChange}
        />

        {sucesso && <p>Formulário enviado com sucesso!</p>}

        <button>Enviar</button>
      </form>
    </div>
  );
}

export default App;
