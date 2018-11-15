const myOperatorsQnt = document.getElementsByName("myOperator");

for (let i = 0; i < myOperatorsQnt.length; i++) {
    document.getElementsByName("myOperator")[i].addEventListener("click", function () {
        let input1 = document.getElementById("inputOne").value;
        let input2 = document.getElementById("inputTwo").value;
        //console.log(myOperatorsQnt[i].textContent);
        switch (myOperatorsQnt[i].textContent) {
            case "+":
                let sum = Number(input1) + Number(input2);
                document.getElementById("rezult").innerHTML = sum;
                break;
            case "-":
                let sub = Number(input1) - Number(input2);
                document.getElementById("rezult").innerHTML = sub;
                break;
            case "/":
                let div = Number(input1) / Number(input2);
                document.getElementById("rezult").innerHTML = div;
                break;
            case "*":
                let mul = Number(input1) * Number(input2);
                document.getElementById("rezult").innerHTML = mul;
                break;
            case "%":
                let mod = Number(input1) % Number(input2);
                document.getElementById("rezult").innerHTML = mod;
                break;

            default:
                document.getElementById("rezult").innerHTML = "error";
                break;
        }
    });
}

document.getElementById("myReset").addEventListener("click", () => {
    document.getElementById("rezult").innerHTML = "";
});