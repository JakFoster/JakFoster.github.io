import Image from "next/image";
import Link from "next/link";
import "./aboutMe.css";
import Typewriter from "../components/footer/typewriter/Typewriter";


export default function AboutMe() {
  return (
    <main className="container">
      <Typewriter className="typewriter" text={"About Me Page"} time={30}/>
    </main>
  );
}