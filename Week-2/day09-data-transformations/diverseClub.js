// Given the following data, I want to know which clubs have the most diverse membership (by nationality).
const people = [
    {id: 1, name: 'James', nationality: 'GB'},
    {id: 2, name: 'Adam', nationality: 'CA'},
    {id: 3, name: 'Larry', nationality: 'US'},
    {id: 4, name: 'Fred', nationality: 'NL'},
    {id: 5, name: 'Anna', nationality: 'NL'},
    {id: 6, name: 'Emily', nationality: 'DE'},
    {id: 7, name: 'Lenny', nationality: 'US'},
    {id: 8, name: 'Cara', nationality: 'NL'},
    {id: 9, name: 'Nathalie', nationality: 'NL'},
]

const clubs = [
    {name: 'Book Club', members: [9,3,6,2]},
    {name: 'Auto Club', members: [1,2,3]},
    {name: 'Country Club', members: [7,5,8]},
    {name: 'Food Club', members: [5,1,6,7]},
    {name: 'Yoga Club', members: [1,4,5,3,7]},
    {name: 'Garage Band', members: [1,3,8,9]},
    {name: 'Pool Club', members: [6,4,5,8,9]},
]


// var filteredArray = arr.filter(function(item, pos){
//     return arr.indexOf(item)== pos; 
//   });
  

//const matchMembersToClub = people.filter(person => person.id == 1)


// const idAndNationality = people.map(person => [person.nationality])


// const filterClubs = clubs.filter(club => club.name == 'Book Club')
// // console.log(idAndNationality)

const clubsMembers = clubs.map(club => club.members)
console.log(clubsMembers)
console.log(".......")
const inside = clubsMembers.map(club=>club[0])


const element = []
for (let index = 0; index < clubsMembers.length; index++) {
    element.push(clubsMembers[index]);
}

const reduce = 


// const convertNationality = clubsMembers.map(member=>member.map(member=>member.map(member=> member= clubsMembers[member-1] )))
    
// const convertNationality2 = clubsMembers.map(member=>member[0])
    

//     // .map(member=> mfor (let index = 0; index < clubsMembers.length; index++) {
    element.push(clubsMembers[index]);
}
embe r= clubsMembers[member] ))
// console.log(convertNationality2)
// // console.log(clubsMembers[1])

// // array2 = [ [ 1, 'GB' ],
// // [ 2, 'CA' ],
// // [ 3, 'US' ],
// // [ 4, 'NL' ],
// // [ 5, 'NL' ],
// // [ 6, 'DE' ],
// // [ 7, 'US' ],
// // [ 8, 'NL' ],
// // [ 9, 'NL' ] ];

// // const firstelementarra2 = array2.map( item => item[0])


// // const secondElement = array2.map( item => item[1])
// // console.log(firstelementarra2)
// // console.log(secondElement[1])

// // const newtry = firstelementarra2.map(item=>item=secondElement[item-1] )
// // console.log(newtry)
// // // const firstelementarra2 = array2.map( item => item[0])
// // // const secondElement = array2.map( item => item[1])
// // // console.log(firstelementarra2)
// // // console.log(secondElement)

// // // function getMembersfromClub(clubArray) {
// // //     const members = []
// // //     for (let index = 0; index < clubArray.length; index++) {
// // //         members.push(clubArray[index].members);
// // //     }
// // //     return console.log(members)
// // // }

// // // function getPeopleId(peopleList) {
// // //     const people = []
// // //     for (let index = 0; index < peopleList.length; index++) {
// // //         people.push(peopleList[index].id);
// // //     }
// // //     return console.log(people)
// // // }



// // // getMembersfromClub(clubs);
// // // getPeopleId(people);


// // /*
// // The expected output is:
// // [ { name: 'Book Club', members: [ 9, 3, 6, 2 ] },
// //   { name: 'Food Club', members: [ 5, 1, 6, 7 ] } ]
// // */


// // // function getData (firstelementarra2, secondElement, array1) {
// // //     for (let index = 0; index < array1.length; index++) {
// // //         const newI = []
// // //         const item = array1[index];
// // //             if(item==firstelementarra2) {
// // //                 item=secondElement
                
// // //             } 
// // //         return item
// // //     }
// // // }
// // // console.log(getData (firstelementarra2, secondElement, array1))
// // // // const newEl = array1.map(item =>
// // // //     function (firstelementarra2,secondElement) {
// // // //         if(item==firstelementarra2) {
// // // //             item=secondElement
// // // //         } 
// // // //         return item
// // // //     })

// // // // console.log(newEl)