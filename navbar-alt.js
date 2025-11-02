class CustomNavbarAlt extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        /* Basic reset */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* Navbar layout */
        .nav { 
          background: #0f172a;
          color: white;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
        }
        .nav-inner { 
          max-width: 1200px; 
          margin: 0 auto; 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          padding: 1rem;
        }
        .brand { 
          color: white; 
          text-decoration: none; 
          font-weight: 700; 
          font-size: 1.25rem;
          color: #D4AF37;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Toggle button (mobile) */
        #nav-toggle {
          font-size: 1.25rem;
          background: transparent;
          color: white;
          border: none;
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          cursor: pointer;
          padding: 0.5rem;
        }
        #nav-toggle:focus { 
          outline: 2px solid #94a3b8; 
          outline-offset: 2px; 
        }

        /* Menu (desktop horizontal) */
        .nav-menu { 
          list-style: none; 
          display: flex; 
          gap: 1.5rem; 
        }
        .nav-menu a { 
          color: white; 
          text-decoration: none; 
          padding: .5rem; 
          display: inline-block;
          position: relative;
          font-weight: 500;
        }
        .nav-menu a:hover, 
        .nav-menu a:focus { 
          color: #D4AF37;
        }
        .nav-menu a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #D4AF37;
          transition: width 0.3s;
        }
        .nav-menu a:hover::after {
          width: 100%;
        }
        .cta-button {
          background-color: #D4AF37;
          color: #1a1a1a;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s;
        }
        .cta-button:hover {
          background-color: #e6c04d;
          transform: translateY(-2px);
        }
        /* Mobile: hide menu by default and show toggle */
        @media (max-width: 768px) {
        .nav-menu { 
          position: fixed;
          top: 80px;
          right: 0;
          left: 0;
          flex-direction: column;
          gap: 0;
          background: rgba(11, 18, 32, 0.98);
          backdrop-filter: blur(10px);
          border-radius: 0;
          overflow: hidden;
          display: none;
          box-shadow: 0 6px 18px rgba(2,6,23,0.5);
          z-index: 1000;
          height: calc(100vh - 80px);
          overflow-y: auto;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(-20px);
        }
        .nav-menu.show { 
            display: flex;
            opacity: 1;
            transform: translateY(0);
        }
.nav-menu a { 
            padding: 1.5rem; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
            width: 100%;
            text-align: center;
            font-size: 1.1rem;
          }
          .nav-menu a:hover {
            background: rgba(212, 175, 55, 0.1);
          }
          .nav-menu a::after {
            display: none;
          }
          .nav-inner { position: relative; }
          #nav-toggle {
            display: flex;
          }
          .cta-button {
            margin: 1rem auto;
            width: 80%;
            padding: 1rem;
          }
        }
        .nav-menu a {
          transition: all 0.3s ease;
          transform: translateX(-10px);
          opacity: 0;
        }

        .nav-menu.show a {
          transform: translateX(0);
          opacity: 1;
        }

        .nav-menu a:nth-child(1) { transition-delay: 0.1s; }
        .nav-menu a:nth-child(2) { transition-delay: 0.15s; }
        .nav-menu a:nth-child(3) { transition-delay: 0.2s; }
        .nav-menu a:nth-child(4) { transition-delay: 0.25s; }
        .nav-menu a:nth-child(5) { transition-delay: 0.3s; }
/* Hamburger menu styles */
        #nav-toggle {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.75rem;
          transition: all 0.3s ease;
          z-index: 1001;
        }

        #nav-toggle[aria-expanded="true"] {
          color: #D4AF37;
        }

        #nav-toggle:hover {
          color: #D4AF37;
        }

        #nav-toggle i {
          transition: transform 0.3s ease;
        }

        #nav-toggle[aria-expanded="true"] i {
          transform: rotate(90deg);
        }
</style>
      <nav class="nav">
        <div class="nav-inner">
          <a class="brand" href="index.html">Carlux</a>
          <button id="nav-toggle" aria-controls="nav-menu" aria-expanded="false" aria-label="Toggle navigation">
            <i data-feather="menu"></i>
          </button>
          <ul id="nav-menu" class="nav-menu" role="menubar">
            <li role="none"><a role="menuitem" href="index.html">Home</a></li>
            <li role="none"><a role="menuitem" href="#services">Services</a></li>
            <li role="none"><a role="menuitem" href="gallery.html">Gallery</a></li>
            <li role="none"><a role="menuitem" href="about.html">About</a></li>
            <li role="none"><a role="menuitem" href="contact.html" class="cta-button">Book Now</a></li>
          </ul>
        </div>
      </nav>
    `;
    // Initialize feather icons
    this.shadowRoot.querySelectorAll('[data-feather]').forEach(el => {
      feather.replace();
    });

    // Mobile menu functionality
    const btn = this.shadowRoot.getElementById('nav-toggle');
    const menu = this.shadowRoot.getElementById('nav-menu');

    const toggleMenu = () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('show');
      document.body.style.overflow = expanded ? '' : 'hidden';
      document.documentElement.style.overflow = expanded ? '' : 'hidden';
    };

    btn.addEventListener('click', toggleMenu);

    // Close menu on outside click (mobile)
    document.addEventListener('click', (e) => {
      if (!this.shadowRoot.contains(e.target) && menu.classList.contains('show')) {
        toggleMenu();
      }
    });

    // Close menu on Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('show')) {
        toggleMenu();
        btn.focus();
      }
    });

    // Close menu when clicking on a link
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', toggleMenu);
    });

    // Update menu state on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && menu.classList.contains('show')) {
        toggleMenu();
      }
    });
}
}

customElements.define('custom-navbar-alt', CustomNavbarAlt);