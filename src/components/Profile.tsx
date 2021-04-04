import { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';
import styles from '../styles/components/Profile.module.css';

interface user {
    image: string;
    name: string;
}

export function Profile( user: user ) {
    const { level } = useContext(GameContext);

    return(
        <div className={ styles.profileContainer }>
            <img src={ user.image } alt={ user.name }/>
            <div>
                <strong>{ user.name }</strong>
                <p><i className={ `${ styles.levelIcon } fas fa-angle-double-up` }></i> Level { level }</p>
            </div>
        </div>
    )
}