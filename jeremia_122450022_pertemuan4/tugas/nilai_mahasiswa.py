# Data mahasiswa
mahasiswa1 = {
    "nama": "Andi",
    "nim": "123456789",
    "nilai_uts": [80],
    "nilai_uas": [90],
    "nilai_tugas": [85]
}
mahasiswa2 = {
    "nama": "Budi",
    "nim": "987654321",
    "nilai_uts": [75],
    "nilai_uas": [85],
    "nilai_tugas": [80]
}
mahasiswa3 = {
    "nama": "Cindy",
    "nim": "456789123",
    "nilai_uts": [90],
    "nilai_uas": [95],
    "nilai_tugas": [100]
}
mahasiswa4 = {
    "nama": "Diana",
    "nim": "321654987",
    "nilai_uts": [70],
    "nilai_uas": [75],
    "nilai_tugas": [80]
}
mahasiswa5 = {
    "nama": "Eko",
    "nim": "654321789",
    "nilai_uts": [85],
    "nilai_uas": [80],
    "nilai_tugas": [90]
}

# Gabungkan ke dalam list
daftar_mahasiswa = [mahasiswa1, mahasiswa2, mahasiswa3, mahasiswa4, mahasiswa5]

# Hitung nilai akhir dan tentukan grade
print("Daftar Nilai Mahasiswa")
print("="*70)
print(f"{'Nama'} {'NIM'} {'UTS'} {'UAS'} {'Tugas'} {'Akhir'} {'Grade'}")
print("-"*70)

nilai_akhir_semua = {}

for mhs in daftar_mahasiswa:
    nilai_akhir = (mhs["nilai_uts"][0] * 0.3) + (mhs["nilai_uas"][0] * 0.4) + (mhs["nilai_tugas"][0] * 0.3)
    
    # Tentukan grade
    if nilai_akhir >= 80:
        grade = "A"
    elif nilai_akhir >= 70:
        grade = "B"
    elif nilai_akhir >= 60:
        grade = "C"
    elif nilai_akhir >= 50:
        grade = "D"
    else:
        grade = "E"
    
    # Simpan nilai akhir untuk cari tertinggi/terendah
    nilai_akhir_semua[mhs["nama"]] = nilai_akhir
    
    # Tampilkan data
    print(f"{mhs['nama']} {mhs['nim']} {mhs['nilai_uts'][0]} {mhs['nilai_uas'][0]} {mhs['nilai_tugas'][0]} {nilai_akhir} {grade}")

print("="*70)

# Cari mahasiswa dengan nilai akhir tertinggi dan terendah
tertinggi = max(nilai_akhir_semua, key=nilai_akhir_semua.get)
terendah = min(nilai_akhir_semua, key=nilai_akhir_semua.get)

print(f"Mahasiswa dengan nilai tertinggi: {tertinggi} ({nilai_akhir_semua[tertinggi]:.2f})")
print(f"Mahasiswa dengan nilai terendah: {terendah} ({nilai_akhir_semua[terendah]:.2f})")
