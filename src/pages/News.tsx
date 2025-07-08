import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight, Search, Clock } from 'lucide-react';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Semua Berita' },
    { id: 'activities', name: 'Kegiatan' },
    { id: 'achievements', name: 'Prestasi' },
    { id: 'announcements', name: 'Pengumuman' },
    { id: 'youth-tips', name: 'Tips Kepemudaan' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Muda Mudi Brangsong Raih Penghargaan Karang Taruna Terbaik 2024',
      excerpt: 'Organisasi kepemudaan Muda Mudi Brangsong berhasil meraih penghargaan sebagai Karang Taruna terbaik tingkat kabupaten dari Pemerintah Kabupaten Kendal.',
      content: `Prestasi membanggakan kembali diraih oleh Muda Mudi Brangsong. Pada acara peringatan Hari Sumpah Pemuda ke-95, organisasi kepemudaan ini berhasil meraih penghargaan sebagai Karang Taruna terbaik tingkat Kabupaten Kendal.

      Penghargaan ini diberikan berdasarkan penilaian terhadap berbagai aspek, mulai dari program kerja yang inovatif, partisipasi aktif dalam pembangunan desa, hingga kontribusi nyata dalam memberdayakan masyarakat. Selama tahun 2023, Muda Mudi Brangsong telah menyelenggarakan lebih dari 50 program kegiatan yang meliputi bidang sosial, pendidikan, keagamaan, dan olahraga.

      "Penghargaan ini adalah hasil kerja keras seluruh anggota dan dukungan penuh dari masyarakat Brangsong. Kami berkomitmen untuk terus memberikan yang terbaik," ujar Ahmad Fauzi, Ketua Umum Muda Mudi Brangsong.

      Beberapa program unggulan yang menjadi penilaian antara lain program bimbingan belajar gratis untuk anak-anak kurang mampu, bakti sosial bulanan, pengajian rutin, dan turnamen olahraga antar RT yang berhasil meningkatkan keharmonisan masyarakat.

      Ke depannya, Muda Mudi Brangsong berencana untuk mengembangkan program-program yang lebih inovatif dan berkelanjutan, termasuk program digitalisasi UMKM dan pelatihan keterampilan berbasis teknologi untuk para pemuda.`,
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Tim Redaksi',
      date: '15 Maret 2024',
      category: 'achievements',
      readTime: '3 menit'
    },
    {
      id: 2,
      title: 'Program Bimbingan Belajar Gratis Capai 100 Siswa Penerima Manfaat',
      excerpt: 'Program bimbingan belajar gratis yang diinisiasi Muda Mudi Brangsong telah membantu 100 siswa dari keluarga kurang mampu untuk meningkatkan prestasi akademik mereka.',
      content: `Program bimbingan belajar gratis yang diselenggarakan oleh Muda Mudi Brangsong telah mencapai milestone penting dengan melayani 100 siswa dari keluarga kurang mampu di Desa Brangsong dan sekitarnya.

      Program yang dimulai sejak tahun 2022 ini menghadirkan tenaga pengajar sukarela dari kalangan mahasiswa dan fresh graduate yang peduli terhadap pendidikan anak-anak. Kegiatan pembelajaran dilaksanakan setiap hari Senin dan Rabu di Balai Desa Brangsong dengan materi pelajaran sesuai kurikulum sekolah.

      "Kami melihat banyak anak-anak yang memiliki potensi besar namun terkendala biaya untuk les tambahan. Program ini hadir untuk menjembati kesenjangan tersebut," kata Siti Nurhaliza, Koordinator Program Pendidikan.

      Dampak positif program ini sudah mulai terlihat. Berdasarkan evaluasi semester ganjil 2023/2024, 85% siswa peserta program mengalami peningkatan nilai rata-rata sebesar 15-20 poin. Bahkan, 15 siswa berhasil masuk dalam ranking 10 besar di kelasnya masing-masing.

      Para orang tua juga memberikan apresiasi tinggi terhadap program ini. "Alhamdulillah, anak saya yang tadinya kesulitan dengan matematika, sekarang sudah mulai percaya diri dan nilainya meningkat," ungkap Ibu Sari, salah satu wali murid.

      Untuk tahun 2024, Muda Mudi Brangsong berencana menambah kelas bahasa Inggris dan komputer dasar untuk mempersiapkan anak-anak menghadapi era digital.`,
      image: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Dewi Sartika',
      date: '10 Maret 2024',
      category: 'activities',
      readTime: '4 menit'
    },
    {
      id: 3,
      title: 'Tips Membangun Karakter Kepemimpinan untuk Generasi Muda',
      excerpt: 'Kepemimpinan adalah keterampilan yang dapat dipelajari dan dikembangkan. Berikut tips praktis untuk membangun karakter kepemimpinan yang kuat sejak dini.',
      content: `Generasi muda adalah aset berharga bangsa yang akan memimpin di masa depan. Oleh karena itu, penting untuk membangun karakter kepemimpinan sejak dini. Berikut adalah beberapa tips praktis yang dapat diterapkan:

      1. Mulai dari Diri Sendiri
      Kepemimpinan dimulai dari kemampuan memimpin diri sendiri. Kembangkan disiplin diri, tanggung jawab, dan integritas dalam setiap tindakan. Seorang pemimpin yang baik adalah mereka yang dapat menjadi teladan bagi orang lain.

      2. Aktif dalam Organisasi
      Bergabunglah dengan organisasi di sekolah, kampus, atau masyarakat. Organisasi seperti Muda Mudi Brangsong memberikan wadah yang tepat untuk mengasah kemampuan kepemimpinan melalui berbagai kegiatan dan tanggung jawab.

      3. Belajar Berkomunikasi Efektif
      Komunikasi adalah kunci utama kepemimpinan. Latih kemampuan berbicara di depan umum, mendengarkan dengan empati, dan menyampaikan ide dengan jelas dan persuasif.

      4. Kembangkan Empati dan EQ
      Pemimpin yang baik mampu memahami perasaan dan kebutuhan orang lain. Kembangkan kecerdasan emosional untuk dapat membangun hubungan yang baik dengan tim.

      5. Berani Mengambil Inisiatif
      Jangan menunggu perintah untuk berbuat baik. Ambil inisiatif untuk memulai program atau kegiatan yang bermanfaat bagi lingkungan sekitar.

      6. Belajar dari Kegagalan
      Kegagalan adalah bagian dari proses pembelajaran. Jadikan setiap kegagalan sebagai pelajaran berharga untuk tumbuh menjadi pemimpin yang lebih baik.

      Ingatlah bahwa kepemimpinan bukan tentang posisi atau jabatan, tetapi tentang kemampuan untuk mempengaruhi dan menginspirasi orang lain untuk mencapai tujuan bersama.`,
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Muhammad Rizki',
      date: '5 Maret 2024',
      category: 'youth-tips',
      readTime: '5 menit'
    },
    {
      id: 4,
      title: 'Pengumuman: Pendaftaran Program Magang Kerja untuk Pemuda Desa',
      excerpt: 'Muda Mudi Brangsong membuka kesempatan program magang kerja di berbagai bidang untuk pemuda desa yang ingin mengembangkan keterampilan dan pengalaman kerja.',
      content: `Muda Mudi Brangsong dengan bangga mengumumkan pembukaan program magang kerja untuk pemuda Desa Brangsong dan sekitarnya. Program ini merupakan hasil kerjasama dengan berbagai mitra perusahaan dan instansi yang peduli terhadap pengembangan sumber daya manusia pemuda.

      Bidang Magang yang Tersedia:
      1. Administrasi Perkantoran
      2. Digital Marketing dan Media Sosial
      3. Desain Grafis dan Multimedia
      4. Keuangan dan Akuntansi
      5. Teknologi Informasi
      6. Pertanian Modern dan Agribisnis

      Persyaratan:
      - Usia 18-25 tahun
      - Pendidikan minimal SMA/SMK
      - Memiliki motivasi tinggi untuk belajar
      - Berkomitmen mengikuti program selama 3-6 bulan
      - Warga Desa Brangsong dan sekitarnya
      - Lulus seleksi wawancara

      Fasilitas yang Diberikan:
      - Pelatihan dan mentoring dari profesional berpengalaman
      - Sertifikat resmi setelah menyelesaikan program
      - Uang saku selama magang
      - Kesempatan untuk direkrut sebagai karyawan tetap
      - Networking dengan profesional di bidangnya

      Cara Pendaftaran:
      1. Download formulir di website resmi atau ambil di sekretariat
      2. Lengkapi dokumen persyaratan
      3. Submit aplikasi paling lambat 30 Maret 2024
      4. Ikuti tes seleksi pada 5-7 April 2024
      5. Pengumuman hasil 10 April 2024

      Program ini merupakan upaya nyata Muda Mudi Brangsong untuk mempersiapkan generasi muda yang siap menghadapi tantangan dunia kerja. Jangan lewatkan kesempatan emas ini!

      Informasi lebih lanjut dapat menghubungi:
      - Sekretariat Muda Mudi Brangsong
      - WhatsApp: 0812-3456-7890
      - Email: info@mudamudibrangsong.org`,
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Admin',
      date: '1 Maret 2024',
      category: 'announcements',
      readTime: '3 menit'
    },
    {
      id: 5,
      title: 'Sukses Bakti Sosial Ramadhan: 500 Paket Sembako Terdistribusi',
      excerpt: 'Kegiatan bakti sosial dalam rangka menyambut bulan Ramadhan berhasil mendistribusikan 500 paket sembako kepada masyarakat kurang mampu di 5 desa.',
      content: `Kegiatan bakti sosial yang diselenggarakan oleh Muda Mudi Brangsong dalam rangka menyambut bulan suci Ramadhan telah berhasil dilaksanakan dengan penuh sukacita. Acara yang berlangsung pada Sabtu, 25 Februari 2024, berhasil mendistribusikan 500 paket sembako kepada masyarakat kurang mampu di 5 desa di Kecamatan Brangsong.

      Kegiatan ini dimulai sejak pukul 08.00 WIB dengan persiapan packing sembako di Balai Desa Brangsong. Lebih dari 100 relawan dari berbagai kalangan turut bergotong royong mempersiapkan paket-paket bantuan yang berisi beras, minyak goreng, gula, teh, mi instan, dan kebutuhan pokok lainnya.

      "Alhamdulillah, antusiasme masyarakat untuk membantu sesama sangat tinggi. Tidak hanya anggota Muda Mudi Brangsong, tetapi juga ibu-ibu PKK, bapak-bapak RW, dan para pemuda dari organisasi lain turut membantu," kata Ahmad Fauzi, Ketua Umum Muda Mudi Brangsong.

      Proses distribusi dilakukan secara door to door untuk memastikan bantuan tepat sasaran. Tim relawan terbagi menjadi 10 kelompok yang menyebar ke berbagai RT di 5 desa, yaitu Desa Brangsong, Desa Kaliwungu, Desa Protomulyo, Desa Kangkung, dan Desa Plantungan.

      Para penerima bantuan menyambut kedatangan relawan dengan hangat dan penuh rasa syukur. "Terima kasih banyak untuk anak-anak muda yang peduli dengan kami. Semoga Allah membalas kebaikan kalian," ungkap Nenek Siti (65), salah satu penerima bantuan dari RT 03 Desa Brangsong.

      Bantuan sembako ini merupakan hasil kolaborasi dengan berbagai pihak, termasuk donasi dari masyarakat, dukungan dari pengusaha lokal, dan kerjasama dengan BAZNAS Kabupaten Kendal. Total dana yang terhimpun mencapai Rp 75 juta.

      Kegiatan bakti sosial Ramadhan ini direncanakan akan menjadi program rutin tahunan dengan cakupan yang lebih luas. Untuk tahun depan, target distribusi adalah 1000 paket sembako dengan menambah kerjasama dengan instansi dan perusahaan lainnya.`,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Abdul Rahman',
      date: '26 Februari 2024',
      category: 'activities',
      readTime: '4 menit'
    },
    {
      id: 6,
      title: '5 Strategi Efektif Mengembangkan Jiwa Sosial di Kalangan Muda',
      excerpt: 'Kepedulian sosial perlu ditanamkan sejak dini. Simak 5 strategi efektif untuk mengembangkan jiwa sosial dan empati di kalangan generasi muda.',
      content: `Jiwa sosial dan kepedulian terhadap sesama merupakan nilai-nilai penting yang harus dimiliki oleh setiap individu, terutama generasi muda. Di era yang semakin individualistis, penting untuk mengembangkan empati dan kesadaran sosial. Berikut adalah 5 strategi efektif:

      1. Mulai dari Lingkungan Terdekat
      Kepedulian sosial dimulai dari lingkungan terdekat. Mulailah dengan membantu tetangga, teman, atau keluarga yang membutuhkan. Tindakan kecil seperti membantu orang tua berbelanja atau mengajari adik belajar dapat menjadi langkah awal yang bermakna.

      2. Bergabung dengan Organisasi Sosial
      Organisasi seperti Muda Mudi Brangsong memberikan wadah yang tepat untuk mengembangkan jiwa sosial. Melalui berbagai kegiatan bakti sosial, Anda dapat belajar langsung bagaimana membantu masyarakat yang membutuhkan.

      3. Volunteer di Berbagai Kegiatan
      Menjadi relawan dalam berbagai kegiatan sosial akan membuka mata terhadap realitas kehidupan masyarakat. Pengalaman langsung ini akan menumbuhkan empati dan kesadaran untuk berbagi dengan sesama.

      4. Manfaatkan Media Sosial untuk Kebaikan
      Di era digital, media sosial dapat menjadi alat yang powerful untuk menyebarkan kebaikan. Gunakan platform ini untuk menggalang dana, menyebarkan informasi bantuan, atau mengajak orang lain untuk peduli terhadap isu-isu sosial.

      5. Edukasi Diri tentang Isu-Isu Sosial
      Perbanyak membaca dan belajar tentang berbagai isu sosial yang ada di masyarakat. Dengan memahami akar permasalahan, Anda dapat memberikan solusi yang lebih tepat dan berkelanjutan.

      Tips Tambahan:
      - Mulai dari hal kecil dan konsisten
      - Libatkan teman-teman untuk berbuat bersama
      - Dokumentasikan kegiatan untuk menginspirasi orang lain
      - Jangan ragu untuk mengambil inisiatif
      - Selalu bersyukur atas kemampuan untuk membantu orang lain

      Ingatlah bahwa setiap tindakan kebaikan, sekecil apapun, memiliki dampak yang berarti. Mulailah dari sekarang dan jadilah bagian dari perubahan positif di masyarakat.`,
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600',
      author: 'Fatimah Zahra',
      date: '20 Februari 2024',
      category: 'youth-tips',
      readTime: '4 menit'
    }
  ];

  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const openArticle = (article) => {
    setSelectedArticle(article);
  };

  const closeArticle = () => {
    setSelectedArticle(null);
  };

  const getCategoryName = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  };

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita & Artikel</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Ikuti perkembangan terbaru Muda Mudi Brangsong dan artikel inspiratif 
              untuk generasi muda yang aktif dan peduli
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                  onClick={() => openArticle(article)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {getCategoryName(article.category)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-primary-900 mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                      <span>Baca selengkapnya</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Artikel Tidak Ditemukan</h3>
              <p className="text-gray-600">Coba ubah kata kunci pencarian atau kategori yang dipilih.</p>
            </div>
          )}
        </div>
      </section> */}

      {/* Article Modal */}
      {/* {selectedArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getCategoryName(selectedArticle.category)}
                  </span>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedArticle.date}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{selectedArticle.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={closeArticle}
                  className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="p-6">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <h1 className="text-3xl font-bold text-primary-900 mb-4">
                  {selectedArticle.title}
                </h1>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>Oleh {selectedArticle.author}</span>
                  </div>
                </div>
                
                <div className="prose prose-lg max-w-none">
                  {selectedArticle.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )} */}

      {/* Newsletter Subscription */}
      {/* <section className="py-16 bg-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Jangan Lewatkan Berita Terbaru
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Berlangganan newsletter kami untuk mendapatkan artikel dan berita terbaru
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:outline-none"
            />
            <button className="bg-secondary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary-600 transition-colors">
              Berlangganan
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default News;