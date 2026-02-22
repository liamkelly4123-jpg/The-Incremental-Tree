addLayer("m", {
    name: "matter", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
    branches: ["p"],
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
        best: new Decimal(0),
        total: new Decimal(0),
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
        if (hasUpgrade("m", 12)) mult = mult.times(4);
        if (hasUpgrade("m", 21)) mult = mult.times(3);
        if (hasUpgrade("m", 25)) mult = mult.times(5);
        if (hasUpgrade("m", 31) && hasUpgrade("p", 23)) mult = mult.times(upgradeEffect("p", 23));
        if (hasUpgrade("m", 34)) mult = mult.times(3);



    

        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
       exp = new Decimal(1);
       if (hasUpgrade("m", 15)) exp = exp.times(1.3);
        return exp;
    },
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "m", description: "M: Reset for matter", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return hasUpgrade("p", 25) || player.m.unlocked},
    upgrades: {
    11: {
        title: "this should help get back here",
        description: "quadruple point gain",
        cost: new Decimal(1),
        
    },
    12: {
        title: "EXPONENT, kinda",
        description: "x4 matter gain, raise 'snergized' to 1.2",
        cost: new Decimal(1),
        unlocked() { return (hasUpgrade(this.layer, 11))},

        
    },
     13: {
        title: "2 in 1",
        description: "x3 prestige points, x1.5 points",
        cost: new Decimal(15),
        unlocked() { return (hasUpgrade(this.layer, 12))},

        
    },
    14: {
        title: "real exponents!",
        description: "add 0.1 to prestige gain exp",
        cost: new Decimal(40),
        unlocked() { return (hasUpgrade(this.layer, 13))},

        
    },
      15: {
        title: "more real exponents!",
        description: "raise matter to ^1.3, x4 points",
        cost: new Decimal(50),
        unlocked() { return (hasUpgrade(this.layer, 14))},

        
    },
     21: {
        title: "pretty good boost",
        description: "x2.6 prestige points, x3 matter",
        cost: new Decimal(250),
        unlocked() { return (hasUpgrade(this.layer, 15))},

        
    },
    22: {
        title: "lots of points",
        description: "raise points to 1.1",
        cost: new Decimal(2000),
        unlocked() { return (hasUpgrade(this.layer, 21))},

        
    },
     23: {
        title: "basically squared",
        description: "'upgrade synergy' is applied twice",
        cost: new Decimal(8000),
        unlocked() { return (hasUpgrade(this.layer, 22))},

        
    },
     24: {
        title: "'synergied' will be better",
        description: "raise prestige points to 1.1",
        cost: new Decimal(12000),
        unlocked() { return (hasUpgrade(this.layer, 23))},

        
    },
     25: {
        title: "that's alot!",
        description: "x5 matter and points",
        cost: new Decimal(25000),
        unlocked() { return (hasUpgrade(this.layer, 24))},

        
    },
     31: {
        title: "there's MORE?!",
        description: "'upgrade synergy' is applied to matter gain",
        cost: new Decimal(600000),
        unlocked() { return (hasUpgrade(this.layer, 25))},

        
    },
     32: {
        title: "even more points",
        description: "raise points to 1.08",
        cost: new Decimal(2.5e6),
        unlocked() { return (hasUpgrade(this.layer, 31))},

        
    },
     33: {
        title: "..and prestige points",
        description: "raise prestige points to 1.1",
        cost: new Decimal(15e6),
        unlocked() { return (hasUpgrade(this.layer, 32))},

        
    },
    34: {
        title: "..and matter",
        description: "x4 matter and prestige points",
        cost: new Decimal(40e6),
        unlocked() { return (hasUpgrade(this.layer, 33))},

        
    },
     35: {
        title: "..and layers!",
        description: "unlock protons and x4 points",
        cost: new Decimal(400e6),
        unlocked() { return (hasUpgrade(this.layer, 34))},

        
    },
    
    
},

})
