const greeting = document.getElementById('greeting');
const helloButton = document.getElementById('hello');
const contactButton = document.getElementById('contact-button');
const contactForm = document.getElementById('contact-form');

function sayHello() {
  greeting.textContent = 'Привет! Добро пожаловать в учебное портфолио Алии!';

  // textContent removes the previous sparkles, so every click starts afresh.
  const sparkles = document.createElement('span');
  sparkles.className = 'greeting-sparkles';
  sparkles.setAttribute('aria-hidden', 'true');

  for (let index = 0; index < 3; index += 1) {
    const sparkle = document.createElement('img');
    sparkle.src = 'OIP.jpg';
    sparkle.alt = '';
    sparkle.width = 24;
    sparkle.height = 24;
    sparkles.append(sparkle);
  }

  sparkles.addEventListener('animationend', () => sparkles.remove(), { once: true });
  greeting.append(sparkles);
}

helloButton.addEventListener('click', sayHello);

contactButton.addEventListener('click', () => {
  contactForm.hidden = !contactForm.hidden;
  contactButton.setAttribute('aria-expanded', String(!contactForm.hidden));
  contactButton.textContent = contactForm.hidden
    ? 'Показать учебную форму'
    : 'Скрыть учебную форму';
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
