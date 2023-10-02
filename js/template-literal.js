function llamaTemplate ({photo,name,age,woolColor,gender,country,wantedFor, ...llama}){

console.log(llama)

const templateLiteral = `
    <aside class="criminal">
    
      
        <header>
    
            <h2 class="text-3xl text-center text-blue-700 font-bold">${name}</h2>
            <h3 class="text-xl text-center pt-2"> Wanted for: <span class="font-bold text-red-600">${wantedFor}</span></h3>
            
        </header>
            
                <div class="record sm:flex sm:justify-center">
  
                  <img class="py-7 rounded-lg" src="${photo}" alt="${name}" />
  
                </div>
  
                <div class="desc sm:flex sm:justify-center pb-7 ml-3 text-xl">
          
                  <ul class="font-bold">
          
                    <li>Age: ${age}</li>
          
                    <li>Wool Color: ${woolColor}</li>
          
                    <li>Sex: ${gender}</li>
          
                    <li>Country of Origin: ${country}</li>
          
                  </ul>
          
                </div>
  
          </aside>
        `
            const elm = document.createRange().createContextualFragment(templateLiteral)
            
            return elm
           }
           
           export {llamaTemplate}