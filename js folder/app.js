const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const button = item.querySelector('.faq-question');

  button.addEventListener('click', () => {
    // Optional: close other open items
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove('active');
    });

    // Toggle current
    item.classList.toggle('active');
  });
});