import React, { useState } from 'react';
import { Play, Calendar, MapPin, Users, X, Images } from 'lucide-react';

type MediaItem = {
  id: number;
  type: string;
  images?: string[];
  url?: string;
  title: string;
  category: string;
  date: string;
  time?: string;
  location: string;
  participants: string;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'social', name: 'Kegiatan Sosial' },
    { id: 'religious', name: 'Kegiatan Keagamaan' },
    { id: 'education', name: 'Pendidikan' },
    { id: 'sports', name: 'Olahraga' },
    { id: 'events', name: 'Acara Khusus' }
  ];

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      type: 'image',
      images: ['Gallery/img-event1.jpg'],
      title: 'Rekreasi Muda Mudi Brangsong',
      category: 'Anjangsana',
      date: 'Minggu, 6 Maret 2022',
      time: '06:00 - 23:00 WIB',
      location: 'Jogja (Pantai Drini, Malioboro)',
      participants: '50+'
    },
    {
      id: 2,
      type: 'image',
      images: ['Gallery/img-event2.jpg', 'Gallery/img-event2-1.jpg','Gallery/img-event2-2.jpg','Gallery/img-event2-3.jpg','Gallery/img-event2-4.jpg'],
      title: 'Badminton Championship',
      category: 'sports',
      date: '19 November 2023',
      time: '14:00 - 17:00 WIB',
      location: 'Gor Fandamel Kaliwungu',
      participants: '30+'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Bimbingan Belajar Gratis',
      category: 'education',
      date: '8 Maret 2024',
      location: 'Balai Desa',
      participants: '50+ Siswa'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Turnamen Futsal Antar RT',
      category: 'sports',
      date: '5 Maret 2024',
      location: 'Lapangan Desa',
      participants: '16 Tim'
    },
    {
      id: 5,
      type: 'video',
      url: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Pelatihan Kewirausahaan',
      category: 'education',
      date: '1 Maret 2024',
      location: 'Aula Desa',
      participants: '75+ Peserta'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.pexels.com/photos/3397989/pexels-photo-3397989.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Tadarus Al-Quran',
      category: 'religious',
      date: '25 Februari 2024',
      location: 'Masjid Al-Ikhlas',
      participants: '150+ Jamaah'
    },
    {
      id: 7,
      type: 'image',
      url: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Gotong Royong Bersih Desa',
      category: 'social',
      date: '20 Februari 2024',
      location: 'Seluruh Desa Brangsong',
      participants: '300+ Warga'
    },
    {
      id: 8,
      type: 'video',
      url: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Senam Sehat Bersama',
      category: 'sports',
      date: '18 Februari 2024',
      location: 'Alun-alun Desa',
      participants: '200+ Peserta'
    },
    {
      id: 9,
      type: 'image',
      url: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Peringatan HUT RI ke-78',
      category: 'events',
      date: '17 Agustus 2023',
      location: 'Lapangan Desa',
      participants: '500+ Warga'
    },
    {
      id: 10,
      type: 'video',
      url: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Festival Budaya Lokal',
      category: 'events',
      date: '10 Desember 2023',
      location: 'Pendopo Desa',
      participants: '400+ Pengunjung'
    },
    {
      id: 11,
      type: 'image',
      url: 'https://images.pexels.com/photos/2325304/pexels-photo-2325304.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Santunan Anak Yatim',
      category: 'social',
      date: '15 Desember 2023',
      location: 'Balai Desa',
      participants: '50+ Anak Yatim'
    },
    {
      id: 12,
      type: 'image',
      url: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Pelatihan Digital Marketing',
      category: 'education',
      date: '5 Januari 2024',
      location: 'Lab Komputer Desa',
      participants: '30+ Peserta'
    }
  ];

  const filteredMedia = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory);

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
    setActiveImageIdx(0);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeri Dokumentasi</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Dokumentasi foto dan video kegiatan Muda Mudi Brangsong yang menginspirasi 
              dan memberikan dampak positif bagi masyarakat
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
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
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMedia.map((media: MediaItem) => (
              <div
                key={media.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => openModal(media)}
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={media.images ? media.images[0] : media.url}
                    alt={media.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Video Play Icon */}
                  {media.type === 'video' && (
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <Play className="w-5 h-5 text-white ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Overlay Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-semibold text-sm mb-2 line-clamp-2">{media.title}</h3>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{media.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{media.participants}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMedia.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Dokumentasi</h3>
              <p className="text-gray-600">Dokumentasi untuk kategori ini sedang dalam proses.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative flex items-center justify-center" style={{ minHeight: 300 }}>
              {/* Tombol Prev */}
              {selectedMedia.images && selectedMedia.images.length > 1 && (
                <button
                  onClick={() => setActiveImageIdx((prev) => (prev === 0 ? selectedMedia.images!.length - 1 : prev - 1))}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                >
                  &#8592;
                </button>
              )}
              {/* Gambar */}
              <img
                src={selectedMedia.images ? selectedMedia.images[activeImageIdx] : selectedMedia.url}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
              {/* Tombol Next */}
              {selectedMedia.images && selectedMedia.images.length > 1 && (
                <button
                  onClick={() => setActiveImageIdx((prev) => (prev === selectedMedia.images!.length - 1 ? 0 : prev + 1))}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-10 h-10 flex items-center justify-center z-10"
                >
                  &#8594;
                </button>
              )}
              {/* Tombol Close */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              {selectedMedia.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    <Play className="w-10 h-10 text-white ml-1" />
                  </button>
                </div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">{selectedMedia.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span>{selectedMedia.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <span>{selectedMedia.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>{selectedMedia.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary-600" />
                  <span>{selectedMedia.participants}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Dokumentasi dalam Angka</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Foto Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Video Dokumentasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Album Kegiatan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">8</div>
              <div className="text-gray-600">Tahun Dokumentasi</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;