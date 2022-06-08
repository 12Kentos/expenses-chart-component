"use strict";

const monday = document.querySelector(".money1");
const tuesday = document.querySelector(".money2");
const wednesday = document.querySelector(".money3");
const thursday = document.querySelector(".money4");
const friday = document.querySelector(".money5");
const saturday = document.querySelector(".money6");
const sunday = document.querySelector(".money0");

const mondaybar = document.querySelector(".graph--1");
const tuesdaybar = document.querySelector(".graph--2");
const wednesdaybar = document.querySelector(".graph--3");
const thursdaybar = document.querySelector(".graph--4");
const fridaybar = document.querySelector(".graph--5");
const saturdaybar = document.querySelector(".graph--6");
const sundaybar = document.querySelector(".graph--0");

const barContainer = document.querySelectorAll(".bar-container");
const moneyElement = document.querySelectorAll(".money");

const currentDate = new Date().getDay();

for (let i = 0; i < 7; i++) {
  if (i === currentDate) {
    document.querySelector(`.graph--` + currentDate).classList.toggle("active");
  }
}

const url = "data.json";

function reqData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => show(data));
}

reqData();

function show(data) {
  data.forEach((ele) => {
    switch (ele.day) {
      case "mon":
        monday.textContent = "$" + ele.amount;
        mondaybar.style.height = ele.amount + "%";
        break;
      case "tue":
        tuesday.textContent = "$" + ele.amount;
        tuesdaybar.style.height = ele.amount + "%";
        break;
      case "wed":
        wednesday.textContent = "$" + ele.amount;
        wednesdaybar.style.height = ele.amount + "%";
        break;
      case "thu":
        thursday.textContent = "$" + ele.amount;
        thursdaybar.style.height = ele.amount + "%";
        break;
      case "fri":
        friday.textContent = "$" + ele.amount;
        fridaybar.style.height = ele.amount + "%";
        break;
      case "sat":
        saturday.textContent = "$" + ele.amount;
        saturdaybar.style.height = ele.amount + "%";
        break;
      case "sun":
        sunday.textContent = "$" + ele.amount;
        sundaybar.style.height = ele.amount + "%";
        break;
    }
  });
}

const handleHover = function (e) {
  if (e.target.classList.contains("graph")) {
    const link = e.target;
    const siblings = link.closest(".bar-container").querySelector(".money");
    siblings.classList.toggle("visible");
  }
};

barContainer.forEach((bar) => {
  bar.addEventListener("mouseover", handleHover);
});

barContainer.forEach((bar) => {
  bar.addEventListener("mouseout", handleHover);
});
