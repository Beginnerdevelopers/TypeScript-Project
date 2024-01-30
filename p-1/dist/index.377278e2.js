let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn?.addEventListener("click", ()=>{
    let inputValue = input?.value;
    if (inputValue ? "" : Number) alert("enter something");
    else {
        let li = document.createElement("li");
        li.classList.add("item");
        li.innerHTML = `
  <h3> ${inputValue}</h3>
  
    `;
        console.log(li);
        let span = document.createElement("span");
        span.innerHTML = `
    &#x274C;
    `;
        span.addEventListener("click", (event)=>{
            if (event.target ? "SPAN" : String) span.parentElement?.remove();
            li.firstChild?.remove();
        });
        li.appendChild(span);
        document.getElementById("listItem")?.appendChild(li);
        input.value = "";
    }
});

//# sourceMappingURL=index.377278e2.js.map
