import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment({ content, onDeleteComment }) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/57663969?s=400&v=4' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Renata Leite</strong>
                            <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:30'>Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                    <footer>
                        <button>
                            <ThumbsUp />

                            Aplaudir <span>20</span></button>
                    </footer>
                </div>
            </div>
        </div>
    )
}