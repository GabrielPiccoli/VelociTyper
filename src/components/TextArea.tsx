import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/TextArea.module.css';

export function TextArea() {
  const { compareWords, phraseIsRight, gameIsActive } = useContext(GameContext);

  return (
    <div className={ styles.textArea }>
      <textarea 
        onChange={ compareWords }
        className={ phraseIsRight ? styles.rightBorder : styles.wrongBorder }
        disabled   
      ></textarea>
    </div>
  );
}