let themes = document.getElementsByClassName("themes");

let theme = localStorage.getItem("theme")
if (theme == null){
  setTheme("light")
}else{
  setTheme(theme)
}

for (let i = 0; themes.length > i; i++) {
  themes[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("theme clicked", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-mode").href = "style.css";
  }
  if (mode == "blue") {
    document.getElementById("theme-mode").href = "blue.css";
  }
  if (mode == "green") {
    document.getElementById("theme-mode").href = "green.css";
  }
  if (mode == "purple") {
    document.getElementById("theme-mode").href = "purple.css";
  }

  localStorage.setItem("theme", mode)
}
