import Image from "next/image";
import Link from "next/link";
import "./projects.css";
import Typewriter from "../components/footer/typewriter/Typewriter";


export default function Projects() {
  return (
    <main className="container">
      <Typewriter className="typewriter" text={"Project Page"} time={30}/>
    </main>
  );
}