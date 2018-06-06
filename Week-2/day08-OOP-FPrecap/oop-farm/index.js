
class Farm {
  constructor(name) {
    this.name = name
    this.crops = []
  }

  addCrop(crop) {
    this.crops.push(crop)
  }
  
  calculateIncome() {
    return this.crops
    .map(crop => crop.getYieldInEuros())
    .reduce((a,b) => a + b, 0)
  }
}

module.exports.Farm = Farm