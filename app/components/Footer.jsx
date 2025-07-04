import Image from "next/image";
import logo from "../../public/Images/logo.png";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="hero-container footer-container">
        <Image src={logo} alt="Logo" className="nav-img" />
        <nav className="footer-nav">
          <ul className="footer-ul">
            <div className="footer-grid-4">
              <li className="footer-li">
                <Link href="/contactUs" className="footer-link">
                  Contact Us
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Help
                </Link>
              </li>
            </div>
            <div className="footer-grid-4">
              <li className="footer-li">
                <Link href="" className="footer-link">
                  About Us
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  FAQs
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Pricing
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Blog
                </Link>
              </li>
            </div>
            <div className="footer-grid-4">
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Admin Account
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Log In
                </Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">
                  Create Account
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      
      </div>
    </>
  );
}

export default Footer;
