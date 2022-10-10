function faktorial(n) {
    let hasil = 1;
    if (n == 0 || n == 1) {
        return hasil;
    } else {
        for (var i = n; i >= 1; i--) {
            hasil = hasil * i;
        }
        return hasil;
    }
}

let n = prompt("Masukkan Angka!");
hasil = faktorial(n);
console.log("Bilangan faktorial dari " + n + " adalah " + hasil);
