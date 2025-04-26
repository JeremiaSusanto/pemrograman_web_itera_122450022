# Modul matematika sederhana

# Variabel dalam modul
pi = 3.14159

# Fungsi untuk menghitung luas lingkaran
def hitung_luas_lingkaran(radius):
    return pi * radius * radius

# Fungsi untuk menghitung keliling lingkaran
def hitung_keliling_lingkaran(radius):
    return 2 * pi * radius

def hitung_luas_persegi(sisi):
    return sisi * sisi

def hitung_keliling_persegi(sisi):
    return 4 * sisi

def hitung_luas_persegi_panjang(panjang, lebar):
    return panjang * lebar

def hitung_keliling_persegi_panjang(panjang, lebar):
    return 2 * (panjang + lebar)

# Fungsi untuk mengkonversi suhu dari Celsius ke Fahrenheit
def celsius_ke_fahrenheit(celsius):
    return (celsius * 9/5) + 32

# Fungsi untuk mengkonversi suhu dari Fahrenheit ke Celsius
def celcius_ke_kelvin(celcius):
    return celcius + 273.15