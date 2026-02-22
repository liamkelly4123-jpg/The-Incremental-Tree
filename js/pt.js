addLayer("pt", {
    name: "proton", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "PT", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: ["p"],
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
    }},
    color: "#fa0202",
    requires: new Decimal(5e19), // Can be a function that takes requirement increases into account
    resource: "protons", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
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
        {key: "P", description: "SHIFT + P: Reset for protons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("m", 35) || player.pt.unlocked},
    upgrades: {
    11: {
        title: "even more boost",
        description: "x8 points",
        cost: new Decimal(1),
        
    },
       12: {
        title: "oom increase",
        description: "x10 prestige points",
        cost: new Decimal(5),
        unlocked() { return (hasUpgrade(this.layer, 11))},

        
    },
      13: {
        title: "that's a lot more points!",
        description: "x15 points",
        cost: new Decimal(20),
        unlocked() { return (hasUpgrade(this.layer, 12))},

        
    },   
    
},

})
