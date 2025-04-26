import math_operations

print(f"Nilai Pi: {math_operations.pi}")

# lingkaran
radius = int(input("Masukkan radius lingkaran: "))
luas_lingkaran = math_operations.hitung_luas_lingkaran(radius)
keliling_lingkaran = math_operations.hitung_keliling_lingkaran(radius)
print(f"Luas lingkaran: {luas_lingkaran:.2f}")
print(f"Keliling lingkaran: {keliling_lingkaran:.2f}")

# persegi
sisi = int(input("Masukkan sisi persegi: "))
luas_persegi = math_operations.hitung_luas_persegi(sisi)
keliling_persegi = math_operations.hitung_keliling_persegi(sisi)
print(f"Luas persegi: {luas_persegi:.2f}")
print(f"Keliling persegi: {keliling_persegi:.2f}")

# persegi panjang
panjang = int(input("Masukkan panjang persegi panjang: "))
lebar = int(input("Masukkan lebar persegi panjang: "))
luas_persegi_panjang = math_operations.hitung_luas_persegi_panjang(panjang, lebar)
keliling_persegi_panjang = math_operations.hitung_keliling_persegi_panjang(panjang, lebar)
print(f"Luas persegi panjang: {luas_persegi_panjang:.2f}")
print(f"Keliling persegi panjang: {keliling_persegi_panjang:.2f}")

from math_operations import celsius_ke_fahrenheit, celcius_ke_kelvin

celcius = int(input("Masukkan suhu dalam Celsius: "))
fahrenheit = celsius_ke_fahrenheit(celcius)
kelvin = celcius_ke_kelvin(celcius)
print(f"{celcius}°C = {kelvin:.2f}K")
print(f"{celcius}°C = {fahrenheit:.2f}°F")


