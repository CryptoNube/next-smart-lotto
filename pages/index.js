import Head from "next/head"
import Header from "../components/Header"
import styles from "../styles/Home.module.css"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Smart Lotto!</title>
                <meta name="description" content="Our Smart Contract Lottery" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <LotteryEntrance />
        </div>
    )
}
