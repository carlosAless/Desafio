const form = document.querySelector("#form")
const section = document.querySelector(".container section")




const somatorio = (numero) =>{
    let sum = [0];
    for(let i = 1;i<numero;i++){
        if(i % 3 == 0 || i % 5 == 0){
            sum[0]+=i;
            sum.push(i)
        }
    }

    return sum
}

const showInScreen = (results) =>{

    console.log(results)
    const existingContainer = document.querySelector(".container_results");

    if (existingContainer) {
        existingContainer.remove();
    }

    const divContainer = document.createElement('div');
    divContainer.classList.add("container_results")

    const divResult = document.createElement('div')
    divResult.classList.add("result")

    const p = document.createElement("p")
    p.innerHTML = "Soma:"

    const span = document.createElement("span")
    span.innerHTML = results[0]

    divResult.appendChild(p)
    divResult.appendChild(span)

    const numbers = document.createElement('div')
    numbers.classList.add("number")

    const ulNumbers = document.createElement("ul")
    ulNumbers.classList.add("list")

    const pNumbers = document.createElement("p")
    pNumbers.innerHTML = "Números somados:"

    for (let i = 1; i < results.length; i++) {
        const liNumbers = document.createElement("li");
        liNumbers.classList.add("list");
    
        liNumbers.innerHTML = results[i];
    
        ulNumbers.appendChild(liNumbers);
    }
    
    numbers.appendChild(pNumbers)
    numbers.appendChild(ulNumbers)


    divContainer.appendChild(divResult)
    divContainer.appendChild(numbers)
    

    section.appendChild(divContainer)

}

form.addEventListener("submit", (ev) => {
    ev.preventDefault();

    const numero = document.querySelector("#numero").value;

    if (numero < 0 || !Number.isInteger(Number(numero)) || numero == '') {
        return;
    }

    const result = somatorio(numero);


    showInScreen(result);
});

