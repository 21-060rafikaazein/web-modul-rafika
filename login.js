// Definisikan data pengguna yang valid (bisa diubah sesuai kebutuhan)
const validUsers = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' }
];

// Ambil elemen formulir
const form = document.getElementById('loginForm');
const message = document.getElementById('message');

// Tambahkan event listener untuk form submit
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit secara langsung

    // Ambil nilai input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Periksa apakah input kosong
    if (username === '' || password === '') {
        message.innerText = 'Input tidak lengkap';
        return;
    }

    // Periksa apakah pengguna valid
    const isValidUser = validUsers.some(user => {
        return user.username === username && user.password === password;
    });

    // Tampilkan pesan sesuai dengan hasil autentikasi
    if (isValidUser) {
        message.innerText = 'Login sukses';
        // Redirect ke halaman lain, atau lakukan tindakan lain yang diperlukan setelah login sukses
    } else {
        message.innerText = 'Login gagal';
    }
});
