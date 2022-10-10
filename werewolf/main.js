var i = false;
while (i === false) {
    const peranArr = ["Werewolf", "Penyihir", "Warga"];
    const random = Math.floor(Math.random() * peranArr.length);

    var nama = prompt("Masukkan nama anda");
    var peran = prompt("Anda mendapatkan Peran (Randomize)", (random, peranArr[random]));

    if (peran === "" || nama === "") {
        alert("Masukkan peran dan nama anda");
        var i = false;
    } else {
        var i = true;
    }
}

console.log("Nama anda : " + nama);
console.log("Peran anda : " + peran);
