//Night mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function prefersTheme() {
  if (prefersDarkScheme.matches) {
    document.body.classList.add("night-mode");
  } else {
    document.body.classList.remove("night-mode");
  }
}
const currentTheme = localStorage.getItem("theme");
function localTheme() {
  if (currentTheme == "night") {
    document.body.classList.add("night-mode");
  } else {
    document.body.classList.remove("night-mode");
  }
}

//This save the user preference of theme on local storage, in the future should be saved by user
const btnNightMode = document.querySelector(".btn-nightMode");
btnNightMode.addEventListener("click", function () {
  document.body.classList.toggle("night-mode");

  let theme = "light";
  if (document.body.classList.contains("night-mode")) {
    theme = "night";
  }
  localStorage.setItem("theme", theme);
});

//Loader
document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    setTimeout(loader, 1000);
  }
};

function loader() {
  document.querySelector(".loader").style.display = "none";
  document.querySelector("body").style.visibility = "visible";
  prefersTheme();
  localTheme();
}
