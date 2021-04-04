import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/EndGameModal.module.css';

export function EndGameModal() {
  const { closeEndGameModal, level, lastExpericienceGain } = useContext(GameContext);

  return(
    <div className={ styles.overlay } onClick={ closeEndGameModal }>
      <div className={ styles.container }>
        <header>Frase Finalizada!</header>

        <strong>Parabéns</strong>
        <p>Você recebeu { lastExpericienceGain } xp</p>
        <p>Seu nível atual é { level }</p>

        <button type="button" onClick={ closeEndGameModal }>
          <img src="/images/close.svg" alt="Fechar modal"/>
        </button>
      </div>
    </div>
  );
}