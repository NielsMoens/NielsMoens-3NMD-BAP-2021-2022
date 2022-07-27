// origin source: https://codepen.io/clagosv/pen/YjQdao

document.getElementById("btnPrint").onclick = function () {
    printElement(document.getElementById("printThis"));
}

function printElement(elem) {
    var domClone = elem.cloneNode(true);
    var $print_qrcode = document.getElementById("printContent");

    if (!$print_qrcode) {
        var $print_qrcode = document.createElement("div");
        $print_qrcode.id = "printContent";
        document.body.appendChild($print_qrcode);
    }

    $print_qrcode.innerHTML = "";
    $print_qrcode.appendChild(domClone);
    window.print();
}