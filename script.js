
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
