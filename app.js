const modal = document.getElementById("myModal");
const closeBtn = document.getElementById("closeModal");
const modalResult = document.getElementById("modalResult");
const modalCopy = document.getElementById("copy");


function xbox() {
  modal.style.display = "flex"; // แสดง Modal
  modalResult.innerHTML = ""
}

function coppyText() {
  const nameXbox = "Xpz19"
  navigator.clipboard.writeText(nameXbox);
  modalResult.innerHTML = `คัดลอกชื่อ Xbox เรียบร้อย`
  modalCopy.innerHTML = nameXbox
  modalCopy.style.background = "#3ffa7167"
}

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}