// Smooth Scrolling for Navigation
document.querySelectorAll('.nav-list a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

// Form Validation
const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const validateForm = () => {
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === '' || emailValue === '' || messageValue === '') {
    return { valid: false, message: 'All fields are required!' };
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
    return { valid: false, message: 'Please enter a valid email address!' };
  } else {
    return { valid: true, message: 'Message sent successfully!' };
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();

  const result = validateForm();

  if (!result.valid) {
    alert(result.message);
  } else {
    alert(result.message);
    form.reset();
  }
});