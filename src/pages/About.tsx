import React from 'react';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award,
  Calendar,
  MapPin,
  Star
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Kepedulian',
      description: 'Mengutamakan kepentingan masyarakat dengan empati dan dedikasi tinggi'
    },
    {
      icon: Users,
      title: 'Kebersamaan',
      description: 'Membangun solidaritas dan kekompakan dalam setiap kegiatan'
    },
    {
      icon: Award,
      title: 'Prestasi',
      description: 'Selalu berusaha memberikan yang terbaik dalam setiap program'
    },
    {
      icon: Star,
      title: 'Integritas',
      description: 'Berkomitmen pada nilai-nilai kejujuran dan transparansi'
    }
  ];

  const boardMembers = [
    {
      name: 'Ahmad Fauzi',
      position: 'Ketua Umum',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Pemimpin visioner dengan pengalaman 5 tahun di organisasi kepemudaan'
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Wakil Ketua',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Aktif dalam program pemberdayaan perempuan dan pendidikan'
    },
    {
      name: 'Muhammad Rizki',
      position: 'Sekretaris',
      image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Koordinator program sosial dan keagamaan'
    },
    {
      name: 'Fatimah Zahra',
      position: 'Bendahara',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ahli dalam manajemen keuangan dan administrasi'
    },
    {
      name: 'Abdul Rahman',
      position: 'Koordinator Program',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Spesialis dalam pengembangan program kepemudaan'
    },
    {
      name: 'Dewi Sartika',
      position: 'Humas',
      image: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Ahli komunikasi dan media relations'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'Pendirian Organisasi',
      description: 'Muda Mudi Brangsong didirikan oleh sekelompok pemuda peduli'
    },
    {
      year: '2018',
      title: 'Program Pertama',
      description: 'Meluncurkan program bakti sosial dan pengajian rutin'
    },
    {
      year: '2020',
      title: 'Ekspansi Program',
      description: 'Menambah program pendidikan dan pelatihan keterampilan'
    },
    {
      year: '2022',
      title: 'Pengakuan Formal',
      description: 'Mendapat pengakuan resmi dari pemerintah daerah'
    },
    {
      year: '2024',
      title: 'Era Digital',
      description: 'Meluncurkan platform digital dan website resmi'
    }
  ];

  return (
    <div className="pt-16 animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            {/* <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Mengenal lebih dekat Muda Mudi Brangsong, organisasi kepemudaan yang 
              berkomitmen membangun generasi muda yang aktif, kreatif, dan peduli masyarakat
            </p> */}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl font-bold text-primary-900 mb-6">Sejarah Singkat</h2>
              {/* <p className="text-gray-700 leading-relaxed mb-6">
                Muda Mudi Brangsong didirikan pada tahun 2016 oleh sekelompok pemuda yang memiliki 
                visi untuk menciptakan perubahan positif di masyarakat. Berawal dari keprihatinan 
                terhadap kurangnya wadah bagi generasi muda untuk berkontribusi, organisasi ini 
                terbentuk dengan semangat gotong royong dan kepedulian sosial.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Selama 8 tahun perjalanan, kami telah menyelenggarakan berbagai program yang 
                berdampak positif bagi masyarakat Brangsong dan sekitarnya. Dari program 
                keagamaan, bakti sosial, hingga pemberdayaan ekonomi masyarakat.
              </p>
              <div className="flex items-center space-x-4 text-primary-600">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Didirikan: 15 Agustus 2016</span>
              </div>
              <div className="flex items-center space-x-4 text-primary-600 mt-2">
                <MapPin className="w-5 h-5" />
                <span className="font-semibold">Lokasi: Desa Brangsong, Kendal</span>
              </div> */}
            </div>
            {/* <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sejarah Organisasi"
                className="rounded-lg shadow-lg w-full"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">Visi</h2>
              </div>
              {/* <p className="text-gray-700 leading-relaxed">
                Menjadi organisasi kepemudaan terdepan yang menghasilkan generasi muda 
                berkarakter, berprestasi, dan berkontribusi nyata dalam pembangunan 
                masyarakat yang bermartabat dan sejahtera.
              </p> */}
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-900">Misi</h2>
              </div>
              <ul className="text-gray-700 space-y-3">
                {/* <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mengembangkan potensi generasi muda melalui program pendidikan dan pelatihan</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Menyelenggarakan kegiatan sosial dan keagamaan yang bermanfaat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Membangun jaringan kemitraan untuk kemajuan masyarakat</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Melestarikan nilai-nilai budaya dan agama dalam kehidupan sehari-hari</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Nilai-Nilai Organisasi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi pedoman dalam setiap kegiatan dan program kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Timeline */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Perjalanan Kami</h2>
            <p className="text-gray-600">Tonggak-tonggak penting dalam sejarah Muda Mudi Brangsong</p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white rounded-lg p-6 shadow-lg ml-12 md:ml-0">
                    <div className="text-2xl font-bold text-secondary-600 mb-2">{item.year}</div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Board Members */}
      {/* <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Struktur Pengurus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tim pengurus yang berdedikasi untuk memajukan organisasi dan masyarakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-1">{member.name}</h3>
                  <p className="text-secondary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;