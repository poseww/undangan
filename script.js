var inDarkMode = false;
const darkModeCheck = document.getElementById("checkbox-dark-mode");
var h1Elements = document.querySelectorAll('h1, h2, h3, h4, h5, p, a');

function setDarkMode() {
    document.body.classList.toggle("dark-mode");
    document.querySelector(".dark-mode-box").classList.toggle("dark-mode");
    document.querySelector(".circle").classList.toggle("dark-mode");
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.toggle("dark-mode");
    });

    h1Elements.forEach(function (element) {
        element.classList.toggle("dark-text");
    });

    localStorage.setItem("darkmode", darkModeCheck.checked);
}

if (!localStorage.getItem("darkmode")) {
    localStorage.setItem("darkmode", false);
}

darkModeCheck.checked = JSON.parse(localStorage.getItem("darkmode"));

if (darkModeCheck.checked) {
    setDarkMode();
}

document.getElementById("checkbox-dark-mode").addEventListener("click", function () {
    setDarkMode();
});

// Pindahkan logika perubahan warna teks ke dalam fungsi
function changeTextColor() {
    h1Elements.forEach(function (element) {
        if (inDarkMode) {
            element.style.color = '#fff';
        } else {
            element.style.color = '#000';
        }
    });
}

// Logika inisialisasi warna teks
changeTextColor();

// Pindahkan logika perubahan warna teks ke dalam fungsi setDarkMode
function setDarkMode() {
    inDarkMode = !inDarkMode; // Toggle nilai inDarkMode
    document.body.classList.toggle("dark-mode");
    document.querySelector(".dark-mode-box").classList.toggle("dark-mode");
    document.querySelector(".circle").classList.toggle("dark-mode");
    document.querySelectorAll("button").forEach(btn => {
        btn.classList.toggle("dark-mode");
    });

    changeTextColor(); // Panggil fungsi untuk mengubah warna teks

    localStorage.setItem("darkmode", darkModeCheck.checked);
}
