function displayOnConsole(){
    console.log("Hello silabuz! after 5 seconds")
}

setTimeout(() => {
    displayOnConsole()
}, 5000);

console.log("Hello")