import React from 'react'
import styles from './ListItem.module.css'

const ListItem = ({name, isFinished, finishedTaskFn}) => {
    const h3Class = isFinished ? styles.finished : null;
    return (
        <li key={name} className={styles.wrapper}>
            <h3 className={h3Class}>{name}</h3>
            {!isFinished && <button onClick={() => finishedTaskFn(name)} className={styles.button}></button>}
        </li>
    )
}

export default ListItem
