import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-cd1d6-default-rtdb.asia-southeast1.firebasedatabase.app/"
} //wasn't able to add data to the db cause the write rule is set to false

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shopping-list")

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    
    push(shoppingListInDB, inputValue)

    resetValueEl(inputValue)
    
    addtoList(inputValue)
})


function resetValueEl(){
    inputFieldEl.value = ""
}

function addtoList(itemValue){
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}


// Challenge: Create a let variable called 'scrimbaUsersEmails' and use one of Object methods to set it equal to an array with the values

// Challenge: Create a let variable called 'scrimbaUsersIDs' and use one of Object methods to set it equal to an array with the keys

// Challenge: Create a let variable called 'scrimbaUsersEntries' and use one of Object methods to set it equal to an array with the both the keys and values

let scrimbaUsers = {
    "00": "sindre@scrimba.com",
    "01": "per@scrimba.com",
    "02": "frode@scrimba.com"
}


let scrimbaUsersEmails = Object.values(scrimbaUsers)

let scrimbaUsersIDs = Object.keys(scrimbaUsers)

let scrimbaUsersEntries = Object.entries(scrimbaUsers)