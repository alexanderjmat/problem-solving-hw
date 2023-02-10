/*Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Constraints:

Time Complexity: O(M + N) - If M is the length of message and N is the length of letters: */

function constructNote(message, letters) {
    const lexicon = {}
    //loop through letters
    for (let letter of letters) {
        //add letter counts to lexicon
        lexicon[letter] = lexicon[letter] + 1 || 1 
    }
    //loop through message
    for (let character of message) {
        //if not lexicon[character] return false 
        if (!lexicon[character]) return false;
        //else lexicon[character] -= 1
        lexicon[character] -= 1;
    }
    return true;
}
console.log(constructNote('aa', 'abc'))
console.log(constructNote('abc', 'dcba'))
console.log(constructNote('aabbcc', 'bcabcaddff'))

//////////

/* averagePair
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

Constraints:

Time Complexity: O(N) */

function averagePair(sortedArray, targetAverage) {
    //declare first position of array
    let firstIndex = 0
    //declare last position of array
    let lastIndex = sortedArray.length - 1
    
    //loop over sortedArray
    while (firstIndex <= lastIndex) {
        //declare the average of high and low values
        let average = (sortedArray[firstIndex] + sortedArray[lastIndex]) / 2;
        //check if the average of the two values is greater than targetAverage
        if (average > targetAverage) {
            //if average is greater than targetAverage, subtract 1 from lastIndex
            lastIndex -= 1;
        } else if (average < targetAverage) {
            //if average is less than targetAverage, add 1 to firstIndex
            firstIndex += 1;
        } else return true; //return true if average is not greater or smaller than targetAverage (ie. equal)
    }
        //return false by default
        return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); //false
console.log(averagePair([], 4)); //false

//////////

/*twoArrayObject 
Write a function called twoArrayObject which accepts two arrays of varying lengths.The first array consists of keys and the second one consists of values. Your function should return an object created from the keys and values. If there are not enough values, the rest of keys should have a value of null. If there not enough keys, just ignore the rest of values.*/

function twoArrayObject(arrayKeys, arrayValues) {
    //declare the object that will be constructed using arrayKeys and arrayValues
    let object = {}
    //loop over arrayKeys
    for (let i = 0; i < arrayKeys.length; i++) {
        //the object key representing the arrayKeys item at position i is equal to the arrayValues item at position i. If there is no arrayValues[i], then arrayKeys[i] is just assigned null
        object[arrayKeys[i]] = arrayValues[i] || null
    }
    //return the object that has been constructed using arrayKeys and arrayValues
    return object;
}

console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])) // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}

//////////

/* sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.*/

function sameFrequency(a, b) {
    //reassign the type for a and b to string
    a = a.toString()
    b = b.toString()
    //return false if numbers are not equal length
    if (a.length != b.length) return false;
    //declare object to store digit frequency of a
    const objectA = {}
    //declare object to store digit frequency of b
    const objectB = {}
    
    //loop through a
    for (let i = 0; i < a.length; i++) {
        objectA[a[i]] = objectA[a[i]] + 1 || 1
        objectB[b[i]] = objectB[b[i]] + 1 || 1;
    }
    
    //loop through b
    for (let number of b) {
        if (objectB[number] !== objectA[number]) return false;
    }
    //return true by default
    return true;
}

console.log(sameFrequency(182,281)) //true
console.log(sameFrequency(34,14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22,222)) //false

//////////

/*separatePositive
Write a function called separatePositive which accepts an array of non-zero integers. Separate the positive integers to the left and the negative integers to the right. The positive numbers and negative numbers need not be in sorted order. The problem should be done in place (in other words, do not build a copy of the input array).*/

function separatePositive(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] < 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            right--;
        } else {
            left++;
        }
    }

    return arr;
}

console.log(separatePositive([2, -1, -3, 6, -8, 10]))
console.log(separatePositive([5, 10, -15, 20, 25]))
console.log(separatePositive([-5, 5]))
console.log(separatePositive([1, 2, 3]))

//////////

/*isSubsequence
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.*/

function isSubsequence(stringA, stringB) {
    let count = 0
    let indexA = 0
    let indexB = 0
    
    while (count < stringB.length) {
        if (indexA == stringA.length - 1) return true
        if (stringA[indexA] == stringB[indexB]) {
            indexA++
        } 
        indexB++
        count++
    }
    //return false by default
    return false;
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))


//////////

/*countPairs
Given an array of integers, and a number, find the number of pairs of integers in the array whose sum is equal to the second parameter. You can assume that there will be no duplicate values in the array. */

function countPairs(integerArray, number) {
    const pairs = []
    //create hash map
    const map = {}
    //loop
    for (let i = 0; i < integerArray.length; i++) {
        map[integerArray[i]] = i;
        const difference = number - integerArray[i]
        if ((map[difference] || map[difference] == 0) && map[difference] != i) {
            pairs.push([difference, integerArray[i]])
        }
    }
    return pairs.length;
}

console.log(countPairs([3,1,5,4,2], 6))
console.log(countPairs([10,4,8,2,6,0], 10))
console.log(countPairs([4,6,2,7], 10))
console.log(countPairs([1,2,3,4,5], 10))
console.log(countPairs([1,2,3,4,5], -3))
console.log(countPairs([0,-4],-4))
console.log(countPairs([1,2,3,0,-1,-2],0))