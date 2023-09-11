// Fungsi untuk menghitung transaksi
function transaksi() {
  // Mendapatkan data dari form
  let nama = document.getElementById('nama').value;
  let produk = document.getElementById('produk').value;
  let jumlah = parseInt(document.getElementById('jumlah').value);
  let hargaSatuan = 0;

  // Menggunakan switch case untuk menentukan harga produk
  switch (produk) {
    case 'TV':
      hargaSatuan = 2000000;
      break;
    case 'AC':
      hargaSatuan = 3000000;
      break;
    case 'Kulkas':
      hargaSatuan = 4000000;
      break;
  }

  // Menghitung harga kotor
  let hargaKotor = hargaSatuan * jumlah;

  // Menghitung diskon
  let diskon = 0;
  if (produk === 'Kulkas' && jumlah >= 3) {
    diskon = 0.3 * hargaKotor;
  } else if (produk === 'AC' && jumlah >= 3) {
    diskon = 0.2 * hargaKotor;
  } else {
    diskon = 0.1 * hargaKotor;
  }

  // Menghitung PPN
  let ppn = 0.1 * (hargaKotor - diskon);

  // Menghitung harga bayar
  let hargaBayar = hargaKotor - diskon + ppn;

  // Menampilkan hasil dalam bentuk alert
  let hasil =
    'Nama Pelanggan: ' +
    nama +
    '\n' +
    'Produk yang dibeli: ' +
    produk +
    '\n' +
    'Harga Satuan: ' +
    hargaSatuan +
    '\n' +
    'Jumlah Item Produk yang dibeli: ' +
    jumlah +
    '\n' +
    'Harga Kotor: ' +
    hargaKotor +
    '\n' +
    'Diskon: ' +
    diskon +
    '\n' +
    'PPN: ' +
    ppn +
    '\n' +
    'Harga Bayar: ' +
    hargaBayar;

  alert(hasil);
}

// Menambahkan event handler onclick ke tombol "Beli"
document.getElementById('proses').onclick = transaksi;
