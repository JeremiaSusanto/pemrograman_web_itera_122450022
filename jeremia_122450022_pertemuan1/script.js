// Manipulasi DOM
const domOutput = document.getElementById("dom-output");
let itemCount = 0;

// Fungsi untuk memuat data dari localStorage saat halaman dimuat
document.addEventListener("DOMContentLoaded", function () {
  const savedItems = JSON.parse(localStorage.getItem("kegiatanList")) || [];
  savedItems.forEach((item) => {
    addItemToDOM(item.text, item.id, item.checked);
  });
});

// Fungsi untuk menambahkan item ke DOM
function addItemToDOM(inputValue, itemId, isChecked = false) {
  const newItemCheckbox = document.createElement("input");
  newItemCheckbox.setAttribute("type", "checkbox");
  newItemCheckbox.setAttribute("id", itemId);
  newItemCheckbox.setAttribute("name", itemId);
  newItemCheckbox.setAttribute("value", inputValue);
  newItemCheckbox.checked = isChecked;

  const newItemLabel = document.createElement("label");
  newItemLabel.setAttribute("for", itemId);
  newItemLabel.innerText = inputValue; // Gunakan nilai input sebagai teks label

  // Bungkus checkbox dan label dalam elemen <div> agar berada di baris baru
  const newItemWrapper = document.createElement("div");
  newItemWrapper.setAttribute("class", "item-wrapper"); // Tambahkan class untuk identifikasi
  newItemWrapper.appendChild(newItemCheckbox);
  newItemWrapper.appendChild(document.createTextNode(" ")); // Tambahkan spasi
  newItemWrapper.appendChild(newItemLabel);

  // Tambahkan wrapper ke DOM
  domOutput.appendChild(newItemWrapper);
}

// Fungsi untuk menambahkan item baru
document.getElementById("btn-tambah-item").addEventListener("click", function () {
  const inputElement = document.getElementById("kegiatan-input"); // Ambil elemen input
  const inputValue = inputElement.value.trim(); // Ambil nilai input dan hapus spasi di awal/akhir

  if (inputValue === "") {
    alert("Silakan masukkan kegiatan terlebih dahulu!");
    return;
  }

  itemCount++;
  const itemId = `item-${itemCount}`;
  addItemToDOM(inputValue, itemId);

  // Simpan ke localStorage
  saveItemToLocalStorage({ id: itemId, text: inputValue, checked: false });

  // Kosongkan input setelah menambahkan item
  inputElement.value = "";
});

// Fungsi untuk menyimpan item ke localStorage
function saveItemToLocalStorage(item) {
  const savedItems = JSON.parse(localStorage.getItem("kegiatanList")) || [];
  savedItems.push(item);
  localStorage.setItem("kegiatanList", JSON.stringify(savedItems));
}

// Fungsi untuk menghapus item dari DOM dan localStorage
function removeItemFromDOM(wrapper, itemId) {
  domOutput.removeChild(wrapper); // Hapus elemen dari DOM

  // Hapus dari localStorage
  const savedItems = JSON.parse(localStorage.getItem("kegiatanList")) || [];
  const updatedItems = savedItems.filter((item) => item.id !== itemId);
  localStorage.setItem("kegiatanList", JSON.stringify(updatedItems));
}

// Fungsi untuk menghapus item yang dicentang
document.getElementById("btn-hapus-item").addEventListener("click", function () {
  const checkboxes = domOutput.querySelectorAll("input[type='checkbox']"); // Ambil semua checkbox
  let hasChecked = false; // Untuk memeriksa apakah ada checkbox yang dicentang

  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const wrapper = checkbox.parentElement; // Ambil elemen wrapper (parent)
      const itemId = checkbox.id; // Ambil ID checkbox
      removeItemFromDOM(wrapper, itemId); // Hapus dari DOM dan localStorage
      hasChecked = true;
    }
  });

  if (!hasChecked) {
    alert("Silakan pilih item yang ingin dihapus!");
  }
});

// Fungsi untuk mengubah warna background
document.getElementById("btn-ubah-warna").addEventListener("click", function() {
  const colors = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-pink-100"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  domOutput.className = `p-4 mb-3 ${randomColor} rounded`;
});

// Fungsi untuk kalkulator
function hitungKalkulator(angka1, angka2, operasi) {
    let hasil = 0;
    switch (operasi) {
        case "tambah":
            hasil = angka1 + angka2;
            break;
        case "kurang":
            hasil = angka1 - angka2;
            break;
        case "kali":
            hasil = angka1 * angka2;
            break;
        case "bagi":
            if (angka2 === 0) {
                return "Error: Pembagian dengan nol tidak diperbolehkan";
            }
            hasil = angka1 / angka2;
            break;
        case "pangkat":
            hasil = angka1 ** angka2;
            break;
        case "akar":
            hasil = Math.sqrt(angka1);
            break;
        case "modulus":
            hasil = angka1 % angka2;
            break;
        default:
            return "Operasi tidak valid";
    }
    return hasil;
}

// Event handler untuk tombol operasi matematika
document.getElementById("btn-tambah").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "tambah");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} + ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kurang").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kurang");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} - ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-kali").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "kali");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} × ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-bagi").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);
    
    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "bagi");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ÷ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-pangkat").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "pangkat");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} ^ ${angka2} = ${hasil}</p>`;
    }
});

document.getElementById("btn-akar").addEventListener("click", function() {
    const angka1 = parseFloat(document.getElementById("angka1").value);

    if (isNaN(angka1)) {
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, 0, "akar");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: √${angka1} = ${hasil}</p>`;
    }
});

document.getElementById("btn-modulus").addEventListener("click", function(){
    const angka1 = parseFloat(document.getElementById("angka1").value);
    const angka2 = parseFloat(document.getElementById("angka2").value);

    if(isNaN(angka1) || isNaN(angka2)){
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p class="text-red-500">Masukkan angka yang valid!</p>`;
    } else {
        const hasil = hitungKalkulator(angka1, angka2, "modulus");
        document.getElementById("hasil-kalkulator").innerHTML = 
            `<p>Hasil: ${angka1} % ${angka2} = ${hasil}</p>`;
    }
});

// Fungsi sapaNama
function sapaNama(nama) {
    return `Halo, ${nama}! Selamat belajar JavaScript!`;
}

// Fungsi untuk memvalidasi form input
function validasiForm() {
    const nama = document.getElementById("nama-input").value.trim();
    const email = document.getElementById("email-input").value.trim();
    const password = document.getElementById("pass-input").value.trim();

    let isValid = true;
    let pesanError = "";
    
    // Validasi Nama
    if (nama.length <= 3) {
        pesanError += "Nama harus lebih dari 3 karakter.\n";
        isValid = false;
    }

    // Validasi Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex untuk email valid
    if (!emailRegex.test(email)) {
        pesanError += "Email tidak valid.\n";
        isValid = false;
    }

    // Validasi Password
    if (password.length < 8) {
        pesanError += "Password harus minimal 8 karakter.\n";
        isValid = false;
    }

    // Tampilkan pesan error jika tidak valid
    if (!isValid) {
        alert(pesanError);
    }

    return isValid;
}

// Event handler untuk tombol "Sapa Saya"
document.getElementById("sapa-button").addEventListener("click", function () {
    if (validasiForm()) {
        const nama = document.getElementById("nama-input").value.trim();
        const pesan = `Halo, ${nama}! Selamat belajar JavaScript!`;
        document.getElementById("sapa-output").innerHTML = 
            `<p class="text-green-500">${pesan}</p>`;
    }
});
