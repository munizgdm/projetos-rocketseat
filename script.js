function toggleMode() {
  const html = document.documentElement

  //trocar a cor da pagina.
  html.classList.toggle("light")

  // para trocar a imagem
  // 1 - subistituir a imagem
  // 2 - Se tiver light mode, adicionar a imagem light
  // 3 - se tiver dark mode, manter a imagem normal

  // pegar a tag img
  //const img = document.querySelector("#profile img")

  // substituir a imagem
  // if(html.classList.contains("light")) {
  //    img.setAttribute("src", ".assets/avatar-light.png")
  // } else {
  //    img.setAttribute("src", ".assets/avatar-dark.png")
  // }

  // Este bloco de código faz o mesmo que: html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
}
