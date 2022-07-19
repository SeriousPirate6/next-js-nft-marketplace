import styles from "../styles/Home.module.css"

// How do we show the recently listed NFTs?

// We will index the events off-chain and then read from our database.
// Setup a server to listen for those events to be fired, and we will add them to a DB

// TheGraph does this in a centralized way
// Moralis does this in a centralized way and comes with a lot of other features

export default function Home() {
    return <div className={styles.container}>Index</div>
}
