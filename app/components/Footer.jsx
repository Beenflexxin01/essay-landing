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
                <Link href="" className="footer-link">Contact Us</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">Privacy Policy</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">Help</Link>
              </li>
            </div>
            <div className="footer-grid-4">
              <li className="footer-li">
                <Link href="" className="footer-link">About Us</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">FAQs</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">Pricing</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">Blog</Link>
              </li>
            </div>
            <div className="footer-grid-4">
              <li className="footer-li">
                <Link href="" className="footer-link">Admin Account</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">Log In</Link>
              </li>
              <li className="footer-li">
                <Link href="" className="footer-link">Create Account</Link>
              </li>
            </div>
          </ul>
        </nav>
        <div className="socials">
          <nav className="socials-nav">
            <ul className="socials-ul">
              <li className="socials-li">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3647_5037)">
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M100 0H1.90735e-05V100H100V0ZM20.0506 14.1051L19.5947 16.9994H17.242V24H14.0824V16.9994H11.52V14.1051H14.0824V11.8982C14.0824 9.38835 15.5915 8 17.9031 8C18.6668 8.00933 19.4288 8.07432 20.1828 8.19446V10.6591H18.888C17.6341 10.6591 17.242 11.4324 17.242 12.2239V14.1051H20.0506Z"
                      fill="#337FFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3647_5037">
                      <rect width="32" height="32" rx="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>

              <li className="socials-li">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3647_5041)">
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M100 0.000107765H-1.43051e-05V100H100V0.000107765ZM16.1025 13.1847C14.4931 13.1847 13.1888 14.4889 13.1888 16.0974C13.1888 17.7058 14.4931 19.01 16.1025 19.01C17.7119 19.01 19.0169 17.7058 19.0169 16.0974C19.0169 14.4889 17.7119 13.1847 16.1025 13.1847ZM16.1025 20.5839C13.6231 20.5839 11.6133 18.5753 11.6133 16.0974C11.6133 13.6195 13.6231 11.6109 16.1025 11.6109C18.5819 11.6109 20.5917 13.6195 20.5917 16.0974C20.5917 18.5753 18.5819 20.5839 16.1025 20.5839ZM19.8969 12.0156C19.7816 11.8431 19.7202 11.6404 19.7203 11.433C19.7205 11.155 19.8311 10.8885 20.0279 10.692C20.2246 10.4955 20.4913 10.3851 20.7694 10.3849H20.7698C20.9773 10.385 21.1801 10.4466 21.3526 10.5619C21.5251 10.6772 21.6595 10.841 21.7388 11.0326C21.8181 11.2242 21.8388 11.435 21.7982 11.6384C21.7577 11.8417 21.6577 12.0285 21.5109 12.1751C21.3641 12.3217 21.1772 12.4215 20.9736 12.4618C20.7701 12.5022 20.5592 12.4814 20.3675 12.4019C20.1759 12.3225 20.0121 12.188 19.8969 12.0156ZM10.947 22.9087C11.2549 23.0286 11.7182 23.1705 12.5705 23.2093C13.4918 23.2517 13.7678 23.2601 16.1025 23.2601C18.4372 23.2601 18.714 23.2517 19.6355 23.2093C20.4879 23.1706 20.9513 23.0287 21.259 22.9087C21.6672 22.7499 21.9589 22.5605 22.2646 22.2552C22.5704 21.9499 22.7597 21.6588 22.9186 21.2509C23.0378 20.9432 23.1805 20.4802 23.2193 19.6284C23.2617 18.7066 23.2702 18.4307 23.2702 16.0974C23.2702 13.7642 23.2617 13.4883 23.2193 12.5665C23.1806 11.7147 23.0386 11.2515 22.9186 10.944C22.7597 10.5361 22.5708 10.2446 22.2646 9.939C21.9584 9.6334 21.6672 9.44356 21.259 9.28545C20.9504 9.16663 20.4879 9.02368 19.6355 8.98489C18.7132 8.94323 18.4361 8.93407 16.1025 8.93407C13.7689 8.93407 13.4921 8.94253 12.5705 8.98489C11.7182 9.02361 11.2547 9.16551 10.947 9.28545C10.5381 9.44356 10.2472 9.63299 9.9414 9.939C9.63563 10.245 9.44637 10.5361 9.28746 10.944C9.16857 11.2525 9.02554 11.7147 8.98672 12.5665C8.94504 13.4883 8.93588 13.7642 8.93588 16.0974C8.93588 18.4307 8.94434 18.7074 8.98672 19.6284C9.02547 20.4802 9.16745 20.9433 9.28746 21.2509C9.44567 21.6588 9.63521 21.9496 9.9414 22.2552C10.2476 22.5608 10.5388 22.7499 10.947 22.9087ZM10.3761 7.81885C10.9315 7.60286 11.5674 7.45538 12.4981 7.41302C13.4308 7.36996 13.729 7.36011 16.1032 7.36011C18.4774 7.36011 18.7754 7.37066 19.7076 7.41302C20.6375 7.45468 21.2732 7.60286 21.8296 7.81885C22.4037 8.04189 22.8918 8.34036 23.3776 8.82664C23.8634 9.31292 24.1622 9.7999 24.386 10.3744C24.6021 10.9295 24.7497 11.565 24.7921 12.4952C24.8344 13.4268 24.8443 13.7246 24.8443 16.0974C24.8443 18.4701 24.8344 18.7673 24.7921 19.6996C24.7504 20.6297 24.6021 21.2649 24.386 21.8204C24.1622 22.3948 23.8642 22.8826 23.3776 23.3681C22.891 23.8536 22.4037 24.1522 21.8289 24.3759C21.2732 24.5919 20.6376 24.7394 19.7069 24.7817C18.7747 24.8248 18.4767 24.8346 16.1025 24.8346C13.7283 24.8346 13.4308 24.8241 12.4981 24.7817C11.5674 24.7394 10.9325 24.5919 10.3761 24.3759C9.80089 24.1522 9.3139 23.8534 8.8274 23.3681C8.34089 22.8828 8.04218 22.3948 7.819 21.8204C7.60289 21.2649 7.45531 20.6298 7.41293 19.6996C7.36985 18.768 7.35999 18.4701 7.35999 16.0974C7.35999 13.7246 7.36985 13.4268 7.41293 12.4952C7.45531 11.565 7.60289 10.9298 7.819 10.3744C8.04218 9.79955 8.34082 9.31215 8.8274 8.82664C9.31397 8.34113 9.80089 8.04189 10.3761 7.81885Z"
                      fill="url(#paint0_linear_3647_5041)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_3647_5041"
                      x1="24.5083"
                      y1="24.8346"
                      x2="7.03372"
                      y2="7.35033"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FBE18A" />
                      <stop offset="0.21" stop-color="#FCBB45" />
                      <stop offset="0.38" stop-color="#F75274" />
                      <stop offset="0.52" stop-color="#D53692" />
                      <stop offset="0.74" stop-color="#8F39CE" />
                      <stop offset="1" stop-color="#5B4FE9" />
                    </linearGradient>
                    <clipPath id="clip0_3647_5041">
                      <rect width="32" height="32" rx="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>

              <li className="socials-li">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3647_5045)">
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M100 0.000107765H-1.43051e-05V100H100V0.000107765ZM7.35999 8.61261C7.35999 7.92127 7.93877 7.36011 8.65224 7.36011H23.5528C24.2665 7.36011 24.845 7.92127 24.845 8.61261V23.5928C24.845 24.2844 24.2665 24.8451 23.5528 24.8451H8.65224C7.93884 24.8451 7.35999 24.2844 7.35999 23.593V8.61261ZM12.6734 21.9928V14.121H10.0569V21.9928H12.6734ZM11.3657 13.0464C12.2779 13.0464 12.8458 12.442 12.8458 11.6865C12.8288 10.9139 12.2779 10.3263 11.383 10.3263C10.4875 10.3263 9.90268 10.9139 9.90268 11.6865C9.90268 12.4419 10.4704 13.0464 11.3485 13.0464L11.3657 13.0464ZM14.1216 21.9928H16.7379V17.5973C16.7379 17.3624 16.755 17.1268 16.8241 16.959C17.0131 16.4887 17.4436 16.0019 18.1666 16.0019C19.1131 16.0019 19.492 16.7237 19.492 17.7821V21.9928H22.1082V17.4794C22.1082 15.0616 20.8176 13.9364 19.0962 13.9364C17.7084 13.9364 17.0859 14.6992 16.7381 15.2355V14.1213H14.1218C14.1559 14.8597 14.1216 21.9928 14.1216 21.9928Z"
                      fill="#006699"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3647_5045">
                      <rect width="32" height="32" rx="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>

              <li className="socials-li">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3647_5049)">
                    <rect width="32" height="32" rx="16" fill="white" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M100 -7.82013e-05H1.33514e-05V99.9999H100V-7.82013e-05ZM22.016 11.8323C22.5369 11.7541 23.0455 11.6091 23.5293 11.4009C23.5675 11.3848 23.5837 11.3745 23.5904 11.3788C23.5954 11.382 23.5954 11.3929 23.5954 11.4148C23.5997 11.5058 23.57 11.5951 23.5119 11.6653C23.1765 12.136 22.7746 12.5555 22.3187 12.9107C22.3067 12.9195 22.293 12.9286 22.2788 12.9381C22.2146 12.9809 22.1378 13.0321 22.1378 13.109C22.1378 15.5788 21.5047 18.0452 19.7027 19.8333C17.4102 22.1118 13.9733 22.731 10.919 21.8892C10.3292 21.7205 9.75989 21.4872 9.22137 21.1935C9.04047 21.0961 8.86654 20.9952 8.6926 20.8804C8.65434 20.8456 8.61955 20.8073 8.65434 20.7899C8.68912 20.7725 8.72043 20.7691 8.8561 20.7899C9.71629 20.8664 10.5828 20.7549 11.3956 20.4629C11.4319 20.4504 11.4718 20.437 11.5145 20.4226C11.9945 20.2606 12.831 19.9784 13.0514 19.5759L13.0723 19.555C12.9967 19.5382 12.9261 19.5315 12.8576 19.5251C12.8126 19.5208 12.7685 19.5167 12.7244 19.5098C11.9104 19.2732 10.8007 18.8488 10.2893 17.4573C10.258 17.3773 10.2893 17.3321 10.3728 17.3495C10.7605 17.402 11.1543 17.3903 11.5382 17.3147C11.4033 17.2879 11.2715 17.2471 11.1451 17.193C10.6264 16.9833 10.1728 16.6396 9.83049 16.1971C9.48821 15.7546 9.2696 15.2291 9.19702 14.6744C9.18715 14.5586 9.18715 14.4422 9.19702 14.3265C9.20049 14.243 9.23876 14.2187 9.30833 14.2639C9.6788 14.4525 10.0834 14.5649 10.4981 14.5944C10.3659 14.49 10.2406 14.3787 10.1189 14.2639C9.21441 13.4046 8.86306 11.6653 9.58663 10.566C9.64577 10.4825 9.68403 10.4825 9.75709 10.566C11.4199 12.455 13.4549 13.3351 15.9353 13.7003C15.9979 13.7108 15.9979 13.7003 15.9979 13.6273C15.9248 13.2003 15.9355 12.7631 16.0292 12.3402C16.1429 11.8955 16.3504 11.4803 16.638 11.1226C16.9113 10.7751 17.2521 10.4863 17.6398 10.2738C18.0336 10.0722 18.4646 9.95382 18.9061 9.92594C19.3611 9.89712 19.8166 9.97206 20.2384 10.1451C20.5509 10.2835 20.8397 10.4702 21.0942 10.6982C21.1499 10.7493 21.2021 10.8039 21.2507 10.8617C21.2668 10.8778 21.2869 10.8892 21.309 10.8947C21.3311 10.9003 21.3542 10.8997 21.376 10.893C22 10.7373 22.6019 10.5036 23.1675 10.1973C23.1798 10.1906 23.1935 10.1871 23.2075 10.1871C23.2215 10.1871 23.2352 10.1906 23.2475 10.1973C23.2639 10.209 23.2582 10.2285 23.2528 10.2474C23.2501 10.2567 23.2475 10.2658 23.2475 10.2738C23.1423 10.6017 22.9772 10.9072 22.7605 11.1748C22.6179 11.3522 22.2595 11.7905 22.016 11.8323Z"
                      fill="#33CCFF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_3647_5049">
                      <rect width="32" height="32" rx="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Footer;