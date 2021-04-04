import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(GameContext);
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return(
    <header className={ styles.experienceBar }>
      <span>{ experienceToNextLevel } xp</span>
      <div>
        <div style={{ height: `${percentToNextLevel}%` }}></div>

        <span className={ styles.currentExperience } style={{ bottom: `${percentToNextLevel}%` }}>
          { currentExperience }xp
        </span>
      </div>
      <span>0 xp</span>
    </header>
  );
}