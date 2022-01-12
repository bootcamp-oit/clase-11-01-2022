const f1 = fetch("robots.txt")
const f2 = fetch("styles.css")
const f3 = fetch("data.json")


Promise.all([f1, f2, f3])
    .then(responses => {
        responses.forEach(response => {
            console.log(response.status, response.url)
        });
    })
    .catch(error => console.log(error))

