import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Calendar, 
  Users, 
  Heart, 
  Star,
  Clock,
  MapPin,
  Play
} from 'lucide-react';
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    image: slide1,
    title: 'Kegiatan Kebersamaan Muda Mudi',
  },
  {
    image: slide2,
    title: 'Bakti Sosial di Desa Brangsong',
  },
  {
    image: slide3,
    title: 'Pengajian Rutin Remaja',
  },
];

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set countdown to Ramadan 17 (example date)
    const targetDate = new Date('2025-08-24T06:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    // { icon: Users, label: 'Anggota Aktif', value: '150+' },
    { icon: Heart, label: 'Program Sosial', value: '25+' },
    { icon: Calendar, label: 'Kegiatan/Tahun', value: '50+' },
    { icon: Star, label: 'Tahun Berpengalaman', value: '8' },
  ];

  const upcomingEvents = [
    {
      title: 'Rekreasi Muda Mudi Brangsong',
      date: 'Minggu, 6 Maret 2022',
      time: '06:00 - 23:00 WIB',
      location: 'Jogja (Pantai Drini, Malioboro)',
      image: 'Gallery/img-event1.jpg'
    },
    {
      title: 'Badminton Championship',
      date: '12 & 19 November 2023',
      time: '14:00 - 17:00 WIB',
      location: 'Gor Fandamel Kaliwungu',
      image: 'Gallery/img-event2.jpg'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section with SwiperJS Slider */}
      <section className="relative w-full pt-16 pb-4">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {heroSlides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative flex justify-center items-center">
                <div className="rounded-2xl border-4 border-white shadow-2xl overflow-hidden bg-white w-full max-w-screen-xl mx-auto">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[200px] sm:h-[300px] md:h-[80vh] object-cover object-center"
                    style={{ aspectRatio: '16/9' }}
                  />
                </div>
                {/* Judul/Caption di atas gambar */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/60 px-4 py-2 text-white text-xl md:text-3xl font-bold font-poppins leading-snug">
                  {slide.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Tulisan utama dipindah ke bawah slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-6">
          Muda Mudi Brangsong
        </h1>
        <p className="text-xl md:text-2xl text-primary-700 font-medium mb-8">
          Aktif, Kreatif, Peduli Masyarakat
        </p>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
          Organisasi kepemudaan yang berkomitmen membangun generasi muda yang 
          berprestasi, berkarakter, dan berkontribusi positif bagi masyarakat 
          melalui program-program sosial, keagamaan, dan pengembangan diri.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 group"
          >
            <span>Kenali Kami</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Countdown Section */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-900 mb-4">Acara Mendatang</h2>
          <h3 className="text-xl text-primary-700 mb-8">Anjangsana Muda Mudi Brangsong</h3>
          
          <div className="grid grid-cols-4 gap-4 mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="bg-white rounded-lg p-4 shadow-md">
                <div className="text-3xl font-bold text-primary-900">{value}</div>
                <div className="text-sm text-gray-600 capitalize">{unit}</div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center justify-center space-x-4 text-primary-700">
            <Calendar className="w-5 h-5" />
            <span>Minggu, 24 Agustus 2025</span>
            <Clock className="w-5 h-5" />
            <span>06:00 - 24:00 WIB</span>
            <MapPin className="w-5 h-5" />
            <span>Jogja - Kelompok Asy-Syifa'</span>
          </div>
        </div>
      </section>

      {/* Recent Activities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Kegiatan Terbaru</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lihat berbagai kegiatan positif yang telah kami lakukan untuk masyarakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover object-center rounded-t-xl group-hover:scale-105 transition-transform duration-300 shadow-md"
                    style={{ aspectRatio: '16/9' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <button className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{event.title}</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
            >
              <span>Lihat Semua Kegiatan</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Mari Berpartisipasi Bersama Kami
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Ikuti kegiatan dan program kami untuk berkontribusi positif bagi masyarakat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300"
            >
              Lihat Program
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Home;