"use strict";

document.addEventListener("DOMContentLoaded", init());

function init() {
  displayCountryNames();
  displayCountryInfo();
  showAnalyticPage();
}

function displayCountryNames() {
  fetch("http://localhost:8080/getall")
    .then((res) => res.json())
    .then((data) => loadTable(data["data"]));
}

function displayCountryInfo() {
  const table = document.querySelector("table tbody");

  table.addEventListener("click", (e) => {
    if (e.target.className === "country-name") {
      e.preventDefault();
      const country = e.target.innerText;
      fetch(`http://localhost:8080/countryinfo/${country}`)
        .then((res) => res.json())
        .then((data) => {
          loadCountryInfo(data["data"]);
          // sessionStorage.setItem("countryInfo", loadCountryInfo(data));
          // sessionStorage.getItem("countryInfo");
          // window.location = "country.html";
        });
    }
    // location =
    //   "country.html?" +
    //   $.param($(this).window.sessionStorage.getItem("countryInfo")); //jQuery
  });
}

function loadTable(data) {
  const table = document.querySelector("table tbody");

  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='10'>No Data</td></tr>";
    return;
  }
  let tableHtml = "";
  data.forEach(({ code, name, continent, region, indepyear, population }) => {
    tableHtml += "<tr>";
    tableHtml += `<td id="country-code">${code}</td>`;
    tableHtml += `<td ><a href="" class="country-name">${name}</a></td>`;
    tableHtml += `<td>${continent}</td>`;
    tableHtml += `<td>${region}</td>`;
    tableHtml += `<td>${indepyear}</td>`;
    tableHtml += `<td>${population}</td>`;
    tableHtml += "</tr>";
  });
  table.innerHTML = tableHtml;
}

function loadCountryInfo(data) {
  const country = document.querySelector("#country");
  // let apiData = data.data;
  let infoList = "";
  infoList += "<li>";
  infoList += `<h3>${data[0].name}</h3>`;
  infoList += `<h3>Country Info</h3>`;
  infoList += `<p>Has ${data[0].code} as its country code</p>`;
  infoList += `<p>Located in ${data[0].continent}</p>`;
  data.forEach((data) => {
    infoList += `<p>${data.language} is one of the spoken languages</p>`;
  });
  infoList += `<p>Has ${data[0].surfacearea} kilometer square</p>`;
  infoList += `<p>Got independent in ${data[0].indepyear}</p>`;
  infoList += `<p>Runs ${data[0].governmentform} system of government</p>`;
  infoList += `<p>${data[0].headofstate} is the president/head of state</p>`;
  infoList += `<p>${data[0].population} is the total population</p>`;

  infoList += "</li>";

  country.innerHTML = infoList;
}

function showAnalyticPage() {
  const table = document.querySelector("table tbody");
  let count = 0;
  table.addEventListener("click", (e) => {
    if (e.target.className === "country-name") {
      e.preventDefault();
      const countryCode = document.querySelector("#country-code").innerText;
      console.log(countryCode);
      const country = e.target.innerText;
      console.log(country);
      count += 1;
      console.log(count);
      fetch(`http://localhost:8080/insertviews`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          countryCode: countryCode,
          views: count,
        }),
      })
        .then((res) => res.json())
        .then((data) => insertPageViews(data["data"]));
    }
  });
}


function insertPageViews(data) {
  console.log(data);
  const table = document.querySelector("#views-table tbody");

  if (data.length === 0) {
    table.innerHTML = `<tr><td colspan="3">No Views</td></tr>`;
  }
  let tableHtml = "<tr>";

  for (let key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === "dateLastViewed") {
        data[key] = new Date(data[key]).toLocaleString();
      }
      tableHtml += `<td>${data[key]}</td>`;
    }
  }

  tableHtml += "</tr>";

  if (data.length > 0) {
    const newRow = table.insertRow();
    newRow.innerHTML = tableHtml;
  }

  table.innerHTML = tableHtml;
}
