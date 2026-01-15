document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('toggle', function() {
        if (this.open) {
            document.querySelectorAll('.dropdown').forEach(other => {
                if (other !== this) other.open = false;
            });
        }
    });
});