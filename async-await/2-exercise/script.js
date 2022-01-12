const doTask = async (interations) => {
    let numbers = [];

    for (let index = 0; index <= interations; index++) {
        const number = 1 + Math.floor(Math.random() * 6);
        numbers.push(number);
        
        if(number === 6) return {error: true, data: "Se ha sacado un 6"}
    };

    return {
        error:false,
        data: numbers
    }
}

async function asyncCall(){
    let result = await doTask(4)
    console.log(result)
}

asyncCall()