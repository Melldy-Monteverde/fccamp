import "./Main.css";
import Testimony from "./Testimony/Testimony";

const Main = () => {
  return (
    <main className="main-container">
      <h1 className="hero-title">
        That is what the student say about FreeCodeCamp
      </h1>
      <Testimony
        name="Emma Bostian"
        country="Sweden"
        img="emma"
        position="Software Engineer"
        testimony="I've always had trouble learning JavaScript. I have taken many courses, but the freeCodeCamp course was the one that stuck. Studying JavaScript as well as data structures and algorithms at freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        company="Spotify"
      />
      <Testimony
        name="Sarah Chima"
        country="Sweden"
        img="sarah"
        position="Software Engineer"
        testimony="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my programming knowledge from a complete beginner level to a very confident level. It was everything I needed to land my first developer job at an amazing company."
        company="ChatDesk"
      />
      <Testimony
        name="Shawn Wang"
        country="Singapore"
        img="shawn"
        position="Software Engineer"
        testimony="It's scary to change careers. I only gained the confidence that I could code by working through the hundreds of hours of free lessons at freeCodeCamp. Within a year I had a six figure job as a software engineer. freeCodeCamp changed my life."
        company="Amazon"
      />
    </main>
  );
};

export default Main;
