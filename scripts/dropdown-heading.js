function initHeadingOne() {
  const inputElement = document.querySelector('input[type="text"]');
  const dropdownElement = document.querySelector('.absolute');
  const headingOneElement = document.getElementById('heading-1');
  let inputValue = '';
  let secondInputCreated = false;

  if (!inputElement || !dropdownElement || !headingOneElement) {
    throw new Error('Elements not found.');
  }

  inputElement.focus();
  inputElement.select();

  // Check if there is a saved input value in local storage
  const savedInputValue = localStorage.getItem('headingOneInputValue');
  if (savedInputValue) {
    inputElement.value = savedInputValue;
  }

  // Handle input events
  function handleInput() {
    if (inputElement.value.startsWith('/1')) {
      dropdownElement.classList.remove('invisible');
      dropdownElement.classList.add('visible', 'opacity-100');
      inputValue = inputElement.value.slice(2).trim();
    } else {
      dropdownElement.classList.remove('visible', 'opacity-100');
      dropdownElement.classList.add('invisible');
      inputValue = '';
    }

    // Save input value to local storage
    localStorage.setItem('headingOneInputValue', inputElement.value.trim());
  }

  inputElement.addEventListener('input', handleInput);

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      if (inputElement.value.startsWith('/1')) {
        event.preventDefault();
        inputValue = inputElement.value.slice(2).trim();
      } else if (inputElement.value.trim() !== '') {
        if (!secondInputCreated) {
          const newInputElement = document.createElement('input');
          newInputElement.type = 'text';
          newInputElement.placeholder = 'Type / for blocks, @ for blocks or docs people';
          inputElement.parentNode.insertBefore(newInputElement, inputElement.nextSibling);
          newInputElement.classList.add('w-full', 'focus:outline-none', 'mt-2');
          newInputElement.focus();
          secondInputCreated = true;
        }
        // Save input value to local storage
        localStorage.setItem('headingOneInputValue', inputElement.value.trim());
      } else {
        alert('Please fill in the blank');
      }
    } else if (inputElement.value.startsWith('/1') && inputElement.value.length > 2) {
      dropdownElement.classList.remove('visible', 'opacity-100');
      dropdownElement.classList.add('invisible');
    }
  });

  // Handle clicking on the heading one element
  headingOneElement.addEventListener('click', () => {
    inputElement.value = inputValue;
    inputElement.placeholder = 'Heading 1';
    inputElement.focus();
    inputElement.select();
    headingOneElement.classList.add('font-bold', 'text-2xl');
    inputElement.classList.add('font-bold', 'text-2xl');
    dropdownElement.classList.remove('visible', 'opacity-100');
    dropdownElement.classList.add('invisible');
  });

  // Handle input events to save empty input value to local storage
  inputElement.addEventListener('input', () => {
    if (inputElement.value.trim() === '') {
      localStorage.setItem('headingOneInputValue', '');
    }
  });
}

initHeadingOne();
