// import React from 'react';
// import { 
//   Building, 
//   Handshake, 
//   Target, 
//   Users, 
//   Award,
//   ArrowRight,
//   CheckCircle,
//   Mail,
//   Phone
// } from 'lucide-react';

// const Partnerships = () => {
//   const partners = [
//     {
//       name: 'Pemerintah Kabupaten Kendal',
//       type: 'Pemerintah',
//       logo: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Kerjasama dalam program pemberdayaan masyarakat dan pengembangan desa',
//       collaboration: 'Program Desa Mandiri, Pelatihan Keterampilan',
//       since: '2018'
//     },
//     {
//       name: 'BAZNAS Kabupaten Kendal',
//       type: 'Lembaga Sosial',
//       logo: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Kolaborasi dalam program bantuan sosial dan pemberdayaan ekonomi umat',
//       collaboration: 'Distribusi Zakat, Program Mustahik',
//       since: '2019'
//     },
//     {
//       name: 'CV. Brangsong Jaya',
//       type: 'Swasta',
//       logo: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Dukungan CSR untuk program pendidikan dan pelatihan keterampilan',
//       collaboration: 'Beasiswa Pendidikan, Pelatihan Kerja',
//       since: '2020'
//     },
//     {
//       name: 'Universitas Diponegoro',
//       type: 'Pendidikan',
//       logo: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Program KKN dan penelitian pemberdayaan masyarakat',
//       collaboration: 'KKN Tematik, Penelitian Sosial',
//       since: '2021'
//     },
//     {
//       name: 'Bank Jateng Cabang Kendal',
//       type: 'Perbankan',
//       logo: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Program literasi keuangan dan pemberdayaan UMKM',
//       collaboration: 'Edukasi Keuangan, Kredit UMKM',
//       since: '2022'
//     },
//     {
//       name: 'Rumah Sakit Kendal',
//       type: 'Kesehatan',
//       logo: 'https://images.pexels.com/photos/3823063/pexels-photo-3823063.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Program kesehatan masyarakat dan bakti sosial kesehatan',
//       collaboration: 'Posyandu, Pemeriksaan Gratis',
//       since: '2020'
//     },
//     {
//       name: 'Koperasi Maju Bersama',
//       type: 'Koperasi',
//       logo: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Pengembangan ekonomi kerakyatan dan simpan pinjam',
//       collaboration: 'Program Simpan Pinjam, Koperasi Desa',
//       since: '2019'
//     },
//     {
//       name: 'Masjid Agung Brangsong',
//       type: 'Keagamaan',
//       logo: 'https://images.pexels.com/photos/3397989/pexels-photo-3397989.jpeg?auto=compress&cs=tinysrgb&w=200',
//       description: 'Program dakwah dan kegiatan keagamaan masyarakat',
//       collaboration: 'Pengajian Rutin, Tadarus Ramadhan',
//       since: '2016'
//     }
//   ];

//   const partnershipBenefits = [
//     {
//       icon: Target,
//       title: 'Dampak Sosial Nyata',
//       description: 'Program yang terukur dan memberikan dampak positif langsung kepada masyarakat'
//     },
//     {
//       icon: Users,
//       title: 'Jangkauan Luas',
//       description: 'Akses ke komunitas masyarakat yang luas di Brangsong dan sekitarnya'
//     },
//     {
//       icon: Award,
//       title: 'Reputasi Terpercaya',
//       description: 'Organisasi dengan track record yang baik dan pengakuan dari berbagai pihak'
//     },
//     {
//       icon: Handshake,
//       title: 'Kerjasama Berkelanjutan',
//       description: 'Komitmen untuk membangun kemitraan jangka panjang yang saling menguntungkan'
//     }
//   ];

//   const collaborationTypes = [
//     {
//       title: 'Corporate Social Responsibility (CSR)',
//       description: 'Kerjasama dalam program CSR perusahaan untuk pemberdayaan masyarakat',
//       features: [
//         'Program pendidikan dan beasiswa',
//         'Bantuan infrastruktur desa',
//         'Pelatihan keterampilan dan wirausaha',
//         'Program kesehatan masyarakat'
//       ]
//     },
//     {
//       title: 'Program Pemerintah',
//       description: 'Kolaborasi dengan instansi pemerintah dalam program pembangunan',
//       features: [
//         'Program desa mandiri',
//         'Pemberdayaan ekonomi masyarakat',
//         'Pengembangan pariwisata desa',
//         'Program lingkungan hidup'
//       ]
//     },
//     {
//       title: 'Kemitraan Akademik',
//       description: 'Kerjasama dengan institusi pendidikan untuk penelitian dan pengabdian',
//       features: [
//         'Program KKN mahasiswa',
//         'Penelitian pemberdayaan masyarakat',
//         'Pelatihan dan workshop',
//         'Transfer teknologi'
//       ]
//     },
//     {
//       title: 'Kemitraan Strategis',
//       description: 'Aliansi strategis dengan organisasi sejenis untuk memperkuat program',
//       features: [
//         'Pertukaran best practices',
//         'Program kolaboratif',
//         'Sharing resources',
//         'Joint fundraising'
//       ]
//     }
//   ];

