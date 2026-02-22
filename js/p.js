addLayer("p", {
    name: "prestige", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "P", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 1, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#02e9fa",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "prestige points", // Name of prestige currency
    baseResource: "points", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
     if (hasUpgrade("p", 14))  mult = mult.times(2);
     if (hasUpgrade("p", 15))  mult = mult.times(3);
     if (hasUpgrade("p", 22))  mult = mult.times(2.5);

     if (hasUpgrade("m", 13))  mult = mult.times(3);
     if (hasUpgrade("m", 21))  mult = mult.times(2.6);
     if (hasUpgrade("m", 34))  mult = mult.times(4);

          if (hasUpgrade("pt", 12))  mult = mult.times(10);







        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
       exp = new Decimal(1);
       if (hasUpgrade("m", 14)) exp = exp.add(0.1);
       if (hasUpgrade("m", 24)) exp = exp.times(1.1);
       if (hasUpgrade("m", 33)) exp = exp.times(1.1);


        return exp;
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
    upgrades: {
    11: {
        title: "prestige - 01",
        description: "double point gain",
        cost: new Decimal(1),
        
    },
     12: {
        title: "prestige - 02",
        description: "prestige points boost point gain",
        cost: new Decimal(2),
         unlocked() { return (hasUpgrade(this.layer, 11))},
                effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                    let ret = player[this.layer].points.add(1).pow(0.45);
                    if (hasUpgrade("m", 12)) ret = ret.pow(1.2);
                    if (ret.gte("1e20")) ret = ret.sqrt().times("1e10")
                    return ret;
                },
                effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
        
    },
     13: {
        title: "prestige - 03",
        description: "x2.4 point gain",
        cost: new Decimal(5),
         unlocked() { return (hasUpgrade(this.layer, 12))},
               
        
    },
      14: {
        title: "prestige - 04",
        description: "double points and prestige points",
        cost: new Decimal(15),
         unlocked() { return (hasUpgrade(this.layer, 13))},
               
        
    },
    15: {
        title: "prestige - 05",
        description: "triple prestige points",
        cost: new Decimal(100),
         unlocked() { return (hasUpgrade(this.layer, 14))},
               
        
    },
     21: {
        title: "prestige - 06",
        description: "x3.5 points",
        cost: new Decimal(450),
         unlocked() { return (hasUpgrade(this.layer, 15))},
               
        
    },
     22: {
        title: "prestige - 07",
        description: "x2.5 prestige points",
        cost: new Decimal(1300),
         unlocked() { return (hasUpgrade(this.layer, 21))},
               
        
    },
     23: {
        title: "prestige - 08",
        description: "prestige upgrades bought boosts points",
        cost: new Decimal(5000),
         unlocked() { return (hasUpgrade(this.layer, 22))},
          effect() { // Calculate bonuses from the upgrade. Can return a single value or an object with multiple values
                    let ret = player.p.upgrades.length /2.3;
                    return ret;
                },
                effectDisplay() { return format(this.effect())+"x" }, // Add formatting to the effect
               
        
    },
     24: {
        title: "prestige - 09",
        description: "x4 points",
        cost: new Decimal(12000),
         unlocked() { return (hasUpgrade(this.layer, 23))},
         
               
        
    },
      25: {
        title: "prestige - 10",
        description: "unlock matter and x3.4 points",
        cost: new Decimal(35000),
         unlocked() { return (hasUpgrade(this.layer, 24))},
         
               
        
    },
    
},

})
