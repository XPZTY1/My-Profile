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

const snowCount = 50; // จำนวนหิมะ

for (let i = 0; i < snowCount; i++) {
  createSnow();
}

function createSnow() {
  const snow = document.createElement("div");
  snow.classList.add("snow");

  // สุ่มขนาด
  const size = Math.random() * 40 + 15;
  snow.style.width = size + "px";
  snow.style.height = size + "px";

  // สุ่มตำแหน่งแนวนอน
  snow.style.left = Math.random() * window.innerWidth + "px";

  // สุ่มความโปร่งใส
  snow.style.opacity = Math.random() * 0.6 + 0.3;

  // สุ่มความเร็วตก
  const duration = Math.random() * 10 + 5;
  snow.style.animationDuration = duration + "s";

  document.body.appendChild(snow);

  // ลบหิมะเมื่อหลุดจอ แล้วสร้างใหม่
  setTimeout(() => {
    snow.remove();
    createSnow();
  }, duration * 1000);
}