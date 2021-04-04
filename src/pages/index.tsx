import Head from 'next/head';

import { ControlsButtons } from '../components/ControlsButtons';
import { ExperienceBar } from "../components/ExperienceBar";
import { OnGameInformations } from '../components/OnGameInformations';
import { Phrase } from '../components/Phrase';
import { Profile } from '../components/Profile';
import { TextArea } from '../components/TextArea';
import { GameProvider } from '../contexts/GameContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {

  return (
    <div className={ styles.container }>
      <Head>
        <title>Início | Velocityper</title>
      </Head>

      <GameProvider>

        <ExperienceBar />

        <main className={ styles.pageContent }>
          <header>
            <div className={  styles.title }>
              <h1>Velocityper</h1>
              <img src="/images/dino-icon.png" alt=""/>
            </div>
            <h2 className={ styles.subTitle }>Um jogo que visa testar sua habilidade e velocidade de digitação</h2>
          </header>

          <section className={ styles.mainContent }>

            <div className={ styles.informations }>
              <Profile 
                image="https://github.com/GabrielPiccoli.png"
                name="Gabriel Piccoli"
              />
              <OnGameInformations />
            </div>

            <div className={ styles.gameContainer }>
              <TextArea />

              <div className={ styles.gameContainerControllers }>
                <Phrase />
                <ControlsButtons />
              </div>
            </div>
          </section>
        </main>

        </GameProvider>


    </div> 
  )
}
