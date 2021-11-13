var score = localStorage.getItem('score');

var userInput = document.getElementById("userInput")
var submitBtn = document.getElementById("submitBtn")
var clearBtn = document.getElementById("clearBtn")
let records = JSON.parse(localStorage.getItem('records'));

// highscores list element 
const myList = document.getElementById('my-list');

window.addEventListener('DOMContentLoaded', function() {
    if (!records) {
        records = []
    };

    for (let i = 0; i < records.length; i++) {
          let newListItem = document.createElement('li');
    newListItem.textContent = records[i].nameOfUser + ' '+records[i].scoreOfUser;
    myList.appendChild(newListItem)
    }
})

console.log(records);


var form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var userInputData = userInput.value.trim();
    var record = {
        nameOfUser: userInputData,
        scoreOfUser: score
    }


    records.push(record);

    // var a = records[0];
    // var b = records[1];



    records.sort(function(a, b) {
      return b.scoreOfUser -a.scoreOfUser;
    });
    records.splice(5)

localStorage.setItem('records', JSON.stringify(records));
window.location.reload();
})

var clearInfo = function(){
  localStorage.clear();
}



clearBtn.addEventListener('click', function () {
  console.log("adfasfas")
  localStorage.clear()
  window.location.reload();
})








































// // var score = 




// // var getInfo = function(){
// //   userInfo = userInput.value  
// //   console.log(userInfo + " " + score)   
// //   let newListItem = document.createElement('li');
// //     newListItem.textContent = userInfo + score;
// //     myList.appendChild(newListItem)
// // }


// // new list item


// // user[0].nameOf = 'Alistairtest';
// // user[0].score = '100';

// // var storageScore = JSON.parse(localStorage.getItem('score', user.score));
// // var storagenameOf = JSON.parse(localStorage.getItem('nameOf', user.nameOf));

// // let scores = JSON.parse(localStorage.getItem('score'));
// // console.log(scores);


// // console.log(storageScore[0].nameOf);
// // console.log(storageScore[0].score);

// //you need to change this so it works. 