import { createContext, ReactNode, useEffect, useState } from 'react';
import { EndGameModal } from '../components/EndGameModal';
import phrases from '../../phrases.json';

interface GameContextData {
  level: number;
  currentExperience: number;
  time: number;
  words: number;
  experienceToNextLevel: number;
  phraseIsRight: boolean;
  gameIsActive: boolean;
  isRestartButtonActive: boolean;
  isChangeButtonActive: boolean;
  isStartButtonActive: boolean;
  activePhrase: Phrase;
  lastExpericienceGain: number;
  levelUp: () => void;
  startNewGame: () => void;
  compareWords: () => void;
  resetGame: () => void;
  closeEndGameModal: () => void;
  changePhrase: () => void;
}

interface Phrase {
  amount: number;
  phrase: string;
}

interface GameProviderProps {
  children: ReactNode;
}

let countdownTimeOut: NodeJS.Timeout;

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: GameProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [time, setTime] = useState(0);
  const [gameIsActive, setGameIsActive] = useState(false);
  const [phraseIsRight, setPhraseIsRight] = useState(false);
  const [words, setWords] = useState(0);
  const [isEndGameModalOpen, setIsEndGameModalOpen] = useState(false);
  const [activePhrase, setActivePhrase] = useState(null);
  const [lastExpericienceGain, setLastExperienceGain] = useState(0);
  const [isRestartButtonActive, setIsRestartButtonActive] = useState(false);
  const [isChangeButtonActive, setIsChangeButtonActive] = useState(true);
  const [isStartButtonActive, setIsStartButtonActive] = useState(true);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewGame() {
    setGameIsActive(true);
    setIsRestartButtonActive(true);
    setIsChangeButtonActive(false);
    setIsStartButtonActive(false);
    const textArea = document.querySelector('textarea');
    textArea.disabled = false;
    textArea.focus();
  }

  function compareWords() {
    let textArea = document.querySelector('textarea');
    const phrase = activePhrase.phrase;
    let typed = textArea.value;
    let totalWords = typed.split(' ');

    let comparation = phrase.substr(0, typed.length);

    if(typed == phrase) {
      completeGame();
      endGame();
      setIsEndGameModalOpen(true); 
      return;     
    } else if(typed == comparation) {
      setPhraseIsRight(true);
    } else {
      setPhraseIsRight(false);
    }

    setWords(totalWords[0] == "" ? 0 : totalWords.length);
  }

  function resetGame() {
    endGame();
  }

  function completeGame() {
    if(!activePhrase) {
      return;
    }

    const { amount } = activePhrase;
    const wordsPerMinute = Math.floor(words / (time / 60));
    const experienceGain = wordsPerMinute < 100 ? (Math.floor(amount * (wordsPerMinute/100)) * 2) : (amount * 2);
    let finalExperience = currentExperience + experienceGain;

    if(finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    console.log(finalExperience);
    console.log(experienceGain);

    setLastExperienceGain(experienceGain);
    setCurrentExperience(finalExperience);
    changePhrase();
  }

  function endGame() {
    clearTimeout(countdownTimeOut);
    setGameIsActive(false);
    document.querySelector('textarea').disabled = true;
    document.querySelector('textarea').value = '';
    setWords(0);
    setTime(0);
    setIsStartButtonActive(true);
    setIsChangeButtonActive(true);
    setIsRestartButtonActive(false);
  }

  function closeEndGameModal() {
    setIsEndGameModalOpen(false);
  }

  function changePhrase() {
    const phraseIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[phraseIndex];

    setActivePhrase(phrase);
  }

  useEffect(() => {
    changePhrase();
  }, []);

  useEffect(() => {
    if(gameIsActive) {
      countdownTimeOut = setTimeout(() => {
        setTime(time + 1);
      }, 1000);
    }
  }, [gameIsActive, time])
  
  return(
    <GameContext.Provider value={{
      level,
      currentExperience,
      time,
      experienceToNextLevel,
      phraseIsRight,
      gameIsActive,
      words,
      activePhrase,
      lastExpericienceGain,
      isRestartButtonActive,
      isChangeButtonActive,
      isStartButtonActive,
      levelUp,
      startNewGame,
      compareWords,
      resetGame,
      closeEndGameModal,
      changePhrase
    }}>
      { children }

      { isEndGameModalOpen && <EndGameModal /> }
    </GameContext.Provider>
  );
}