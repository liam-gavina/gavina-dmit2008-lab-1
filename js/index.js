import { llamaTemplate } from "template-literal"

let criminalDatabase = []


async function getCriminalData(url) {
    const response = await fetch(url)
    criminalDatabase = [ ... await response.json()];
    renderCriminal(criminalDatabase)
}

getCriminalData('/db/llamas.json')




 function renderCriminal (criminals){

    const container = document.createElement('div')

    criminals.forEach((llama)=>{
     container.append(llamaTemplate(llama))

    })

    document.querySelector('#records').append(container)

    }


