// Zad1
function czyTrojkaPitagorejska(a, b, c) {
    const sortedNumbers = [a, b, c].sort((x, y) => x - y);
    const wynik = sortedNumbers[0] ** 2 + sortedNumbers[1] ** 2 === sortedNumbers[2] ** 2;
    console.log(wynik
        ? `${a}, ${b}, ${c} tworzą trójkę pitagorejską.`
        : `${a}, ${b}, ${c} nie tworzą trójki pitagorejskiej.`);
    return wynik;
}

function handlePitagorejska() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    const resultElement = document.getElementById('result-pitagorejska');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.textContent = "Podaj poprawne liczby!";
        console.error("Nieprawidłowe dane wejściowe.");
    } else if (czyTrojkaPitagorejska(a, b, c)) {
        resultElement.textContent = `${a}, ${b}, ${c} tworzą trójkę pitagorejską.`;
    } else {
        resultElement.textContent = `${a}, ${b}, ${c} nie tworzą trójki pitagorejskiej.`;
    }
}

// Zad2
function liczbyPodzielne(a, b, c) {
    const wyniki = [];
    for (let i = a; i <= b; i++) {
        if (i % c === 0) {
            wyniki.push(i);
        }
    }
    console.log(`Liczby z przedziału ${a}-${b} podzielne przez ${c}:`, wyniki);
    return wyniki;
}

function handlePodzielne() {
    const a = parseInt(document.getElementById('range-a').value);
    const b = parseInt(document.getElementById('range-b').value);
    const c = parseInt(document.getElementById('divisor').value);
    const resultElement = document.getElementById('result-podzielne');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultElement.textContent = "Podaj poprawne liczby!";
        console.error("Nieprawidłowe dane wejściowe.");
    } else {
        const wyniki = liczbyPodzielne(a, b, c);
        resultElement.textContent = wyniki.length > 0
            ? `Liczby podzielne przez ${c}: ${wyniki.join(', ')}`
            : `Brak liczb podzielnych przez ${c} w przedziale ${a}-${b}.`;
    }
}

// Zad3
function tabliczka(bok) {
    let wynik = "";
    for (let i = 1; i <= bok; i++) {
        let row = "";
        for (let j = 1; j <= bok; j++) {
            row += (i * j) + ' ';
        }
        console.log(row.trim());
        wynik += row.trim() + "\n";
    }
    return wynik;
}

function handleTabliczka() {
    const bok = parseInt(document.getElementById('bok').value);
    const resultElement = document.getElementById('result-tabliczka');

    if (isNaN(bok) || bok <= 0) {
        resultElement.textContent = "Podaj poprawną wielkość boku!";
        console.error("Nieprawidłowe dane wejściowe.");
    } else {
        const wynik = tabliczka(bok);
        resultElement.innerHTML = `<pre>${wynik}</pre>`;
    }
}

// Zad4: Ciąg Fibonacciego
function fibonacci(n) {
    if (typeof n === 'number' && n > 0) {
        let fibArray = [0, 1];
        for (let i = 2; i < n; i++) {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }
        console.log(`Ciąg Fibonacciego o długości ${n}:`, fibArray);
        return fibArray.join(', ');
    } else {
        console.error('Podany argument nie jest liczbą lub jest mniejszy lub równy 0.');
        return "Podaj poprawną liczbę!";
    }
}

function handleFibonacci() {
    const n = parseInt(document.getElementById('fib-n').value);
    const resultElement = document.getElementById('result-fib');
    resultElement.textContent = fibonacci(n);
}

// Zad5: Rysowanie choinki
function choinka(wysokosc) {
    if (typeof wysokosc === 'number' && wysokosc > 0) {
        let wynik = '';
        for (let i = 1; i <= wysokosc; i++) {
            wynik += ''.repeat(wysokosc - i) + '*'.repeat(2 * i - 1) + '\n';
        }
        console.log(wynik.trim());
        return wynik.trim();
    } else {
        console.error('Podany argument nie jest liczbą lub jest mniejszy lub równy 0.');
        return "Podaj poprawną wysokość!";
    }
}

function handleChoinka() {
    const wysokosc = parseInt(document.getElementById('choinka-h').value);
    const resultElement = document.getElementById('result-choinka');
    resultElement.innerHTML = `<pre>${choinka(wysokosc)}</pre>`;
}

