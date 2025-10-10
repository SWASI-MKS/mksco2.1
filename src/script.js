let currentIndex = 0;
const feedbacks = document.querySelectorAll('.feedback');

function showSlide(index) {
  feedbacks.forEach((feedback, i) => {
    feedback.classList.remove('active');
    if (i === index) {
      feedback.classList.add('active');
    }
  });
}

function prevSlide() {
  currentIndex = (currentIndex === 0) ? feedbacks.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex === feedbacks.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}