//   const achievements = [
//     { number: '25+', label: 'Mitra Aktif' },
//     { number: '50+', label: 'Program Kolaborasi' },
//     { number: '1000+', label: 'Penerima Manfaat' },
//     { number: '8', label: 'Tahun Pengalaman' }
//   ];

//   return (
//     <div className="pt-16 animate-fade-in">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Kemitraan & Kolaborasi</h1>
//             <p className="text-xl text-primary-100 max-w-3xl mx-auto">
//               Membangun sinergi dengan berbagai pihak untuk menciptakan dampak positif 
//               yang lebih besar bagi masyarakat
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Partnership Benefits */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Mengapa Bermitra dengan Kami?</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Keuntungan dan manfaat yang akan Anda dapatkan dengan bermitra bersama Muda Mudi Brangsong
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {partnershipBenefits.map((benefit, index) => (
//               <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
//                   <benefit.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-primary-900 mb-2">{benefit.title}</h3>
//                 <p className="text-gray-600 text-sm">{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Current Partners */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Mitra Kami</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Organisasi dan institusi yang telah mempercayai kami sebagai mitra dalam berbagai program
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {partners.map((partner, index) => (
//               <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-center mb-4">
//                   <img
//                     src={partner.logo}
//                     alt={partner.name}
//                     className="w-12 h-12 rounded-lg object-cover mr-3"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-primary-900 text-sm">{partner.name}</h3>
//                     <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
//                       {partner.type}
//                     </span>
//                   </div>
//                 </div>
                
//                 <p className="text-gray-600 text-sm mb-3 line-clamp-3">{partner.description}</p>
                
//                 <div className="space-y-2 text-xs text-gray-500">
//                   <div>
//                     <span className="font-medium">Kolaborasi:</span> {partner.collaboration}
//                   </div>
//                   <div>
//                     <span className="font-medium">Sejak:</span> {partner.since}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Collaboration Types */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Jenis Kemitraan</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Berbagai bentuk kerjasama yang dapat disesuaikan dengan kebutuhan dan tujuan mitra
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {collaborationTypes.map((type, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-xl font-semibold text-primary-900 mb-3">{type.title}</h3>
//                 <p className="text-gray-600 mb-6">{type.description}</p>
                
//                 <ul className="space-y-3">
//                   {type.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center space-x-3">
//                       <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
//                       <span className="text-gray-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements */}
//       <section className="py-16 bg-primary-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Pencapaian Kemitraan</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Hasil nyata dari kolaborasi yang telah terjalin selama bertahun-tahun
//             </p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {achievements.map((achievement, index) => (
//               <div key={index} className="text-center">
//                 <div className="text-4xl font-bold text-primary-600 mb-2">{achievement.number}</div>
//                 <div className="text-gray-600">{achievement.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnership Process */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Proses Kemitraan</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Langkah-langkah mudah untuk memulai kerjasama dengan Muda Mudi Brangsong
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               {
//                 step: '01',
//                 title: 'Konsultasi Awal',
//                 description: 'Diskusi kebutuhan dan tujuan kemitraan'
//               },
//               {
//                 step: '02',
//                 title: 'Proposal Program',
//                 description: 'Penyusunan proposal program kolaborasi'
//               },
//               {
//                 step: '03',
//                 title: 'Kesepakatan',
//                 description: 'Penandatanganan MoU dan kesepakatan'
//               },
//               {
//                 step: '04',
//                 title: 'Implementasi',
//                 description: 'Pelaksanaan program dan monitoring'
//               }
//             ].map((process, index) => (
//               <div key={index} className="text-center relative">
//                 <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-lg">{process.step}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-primary-900 mb-2">{process.title}</h3>
//                 <p className="text-gray-600 text-sm">{process.description}</p>
                
//                 {index < 3 && (
//                   <div className="hidden md:block absolute top-8 left-full w-full">
//                     <ArrowRight className="w-6 h-6 text-primary-300 mx-auto" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="flex items-center justify-center mb-6">
//             <Building className="w-12 h-12 text-secondary-400" />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Ingin Bekerja Sama dengan Kami?
//           </h2>
//           <p className="text-xl text-primary-100 mb-8">
//             Mari bergabung dalam menciptakan dampak positif yang berkelanjutan untuk masyarakat
//           </p>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
//             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
//               <div className="flex items-center space-x-3">
//                 <Mail className="w-6 h-6 text-secondary-400" />
//                 <div className="text-left">
//                   <div className="text-white font-medium">Email</div>
//                   <div className="text-primary-100 text-sm">partnership@mudamudibrangsong.org</div>
//                 </div>
//               </div>
//             </div>
            
//             <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
//               <div className="flex items-center space-x-3">
//                 <Phone className="w-6 h-6 text-secondary-400" />
//                 <div className="text-left">
//                   <div className="text-white font-medium">WhatsApp</div>
//                   <div className="text-primary-100 text-sm">+62 812-3456-7890</div>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300">
//               Ajukan Kemitraan
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300">
//               Download Proposal
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Partnerships;