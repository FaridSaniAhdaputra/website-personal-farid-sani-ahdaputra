document.addEventListener("DOMContentLoaded", function () {
  const biodataContainer = document.getElementById("biodata-container");
  const biodata = {
    "Nama Lengkap": "Farid Sani Ahdaputra",
    Hobi: "Bersepeda🚴, Berlari🏃",
    Kelas: "Kom A",
    Nim: "241401127",
    Jurusan: "Ilmu Komputer",
    motto: "“Bermanfaat adalah tujuan utama keberadaan.”",
    Universitas: "Universitas Sumatera Utara",
  };

  for (const key in biodata) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${key}:</strong> ${biodata[key]}`;
    biodataContainer.appendChild(p);
  }

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 70, 
          behavior: "smooth",
        });
      }
    });
  });


  const clockElement = document.getElementById("clock");

  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  setInterval(updateClock, 1000);
  updateClock(); 
});
