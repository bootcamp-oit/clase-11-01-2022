function sendMessage(message){
    console.log(message)
}

let intervalId = setInterval(() => {
    sendMessage("Hello silabuz !")
}, 2000);

setTimeout(() => clearInterval(intervalId), 11000)