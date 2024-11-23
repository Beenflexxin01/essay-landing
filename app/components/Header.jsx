import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Images/logo.png";

function Header() {
  return (
    <header>
      <nav className="main-nav">
        <ul className="main-nav-ul">
          <li className="main-nav-li">
            <Link href="/home" className="main-nav-link">
              <Image src={logo} alt="Logo" className="nav-img" />
            </Link>
          </li>
          <div className="normal-sec">
            <li className="main-nav-li">
              <Link href="" className="main-nav-link">
                Writers
              </Link>
            </li>
            <li className="main-nav-li">
              <Link href="" className="main-nav-link">
                Post a Task
              </Link>
            </li>
            <li className="main-nav-li">
              <Link href="" className="main-nav-link">
                Contact Us
              </Link>
            </li>
          </div>

          <div className="cta-section">
            <li className="main-nav-li">
              <Link href="" className="main-nav-link cta-btn">
                Login for Users
              </Link>
            </li>
            <li className="main-nav-li">
              <Link href="" className="main-nav-link cta-btn cta-btn-writer">
                Sign Up as a Writer
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
