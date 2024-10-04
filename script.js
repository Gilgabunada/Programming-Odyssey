const searchInput = document.getElementById('search');
const entries = document.querySelectorAll('.entry');
const emptyMessage = document.getElementById('empty-message');

searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase();
    let found = false;

    entries.forEach(entry => {
        const statusText = entry.querySelector('.status').textContent.toLowerCase();
        const focusText = entry.querySelector('.focus').textContent.toLowerCase();

        if (statusText.includes(searchTerm) || focusText.includes(searchTerm)) {
            entry.style.display = ''; // Show entry
            found = true;
        } else {
            entry.style.display = 'none'; // Hide entry
        }
    });

    emptyMessage.style.display = found ? 'none' : 'block'; // Show or hide empty message
});
