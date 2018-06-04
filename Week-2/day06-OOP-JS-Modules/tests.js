// This file has tests to help you see how you are doing

function heroExists(){ return typeof hero !== 'undefined' && hero.constructor === Object }
function heroIsHeroic(){ return heroExists() && hero.heroic && hero.heroic.constructor === Boolean}
function heroHasName(){ return heroExists() && hero.name && hero.name.constructor === String }
function heroHasInventory(){ return heroExists() && hero.inventory && hero.inventory.constructor === Array }
function heroHasHealth(){ return heroExists() && hero.health && hero.health.constructor === Number }
function heroHasWeapon(){ return heroExists() && hero.weapon && hero.weapon.constructor === Object }
function weaponHasType(){ return hero.weapon.type && hero.weapon.type.constructor === String }
function weaponHasDamage(){ return hero.weapon.damage && hero.weapon.damage.constructor === Number }
function weaponHasStats(){ return heroHasWeapon() && weaponHasType() && weaponHasDamage() }

function allHeroTestPassed() { 
    return heroExists() 
        && heroHasInventory() 
        && heroHasHealth() 
        && heroHasWeapon() 
        && weaponHasStats()
}


function heroTests(){
    console.log('Hero tests:')
    console.assert(heroExists(), 'You havent created a hero object')
    console.assert(heroHasName(), 'Your hero does not have a name')
    console.assert(heroIsHeroic(), 'Your hero is not heroic')
    console.assert(heroHasInventory(), 'Your hero does not have an inventory')
    console.assert(heroHasHealth(), 'Your hero does not have health')
    console.assert(heroHasWeapon(), 'Your hero does not have a weapon')
    console.assert(weaponHasStats(), 'Your weapon does not have the right stats')

    if(allHeroTestPassed()) {
        console.log('%c Hero tests passed! ', 'color: #32CD32')
    }
}

function functionsExist() {
    try {
        dealDamage && doBattle && pickUpItem && equipWeapon && rest
    } catch (error) {
        return false
    }

    return true
}

function dealDamageWorks() {
    try {
        return dealDamage({ weapon: { damage: 5 }}, { health: 10 }).health === 5    
    } catch (error) {
        return false
    }
}

function doBattleGuardStatementWorks() {
    var heroStub = { heroic: true, health: 10, weapon: { damage: 2 } }
    var creatureStub = { heroic: false, health: 5, weapon: { damage: 1 } }

    try {
        var error = doBattle(creatureStub, heroStub)
        return error === null
    } catch (error) {
        return false
    }
}

function doBattleWorks() {
    var heroStub = { heroic: true, health: 10, weapon: { damage: 2 } }
    var creatureStub = { heroic: false, health: 5, weapon: { damage: 1 } }
    try {
        var victor = doBattle(heroStub, creatureStub)
        return victor.heroic && victor.health === 8
    } catch (error) {
        return false
    }
}

function pickUpItemWorks() {
    try {
        return pickUpItem({ inventory: [] }, { type: 'gun', damage: '100'}).inventory.length === 1    
    } catch (error) {
        return false
    }    
}

function equipWeaponWorks() {
    try {
        var creature = equipWeapon({ inventory: [{ type: 'gun', damage: '100'}], weapon: null }, 0)
        return creature.weapon.type === 'gun' && creature.inventory.length === 0
    } catch (error) {
        return false
    }
}

function restWorks() {
    try {
        return rest({ health: 5 }).health === 10
    } catch (error) {
        return false
    }
}

function allFunctionTestsPassed() {
    return functionsExist() 
        && dealDamageWorks() 
        && doBattleGuardStatementWorks() 
        && doBattleWorks() 
        && pickUpItemWorks() 
        && equipWeaponWorks() 
        && restWorks()
}

function functionTests(){
    console.log('Function tests:')
    console.assert(functionsExist(), 'You have not declared all necessary functions yet')
    
    if (!functionsExist()) return

    console.assert(dealDamageWorks(), 'dealDamage is not working as it should')
    console.assert(pickUpItemWorks(), 'pickUpItem is not working as it should')
    console.assert(equipWeaponWorks(), 'equipWeapon is not working as it should')
    console.assert(doBattleGuardStatementWorks(), 'doBattle guard statement is not working as it should')
    console.assert(doBattleWorks(), 'doBattle is not working as it should')
    console.assert(restWorks(), 'rest is not working as it should')

    if(!allFunctionTestsPassed()) return
    
    console.log('%c Function tests passed! ', 'color: #32CD32')
}

function runTests(){
    heroTests()
    functionTests()
}

runTests()


