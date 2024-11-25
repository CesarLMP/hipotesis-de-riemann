function checkRiemannHypothesis() {
    let realPart = parseFloat(document.getElementById('realPart').value);
    let imaginaryPart = parseFloat(document.getElementById('imaginaryPart').value);
    if (isNaN(realPart) || isNaN(imaginaryPart)) {
        alert('Por favor, ingrese valores válidos.');
        return;
    }

    let s = math.complex(realPart, imaginaryPart);
    let resultText = '';

    if (realPart === 0.5) {
        resultText = `El número complejo ${s} cumple con la Hipótesis de Riemann.`;
    } else {
        resultText = `El número complejo ${s} NO cumple con la Hipótesis de Riemann.`;
    }

    document.getElementById('result').innerHTML = resultText;
}