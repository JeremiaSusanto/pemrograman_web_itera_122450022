berat = int(input("Masukkan berat badan (kg): "))
tinggi = float(input("Masukkan tinggi badan (m): "))

# Menghitung BMI
bmi = berat / (tinggi ** 2)
print(f"Indeks Massa Tubuh (BMI) Anda adalah: {bmi:.2f}")

if (bmi < 18.5):
    print("Kekurangan berat badan")
elif (bmi >= 18.5 and bmi < 25):
    print("Berat badan normal")
elif (bmi >= 25 and bmi < 30):
    print("Kelebihan berat badan")
elif (bmi >= 30):
    print("Obesitas")