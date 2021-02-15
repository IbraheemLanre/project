document.addEventListener("DOMContentLoaded", function () {
  loadHTMLTable([]);
});

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");
  let tableHtml = "";
  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data'></td></tr>";
  }
}
