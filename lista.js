const indiceDaLista = 0

function adicionarItem() {
  const inputDoUsuario = document.getElementById('texto-do-usuario')
  const textoDigitado = inputDoUsuario.value

  inputDoUsuario.value = ''

  const lista = document.getElementById('lista')

  lista.innerHTML += `
  <li id="item-${indiceDaLista}">
      <input type="checkbox" name="item-${indiceDaLista}" id="item-${indiceDaLista}">
      ${textoDigitado}
      <button onclick="removerItem('item-${indiceDaLista}')"><i class="fa-solid fa-xmark"></i></button>
  </li>
  `

  indiceDaLista++
}

function removerItem(id) {
  const item = document.getElementById(id)
  item.remove()
}
