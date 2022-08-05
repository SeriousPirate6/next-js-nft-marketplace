// Create a new table called "ActiveItem"
// Add items when they are listed on the marketplace
// Remove then when they are bought or cancelled

Moralis.Cloud.afterSave("ItemListed", async (request) => {
    // Everytime event gets triggered twice, once on unconfirmed, again on confirmed
    const confirmed = request.object.get("confirmed")
    const logger = Moralis.Cloud.getLogger()
    logger.info("Looking for confirmed Tx")
})
