"use client";
import { useState } from "react";
import Image from "next/image";
import "./Footer.css";
import Typewriter from "../typewriter/Typewriter";

export default function Footer() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <>
          <footer className="footer">
            <address className="contact">
              <Typewriter
                text={"Contact Details"}
                time={30}
                design={{ fontWeight: 900, textDecoration: "underline" }}
              />
              <Typewriter text={"Phone: 07955234079"} time={70} />
              <Typewriter text={"Email: jakfoster97@outlook.com"} time={70} />
            </address>
            <div className="logos">
              <a
                href="https://www.linkedin.com/in/jak-foster-a418342a6/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  className="logo"
                  src={"/Linkedin-Logo.png"}
                  alt="LinkedIn Logo"
                  width={74}
                  height={22}
                />
              </a>
              <a
                href="https://github.com/JakFoster"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  className="logo"
                  src={"/Github-Logo.png"}
                  alt="Github Logo"
                  width={67}
                  height={34}
                />
              </a>
              <a
                href="https://www.codewars.com/users/JakFoster"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Image
                  className="logo"
                  src={"/Codewars-Logo.png"}
                  alt="Codewars Logo"
                  width={75}
                  height={22}
                />
              </a>
            </div>
            <button className="showOrHide" onClick={handleClick}>
              Hide Footer
            </button>
          </footer>
        </>
      ) : (
        <footer className="hidden">
          <button className="showOrHide show" onClick={handleClick}>
            Show Footer
          </button>
        </footer>
      )}
    </>
  );
}
