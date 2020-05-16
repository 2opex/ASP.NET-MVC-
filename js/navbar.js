let header_area = document.querySelector("header");
window.addEventListener('scroll', isfixed, false);
function isfixed() {
    header_area.style.position = "sticky";
    header_area.style.backgroundColor = "#000000";
    header_area.style.top = "0";
    window.removeEventListener('scroll', ifSticky, false);
}