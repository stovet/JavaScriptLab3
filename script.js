let submissions = [

    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name: "Joe",
        score: 77,
        date: "2019-05-14",
        passed: true
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
]

function addSumbission(array, newName, newScore, newDate) {

    let submission = new Object();

    submission.name = newName;
    submission.score = newScore
    submission.date = newDate;
    if (newScore >= 60) {
        submission.passed = true;
    } else {
        submission.passed = false;
    }
    submission.passed;
    array.push(submission);
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    let index = array.findIndex(submission => {
        return submission.name === name;
    })
    array.splice(index, 1);
}

function editSubmission(array, index, score) {
    array[index].score = score;
    if (score >= 60) {
        array[index].passed = true;
    } else {
        array[index].passed = false;
    }
}

function findSubmissionByName(array, name) {
    let submission = array.find(submission => {
        return submission.name === name
    })
    return submission;
}

// function findLowestScore(array){ 
//     let lowestScore = 100;
//     let index = 0;
//     let final = [];

//     for(let item of array){
//         if(item.score < lowestScore){
//             lowestScore = item.score;
//             final = array[index]
//         }
//         index++;
//     }
//     return final;
// }

function findLowestScore(array) {
    let lowestScore = 100
    let count = 0;
    let final = [];

    array.forEach(findLowest)

    function findLowest(item) {
        if (item.score < lowestScore) { 
            lowestScore = item.score;
            final = array[count]
        }
        count++;
    }
    return final;
}

function findAverageScore(array) {
    let total = 0;
    for (let item of array) {
        total += item.score;
    }
    return total / array.length
}

function filterPassing(array) {
    let result = array.filter(submission => {
        return submission.score >= 60;
    })
    return result
}

function filter90AndAbove(array) {
    let result = array.filter(submission => {
        return submission.score >= 90;
    })
    return result;
}

// EXTENDED CHALLENGES

function createRange(start, end){
    let newRange = [];
    for(let i = start; i <= end; i++){
        newRange.push(i);
    }
    console.log(newRange);
}

function countElements(array){
    let elements = new Object();

    for(let arr of array){
        if(elements.includes(arr)){
            
        }
        elements.arr = arr;
        console.log(elements)
    }
}