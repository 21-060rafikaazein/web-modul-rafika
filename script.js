// Opsional: Validasi input untuk memastikan kedua bilangan telah dimasukkan

// Ambil elemen formulir
const form = document.getElementById('calculatorForm');

// Tambahkan event listener untuk form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit secara langsung

    // Ambil nilai input
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;

    // Lakukan operasi sesuai dengan pilihan pengguna
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Tidak bisa dibagi oleh nol!";
            }
            break;
        default:
            result = "Operasi tidak valid!";
            break;
    }

    // Simpan hasil perhitungan di local storage untuk ditampilkan di halaman result.html
    localStorage.setItem('result', result);
    
    // Lanjutkan ke halaman result.html
    window.location.href = 'result.html';
});
