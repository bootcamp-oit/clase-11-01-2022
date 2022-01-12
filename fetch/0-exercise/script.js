const request = fetch("students.json")
const response = request.then(response => response.json())

const data = response.then(data => {
    data.forEach(element => {
        let listCell = createListCell(element)
        inserListCell(listCell)
    });
})

function createListCell(student){
    let listCell = document.createElement("li")
    listCell.className = "list-group-item";
    listCell.innerHTML = `El estudiante: ${student.nombre}, tiene la edad de ${student.edad}`
    return listCell
}

function inserListCell(listCell){
    const list = document.getElementById("my-list")
    list.appendChild(listCell)
}