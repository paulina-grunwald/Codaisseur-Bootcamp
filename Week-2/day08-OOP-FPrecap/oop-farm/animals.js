/* Weight of a cow in KG = AGE x 1.5
Weight of a pig in KG = AGE x 2.3
Weight of a horse in KG = AGE x 1.7 */

class Animals{
    constructor(age) {
        this.age = age;
        }
        getWeightInKg() {
            return this.weightFactor * this.age
        }
        getMaxWeight() {
            return Math.min(this.minWeight, this.getWeightInKg())
        }
        getValueInEuros() {
            return this.getWeightInKg * this.price
        }
        
}

class Pig extends Animals {
    constructor(...args) {
        super(...args)
        this.weightFactor = 2.3
        this.minWeight = 700
        this.price = 4
    }

}

class Cow extends Animals{
    constructor(...args) {
        super(...args)
        this.weightFactor = 1.5
        this.minWeight = 1200
        this.price = 5
    }

}

class Horse extends Animals{
    constructor(...args) {
        super(...args)
        this.weightFactor = 1.7
        this.minWeight = 1000
        this.price = 10
    }

}

module.exports = { Pig, Cow, Horse }
 