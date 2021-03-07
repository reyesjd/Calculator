var tam = 0;
var operation = "";
var numA = 0;
var numB = 0;
var answered = false; 
function addNumers(comp) {

    var txtField = document.getElementById("textField");
    var content;
    if (answered === true){
        answered = false;
        txtField.value = "";
    }
    if (comp.id === "bChangeSig") {
        if (txtField.value !== "") {
            var i = parseFloat(txtField.value, 10);
            i = i * (-1);
            content = i.toString();
            tam = tam + 1;
            txtField.value = content;
        }
    } else if (comp.id === "bPoint") {
        if (tam < 15) {
            if (txtField.value.indexOf(".") === -1 && txtField.value !== "") {
                content = txtField.value.concat(comp.textContent);
                tam = tam + 1;
                txtField.value = content;
            }
        }
    } else {
        if (tam < 15) {
            content = txtField.value.concat(comp.textContent);
            tam = tam + 1;
            txtField.value = content;
        }
    }
}

function addOperation(comp) {
    var textField = document.getElementById("textField");
    if (operation === "" && textField !== "" && answered === false) {
        switch (comp.id) {
            case "oDiv":
                operation = "oDiv";
                numA = parseFloat(textField.value);
                textField.value = "";
                break;
            case "oRoot":
                operation = "oRoot";
                numA = parseFloat(textField.value);
                textField.value = "";
                break;
            case "oMul":
                operation = "oMul";
                numA = parseFloat(textField.value);
                textField.value = "";
                break;
            case "oMod":
                operation = "oMod";
                numA = parseFloat(textField.value);
                textField.value = "";
                break;
            case "oMin":
                operation = "oMin";
                numA = parseFloat(textField.value);
                textField.value = "";
                break
            case "oAnd":
                operation = "oAnd";
                numA = parseFloat(textField.value);
                textField.value = "";
                break;
            case "oPlus":
                operation = "oPlus";
                numA = parseFloat(textField.value);
                textField.value = "";
                break;

        }
    }
    if (comp.id === "oEqual" && textField.value !== "" && operation!== "") {
        numB = parseFloat(textField.value);
        var resultado = operar();
        textField.value = "Answer:  "+resultado.toString();
        console.log(resultado)
        operation = "";
        tam = 0;
        answered = true;
    }

}
function changeText(comp) {
    var txtField = document.getElementById("textField");
    if (comp.id === "rst" && answered === false) {
        txtField.value = txtField.value.substring(0, txtField.value.length - 1);
        tam = tam - 1;
    } else if (comp.id === "ce") {
        txtField.value = "";
        operation = "";
        numA = 0;
        numB = 0;
        tam = 0;
    } else if (comp.id === "c") {
        txtField.value = "";
        operation = "";
        numA = 0;
        numB = 0;
        tam = 0;
        tam = 0;
    }
}

function operar() {
    var result;
    switch (operation) {
        case "oDiv":
            result = numA / numB;
            break;
        case "oRoot":
            result = numA ** (1/numB);
            break;
        case "oMul":
            result = numA * numB;
            break;
        case "oMod":
            result = numA % numB;
            break;
        case "oMin":
            result = numA - numB;
            break
        case "oAnd":
            result = numA && numB;
            break;
        case "oPlus":
            result = numA + numB;
            break;
    }
    return result;
}

