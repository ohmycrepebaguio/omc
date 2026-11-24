// ===== SETTINGS =====
const ORDERS_OPEN = true;            // set false to show the "taking a break" popup
const REOPEN_DATE = "Monday";
// ====================
const $ = s => document.querySelector(s);
$("#menuBtn").onclick = () => $("#nav").classList.toggle("open");
document.querySelectorAll("#nav a").forEach(a => a.onclick = () => $("#nav").classList.remove("open"));

const modal = $("#closedModal");
if (modal) {
  $("#reopen").textContent = REOPEN_DATE;
  $("#closeModal").onclick = () => modal.classList.remove("show");
  document.querySelectorAll("[data-order]").forEach(b => b.addEventListener("click", e => {
    if (!ORDERS_OPEN) { e.preventDefault(); modal.classList.add("show"); }
  }));
  if (!ORDERS_OPEN && document.body.dataset.page === "order") modal.classList.add("show");
}

const item = new URLSearchParams(location.search).get("item");
if (item && $("#chosen")) { $("#chosen").textContent = "Your pick: " + item; $("#chosen").hidden = false; }
// Dark mode
const root = document.documentElement;
const themeBtn = $("#themeBtn");
root.dataset.theme = localStorage.getItem("theme") || "light";
const syncTheme = () => themeBtn.textContent = root.dataset.theme === "dark" ? "☀️" : "🌙";
syncTheme();
themeBtn.onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", root.dataset.theme);
  syncTheme();
};