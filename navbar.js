class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: rgba(26, 26, 26, 0.9);
          padding: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1000;
          backdrop-filter: blur(10px);
        }

        .logo {
          color: #D4AF37;
          font-weight: bold;
          font-size: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        ul {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
          transition: max-height 0.35s ease, transform 0.35s ease;
        }

        a {
          color: white;
          text-decoration: none;
          transition: color 0.3s;
          font-weight: 500;
          position: relative;
        }

        a:hover {
          color: #D4AF37;
        }

        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #D4AF37;
          transition: width 0.3s;
        }

        a:hover::after {
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

         @media (width > 768px){
         .cta-button {
          margin-right: 35px;
        }
         }

        .cta-button:hover {
          background-color: #e6c04d;
          color: #1a1a1a;
          transform: translateY(-2px);
        }

        /* Hamburger button */
        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 2rem;
          cursor: pointer;
          margin-right: 10px;
          transition: transform 0.3s ease;
        }

        .mobile-menu-button.open {
          transform: rotate(90deg);
        }

        .mobile-menu-button.open::before {
          content: "✕";
        }

        @media (max-width: 768px) {
          ul {
                flex-direction: column;
                gap: 1rem;
                position: absolute;
                left: 0;
                right: 0;
                top: 100%;
                background-color: rgba(26,26,26,0.95);
                padding: 0; /* fontos! */
                box-sizing: border-box;
                max-height: 0;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                transform: translateY(-10px);
                overflow: hidden;
                text-align: center;
                transition: max-height 0.35s ease, opacity 0.3s ease, transform 0.35s ease;
              }

          ul.show {
              padding: 1rem; /* csak akkor kap paddinget amikor nyitva van */
              max-height: 80vh;
              opacity: 1;
              visibility: visible;
              pointer-events: auto;
              transform: translateY(0);
              margin-right: 35px;
              }


          ul li {
            margin: 0;
          }

          ul li a {
            margin: auto;
            display: block;
          }

          .mobile-menu-button {
            display: block;
            margin-right: 35px;
          }
        }
      </style>

      <nav>
        <a href="index.html" class="logo">Carlux</a>
        <button class="mobile-menu-button">☰</button>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#services">Services</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html" class="cta-button">Kapcsolat</a></li>
        </ul>
      </nav>
    `;

    const button = this.shadowRoot.querySelector(".mobile-menu-button");
    const menu = this.shadowRoot.querySelector("ul");

    button.addEventListener("click", () => {
      menu.classList.toggle("show");
      button.classList.toggle("open");

      if (button.classList.contains("open")) {
        button.textContent = "";
      } else {
        button.textContent = "☰";
      }
    });
  }
}

customElements.define("custom-navbar", CustomNavbar);
