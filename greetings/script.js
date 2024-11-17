// script.js

const backgroundMusic = document.getElementById("backgroundMusic");

// Tombol lanjut dari langkah 1 ke langkah 2
document.getElementById("nextStep").addEventListener("click", function () {
  const activity = document.getElementById("activity").value;

  if (activity.trim() === "") {
    alert("buru buru banget, Ceritain sesuatu dulu dikit aja ya. kalo mau banyak call ajaa hehe!");
    return;
  }

  alert(`wahh keliatannya seruu yaaa, tapi lebih seru lagi kalo ceritainnya ke aku langsung sihh!`);

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");

  if (backgroundMusic.paused) {
    backgroundMusic.play().catch(err => console.error("Gagal memutar musik:", err));
  }
});

// Tombol untuk melihat hasil bunga di langkah 3
document.getElementById("showFlower").addEventListener("click", function () {
  const mood = document.getElementById("moodSlider").value;

  if (mood <= 33) {
    alert("Semoga kamu cepat membaik yaa, ceritain ke aku kalo ada apa apa. i'll be there for u!");
  } else if (mood <= 66) {
    alert("adaa yang bikin kurangg seru yaa? sinii ceritaaa!");
  } else {
    alert("kerenn bangett kamuu seneng hari inii! gitu dongg cantikk, jangan sedih sedihh terus yaaa!");
  }

  document.getElementById("step2").classList.add("hidden");
  document.getElementById("step3").classList.remove("hidden");
});


  
  
