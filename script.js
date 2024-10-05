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

let lastScrollTop = 0; // Variable to store the last scroll position
const header = document.getElementById('main-header'); // Get the header element

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get current scroll position

    if (scrollTop > lastScrollTop) {
        // Scroll Down - Hide the header
        header.style.transform = 'translateY(-100%)'; // Move header up out of view
    } else {
        // Scroll Up - Show the header
        header.style.transform = 'translateY(0)'; // Move header back into view
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


/// --- Header to Footer Functionality ---

// Function to scroll to the footer
function scrollToFooter() {
    const footer = document.querySelector('#footer'); // Select the footer by its ID
    if (footer) { // Check if footer exists
        footer.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the footer
    } else {
        console.error('Footer not found');
    }
}

// Attach event listener to the down arrow button
const arrowButtonDown = document.querySelector('.arrow-button');
if (arrowButtonDown) {
    arrowButtonDown.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior
        scrollToFooter(); // Call the scrollToFooter function
    });
} else {
    console.error('Down arrow button not found');
}

// --- Footer to Header Functionality ---

// Function to scroll to the header with offset
function scrollToHeader() {
    const header = document.querySelector('#main-header'); // Select the header by its ID
    if (header) { // Check if header exists
        const headerPosition = header.offsetTop; // Get the top offset position of the header
        const headerHeight = header.offsetHeight; // Get the height of the header
        window.scrollTo({ top: headerPosition - headerHeight, behavior: 'smooth' }); // Smoothly scroll to just above the header
    } else {
        console.error('Header not found');
    }
}



// Attach event listener to the up arrow button
const arrowButtonUp = document.querySelector('.arrow-button-top');
if (arrowButtonUp) {
    arrowButtonUp.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior
        console.log('Up arrow clicked'); // Debug log
        scrollToHeader(); // Call the scrollToHeader function
    });
} else {
    console.error('Up arrow button not found');
}