// Zad6: Choinka nocą
function choinkaNoca(wysokosc) {
    if (typeof wysokosc === 'number' && wysokosc > 0) {
        let wynik = '';
        wynik += '*'.repeat(wysokosc * 2 - 1) + '\n';
        for (let i = 2; i <= wysokosc - 1; i++) {
            wynik += '*'.repeat(wysokosc - i + 1) + ' '.repeat(2 * (i - 1) - 1) + '*'.repeat(wysokosc - i + 1) + '\n';
        }
        wynik += '*'.repeat(wysokosc * 2 - 1);
        console.log(wynik.trim());
        return wynik.trim();
    } else {
        console.error('Podany argument nie jest liczbą lub jest mniejszy lub równy 0.');
        return "Podaj poprawną wysokość!";
    }
}

function handleChoinkaNoca() {
    const wysokosc = parseInt(document.getElementById('choinka-noca-h').value);
    const resultElement = document.getElementById('result-choinka-noca');
    resultElement.innerHTML = `<pre>${choinkaNoca(wysokosc)}</pre>`;
}

// Zad7: Pole figury
function poleFigury(rodzaj, a, b, h) {
    switch (rodzaj) {
        case 'prostokat': return poleProstokata(a, b);
        case 'trapez': return poleTrapezu(a, b, h);
        case 'rownoleglobok': return poleRownolegloboku(a, h);
        case 'trojkat': return poleTrojkata(a, h);
        default:
            console.error('Nieznany rodzaj figury');
            return NaN;
    }
}

function poleProstokata(a, b) { return a * b; }
function poleTrapezu(a, b, h) { return ((a + b) / 2) * h; }
function poleRownolegloboku(a, h) { return a * h; }
function poleTrojkata(a, h) { return (a * h) / 2; }

function handlePoleFigury() {
    const rodzaj = document.getElementById('figura-rodzaj').value;
    const a = parseFloat(document.getElementById('figura-a').value);
    const b = parseFloat(document.getElementById('figura-b').value);
    const h = parseFloat(document.getElementById('figura-h').value);
    const resultElement = document.getElementById('result-pole-figury');
    const pole = poleFigury(rodzaj, a, b, h);
    resultElement.textContent = !isNaN(pole) ? `Pole figury: ${pole}` : "Błąd w obliczeniach.";
}

// Zad8: Pole figury z callback
const poleFiguryCallback = (rodzaj, a, b, h, callback) => callback(a, b, h);

function handlePoleFiguryCallback() {
    const rodzaj = document.getElementById('figura-rodzaj').value;
    const a = parseFloat(document.getElementById('figura-a').value);
    const b = parseFloat(document.getElementById('figura-b').value);
    const h = parseFloat(document.getElementById('figura-h').value);
    const resultElement = document.getElementById('result-pole-figury-callback');
    let pole;
    switch (rodzaj) {
        case 'prostokat': pole = poleFiguryCallback(rodzaj, a, b, h, poleProstokata); break;
        case 'trapez': pole = poleFiguryCallback(rodzaj, a, b, h, poleTrapezu); break;
        case 'rownoleglobok': pole = poleFiguryCallback(rodzaj, a, b, h, poleRownolegloboku); break;
        case 'trojkat': pole = poleFiguryCallback(rodzaj, a, b, h, poleTrojkata); break;
        default: pole = NaN;
    }
    resultElement.textContent = !isNaN(pole) ? `Pole figury: ${pole}` : "Błąd w obliczeniach.";
}

// Zad9: Trójkąt Pascala
function trojkatPascala(wysokosc) {
    let wynik = '';
    for (let i = 0; i < wysokosc; i++) {
        let row = '';
        let liczba = 1;
        for (let j = 0; j <= i; j++) {
            row += liczba + ' ';
            liczba = liczba * (i - j) / (j + 1);
        }
        wynik += row.trim() + '\n';
    }
    console.log(wynik.trim());
    return wynik.trim();
}

function handleTrojkatPascala() {
    const wysokosc = parseInt(document.getElementById('pascal-h').value);
    const resultElement = document.getElementById('result-pascal');
    resultElement.innerHTML = `<pre>${trojkatPascala(wysokosc)}</pre>`;
}

// Zad10: Cenzura
function cenzura(niedozwolone, zdanie) {
    const niedozwoloneRegex = new RegExp(niedozwolone.join('|'), 'gi');
    return zdanie.replace(niedozwoloneRegex, (match) => '*'.repeat(match.length));
}

function handleCenzura() {
    const niedozwolone = document.getElementById('cenzura-slowa').value.split(',');
    const zdanie = document.getElementById('cenzura-zdanie').value;
    const resultElement = document.getElementById('result-cenzura');
    resultElement.textContent = cenzura(niedozwolone, zdanie);
}
