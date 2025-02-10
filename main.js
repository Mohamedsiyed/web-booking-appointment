 function bookSlot(cell) {
            if (cell.classList.contains("available")) {
                cell.classList.remove("available");
                cell.classList.add("booked");
                cell.innerHTML = '<i class="fas fa-times-circle"></i> Unavailable'; // إضافة أيقونة الغلط
            }
        }
        