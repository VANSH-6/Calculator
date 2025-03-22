let output = document.querySelector('input');
let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener("click", function() {
        let value = button.innerText;

        if (value ==="AC"){
            output.value = "0";
        } 
        else if (value ==="DEL"){
            output.value = output.value.slice(0, -1);
        } 
        else if (value === "="){
            output.value = eval(output.value);
        }
        else{
            if(output.value === "error"){
                output.value = " ";
            }
            output.value += value;
        }
    });
});