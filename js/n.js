addLayer("n", {
    name: "neutron", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "N", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: ["m", "pt"],
    position: 2, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
    }},
    color: "#0206fa",
    requires: new Decimal("1e5445"), // Can be a function that takes requirement increases into account
    resource: "neutrons", // Name of prestige currency
    baseResource: "protons", // Name of resource prestige is based on
    baseAmount() {return player.pt.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.0008, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
    







        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
       exp = new Decimal(1);
    




        return exp;
    },
    row: 3, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "n", description: "N: Reset for neutrons", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasMilestone("pt", 1) || player.n.unlocked},
   
    upgrades: {
    11: {
        title: "small, but effective",
        description: "^1.01 points",
        cost: new Decimal(1),
        
    },
     
    
},

})
