import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/OnGameInformations.module.css';

export function OnGameInformations() {
  const { time, words } = useContext(GameContext);
  return (
    <div className={ styles.onGameInformations }>
      <p><i className="fas fa-hourglass-start"></i> { time } segundos</p>
      <p><i className="fas fa-stream"></i> { words } palavras</p>
    </div>
  );
}