//UJIAN

function kotak(nilai) {
  let hasil = "";
  for (let x = 0; x < nilai; x++) {
    for (let y = 0; y < nilai; y++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}

function segitiga(nilai) {
  let hasil = "";
  for (let i = 0; i < nilai; i++) {
    for (let j = 0; j <= i; j++) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}

function segitigaTerbalik(nilai) {
  let hasil = "";
  for (let i = 0; i < nilai; i++) {
    for (let j = nilai; j > i; j--) {
      hasil += "* ";
    }
    hasil += "\n";
  }
  return hasil;
}

function selangseling(nilai) {
  let hasil = "";
  for (let x = nilai; x > 0; x--) {
    for (let y = 0; y < nilai; y++) {
      if ((x % 2 == 0 && y % 2 == 1) || (x % 2 == 1 && y % 2 == 0)) {
        hasil += "* ";
      } else {
        hasil += "! ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}

function kotakPola(nilai) {
  let hasil = "";
  for (let x = 0; x < nilai; x++) {
    for (let y = 0; y < nilai; y++) {
      if ((x % 2 == 1 && y == 1) || (x % 2 == 0 && y == 2)) {
        hasil += "! ";
      } else {
        hasil += "* ";
      }
    }
    hasil += "\n";
  }
  return hasil;
}

console.log("Menggambar Kotak");
console.log(kotak(5));
console.log("Menggambar Segitiga");
console.log(segitiga(5));
console.log("Menggambar Segitiga Terbalik");
console.log(segitigaTerbalik(5));
console.log("Menggambar Selang-Seling");
console.log(selangseling(5));
console.log("Menggambar Kotak Pola");
console.log(kotakPola(5));
