// lang.js
const translations = {
   en: { 
      textAuto: "auto",
      textDark: "dark",
      textLight: "light",
      textMyAccount: "my account",
      textSignIn: "sign in",
      textSignUp: "sign up",
      textSignOut: "sign out",
      textDashboard: "dashboard",
      textCheckpoint: "checkpoint",
      textGuard: "guard",
      textReport: "report",
      textSchedule: "schedule",
      textTask: "task",
      navlangTitle: "english",
      developBy: "Developed by",
      copyright: "All rights reserved"
   },
   id: { 
      textAuto: "otomatis",
      textDark: "gelap",
      textLight: "terang",
      textMyAccount: "akun saya",
      textSignIn: "masuk",
      textSignUp: "mendaftar",
      textSignOut: "keluar",
      textDashboard: "dasbor",
      textCheckpoint: "pos pemeriksaan",
      textGuard: "penjaga",
      textReport: "laporan",
      textSchedule: "jadwal",
      textTask: "tugas",
      navlangTitle: "indonesia",
      developBy: "Dikembangkan oleh",
      copyright: "Semua hak dilindungi"
   }
};

// Tambahan mapping bendera
const flags = {
   en: "https://flagcdn.com/w40/us.png",
   id: "https://flagcdn.com/w40/id.png"
};

// Fungsi untuk apply translasi
function applyTranslations(lang) {
   $("[data-i18n]").each(function () {
      const key = $(this).data("i18n");
      if (translations[lang] && translations[lang][key]) {
         $(this).text(translations[lang][key]);
      }
   });

   // Ubah label + bendera dropdown utama
   $("#currentLang").text(translations[lang].navlangTitle);
   $("#currentFlag").attr("src", flags[lang]);
}

$(function () {
   // Cek apakah ada bahasa tersimpan di localStorage
   let savedLang = localStorage.getItem("lang") || "id";

   // Terapkan bahasa awal
   applyTranslations(savedLang);

   // Event klik dropdown item
   $("[data-lang]").on("click", function (e) {
      e.preventDefault();
      const lang = $(this).data("lang");

      // Terapkan translasi
      applyTranslations(lang);

      // Simpan ke localStorage
      localStorage.setItem("lang", lang);
   });
});