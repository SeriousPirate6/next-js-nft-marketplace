import { useState } from "react"
import { useWeb3Contract } from "react-moralis"
import nftMarketplaceAbi from "../constants/NftMarketplace.json"
import nftAbi from "../constants/BasicNft.json"

export default function NFTBox(price, nftAddress, tokenId, marketplaceAddress, seller) {
    const [imageURI, setImageURI] = useState("")

    const { runContractFunction: getTokenURI } = useWeb3Contract({
        abi: nftAbi,
        contractAddress: nftAddress,
        functionName: "tokenURI",
        params: {
            tokenId: tokenId,
        },
    })

    async function updateUI() {
        const tokenURI = await getTokenURI()
        console.log(tokenURI)
        // get the tokenURI
        // use the image tag from the tokenURI to get the image
    }
}
