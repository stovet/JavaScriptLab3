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
        date: "2019- 07-05",
        passed: false
    },  
    {
        name: "Jill",     
        score: 88,
        date: "2020-04-22",
        passed: true
    }
]

function addSumbission(array, newName, newScore, newDate){
    
    let submission = new Object();
    
    submission.name = newName;
    submission.score = newScore
    submission.date = newDate;
    if(newScore >= 60){
        submission.passed = true;
    }else {
        submission.passed = false;
    }
    submission.passed;
    array.push(submission);
}

function deleteSubmissionByIndex(array, index){
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name){ 
    let index = array.findIndex(personsName => {
        return personsName.name === name;
    })
    array.splice(index, 1);
}
  
    function editSubmission(array, index, score){
        if(score >= 60){
            array[index].passed = true;
            array[index].score = score;
        } else {
            array[index].passed = false;
            array[index].score = score;
        }
    }

    function findSubmissionByName(array, name){ 
        let submission = array.find(personsName => {
            return personsName.name === name
        })
        return submission;
    }

    function findLowestScore(array){
        let lowestScore = 100;
        let index = 0;
        for(let item of array){
            console.log(array[index].score)

            while(item.score < lowestScore){
                lowestScore = item.score;
                index++;
            }
        }
        return array[index];
    }

    function findLowestScore(array){ /// needs work
        // array.forEach(function(currentValue, index, arr), thisValue)
        
        let result = array.forEach(findLowest)

        function findLowest(lowestScore, currentScore){
            let LowestScore = 100;
            currentScore = array.score;
            if(currentScore > lowestScore){
                currentScore = lowestScore;
            } else{
                return currentScore
            }
        }
        console.log(result);

    }