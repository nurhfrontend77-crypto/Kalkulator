const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('.btn-operator');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);
        const operator = button.innerText;

        if (isNaN(n1) || isNaN(n2)) {
            result.innerText = "Сандарды киргизиңиз!";
            return;
        }

        let res = 0;

        switch (operator) {
            case '+': res = n1 + n2; break;
            case '-': res = n1 - n2; break;
            case '*': res = n1 * n2; break;
            case ':': 
                if (n2 === 0) {
                    result.innerText = "0гө бөлүүгө болбойт!";
                    return;
                }
                res = n1 / n2; 
                break;
        }

        result.innerText = `Жыйынтык: ${res}`;
    });
});

