import Image from "next/image";
import Link from "next/link";
import "./skills.css";
import Typewriter from "../components/footer/typewriter/Typewriter";


export default function Skills() {
  return (
    <main className="container">
      <Typewriter className="typewriter" text={"Skills Page"} time={30}/>
    </main>
  );
}