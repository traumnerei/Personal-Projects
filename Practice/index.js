import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://realtime-database-cd1d6-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const booksInDB = ref(database, "books")

const booksEl = document.getElementById("books")

onValue(booksInDB, function(snapshot){
    let bookArray = Object.values(snapshot.val())

    for (let i = 0; i < bookArray.length; i++)
        appendBookToBooksListEl()

})

 // Challenge: Use the appendBookToBooksListEl() function to append book instead of console logging

 
function clearBooksListEl() {
    booksEl.innerHTML = ""
}

function appendBookToBooksListEl(bookValue) {
    booksEl.innerHTML += `<li>${bookValue}</li>`
}