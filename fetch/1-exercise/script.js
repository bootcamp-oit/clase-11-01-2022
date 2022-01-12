function resolveAfterTwoSeconds() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello silabu!")
        }, 5000);
    })
}

async function asyncCall(){
    console.log("Llamando...")
    let data = await resolveAfterTwoSeconds()
    console.log(data)
}

asyncCall()