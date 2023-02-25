function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "Mobile/Ellipse.png")
  } else {
    img.setAttribute("src", "Mobile/Avatar.png")
  }

  /*if(html.classList.contains('light')) {
  html.classList.remove('light')
 } else{
  html.classList.add('light')
 }*/
}
