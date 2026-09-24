/* ============================================================
   LERSHA Reach Dashboard - configuration
   ------------------------------------------------------------
   Everything a web developer normally needs to change lives
   here. No build step: edit, save, refresh.
   ============================================================ */
window.LERSHA_CONFIG = {
  // Text shown in the header
  brandName: "Lersha",
  brandLegal: "Green Agro Solution PLC",
  programLabel: "Access to Finance (A2F) · 2026 Climate Advisory",

  // Logo: put a file at assets/img/logo.png (or .svg) and set the path.
  // Leave null to show the built-in leaf mark.
  logoUrl: null,

  // Map background.
  //   "none"      - vector map only, works everywhere (offline, strict CSP)
  //   "light"     - CARTO light street map (needs internet)
  //   "satellite" - Esri World Imagery (needs internet)
  // Users can switch between the enabled options in the map corner.
  basemap: "light",
  basemapsEnabled: true, // false = hide the switch and use "none"

  // One colour per region (used on the map and in every chart).
  regionColors: {
    "Oromia": "#2E6B4A",
    "Amhara": "#3B7BA3",
    "Sidama": "#C07A1E",
    "Central Ethiopia": "#7A5BA6",
    "South Ethiopia": "#B0475E",
    "Tigray": "#5B8A2E",
    "_other": "#8A958C"
  },

  // Link shown in the footer
  websiteUrl: "https://lersha.com",

  // Set true to hide the header when the page is embedded in an iframe.
  // (?embed=1 in the URL does the same thing.)
  embedMode: false
};
