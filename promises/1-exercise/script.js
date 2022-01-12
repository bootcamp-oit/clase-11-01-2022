const doTask = (interations) => new Promise((resolve, reject) => {
    let numbers = [];

    for (let index = 0; index <= interations; index++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        if(number === 6) reject({error: true, message: "Se ha sacado un 6"})
    };
    resolve({
        error:false,
        data: numbers
    })
})

doTask(4)
    .then(response => console.log(`Los valores son ${response.data}`))
    .catch(err => console.log(`Ocurrio un error ${err.message}`))

