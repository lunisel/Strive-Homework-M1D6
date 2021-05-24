/* This movies array is used throughout the exercises. Please don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let test = "This is a test"
console.log(test)

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10*20
console.log(sum)

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random()*20)
console.log(random)


/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name: "Luna",
    surname: "Sarmiento",
    age: 21
}
console.log(me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/

delete me.age
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills = ["JavaScript"]
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/

delete me.skills
console.log(me)

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

const dice = function(randomDice){
   randomDice = Math.floor(Math.random()*6)+1
   return randomDice
}

console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(n1,n2){
    if (n1<n2){
        console.log(n2)
    } else {
        console.log(n1)
    }
}
whoIsBigger(4,15)
whoIsBigger(9,1)

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

const splitMe = function(yourString){
    yourString = yourString.split(" ")
    console.log(yourString)
}

splitMe("I live in Italy")
splitMe("My name is Luna")

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

const deleteOne = function(yourString,yourBoolean){
    if(yourBoolean === true){
        yourString = yourString.substring(1)
        console.log(yourString)
    } else {
        let newArray = yourString.split("")
        newArray.pop()
        newString = newArray.join("")
        console.log(newString)
    }
}

deleteOne("Banana", true)
deleteOne("Pinguin", false)

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

const onlyLetters = function(yourStringEx5){
    let withNoDigits = yourStringEx5.replace(/[0-9]/g, '');
    console.log(withNoDigits)
}
onlyLetters("I have 1 dog")

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

const isThisAnEmail = function(email){
   let isEmail = /\S+@\S+\.\S+/;
        return isEmail.test(email);
}

console.log(isThisAnEmail("luna942008@hotmail.it"))
console.log(isThisAnEmail("Llama"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

const whatDayIsIt = function(today){
    today = new Date()
    dayOfTheWeek = today.getDay()
    if(dayOfTheWeek === 0){console.log("Today is Sunday!")}
    if(dayOfTheWeek === 1){console.log("Today is Monday!")}
    if(dayOfTheWeek === 2){console.log("Today is Tuesday!")}
    if(dayOfTheWeek === 3){console.log("Today is Wednesday!")}
    if(dayOfTheWeek === 4){console.log("Today is Thursday!")}
    if(dayOfTheWeek === 5){console.log("Today is Friday!")}
    if(dayOfTheWeek === 6){console.log("Today is Saturday!")}
    if(dayOfTheWeek === 7){console.log("Today is Sunday!")}
}

whatDayIsIt()

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

const rollTheDices = function(numberOfTimes){
    numberOfTimes = dice()
    console.log("Number of times: ", numberOfTimes)
    if(numberOfTimes === 1){
        n1 = dice()
         let firstObject = {
             sum: n1,
             value: [n1]
         }
         console.log(firstObject)
    } if(numberOfTimes === 2){
        n1 = dice()
        n2 = dice()
        let secondObject = {
            sum: n1+n2,
            values: [n1,n2]
        }
        console.log(secondObject)
    }if(numberOfTimes === 3){
        n1 = dice()
        n2 = dice()
        n3 = dice()
        let thirdObject = {
            sum: n1+n2+n3,
            values: [n1,n2,n3]
        }
        console.log(thirdObject)
    }if(numberOfTimes === 4){
        n1 = dice()
        n2 = dice()
        n3 = dice()
        n4 = dice()
        let fourthObject = {
            sum: n1+n2+n3+n4,
            values: [n1,n2,n3,n4]
        } 
        console.log(fourthObject)
    }if(numberOfTimes === 5){
        n1 = dice()
        n2 = dice()
        n3 = dice()
        n4 = dice()
        n5 = dice()
        let fifthObject = {
            sum: n1+n2+n3+n4+n5,
            values: [n1,n2,n3,n4,n5]
        }
        console.log(fifthObject)
    }if(numberOfTimes === 6){
        n1 = dice()
        n2 = dice()
        n3 = dice()
        n4 = dice()
        n5 = dice()
        n6 = dice()
        let sixthObject = {
            sum: n1+n2+n3+n4+n5+n6,
            values: [n1,n2,n3,n4,n5,n6]
        }
        console.log(sixthObject)
    }
}

rollTheDices()

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

const howManyDays = function(randomDate){
    let today = new Date()
    let oneDay = 1000*60*60*24
    let diffInTime = today.getTime() - randomDate.getTime()
    let diffInDays = Math.round(diffInTime/oneDay)
    console.log(diffInDays)

}

howManyDays(new Date("04/25/2021"))

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

const isTodayMyBirthday = function(yourBirthday){
    let today = new Date()
    let oneDay = 1000*60*60*24
    let differenceTime = today.getTime() - yourBirthday.getTime()
    let differenceDays = Math.round(differenceTime/oneDay)
    if(differenceDays === 1){
        console.log("Today is your birthday!!")
    } else {
        console.log("Today is not your birthday")
    }
}

isTodayMyBirthday(new Date("2021/05/24"))
isTodayMyBirthday(new Date("2021/08/04"))

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/

const deleteProp = function(yourObject, age){
    yourObject = {
        age: `${age}` ,
        name: "Luna"
    }
    console.log(yourObject)
    delete yourObject.age
    console.log(yourObject)
}

deleteProp("me", "21")

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/

const olderMovie = function(){
 let allYears = [
    oneMovie = movies[0].Year,
    twoMovie = movies[1].Year,
    threeMovie = movies[2].Year,
    fourMovie = movies[3].Year,
    fiveMovie = movies[4].Year,
    sixMovie = movies[5].Year,
    sevenMovie = movies[6].Year,
    eightMovie = movies[7].Year,
    nineMovie = movies[8].Year,
    tenMovie = movies[9].Year,
    elevenMovie = movies[10].Year,
    twelveMovie = movies[11].Year,
    thirdteenMovie = movies[12].Year,
    fourteenMovie = movies[13].Year
]
    let oldestMovie = Math.min(...allYears)
    console.log("The oldest movie is from: ", oldestMovie)
}

olderMovie()

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/

const countMovies = function(){
    let totalMovies = movies.length
    console.log("Movies in the array: ", totalMovies)
}
countMovies()

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/7

const onlyTheTitles = function(){
    let allTitles = [
        oneMovie = movies[0].Title,
        twoMovie = movies[1].Title,
        threeMovie = movies[2].Title,
        fourMovie = movies[3].Title,
        fiveMovie = movies[4].Title,
        sixMovie = movies[5].Title,
        sevenMovie = movies[6].Title,
        eightMovie = movies[7].Title,
        nineMovie = movies[8].Title,
        tenMovie = movies[9].Title,
        elevenMovie = movies[10].Title,
        twelveMovie = movies[11].Title,
        thirdteenMovie = movies[12].Title,
        fourteenMovie = movies[13].Title
    ]
    console.log(allTitles)
}
onlyTheTitles()

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

const onlyInThisMillennium = function(){
    console.log("List of movies in this millennium:")
    if(movies[0].Year >= 2000){
        console.log("The Lord of the Rings: The Fellowship of the Ring")
    } if (movies[1].Year >= 2000){
        console.log("The Lord of the Rings: The Return of the King")
    }if(movies[2].Year >= 2000){
        console.log("The Lord of the Rings: The Two Towers")
    } if (movies[3].Year >= 2000){
        console.log("Lord of War")
    }if(movies[4].Year >= 2000){
        console.log("Lord of Dogtown")
    } if (movies[5].Year >= 2000){
        console.log("The Lord of the Rings")
    } if (movies[6].Year >= 2000){
        console.log("Lord of the Flies")
    }if(movies[7].Year >= 2000){
        console.log("The Lord of Salem")
    } if (movies[8].Year >= 2000){
        console.log("Greystoke: The Legend of Tarzan, Lord of the Apes")
    }if (movies[9].Year >= 2000){
        console.log("Lord of the Flies")
    } if (movies[10].Year >= 2000){
        console.log("The Avengers")
    }if(movies[11].Year >= 2000){
        console.log("Avengers: Infinity War")
    }if (movies[12].Year >= 2000){
        console.log("The Avengers: Age of Ultron")
    }if(movies[13].Year >= 2000){
        console.log("Avengers: Endgame")
    }
}
onlyInThisMillennium()

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/

const getMovieById = function(id){
    if(movies[0].imdbID === `${id}`){
        console.log("The Lord of the Rings: The Fellowship of the Ring")
    } if (movies[1].Year === `${id}`){
        console.log("The Lord of the Rings: The Return of the King")
    }if(movies[2].Year === `${id}`){
        console.log("The Lord of the Rings: The Two Towers")
    } if (movies[3].Year === `${id}`){
        console.log("Lord of War")
    }if(movies[4].Year === `${id}`){
        console.log("Lord of Dogtown")
    } if (movies[5].Year === `${id}`){
        console.log("The Lord of the Rings")
    } if (movies[6].Year === `${id}`){
        console.log("Lord of the Flies")
    }if(movies[7].Year === `${id}`){
        console.log("The Lord of Salem")
    } if (movies[8].Year === `${id}`){
        console.log("Greystoke: The Legend of Tarzan, Lord of the Apes")
    }if (movies[9].Year === `${id}`){
        console.log("Lord of the Flies")
    } if (movies[10].Year === `${id}`){
        console.log("The Avengers")
    }if(movies[11].Year === `${id}`){
        console.log("Avengers: Infinity War")
    }if (movies[12].Year === `${id}`){
        console.log("The Avengers: Age of Ultron")
    }if(movies[13].Year === `${id}`){
        console.log("Avengers: Endgame")
    }
}

getMovieById(`tt0120737`)

/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/

/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

