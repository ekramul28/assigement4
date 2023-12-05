// function cubeNumber(number) {
//     if (typeof number !== "number") {
//         return "please provide number"
//     } else if (number < 0) {
//         return "please provide positive number"
//     } else {
//         return Math.pow(number, 3);
//     }
// }
// console.log(cubeNumber("3"));


// function matchFinder(string1, string2) {
//     if (typeof string1 !== "string" || typeof string2 !== "string") {
//         return "please provide string"
//     } else {
//         return string1.toLowerCase().includes(string2.toLowerCase())
//     }
// }
// console.log(matchFinder("2", "3"))


// function sortMaker(arr) {

//     if (!Array.isArray(arr)) {
//         return "please provide valid array"
//     } else if (arr[0] === arr[1]) {
//         return "equal"
//     } else if (arr[0] > 0 && arr[1] > 0) {
//         arr.sort(function (a, b) {
//             return b - a;
//         })
//         return arr
//     } else {
//         return "invalid input"
//     }

// }
// console.log(sortMaker([4, -2]));



// function findAddress(obj) {
//     if (typeof obj !== "object") {
//         return "please provide valid object"
//     }

//     const street = obj.street || "_";
//     const house = obj.house || "_";
//     const society = obj.society || "_";
//     return street + "," + house + "," + society;

// }
// const object = {
//     street: 10,
//      house: "15A",
//      society: "Earth perfect"
// }
// console.log(findAddress(object))




function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray)) {
        return "please provide valid array in first parameter"
    } else if (typeof totalDue !== "number") {
        return "please provide valid number in second parameter"
    } else if (changeArray.length === 0) {
        return "array is empty"
    }

    let sum = 0;
    for (item of changeArray) {
        sum = sum + item;
    }


    if (sum > totalDue) {
        return true;
    } else {
        return false;
    }
}
console.log(canPay([1, 3, 5], 10))