class CustomFooter extends HTMLElement {
    connectedCallback() {
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            background-color: #121212;
            color: white;
            padding: 3rem 1.5rem;
          }
          .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
          }
          .footer-logo {
            color: #D4AF37;
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            display: inline-block;
          }
          .footer-links h3 {
            color: #D4AF37;
            margin-bottom: 1rem;
            font-size: 1.1rem;
          }
          .footer-links ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .footer-links li {
            margin-bottom: 0.5rem;
          }
          .footer-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
          }
          .footer-links a:hover {
            color: #D4AF37;
          }
          .social-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }
          .social-links a {
            color: white;
            transition: color 0.3s;
          }
          .social-links a:hover {
            color: #D4AF37;
          }
          .copyright {
            text-align: center;
            margin-top: 3rem;
            padding-top: 1.5rem;
            border-top: 1px solid #333;
          }
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
            }
          }
        </style>
        <footer>
          <div class="footer-content">
            <div class="footer-about">
              <div class="footer-logo">Carlux</div>
              <p>Premium car detailing services that restore your vehicle's showroom shine.</p>
              <div class="social-links">
                <a href="#"><i data-feather="facebook"></i></a>
                <a href="#"><i data-feather="instagram"></i></a>
                <a href="#"><i data-feather="twitter"></i></a>
              </div>
            </div>
            <div class="footer-links">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Exterior Detailing</a></li>
                <li><a href="#">Interior Detailing</a></li>
                <li><a href="#">Ceramic Coating</a></li>
                <li><a href="#">Paint Correction</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <h3>Company</h3>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div class="footer-links">
              <h3>Contact</h3>
              <ul>
                <li><a href="tel:+1234567890"><i data-feather="phone"></i> (123) 456-7890</a></li>
                <li><a href="mailto:info@carlux.com"><i data-feather="mail"></i> info@carlux.com</a></li>
                <li><a href="#"><i data-feather="map-pin"></i> 123 Detailing St, Your City</a></li>
              </ul>
            </div>
          </div>
          <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Carlux Car Detailing. All rights reserved.</p>
          </div>
        </footer>
      `;
      
      // Initialize feather icons after shadow DOM is attached
      this.shadowRoot.querySelectorAll('[data-feather]').forEach(el => {
        feather.replace();
      });
    }
  }
  customElements.define('custom-footer', CustomFooter);