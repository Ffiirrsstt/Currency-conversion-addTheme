let mStart = document.getElementById("moneyStart");
let mEnd = document.getElementById("moneyEnd");

let vStart = document.getElementById("valueMoneyStart");
let vEnd = document.getElementById("valueMoneyEnd");

let btn = document.getElementById("btn");
let covert = document.getElementById("covert");

let fixed = document.getElementById("fixed");

let theme = document.getElementsByClassName("theme");
let ansTheme = document.getElementById("ansTheme");

function ThemeWep(event) {
  if (event.target.value == "default") {
    document.documentElement.setAttribute("time", "default");
  } else if (event.target.value == "early") {
    document.documentElement.setAttribute("time", "early");
  } else if (event.target.value == "morning") {
    document.documentElement.setAttribute("time", "morning");
  } else if (event.target.value == "hazy") {
    document.documentElement.setAttribute("time", "hazy");
  } else if (event.target.value == "evening") {
    document.documentElement.setAttribute("time", "evening");
  } else if (event.target.value == "sunset") {
    document.documentElement.setAttribute("time", "sunset");
  } else if (event.target.value == "dusk") {
    document.documentElement.setAttribute("time", "dusk");
  } else if (event.target.value == "twilight") {
    document.documentElement.setAttribute("time", "twilight");
  } else {
    document.documentElement.setAttribute("time", "dark");
  }
}

btn.addEventListener("click", () => {
  const wait = mStart.value;
  mStart.value = mEnd.value;
  mEnd.value = wait;
  conversion();
});

function conversion() {
  base = mStart.value;
  target = mEnd.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${base}`)
    .then((value) => value.json())
    .then((data) => {
      let Rates = data.rates[target];
      covert.innerHTML = `1 ${base} = ${Rates.toFixed(fixed.value)} ${target}`;
      let valueEnd = Rates * vStart.value;
      vEnd.value = valueEnd.toFixed(fixed.value);
    });
}

mStart.addEventListener("change", conversion);
mEnd.addEventListener("change", conversion);
vStart.addEventListener("input", conversion);
fixed.addEventListener("change", conversion);
ansTheme.addEventListener("change", ThemeWep);

conversion();
