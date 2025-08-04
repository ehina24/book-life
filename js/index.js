const tx=document.querySelector(".explanation_tx")

//console.log(tx.innerText.length);

let spanText="";
for(let i=0;i<tx.innerText.length;i++){
    if(tx.innerText.charAt(i)!="\n"){
        spanText+=`<span>${tx.innerText.charAt(i)}</span>`;
    }
    else{
        spanText+=`<br>`;
    }
}   

tx.innerText="";
tx.innerHTML=spanText;

//console.log(spanText);

