document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-box");
  const billInput = document.getElementById("bill");
  const tipInput = document.getElementById("tip");
  const totalDisplay = document.getElementById("tipAmount");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const bill = parseFloat(billInput.value);
    const tipPercent = parseFloat(tipInput.value);

    if (isNaN(bill) || isNaN(tipPercent) || bill < 0 || tipPercent < 0) {
      alert("Please Enter a number.");
      return;
    }

    const tip = bill * (tipPercent / 100);
    // console.log(tipPercent);
    // console.log(bill);
    // console.log(tip);
    totalDisplay.textContent = `$${tip.toFixed(2)}`;
    totalDisplay.style.color = "red";
  });
});
