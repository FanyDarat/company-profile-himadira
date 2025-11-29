function showDivisiDetail(divisiId) {
            const container = document.getElementById('divisi-detail-container');
            let detailHTML = '';

            const divisiData = {
                'internal': {
                    logo: 'images/Internal.png',
                    photo: 'images/Internal.JPG',
                    title: 'Internal',
                    description: 'Departemen Internal bertanggung jawab untuk menjaga keharmonisan dan koordinasi internal keluarga mahasiswa melalui pengelolaan komunikasi, apresiasi, dan pola pengadvokasian keluarga mahasiswa.',
                    proker: ['DIRA Talk', 'DIRA Proud', 'Lapor DIRA', 'Dies Natalis RPLA', 'Rantai Komando'],
                    link: 'https://www.instagram.com/p/DPioL2JExBZ/?img_index=1'
                },
                'eksternal': {
                    logo: 'images/Eksternal.png',
                    photo: 'images/Eksternal.JPG',
                    title: 'External',
                    description: 'Departemen Eksternal berperan menjalin hubungan strategis dengan pihak luar, termasuk industri, alumni, masyarakat, dan lembaga serupa melalui kolaborasi, pengabdian masyarakat, dan kajian isu strategis.',
                    proker: ['Studi Banding', 'Kunjungan Industri', 'Bina Desa Teknologi', 'DIRA Mengabdi', 'Kajian Isu Strategis', 'PPK Ormawa'],
                    link: 'https://www.instagram.com/p/DPioID9ExyS/?img_index=1'
                },
                'kaderisasi': {
                    logo: 'images/Kaderisasi.png',
                    photo: 'images/Kaderisasi.JPG',
                    title: 'Kaderisasi',
                    description: 'Departemen Kaderisasi fokus pada pembinaan dan pengembangan keluarga mahasiswa baru melalui pada kaderisasi, peningkatan kompetensi kepemimpinan dan penguatan solidaritas antar keluarga mahasiswa.',
                    proker: ['Welcoming Party', 'Kaderisasi ONION', 'Upgrading Pengurus', 'Traning Manajemen Waktu dan Konflik', 'Penjahiman'],
                    link: 'https://www.instagram.com/p/DPioDr3Ew6o/?img_index=1'
                },
                'ppa': {
                    logo: 'images/PPA.png',
                    photo: 'images/PPA.JPG',
                    title: 'Pengembangan Potensi Akademik',
                    description: 'Departemen Pengembangan Potensi Akademik mendukung pengembangan kamampuan akademik keluarga mahasiswa melalui pendampingan, kompetisi, dan program inovasi berbasis teknologi untuk menciptakan keluarga mahasiswa yang unggul dan adaptif.',
                    proker: ['DIRA Berkarya', 'Responsi', 'DIRA Pintar', 'Coding Challenges', 'SECOMP (Software Engineering Competition)'],
                    link: 'https://www.instagram.com/p/DPin_nWEyuf/?img_index=1'
                },
                'ekraf': {
                    logo: 'images/Ekraf.png',
                    photo: 'images/Ekraf.JPG',
                    title: 'Ekonomi Kreatif',
                    description: 'Departemen Ekonomi Kreatif mendorong jiwa kewirausahaan keluarga mahasiswa melalui training presentasi bisnis, pengelolaan usaha kreatif, dan penyediaan peluang usaha berbasis kebutuhan keluarga mahasiswa.',
                    proker: ['DIRA Store', 'Training Presentasi Bisnis', 'Makan Murah DIRA'],
                    link: 'https://www.instagram.com/p/DPin6unk8-t/?img_index=1'
                },
                'orsenbud': {
                    logo: 'images/Orsenbud.png',
                    photo: 'images/Orsenbud.JPG',
                    title: 'Olahraga Seni dan Budaya',
                    description: 'Departemen Olahraga Seni dan Budaya memfasilitasi pengembangan minat dan bakat keluarga mahasiswa dalam bidang olahraga seni, dan budaya melalui kegiatan yang kreatif dan inklusif untuk mempererat kekeluargaan.',
                    proker: ['Fun Match Olahraga', 'DIRA Move Night', 'DIRA Running', 'DIRA Berbakat'],
                    link: 'https://www.instagram.com/p/DPinz52k98k/?img_index=1'
                },
                'administrasi': {
                    logo: 'images/Administrasi.png',
                    photo: 'images/Administrasi.JPG',
                    title: 'Administrasi',
                    description: 'Menyelenggarakan pengarsipan dan pengelolaan terhadap seluruh administrasi himpunan.',
                    link: 'https://www.instagram.com/p/DPiopNuky3Y/?img_index=1'
                },
                'keuangan': {
                    logo: 'images/Keuangan.png',
                    photo: 'images/Keuangan.JPG',
                    title: 'Keuangan',
                    description: 'Menyelenggarakan perencanaan dan pengelolaan terhadap keuangan himpunan',
                    link: 'https://www.instagram.com/p/DPiog7lk7sP/?img_index=1'
                },
                'minfo': {
                    logo: 'images/MINFO.png',
                    photo: 'images/MINFO.JPG',
                    title: 'Media Informasi',
                    description: 'Menyediakan akses infomasi dan pengelolaan media sosial himpunan',
                    link: 'https://www.instagram.com/p/DPioUXek7iD/?img_index=1'
                },
                'mo': {
                    logo: 'images/MO.png',
                    photo: 'images/MO.JPG',
                    title: 'Manajerial Organisasi',
                    description: 'Melakukan pengelolaan dan monitoring kepada aparetur himpunan.',
                    link: 'https://www.instagram.com/p/DPiocgzk0Ng/?img_index=1'
                }
            };

            const divisi = divisiData[divisiId];
            
           if (divisi) {
            detailHTML = `
                <div class="divisi-box">
                    <img src="${divisi.logo}" class="divisi-logo" alt="Logo ${divisi.title}">
                    <img src="${divisi.photo}" class="divisi-photo" alt="Foto ${divisi.title}">
                    <h2>${divisi.title}</h2>
                    <p>${divisi.description}</p>
                    ${divisi.proker ? `
                        <h3>Program Kerja</h3>
                        ${divisi.proker.map(item => `<h5>${item}</h5>`).join('')}
                    ` : ''}
                    <div class="button-container">
                        ${divisi.link ? `<button class="instagram-btn" onclick="window.open('${divisi.link}', '_blank')">Lihat Instagram</button>` : ''}
                        <button class="close-btn" onclick="closeDivisiDetail()">Tutup</button>
                    </div>
                </div>
            `;
        }

            container.innerHTML = detailHTML;
            container.scrollIntoView({ behavior: 'smooth' });
        }

        function closeDivisiDetail() {
            document.getElementById('divisi-detail-container').innerHTML = '';
        }