function initHeadingOne() {
  const inputElement = document.querySelector('input[type="text"]');
  const dropdownElement = document.querySelector('.absolute');
  const headingOneElement = document.getElementById('heading-1');

  if (!inputElement || !dropdownElement || !headingOneElement) {
    throw new Error('Elements not found.');
  }

  inputElement.focus();
  inputElement.select();

  inputElement.addEventListener('input', () => {
    if (inputElement.value.startsWith('/1')) {
      dropdownElement.classList.remove('invisible');
      dropdownElement.classList.add('visible', 'opacity-100');
    } else {
      dropdownElement.classList.remove('visible', 'opacity-100');
      dropdownElement.classList.add('invisible');
    }
  });

  inputElement.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newInputElement = document.createElement('input');
      newInputElement.type = 'text';
      newInputElement.placeholder = 'Type / for blocks, @ for blocks or docs peopl';
      inputElement.parentNode.insertBefore(newInputElement, inputElement.nextSibling);
      newInputElement.classList.add('w-full','focus:outline-none', 'mt-2');
      newInputElement.focus();
    }
  });

  headingOneElement.addEventListener('click', () => {
    inputElement.value = inputElement.value.replace('/1', '');
    inputElement.placeholder = 'Heading 1';
    inputElement.focus();
    inputElement.select();
    headingOneElement.classList.add('font-bold', 'text-2xl');
    inputElement.classList.add('font-bold', 'text-2xl');
    dropdownElement.classList.remove('visible', 'opacity-100');
    dropdownElement.classList.add('invisible');
  });
}

initHeadingOne();
