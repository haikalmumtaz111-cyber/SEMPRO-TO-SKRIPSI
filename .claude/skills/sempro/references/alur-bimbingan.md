# Alur Bimbingan Keputusan

User belum paham istilah metodologi dan waktunya mepet. Tugas mode bimbing: bikin user paham cukup untuk memilih dan cukup untuk menjelaskan pilihannya ke dosen, lalu kunci keputusannya. Bukan kuliah metodologi.

## Pola tiap keputusan

1. Jelaskan pakai contoh jemaah dulu, maksimal 5 kalimat. Istilah ilmiah disebut setelah contohnya dipahami.
2. Kasih 2 sampai 3 pilihan, masing-masing dengan untung dan rugi satu baris.
3. Kasih rekomendasi dan alasannya, termasuk kaitannya dengan aturan FDK.
4. Minta user memilih. Kalau user bilang "terserah", pakai rekomendasi, catat bahwa itu rekomendasi yang disetujui user.
5. Tulis hasilnya di `<tema>/riset/keputusan.md` dan lanjut ke keputusan berikutnya.

Urutannya 1, 2, 3, 4 karena saling bergantung. Pilihan Y menentukan bentuk pertanyaan. Bentuk pertanyaan menentukan butuh skenario atau tidak. Jumlah pertanyaan menentukan uji validitas dan reliabilitas.

## Keputusan 1: Y mengukur apa

Contoh. Pak Budi ngecek aplikasi, estimasi berangkatnya mundur dari 2025 ke 2030. Dari Pak Budi bisa ditanya tiga hal berbeda:

- **Kemungkinan** (*likelihood of use*): "Kalau ngalamin itu, seberapa mungkin Bapak datang ke kantor?" Jawabannya skala, misalnya 1 sangat tidak mungkin sampai 5 sangat mungkin.
- **Preferensi**: "Bapak lebih suka nanya ke kantor atau cukup lewat aplikasi?" Membandingkan dua kanal.
- **Perilaku nyata** (*actual use*): "Dalam enam bulan terakhir, Bapak pernah datang ke kantor buat nanya soal ini?" Jawabannya pernah atau tidak, atau berapa kali.

Catatan untuk rekomendasi:
- Kemungkinan paling dekat dengan cara ukur Ebbers dkk. (2016) dan gampang dibuat skala bertingkat, cocok dengan analisis yang diminta FDK.
- Preferensi butuh pertanyaan yang benar-benar membandingkan kanal.
- Perilaku nyata paling kuat buktinya, tapi responden yang belum pernah ngalamin masalah jadi susah dijawab, dan jawaban ya/tidak butuh analisis lain (misalnya regresi logistik).
- Nama Y wajib sama dengan yang ditanyakan.

## Keputusan 2: skenario atau pengalaman nyata

Contoh.
- **Skenario** (*vignette*): kuesioner nyodorin cerita karangan peneliti. "Bayangkan Bapak melihat estimasi keberangkatan berubah dan ingin tahu penyebabnya." Lalu responden menilai seberapa rumit dan seberapa mungkin datang ke kantor. Semua responden dapat cerita yang sama.
- **Pengalaman nyata**: "Ingat terakhir kali Bapak butuh penjelasan soal informasi haji." Lalu responden menilai pengalaman itu sendiri.

Untung rugi ada di `<tema>/riset/handoff.md` bagian X (nomor 38 sampai 41). Ringkasnya, skenario bikin situasi seragam dan bisa dijawab orang yang belum pernah ngalamin, tapi jawabannya hipotetis. Pengalaman nyata lebih dekat ke kenyataan, tapi pengalaman tiap orang beda dan ada yang belum pernah ngalamin.

Kalau pakai lebih dari satu skenario untuk orang yang sama, jawabannya tidak boleh dianalisis seolah dari orang berbeda. Ini menambah rumit analisis, jadi untuk target Kamis, satu skenario atau pengalaman nyata lebih realistis.

## Keputusan 3: satu pertanyaan atau beberapa pertanyaan per variabel

Contoh. Mengukur "seberapa rumit masalahnya menurut Pak Budi":
- **Satu butir**: "Seberapa sulit persoalan ini dipahami?" Selesai.
- **Beberapa butir** (multi-item): "Persoalan ini melibatkan banyak aturan", "Saya butuh penjelasan lebih dari satu kali", "Saya sulit menyimpulkan sendiri", dan seterusnya. Skornya digabung.

Kaitan dengan FDK: panduan meminta uji validitas dengan SPSS dan reliabilitas dengan Cronbach's alpha (`references/fdk.md`, langkah penelitian g). Cronbach butuh beberapa butir. Satu butir tidak bisa diuji Cronbach, dan penguji yang berpegang ke panduan hampir pasti menanyakannya.

Syarat multi-item: tiap butir harus punya dasar dari teori atau skala yang sudah ada. Cari dulu skala kompleksitas tugas yang sudah dipakai penelitian lain (mulai dari rujukan di handoff bagian VII, lalu `scripts/openalex.py cari`). Kalau sumber butir tidak ketemu, bilang terus terang ke user bahwa modelnya belum siap dan bahas rencana B. Jangan bikin butir dari intuisi.

## Keputusan 4: populasi dan akses

Posisi sekarang: user bilang "jemaah haji yang sudah terdaftar". Rinci dengan pertanyaan satu per satu:
1. Wilayahnya mana? (Kabupaten Bandung, sesuai lokasi magang?)
2. Statusnya apa? Sudah dapat nomor porsi dan masih menunggu berangkat?
3. Lewat jalur apa kuesioner sampai ke mereka? Izin kantor, disebar petugas, grup KBIH, atau lainnya.
4. Kira-kira berapa jumlah populasinya dan dari mana angkanya? Tanpa angka populasi, Slovin dan Taro Yamane tidak bisa dihitung. Kalau angkanya belum ada, tulis `[PERLU DATA: jumlah populasi]` dan beri tahu user cara memintanya.

Ingatkan risiko di handoff nomor 44: kalau responden cuma orang yang lagi datang ke kantor, semuanya sudah memilih tatap muka, jadi variasi Y sempit.

## Kalau user mepet waktu

Boleh mempercepat dengan memberi satu paket rekomendasi lengkap untuk keempat keputusan, lalu minta user menyetujui atau mengubah satu per satu. Tetap jelaskan tiap butir paket itu pakai contoh, karena user harus bisa mempertahankannya di depan dosen.
