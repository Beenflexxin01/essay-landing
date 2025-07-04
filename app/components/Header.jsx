"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/Images/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOffMenuBar = () => setIsOpen(!isOpen);
  return (
    <header>
      <div className="side-bar">
        <li className="main-nav-li">
          <Link href="/" className="main-nav-link" onClick={toggleOffMenuBar}>
            <Image src={logo} alt="Logo" className="nav-img" />
          </Link>
        </li>
        <div
          className={`burger ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="8" fill="#DFEBF9" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.75 20C27.75 19.5858 27.4142 19.25 27 19.25H13C12.5858 19.25 12.25 19.5858 12.25 20C12.25 20.4142 12.5858 20.75 13 20.75H27C27.4142 20.75 27.75 20.4142 27.75 20Z"
              fill="#023474"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.75 15C27.75 14.5858 27.4142 14.25 27 14.25H13C12.5858 14.25 12.25 14.5858 12.25 15C12.25 15.4142 12.5858 15.75 13 15.75H27C27.4142 15.75 27.75 15.4142 27.75 15Z"
              fill="#023474"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M27.75 25C27.75 24.5858 27.4142 24.25 27 24.25H13C12.5858 24.25 12.25 24.5858 12.25 25C12.25 25.4142 12.5858 25.75 13 25.75H27C27.4142 25.75 27.75 25.4142 27.75 25Z"
              fill="#023474"
            />
          </svg>
        </div>
        <nav className="main-nav">
          <ul className="main-nav-ul">
            <div className={`burger-menu ${isOpen ? "open" : ""}`}>
              <div className="normal-sec">
                <li className="main-nav-li">
                  <Link
                    href="/writers"
                    className="main-nav-link"
                    onClick={toggleOffMenuBar}>
                    Writers
                  </Link>
                </li>
                <li className="main-nav-li">
                  <Link
                    href="/users/tasks"
                    className="main-nav-link"
                    onClick={toggleOffMenuBar}>
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
                  <Link
                    href="/auth/login"
                    className="main-nav-link cta-btn"
                    onClick={toggleOffMenuBar}>
                    Login for Users
                  </Link>
                </li>
                <li className="main-nav-li">
                  <Link
                    href="/writers"
                    className="main-nav-link cta-btn cta-btn-writer">
                    Sign Up as a Writer
                  </Link>
                </li>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
