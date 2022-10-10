const angka = [5, 4, 9, 10, 60];

min = Math.min.apply(Math, angka);
max = Math.max.apply(Math, angka);

console.log("Isi Array = [5, 4, 9, 10, 60]");
console.log("Nilai Minimal adalah : " + min);
console.log("Nilai Maksimal adalah : " + max);
