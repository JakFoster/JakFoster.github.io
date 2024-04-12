"use client";
import Image from "next/image";
import "./Header.css";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <header className="header">
      {toggle ? (
        <>
          <h1 className="title">Jak Foster</h1>
          <button onClick={handleClick} className="btn">☰</button>
        </>
      ) : (
        <>
          <nav className="navbar">
            <ul className="menu">
              <Link className="links" href={"./"}>
                <li>Home</li>
              </Link>
              <Link className="links" href={"./Projects"}>
                <li>Projects</li>
              </Link>
            </ul>
            <ul className="menu">
              <Link className="links" href={"./Skills"}>
                <li>Skills</li>
              </Link>
              <Link className="links" href={"./AboutMe"}>
                <li>About Me</li>
              </Link>
            </ul>
          </nav>
          <button className="btn" onClick={handleClick} >✖</button>
        </>
      )}
    </header>
  );
}
