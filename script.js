
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll functionality
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeIn');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.service-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });

    // Toggle service details
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.service-card');
            const details = card.querySelector('.service-details');
            const icon = this.querySelector('i');
            
            details.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
            
            const isExpanded = !details.classList.contains('hidden');
            this.querySelector('span').textContent = isExpanded ? 'Less Details' : 'More Details';
        });
    });
});



//kep csuszka proba

document.querySelectorAll('.ba-wrapper').forEach(wrapper => {
  const afterImg = wrapper.querySelector('.ba-img.after');
  const handle = wrapper.querySelector('.ba-handle');

  let isDragging = false;

  const onMove = e => {
    if (!isDragging) return;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX ?? e.touches[0].clientX;
    let percent = ((x - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    afterImg.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
    handle.style.left = `${percent}%`;
  };

  handle.addEventListener('mousedown', () => isDragging = true);
  window.addEventListener('mouseup', () => isDragging = false);
  window.addEventListener('mousemove', onMove);

  handle.addEventListener('touchstart', () => isDragging = true);
  window.addEventListener('touchend', () => isDragging = false);
  window.addEventListener('touchmove', onMove);
});

window.addEventListener('dragstart', e => e.preventDefault());
