const previousReading = document.getElementById("input1");
const currentReading = document.getElementById("input2");
const costPerUnit = document.getElementById("input3");

const tax1 = document.getElementById("input4");

previousReading.addEventListener("change", calculation1);
currentReading.addEventListener("change", calculation1);
costPerUnit.addEventListener("change", calculation1);
tax1.addEventListener("change", calculation1);
finalSum.addEventListener("change", calculation1);

function calculation1() {
  const sum = currentReading.value - previousReading.value;

  const x = (sum * costPerUnit.value) / 100;
  const m = (x / 100) * tax1.value;
  const j = document.querySelector("#input4");
  finalSum.innerHTML = x + m;
}

calculation1();
