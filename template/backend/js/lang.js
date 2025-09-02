const translations = {
  id: {
    copyright: "Seluruh hak dilindungi"
  },
  en: {
    copyright: "All rights reserved"
  }
};

// Fungsi translasi
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  // ubah label dropdown aktif
  document.getElementById("currentLang").textContent =
    lang === "id" ? "Indonesia" : "English";
}

// Event listener untuk dropdown
document.querySelectorAll("#dropdownLang .dropdown-item").forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const lang = item.getAttribute("data-lang");
    localStorage.setItem("selectedLang", lang); // simpan pilihan bahasa
    applyTranslations(lang);
  });
});

// Default bahasa, cek localStorage dulu
const savedLang = localStorage.getItem("selectedLang") || "en";
applyTranslations(savedLang);