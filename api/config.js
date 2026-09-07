// ЕДИНЫЙ ФАЙЛ НАСТРОЕК — редактируй только здесь, остальное трогать не нужно.
// После правки — просто закоммить и запушь, Vercel передеплоит сам.

module.exports = {
  // === Данные для проверки версии САМОГО ЛАУНЧЕРА (cheakverapp.php) ===
  launcher: {
    jsonVersionApp: 1,
    // Текущая версия лаунчера, зашитая в APK — 9 (VersionAppStatic).
    // Если version <= 9, апдейт лаунчера НЕ будет предлагаться.
    // Когда выпустишь новую версию лаунчера — подними это число выше 9.
    version: 9,
    versionCansel: 0,
    domainApp: "https://ЗАМЕНИ-НА-СВОЙ-ПРОЕКТ.vercel.app",
    versionName: "2.9",
    // Прямая ссылка на новый .apk лаунчера (если version выше 9).
    urlUpdateApp: "https://github.com/dozapsixoza1/silver-eureka-/releases/latest/download/flin_launcher.apk",
    nameUpdateApp: "flin_launcher.apk"
  },

  // === Данные о МОДЕ / ФАЙЛАХ ИГРЫ (cheakurlapp.php) ===
  download: {
    jsonVersion: 1,
    // Домен, откуда лаунчер тянет файлы мода (GitHub Releases).
    domainDownload: "https://github.com/dozapsixoza1/silver-eureka-/releases/latest/download",
    urlUpdateClient: "/",

    // --- Полный клиент ---
    nameUpdateClientFull: "flinrp_full.apk",
    nameUpdateClientFilesFull: "files_full.zip",
    checksumUpdateClientFilesFull: "79b0ccacb193da66c51befb4f6fccf91c790dc59",
    verNameClientFull: "1",
    nameInstallClientFull: "flinrp_full.apk",
    checksumInstallClientFull: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",
    nameInstallFilesGTAFull: "gta_full.zip",
    checksumInstallFilesGTAFull: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",
    nameInstallFilesAPKFull: "files_full.zip",
    checksumInstallFilesAPKFull: "79b0ccacb193da66c51befb4f6fccf91c790dc59",

    // --- Lite-клиент (слабые телефоны) ---
    nameUpdateClientLite: "flinrp_lite.apk",
    nameUpdateClientFilesLite: "files_lite.zip",
    checksumUpdateClientFilesLite: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",
    verNameClientLite: "1",
    nameInstallClientLite: "flinrp_lite.apk",
    nameInstallFilesAPKLite: "files_lite.zip",
    checksumInstallFilesAPKLite: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",
    nameInstallFilesAdreno: "lite_adreno.zip",
    checksumInstallFilesAdreno: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",
    nameInstallFilesPower: "lite_power.zip",
    checksumInstallFilesPower: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",
    nameInstallFilesMali: "lite_mali.zip",
    checksumInstallFilesMail: "ЗАМЕНИ_НА_SHA1_ФАЙЛА",

    // --- Бета (можно не использовать пока) ---
    statusBeta: 0,
    urlUpdateBetaClient: "/beta/"
  }
};
