// Seleção de elementos 
const multiplication = document.querySelector(".form-contain")
const inputMultiplication = document.querySelector("#number")
const multiplicatorInput = document.querySelector("#multiplicator")
const multiplicationContain = document.querySelector(".result-operations")
// Funções 

const createTable = (number, multiplicatorNumber)=>{
    multiplicationContain.innerHTML = ""
    for(i= 1; i <= multiplicatorNumber; i++) {
        let result = number * i
        
        const template = `<div class="row">

            <div class="operation">${number} x ${i} =</div>
        
        <div class="result">${result}</div>
        </div>`

        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")

        multiplicationContain.appendChild(row)
    }
}
// Eventos 

multiplication.addEventListener("submit", (e)=>{
    e.preventDefault()

    const multiplicationNumber = +inputMultiplication.value
     
    const multiplicatorNumber = +multiplicatorInput.value

    
    if(!multiplicationNumber || !multiplicatorNumber  ) return
    createTable(multiplicationNumber, multiplicatorNumber)

    
})