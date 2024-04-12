"use client";
import Image from "next/image";
import Link from "next/link";
import "./page.css";
import Typewriter from "./components/typewriter/Typewriter";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <main className="container">
      <section className="codeblock">
        <div className="code">
          <Typewriter
            className="typewriter"
            text={"const portfolio = () => {"}
            time={23}
            increment={increment}
          />
        </div>
        {count > 0 && (
          <div className="textbox indented">
            <Typewriter
              className="typewriter"
              text={"return "}
              time={23}
              design={{ color: "rgb(0, 143, 62)" }}
              increment={increment}
            />
            {count > 1 && (
              <Typewriter
                className="typewriter"
                text={
                  '"Hello World! My name is Jak, nice to meet you! I am a full-stack developer looking for my first role in tech!";'
                }
                time={23}
                design={{ color: "rgb(159, 29, 225)" }}
                increment={increment}
              />
            )}
          </div>
        )}
        {count > 2 && (
          <div className="textbox">
            <Typewriter
              className="typewriter"
              text={"}"}
              time={23}
              increment={increment}
            />
          </div>
        )}
      </section>
      <div className="hero">
        <Image
          className="me"
          src={"/me.jpg"}
          alt="Picture of Jak Foster"
          width={225}
          height={225}
        />
        <button className="contactbtn" >Contact Me</button>
      </div>
      <section className="reasons">
        <h2 className="reasons--title">Why I built this site +</h2>
      </section>
      {/* {count > 0 && (
        <div className="textbox">
          <Typewriter
            className="typewriter"
            text={
              "I'll cut straight to the point, as I'm sure any potential employers reading this have another fifty portfolios to sift through, and I would quite like for mine to stand apart from the AI-generated ones! I don't come from the typical tech background. I don't come from a typical professional background. I did well in school, I went to University at 18, and it killed the passion for learning that I had up until that point. It's taken me a long time to rediscover the joy for learning that I had as a kid, and I'm very glad that I have."
            }
            time={23}
            increment={increment}
          />
        </div>
      )}
      {count > 1 && (
        <div className="textbox">
          <Typewriter
            className="typewriter"
            text={
              "In August last year, I came home from work, started googling to find out what a job in tech would look like, and I haven't stopped googling since. Shortly after, I found my way to CodeCademy's Intro to JavaScript course, and since then barely a day has gone by where I haven't found the motivation to push myself as a developer, and learn, learn, learn."
            }
            time={23}
          />
        </div>
      )} */}
    </main>
  );
}
