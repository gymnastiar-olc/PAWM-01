// Fungsi untuk mencari kata dalam file JSON lokal
function searchKBBI() {
    const inpWordID = document.getElementById("inp-word-id").value.toLowerCase();  // Ambil input kata, diubah jadi huruf kecil
    const resultID = document.getElementById("result-id");

    // Fetch file JSON lokal
    fetch('kbbi.json')
        .then(response => response.json())  // Parsing file JSON
        .then(data => {
            // Cek apakah kata yang dicari ada di dalam data JSON
            const hasil = data[inpWordID];

            if (hasil) {
                // Jika kata ditemukan, tampilkan definisinya
                resultID.innerHTML = `
                <div class="word">
                    <h3>${inpWordID}</h3>
                </div>
                <div class="details">
                    <p><strong>Jenis kata:</strong> ${hasil.jenis_kata}</p>
                </div>
                <p class="word-meaning">
                    <strong>Arti:</strong> ${hasil.arti}
                </p>`;
            } else {
                // Jika kata tidak ditemukan
                resultID.innerHTML = `<h3 class="error">Kata tidak ditemukan</h3>`;
            }
        })
        .catch(error => {
            // Jika ada kesalahan saat memuat file JSON
            resultID.innerHTML = `<h3 class="error">Terjadi kesalahan saat memuat data</h3>`;
            console.error('Error:', error);
        });
}

// Menambahkan event listener untuk tombol pencarian
const btnID = document.getElementById("search-btn-id");
btnID.addEventListener("click", searchKBBI);
