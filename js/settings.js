const scroll = () => {
  let btnTop = document.getElementById("buttonTop")
  if (document.documentElement.scrollTop > 0) {
    btnTop.style.display = "block"
  } else {
    btnTop.style.display = "none"
  }
}

window.onscroll = () => (
  scroll()
);