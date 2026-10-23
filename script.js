
const testBtn = document.getElementById("testBtn");
const testResult = document.getElementById("testResult");

testBtn.addEventListener("click", () => {
  const time = new Date().toLocaleTimeString();

  testResult.textContent =
    `Test passed at ${time}. JavaScript is working correctly.`;
});
