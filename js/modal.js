// Modal Logic
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

// Open Modal (for demonstration purposes)
setTimeout(() => {
  modal.style.display = 'flex';
}, 1000);

// Close Modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// If user clicks outside of the modal, close it
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
