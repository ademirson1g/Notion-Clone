// Get the input element and the dropdown menu
const input = document.querySelector('input[type="text"]');
const dropdown = document.querySelector('.absolute');

// Add event listener to the input element
input.addEventListener('input', function() {
  // Check if the user has typed "/1" at the start of the input
  if (input.value.startsWith('/1')) {
    // Show the dropdown menu
    dropdown.classList.remove('invisible');
    dropdown.classList.add('visible', 'opacity-100');
  } else {
    // Hide the dropdown menu
    dropdown.classList.remove('visible', 'opacity-100');
    dropdown.classList.add('invisible');
  }
});
