import './sass/main.scss';

const email = document.getElementById('Email');
const country = document.getElementById('Country');
const zipcode = document.getElementById('Zipcode');
const password = document.getElementById('Password');
const confirm = document.getElementById('Confirm');

email.addEventListener('focusout', (e) => {
  const approve = document.getElementById('approve1');
  const deny = document.getElementById('deny1');
  const parent = e.target.parentNode.parentNode;
  const box = parent.childNodes[3];

  if (email.checkValidity()) {
    approve.style.display = 'block';
    deny.style.display = 'none';
    email.style.border = '2px solid #3aff3a';

    if (box.childNodes.length > 5) {
      while (box.childNodes.length !== 5) {
        const node = box.childNodes[box.childNodes.length - 1];
        node.parentNode.removeChild(node);
      }
    }
  } else {
    approve.style.display = 'none';
    deny.style.display = 'block';
    email.style.border = '2px solid red';

    if (box.childNodes.length <= 5) {
      const h1 = document.createElement('h1');
      h1.classList.add('textStyle');
      h1.textContent = 'Please enter a valid email 🙏';
      box.appendChild(h1);
    }
  }
});

country.addEventListener('focusout', (e) => {
  const approve = document.getElementById('approve2');
  const deny = document.getElementById('deny2');
  const parent = e.target.parentNode.parentNode;
  const box = parent.childNodes[3];

  if (country.checkValidity()) {
    approve.style.display = 'block';
    deny.style.display = 'none';
    country.style.border = '2px solid #3aff3a';

    if (box.childNodes.length > 5) {
      while (box.childNodes.length !== 5) {
        const node = box.childNodes[box.childNodes.length - 1];
        node.parentNode.removeChild(node);
      }
    }
  } else {
    approve.style.display = 'none';
    deny.style.display = 'block';
    country.style.border = '2px solid red';

    if (box.childNodes.length <= 5) {
      const h1 = document.createElement('h1');
      h1.classList.add('textStyle');
      h1.textContent = 'Please enter a Country 🙏';
      box.appendChild(h1);
    }
  }
});

zipcode.addEventListener('focusout', (e) => {
  const approve = document.getElementById('approve3');
  const deny = document.getElementById('deny3');
  const parent = e.target.parentNode.parentNode;
  const box = parent.childNodes[3];

  if (zipcode.checkValidity()) {
    approve.style.display = 'block';
    deny.style.display = 'none';
    zipcode.style.border = '2px solid #3aff3a';

    if (box.childNodes.length > 5) {
      while (box.childNodes.length !== 5) {
        const node = box.childNodes[box.childNodes.length - 1];
        node.parentNode.removeChild(node);
      }
    }
  } else {
    approve.style.display = 'none';
    deny.style.display = 'block';
    zipcode.style.border = '2px solid red';

    if (box.childNodes.length <= 5) {
      const h1 = document.createElement('h1');
      h1.classList.add('textStyle');
      h1.textContent = 'Please enter a valid zipcode 🙏';
      box.appendChild(h1);
    }
  }
});

password.addEventListener('focusout', (e) => {
  const approve = document.getElementById('approve4');
  const deny = document.getElementById('deny4');
  const parent = e.target.parentNode.parentNode;
  const box = parent.childNodes[3];

  if (password.checkValidity()) {
    approve.style.display = 'block';
    deny.style.display = 'none';
    password.style.border = '2px solid #3aff3a';

    if (box.childNodes.length > 5) {
      while (box.childNodes.length !== 5) {
        const node = box.childNodes[box.childNodes.length - 1];
        node.parentNode.removeChild(node);
      }
    }
  } else {
    approve.style.display = 'none';
    deny.style.display = 'block';
    password.style.border = '2px solid red';

    if (box.childNodes.length <= 5) {
      const h1 = document.createElement('h1');
      h1.classList.add('textStyle');
      h1.textContent = 'Password must have a min-length of 10 🙏';
      box.appendChild(h1);
    }
  }
});

confirm.addEventListener('focusout', (e) => {
  const approve = document.getElementById('approve5');
  const deny = document.getElementById('deny5');
  const parent = e.target.parentNode.parentNode;
  const box = parent.childNodes[3];

  const first = password.value;
  const second = confirm.value;

  if (first !== second) {
    const h1 = document.createElement('h1');
    h1.classList.add('textStyle');
    h1.textContent = 'Password must match 😎';
    box.appendChild(h1);
  }

  if (confirm.checkValidity()) {
    approve.style.display = 'block';
    deny.style.display = 'none';
    confirm.style.border = '2px solid #3aff3a';

    if (box.childNodes.length > 5) {
      while (box.childNodes.length !== 5) {
        const node = box.childNodes[box.childNodes.length - 1];
        node.parentNode.removeChild(node);
      }
    }
  } else {
    approve.style.display = 'none';
    deny.style.display = 'block';
    confirm.style.border = '2px solid red';

    if (box.childNodes.length <= 5) {
      const h1 = document.createElement('h1');
      h1.classList.add('textStyle');
      h1.textContent = 'Password must have a min-length of 10 🙏';
      box.appendChild(h1);
    }
  }
});
