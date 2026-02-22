addLayer("m", {
    name: "matter", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: ["p"],
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(9),
    }},
    color: "#fae902",
    requires: new Decimal(2.5e6), // Can be a function that takes requirement increases into account
    resource: "matter", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
    



        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
       exp = new Decimal(1);
        return exp;
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for matter", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("p", 25) || player.m.unlocked},
    upgrades: {
    11: {
        title: "matter - 01",
        description: "quadruple point gain",
        cost: new Decimal(1),
        
    },
    
    
},

})
