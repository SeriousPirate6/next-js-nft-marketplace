import { useMoralis } from "react-moralis"
import { useMoralisQuery } from "react-moralis"
import styles from "../styles/Home.module.css"

// How do we show the recently listed NFTs?

// We will index the events off-chain and then read from our database.
// Setup a server to listen for those events to be fired, and we will add them to a DB

// TheGraph does this in a centralized way
// Moralis does this in a centralized way and comes with a lot of other features

export default function Home() {
    const { data: listedNfts, isFetching: fetchingListedNfts } = useMoralisQuery(
        // table name
        // function for the query
        "ActiveItem",
        (query) => query.limit(10).descending("tokenId")
    )
    console.log(listedNfts)

    return (
        <div className={styles.container}>
            {fetchingListedNfts ? (
                <div>Loading...</div>
            ) : (
                listedNfts.map((nft) => {
                    console.log(nft.attributes)
                    const { price, nftAddress, tokenId, marketplaceAddress, seller } =
                        nft.attributes
                    return (
                        <div>
                            Price: {price}. Nftaddress: {nftAddress}, TokenId: {tokenId}. Seller:{" "}
                            {seller}
                        </div>
                    )
                })
            )}
        </div>
    )
}
