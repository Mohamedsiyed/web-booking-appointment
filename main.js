
 function bookSlot(cell) {
    if (cell.classList.contains("available")) {
        cell.classList.remove("available");
        cell.classList.add("booked");
        cell.textContent = "unavailable";
    }
}