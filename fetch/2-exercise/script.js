const request = fetch("studsents.json")

const response = request.then(response => {
    if(response.ok){
        return response.json()
    } else {
        let error = new Error(`Sucedio un error la peticion respondio con status ${response.status} - NOT FOUND`)
        throw error
    }
}
)

data = response
            .then(data => console.log(data))
            .catch(err => console.log(err.message))

