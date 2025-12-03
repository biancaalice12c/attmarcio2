const main = document.querySelector("main")


async function buscarUsuarios() {
  const users = await fetch("https://attmarcio1-sftg.vercel.app/3333").then((response) => response.json())

  users.map(user => {
    main.innerHTML += `
      <section>
        <h3>Nome: ${user.name}</h3>
        <p>Idade: ${user.age} anos</p>
        <p>E-mail: ${user.email}</p>
      </section>
    `
  })
}