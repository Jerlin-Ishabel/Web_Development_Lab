function Solve(val) {
    const v = document.getElementById('res');
    v.value += val;
}

function Result() {
    let expr = document.getElementById('res').value;

    try {
        // Replace ALL 'x' with '*'
        expr = expr.replace(/x/g, '*');

        // Evaluate the expression
        const result = eval(expr);

        document.getElementById('res').value = result;
    } catch (e) {
        document.getElementById('res').value = 'Error';
    }
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    const ev = document.getElementById('res');
    ev.value = ev.value.slice(0, -1);
}

// Keyboard Support
document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    // Numbers and operators
    if (validKeys.includes(key)) {

        // Show "x" on screen instead of "*"
        Solve(key === '*' ? 'x' : key);

    } else if (key === 'Enter') {
        event.preventDefault(); // Avoid form submit
        Result();

    } else if (key === 'Backspace') {
        Back();

    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
