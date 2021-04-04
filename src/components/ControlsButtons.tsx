import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/ControlsButtons.module.css';

export function ControlsButtons() {
  const { 
    startNewGame, 
    resetGame,
    changePhrase,
    isRestartButtonActive,
    isChangeButtonActive,
    isStartButtonActive,
  } = useContext(GameContext);

  return (
    <div className={ styles.controlsButtons }>
      <button
        type="button"
        className={  isStartButtonActive ? styles.controlStartButton : styles.controlDesabledButton }
        onClick={ startNewGame }
        disabled={ !isStartButtonActive }
        >
          <i className="far fa-play-circle"></i> Iniciar
      </button>

      <button
        type="button"
        className={ isChangeButtonActive ? styles.controlChangeButton : styles.controlDesabledButton }
        onClick={ changePhrase }
        disabled={ !isChangeButtonActive }
        >
          <i className="fas fa-random"></i> Trocar
      </button>

      <button
        type="button"
        className={ isRestartButtonActive ? styles.controlResetButton : styles.controlDesabledButton }
        onClick={ resetGame }
        disabled={ !isRestartButtonActive }
        >
          <i className="fas fa-undo-alt"></i> Reiniciar
      </button>
    </div>
  );
}