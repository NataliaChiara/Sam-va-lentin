import Image from "next/image";
import s from "./page.module.css";

export default function Home() {
  return (
      <main className={s.container}>
        <Image className={s.container__corazones} src='/images/corazones.png' alt="corazones decorativos" width={1440} height={800}/>
        <h1>Feliz San Valentin uwu</h1>
        <p>Mi pasion es el <span>D</span><span>I</span><span>S</span><span>E</span><span>Ñ</span><span>O</span> <span>G</span><span>R</span><span>A</span><span>F</span><span>I</span><span>C</span><span>O</span></p>
        <Image className={s.container__sam} src='/images/sam-va-lentin.webp' alt="meme del señor de los anillos" width={600} height={300}/>
      </main>
  );
}
