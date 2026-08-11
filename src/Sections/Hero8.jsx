import { Link } from "react-router-dom";

function Hero8() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <img
            src="https://chawkbazar.vercel.app/assets/images/logo.svg"
            alt="ChawkBazar"
            className="footer-logo"
          />

          <p>
            ChawkBazar is your trusted online shopping destination.
            We provide quality products at affordable prices.
            Shop with us and enjoy a great shopping experience.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link >Men's Wear</Link>
          <Link>Women's Wear</Link>
          <Link>Kid's Wear</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <p><i class="fa-regular fa-envelope env"></i> info@chawkbazar.com</p>

         
        </div>

      </div>
    </footer>
  );
}

export default Hero8;