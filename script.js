
const deployBtn = document.getElementById("deployBtn");
const message = document.getElementById("message");

deployBtn.addEventListener("click", () => {
  message.textContent =
    "Success! Your website is working locally.";
});
