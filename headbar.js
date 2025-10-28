class CustomHeadbar extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          .headbar {
            background-color: #121212;
            color: white;
            padding: 0.5rem 1rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.875rem;
            border-bottom: 1px solid rgba(212, 175, 55, 0.2);
          }
          .contact-info {
            display: flex;
            gap: 1.5rem;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .contact-item i {
            color: #D4AF37;
          }
          .social-links {
            display: flex;
            gap: 1rem;
          }
          .social-links a {
            color: white;
            transition: color 0.3s;
          }
          .social-links a:hover {
            color: #D4AF37;
          }
          @media (max-width: 768px) {
            .headbar {
              flex-direction: column;
              gap: 0.5rem;
              padding: 0.5rem;
            }
            .contact-info {
              flex-wrap: wrap;
              justify-content: center;
              gap: 0.5rem 1rem;
            }
          }
        </style>
        <div class="headbar">
          <div class="contact-info">
            <div class="contact-item">
              <i data-feather="phone"></i>
              <span>(123) 456-7890</span>
            </div>
            <div class="contact-item">
              <i data-feather="mail"></i>
              <span>info@carlux.com</span>
            </div>
            <div class="contact-item">
              <i data-feather="map-pin"></i>
              <span>123 Detailing St, Your City</span>
            </div>
          </div>
          <div class="social-links">
            <a href="#"><i data-feather="facebook"></i></a>
            <a href="#"><i data-feather="instagram"></i></a>
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="youtube"></i></a>
          </div>
        </div>
      `;
      
      // Initialize feather icons after shadow DOM is attached
      this.shadowRoot.querySelectorAll('[data-feather]').forEach(el => {
        feather.replace();
      });
    }
  }
  customElements.define('custom-headbar', CustomHeadbar);