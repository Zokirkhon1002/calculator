const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");

const updateTime = () => {
  const currentTime = new Date();

  let currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  if (currentHour >= 12 && currentHour <= 12) {
    currentHour -= 12;
  }

  hourEl.textContent = currentHour.toString();
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
};
setInterval(updateTime, 1000);
updateTime();

// Function numbers
let Num = document.getElementById("screen");


function draw(a) {
  if (Num.value.includes(".")) {
    if (a === ".") {
      return;
    }
  }
  if (Num.value.includes("-")) {
    if (a === "-") {
      return;
    }
  }
  if (Num.value.includes("+")) {
    if (a === "+") {
      return;
    }
  }
  if (Num.value.includes("*")) {
    if (a === "*") {
      return;
    }
  }
  if (Num.value.includes("/")) {
    if (a === "/") {
      return;
    }
  }
  if (Num.value.includes("%")) {
    if (a === "%") {
      return;
    }
  }
  Num.value = Num.value + a;
}

function result() {
  Num.value = eval(Num.value);
}
