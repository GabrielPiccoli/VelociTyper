import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/Phrase.module.css'

export function Phrase() {
  const { activePhrase } = useContext(GameContext);



  return (
    <div className={ styles.phrase }>
      <p>
        { 
          activePhrase === null? 
          'Por favor, clique em Trocar para gerar uma nova frase' : 
          activePhrase.phrase
        }
      </p>
    </div>
  );
}