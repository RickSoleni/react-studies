import styles from './Frase.module.css'

function Frase()
{
    return(
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Teste de CSS Module</p>
        </div>
    )
}

export default Frase