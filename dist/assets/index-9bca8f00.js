(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function d({photo:o,name:r,age:n,woolColor:l,gender:e,country:t,wantedFor:s,...c}){console.log(c);const a=`
    <aside class="criminal">
    
      
        <header>
    
            <h2 class="text-3xl text-center text-blue-700 font-bold">${r}</h2>
            <h3 class="text-xl text-center pt-2"> Wanted for: <span class="font-bold text-red-600">${s}</span></h3>
            
        </header>
            
                <div class="record sm:flex sm:justify-center">
  
                  <img class="py-7 rounded-lg" src="${o}" alt="${r}" />
  
                </div>
  
                <div class="desc sm:flex sm:justify-center pb-7 ml-3 text-xl">
          
                  <ul class="font-bold">
          
                    <li>Age: ${n}</li>
          
                    <li>Wool Color: ${l}</li>
          
                    <li>Sex: ${e}</li>
          
                    <li>Country of Origin: ${t}</li>
          
                  </ul>
          
                </div>
  
          </aside>
        `;return document.createRange().createContextualFragment(a)}let i=[];async function u(o){i=[...await(await fetch(o)).json()],f(i)}u("/db/llamas.json");function f(o){const r=document.createElement("div");o.forEach(n=>{r.append(d(n))}),document.querySelector("#records").append(r)}
