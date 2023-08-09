ItcSlider.getOrCreateInstance('.news__content');

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.news__content').forEach((el) => {
      ItcSlider.getOrCreateInstance(el);
    });
  });