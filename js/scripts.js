document.addEventListener("DOMContentLoaded", startScript);
document.addEventListener("DOMContentLoaded", handleClick);

function startScript() {
  console.log("Hello World");
  document.body.style.cssText =
    "background-image: url(img/bg.jpg); background-position: center; background-size: cover;";

  const divEl = document.createElement("div");
  divEl.setAttribute("id", "title-wrapper");
  divEl.style.cssText =
    "top: 50%; width: 100%; text-align: center; font-family: impact; position: absolute; text-transform: uppercase";

  const h1El = document.createElement("h1");
  h1El.setAttribute("id", "title");
  h1El.setAttribute(
    "style",
    "width: fit-content; margin: auto; background: black; color: white;"
  );
  h1El.textContent = "Work under progress...";

  document.body.appendChild(divEl);
  document.body.appendChild(h1El);
}

// EXTRA

function handleClick() {
  const aboutBtn = document.querySelector("#about");
  aboutBtn.addEventListener("click", loadAbout);

  function loadAbout() {
    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id", "content");
    newDivEl.setAttribute(
      "style",
      "width: fit-content; margin: auto; background: black; color: #FFF; font-size: 24px;"
    );
    newDivEl.innerHTML = "Welcome ...";
    document.body.appendChild(newDivEl);

    const hideTitle = document.querySelector("#title");
    hideTitle.hidden = true;
  }
}
