function calculateZeta() {
    let realPart = parseFloat(document.getElementById('realPart').value);
    let imaginaryPart = parseFloat(document.getElementById('imaginaryPart').value);
    if (isNaN(realPart) || isNaN(imaginaryPart)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    let s = math.complex(realPart, imaginaryPart);
    let zetaValue = zeta(s);
    document.getElementById('result').innerHTML = `&zeta;(${s}) = ${zetaValue}`;
}

function zeta(s) {
    let sum = math.complex(0, 0);
    for (let n = 1; n <= 100; n++) {
        sum = math.add(sum, math.divide(1, math.pow(n, s)));
    }
    return sum;
}
