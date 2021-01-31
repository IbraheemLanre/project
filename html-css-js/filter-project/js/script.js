// Work to get the filter buttons working
(function () {
   const buttons = document.querySelectorAll(".btn");
  const storeItems = document.querySelectorAll(".store-item");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const btnClick = e.target.innerText.toLowerCase();
      storeItems.forEach((item) => {
        if (btnClick === "all") {
          item.style.display = "block";
        } else {
          if (item.classList.contains(btnClick)) {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        }
      });
    });
  });
})();

//wire up filter search box
(function () {
  const searchBox = document.querySelector("#search-item");
  const storeItems = document.querySelectorAll(".store-item");

  searchBox.addEventListener("input", (e) => {
    e.preventDefault()
    const searchText = e.target.value.toLowerCase().trim();

    storeItems.forEach((item) => {
      if (item.textContent.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
})();
