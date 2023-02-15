//Exercise #1

var cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

for(var i=0; i < cohortOneStudents.length; i++){
    console.log(cohortOneStudents[i])
}

//Exercise #2

var myInterests = ["Reading", "RPing", "Hiking", "Photography", "Singing"]

for(var i=0; myInterests.length > i; i++){
   
    if("Singing" === myInterests[i]){
    console.log("My absolute favorite interest is: " + myInterests[i])
    } else {
        console.log("One of my interests is: " + myInterests[i])
    }
}