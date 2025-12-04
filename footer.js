class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
        <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">

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
          .social-links a {
            transition: 0.3s;
            color: white;
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
          .footer-about{
              justify-content: center;
              align-items: center;
              display: flex;
          }
          #footerLogo{
            width: 90%;
          }
          @media (max-width: 768px) {
            .footer-content {
              grid-template-columns: 1fr;
            }

            #footerLogo {
              width: 60%;
            }

            .footer-links {
              text-align:center;
            }

            /* --- SOCIAL ICONOK KÖZÉPRE --- */
            .social-links {
              justify-content: center !important;
            }
          }
        </style>

        <footer>
          <div class="footer-content">
            <div class="footer-about">
              <img src="carlux_logo_uj_vagott.png" id="footerLogo" alt="">
            </div>

            <div class="footer-links">
      <h3>Szolgáltatások</h3>
      <ul>
        <li><a href="index.html#services">Külső-belső tisztítás/ápolás</a></li>
        <li><a href="index.html#services">Bőrápolás</a></li>
        <li><a href="index.html#services">Kárpittisztítás</a></li>
        <li><a href="index.html#services">Korrekciós Polírozás</a></li>
        <li><a href="index.html#services">Fényszóró Polírozás</a></li>
        <li><a href="index.html#services">Kerámia Bevonat</a></li>
      </ul>
    </div>

    <div class="footer-links">
      <h3>Oldalak</h3>
      <ul>
          <li><a href="index.html">Kezdőlap</a></li>
          <li><a href="about.html">Rólunk</a></li>
          <li><a href="index.html#services">Szolgáltatások</a></li>
          <li><a href="gallery.html">Galéria</a></li>
          <li><a href="corporate.html">Cégeknek</a></li>
          <li><a href="contact.html" class="cta-button">Kapcsolat</a></li>
      </ul>
    </div>

    <div class="footer-links">
      <h3>Kapcsolat</h3>
      <ul>
        <li><a href="tel:+36 30 197 6533"><i data-feather="phone"></i> (30) 197 6533</a></li>
        <li><a href="https://maps.app.goo.gl/YjnY5yLTmi2RfWPK9" target="blank"><i data-feather="map-pin"></i> 4400 Nyíregyháza, Viktória u. 20.</a></li>
        <li><a href="mailto:info@carluxautokozmetika.hu"><i data-feather="mail"></i> info@carluxautokozmetika.hu</a></li>
      </ul>
            </div>

            <!-- SOCIAL ICONS -->
            <div class="footer-links">
                <h3>KÖVESS MINKET</h3>
                <div class="social-links" style="display:flex; gap:1rem;">

                    <a href="https://www.facebook.com/profile.php?id=61559633612667" target="blank">
                        <i class="ri-facebook-fill" style="font-size:24px;"></i>
                    </a>

                    <a href="https://www.instagram.com/carlux_autokozmetika" target="blank">
                        <i class="ri-instagram-fill" style="font-size:24px;"></i>
                    </a>

                    <a href="https://www.tiktok.com/@carlux_autokozmetika" target="blank">
                        <i class="ri-tiktok-fill" style="font-size:24px;"></i>
                    </a>


                </div>
            </div>

          </div>

          <div class="copyright">
            <p>&copy; ${new Date().getFullYear()} Carlux Autókozmetika. Minden jog fenntartva.</p>
          </div>
        </footer>
        `;

    // Feather Icons init ONLY for contact section
    feather.replace({ root: this.shadowRoot });
  }
}

customElements.define("custom-footer", CustomFooter);
