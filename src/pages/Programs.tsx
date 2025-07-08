import React from 'react';
import { 
  Book, 
  Heart, 
  Users, 
  Calendar,
  Clock,
  MapPin,
  Award,
  Zap,
  Target,
  Gift
} from 'lucide-react';

const Programs = () => {
  const programCategories = [
    {
      icon: Heart,
      title: 'Program Sosial',
      color: 'from-red-500 to-pink-500',
      programs: [
        {
          name: 'Bakti Sosial Bulanan',
          schedule: 'Setiap Minggu Ke-3',
          description: 'Program pemberian bantuan kepada masyarakat kurang mampu',
          image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Bersih Lingkungan',
          schedule: 'Setiap Sabtu Pagi',
          description: 'Kegiatan gotong royong membersihkan lingkungan sekitar',
          image: 'https://images.pexels.com/photos/2422290/pexels-photo-2422290.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      icon: Book,
      title: 'Program Keagamaan',
      color: 'from-green-500 to-emerald-500',
      programs: [
        {
          name: 'Pengajian Rutin',
          schedule: 'Setiap Kamis Malam',
          description: 'Kajian agama untuk meningkatkan spiritualitas masyarakat',
          image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Tadarus Ramadhan',
          schedule: 'Bulan Ramadhan',
          description: 'Kegiatan tadarus Al-Quran bersama selama bulan suci',
          image: 'https://images.pexels.com/photos/3397989/pexels-photo-3397989.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      icon: Users,
      title: 'Program Pendidikan',
      color: 'from-blue-500 to-cyan-500',
      programs: [
        {
          name: 'Bimbingan Belajar',
          schedule: 'Senin & Rabu',
          description: 'Program les gratis untuk anak-anak kurang mampu',
          image: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Pelatihan Keterampilan',
          schedule: 'Setiap Bulan',
          description: 'Workshop berbagai keterampilan untuk meningkatkan kemampuan',
          image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      icon: Award,
      title: 'Program Olahraga',
      color: 'from-orange-500 to-red-500',
      programs: [
        {
          name: 'Futsal Tournament',
          schedule: 'Setiap 3 Bulan',
          description: 'Turnamen futsal antar kampung untuk mempererat persaudaraan',
          image: 'https://images.pexels.com/photos/274422/pexels-photo-274422.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Senam Sehat',
          schedule: 'Setiap Minggu',
          description: 'Kegiatan senam bersama untuk menjaga kesehatan masyarakat',
          image: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  const upcomingEvents = [
    {
      title: 'Pengajian Akbar 17 Ramadhan',
      date: '25 April 2024',
      time: '19:00 WIB',
      location: 'Masjid Agung Brangsong',
      category: 'Keagamaan',
      participants: '500+ Jamaah',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Bakti Sosial Ramadhan',
      date: '20 April 2024',
      time: '08:00 WIB',
      location: 'Desa Brangsong',
      category: 'Sosial',
      participants: '100+ Relawan',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Pelatihan Kewirausahaan',
      date: '28 April 2024',
      time: '09:00 WIB',
      location: 'Balai Desa Brangsong',
      category: 'Pendidikan',
      participants: '50+ Peserta',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Penghargaan Karang Taruna Terbaik',
      year: '2023',
      description: 'Meraih penghargaan dari Kabupaten Kendal'
    },
    {
      icon: Users,
      title: '1000+ Penerima Manfaat',
      year: '2023',
      description: 'Total masyarakat yang terbantu program kami'
    },
    {
      icon: Gift,
      title: '50+ Program Terlaksana',
      year: '2023',
      description: 'Berbagai program sosial dan keagamaan'
    },
    {
      icon: Target,
      title: '25+ Mitra Kolaborasi',
      year: '2023',
      description: 'Kemitraan dengan berbagai instansi'
    }
  ];

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Program & Kegiatan</h1>
            {/* <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Berbagai program yang dirancang untuk memberdayakan masyarakat dan 
              membangun generasi muda yang berkarakter
            </p> */}
          </div>
        </div>
      </section>

      {/* Program Categories */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Kategori Program</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Program-program kami terbagi dalam berbagai kategori untuk menjangkau semua aspek kehidupan masyarakat
            </p>
          </div>

          <div className="space-y-16">
            {programCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="animate-slide-up">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900">{category.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.programs.map((program, programIndex) => (
                    <div key={programIndex} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                      <div className="relative overflow-hidden">
                        <img
                          src={program.image}
                          alt={program.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                            {program.schedule}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-semibold text-primary-900 mb-2">{program.name}</h4>
                        <p className="text-gray-600 mb-4">{program.description}</p>
                        <div className="flex items-center text-primary-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">{program.schedule}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Upcoming Events */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Kegiatan Mendatang</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jangan lewatkan kegiatan-kegiatan menarik yang akan kami selenggarakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{event.title}</h3>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.participants}</span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300">
                    Daftar Sekarang
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Achievements */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Pencapaian Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Prestasi dan dampak positif yang telah kami raih bersama masyarakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-primary-900 mb-1">{achievement.title}</h3>
                <p className="text-secondary-600 font-medium mb-2">{achievement.year}</p>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Zap className="w-12 h-12 text-secondary-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Bergabunglah dalam Program Kami
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Mari bersama-sama membuat perubahan positif untuk masyarakat yang lebih baik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300">
              Daftar Sebagai Relawan
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300">
              Ajukan Program Baru
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Programs;