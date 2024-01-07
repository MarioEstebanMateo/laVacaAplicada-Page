// ----- Año de Footer -----
const year = document.getElementsByClassName("footerYear");

function returnYear() {
  return new Date().getFullYear();
}

year[0].innerHTML = returnYear();
