
fetch("robots.txt")
    .then(response => response.text())
    .then(data => {
        let h1 = document.getElementById("my-h1")
        h1.innerHTML = data
    })
    .finally(() => console.log("CERRADO"))
    

