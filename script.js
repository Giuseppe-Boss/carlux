// Corporate page fleet calculator
const fleetSizeInput = document.getElementById('fleetSize');
const fleetSizeValue = document.getElementById('fleetSizeValue');
const standardRate = document.getElementById('standardRate');
const discount = document.getElementById('discount');
const finalPrice = document.getElementById('finalPrice');

if (fleetSizeInput) {
    fleetSizeInput.addEventListener('input', function () {
        const size = parseInt(this.value);
        fleetSizeValue.textContent = size;

        const originalUnitPrice = 12000; 
        let unitPrice = originalUnitPrice;

        // Pricing logic based on fleet size
        if (size >= 4 && size <= 11) {
            unitPrice = 10500;
        } else if (size >= 12 && size <= 19) {
            unitPrice = 10000;
        } else if (size >= 20 && size <= 25) {
            unitPrice = 9500;
        } else if (size >= 26 && size <= 35) {
            unitPrice = 9000;
        } else if (size >= 36) {
            unitPrice = 8800;
        }

        const basePrice = unitPrice * size;
        const originalPrice = originalUnitPrice * size;
        const savings = originalPrice - basePrice;

        // UI updates
        standardRate.textContent = `${unitPrice.toLocaleString()} Ft / autó`;
        fullOriginalPrice.textContent = `${originalPrice.toLocaleString()} Ft`;
        discount.textContent = `-${savings.toLocaleString()} Ft`;
        finalPrice.textContent = `${basePrice.toLocaleString()} Ft`;
    });
}



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
  let pending = false;
  let lastPercent = 50;

  const updateSlider = () => {
    pending = false;
    afterImg.style.clipPath = `inset(0 ${100 - lastPercent}% 0 0)`;
    handle.style.left = `${lastPercent}%`;
  };

  const onMove = e => {
    if (!isDragging) return;
    const rect = wrapper.getBoundingClientRect();
    const x = (e.clientX ?? e.touches?.[0].clientX) - rect.left;
    let percent = (x / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    lastPercent = percent;

    if (!pending) {
      pending = true;
      requestAnimationFrame(updateSlider);
    }
  };

  // Egér és touch események mindkettőre
  const startDrag = e => isDragging = true;
  const stopDrag = e => isDragging = false;

  handle.addEventListener('mousedown', startDrag);
  handle.addEventListener('touchstart', startDrag);
  window.addEventListener('mouseup', stopDrag);
  window.addEventListener('touchend', stopDrag);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('touchmove', onMove);

  window.addEventListener('dragstart', e => e.preventDefault());
});


