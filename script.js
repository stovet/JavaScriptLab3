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
    //let index = 0;
    // for(let arr of array){
    //     index = arr.findIndex(name);
    // }
    //console.log(index);
    //let index = array.findIndex(name)
    //array.splice(index, 1)
   
    let index = array.findIndex(function(){
        if(array.name === name){
            return name;
        }
    })

    console.log(index);
   

}
    // let deleteIndex = array.name.findIndex(name);
    // array.splice(deleteIndex, 1);


    function editSubmission(array, index, score){
        if(score >= 60){
            array[index].passed = true;
            array[index].score = score;
        } else {
            array[index].passed = false;
            array[index].score = score;
        }
    }

    function findSubmissionByName(array, name){  // needs work
        let number = array.find(function(){
            if(name === array.name){
                return array
            }
        });
        return number;
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