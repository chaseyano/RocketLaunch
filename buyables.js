export const budget = 10000; 


export const materialPrices = {
    titanium: 1000,   // Price per unit (in dollars)
    aluminium: 500,   // Price per unit (in dollars)
    steel: 300,       // Price per unit (in dollars)
    carbon: 700,      // Price per unit (in dollars)
    silica: 200       // Price per unit (in dollars)
};

export const fuelPrices = {
    hydrogen: 0.01,   // Price per unit (in dollars)
    kerosene: 1.2,    // Price per unit (in dollars)
    methane: 0.8,     // Price per unit (in dollars)
    helium3: 2000,    // Price per unit (in dollars)
    rp1: 1.5         // Price per unit (in dollars)
};


const materials = {
    "Titanium": { "Weight": 1/10, "Cost": 10/10 },
    "Silica": { "Weight": 3/10, "Cost": 5/10 },
    "Aluminium": { "Weight": 6/10, "Cost": 5/10 },
    "Carbon": { "Weight": 4/10, "Cost": 4/10 },
    "Steel": { "Weight": 9/10, "Cost": 2/10 }
  };
  
  const fuels = {
    "Hydrogen": { "Weight": 1/10, "Cost": 8/10, "Force": 9/10 },
    "Methane": { "Weight": 4/10, "Cost": 6/10, "Force": 5/10 },
    "Kerosene": { "Weight": 6/10, "Cost": 3/10, "Force": 5/10 },
    "Helium3": { "Weight": 5.10, "Cost": 5/10, "Force": 6/10 },
    "rp1": { "Weight": 8, "Cost": 2, "Force": 9/10 }
  };
  
  function evaluatePair(material, fuel) {
    if (!materials[material] || !fuels[fuel]) {
      return "Invalid material or fuel";
    }
    
    const totalWeight = materials[material].Weight + fuels[fuel].Weight;
    const totalCost = materials[material].Cost + fuels[fuel].Cost;
    const force = fuels[fuel].Force; // Force is only relevant for fuels
  
    return { "TotalWeight": totalWeight, "TotalCost": totalCost, "Force": force };
  }
