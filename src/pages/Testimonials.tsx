// import React, { useState } from 'react';
// import { Star, Quote, Play, User, MapPin } from 'lucide-react';

// const Testimonials = () => {
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);

//   const testimonialCategories = [
//     { id: 'all', name: 'Semua Testimoni' },
//     { id: 'community', name: 'Warga Masyarakat' },
//     { id: 'leaders', name: 'Tokoh Masyarakat' },
//     { id: 'members', name: 'Anggota' },
//     { id: 'partners', name: 'Mitra Kerja' },
//     { id: 'participants', name: 'Peserta Program' }
//   ];

//   const [selectedCategory, setSelectedCategory] = useState('all');

//   const testimonials = [
//     {
//       id: 1,
//       name: 'Bapak Suharjo',
//       role: 'Kepala Desa Brangsong',
//       category: 'leaders',
//       location: 'Brangsong, Kendal',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Muda Mudi Brangsong telah menjadi motor penggerak pembangunan desa kami. Program-program yang mereka selenggarakan sangat bermanfaat dan tepat sasaran. Saya sangat bangga dengan dedikasi anak-anak muda ini dalam memajukan desa.',
//       date: '15 Maret 2024'
//     },
//     {
//       id: 2,
//       name: 'Ibu Siti Aminah',
//       role: 'Ketua PKK Desa Brangsong',
//       category: 'leaders',
//       location: 'Brangsong, Kendal',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/3394658/pexels-photo-3394658.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Kerjasama antara PKK dengan Muda Mudi Brangsong sangat harmonis. Mereka selalu mendukung program-program kami, terutama dalam kegiatan pemberdayaan perempuan dan anak. Semoga kerjasama ini terus berlanjut.',
//       date: '12 Maret 2024'
//     },
//     {
//       id: 3,
//       name: 'Muhammad Iqbal',
//       role: 'Peserta Bimbingan Belajar',
//       category: 'participants',
//       location: 'Brangsong, Kendal',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Alhamdulillah, berkat bimbingan belajar dari kakak-kakak Muda Mudi Brangsong, nilai matematika saya meningkat drastis. Cara mengajar mereka sangat sabar dan mudah dipahami. Terima kasih banyak!',
//       date: '10 Maret 2024'
//     },
//     {
//       id: 4,
//       name: 'Bapak Wahyu Santoso',
//       role: 'Direktur CV. Brangsong Jaya',
//       category: 'partners',
//       location: 'Kendal, Jawa Tengah',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'video',
//       videoThumbnail: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'Sebagai mitra bisnis, saya sangat terkesan dengan profesionalisme dan dedikasi Muda Mudi Brangsong. Mereka tidak hanya fokus pada kegiatan sosial, tetapi juga memahami pentingnya kerjasama dengan dunia usaha untuk kemajuan bersama.',
//       date: '8 Maret 2024'
//     },
//     {
//       id: 5,
//       name: 'Ibu Fatimah',
//       role: 'Penerima Bantuan Sembako',
//       category: 'community',
//       location: 'RT 03 Brangsong',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Saya sangat berterima kasih kepada Muda Mudi Brangsong yang telah membantu keluarga kami saat kesulitan. Bantuan sembako yang diberikan sangat meringankan beban hidup kami. Semoga Allah membalas kebaikan mereka.',
//       date: '5 Maret 2024'
//     },
//     {
//       id: 6,
//       name: 'Ahmad Fauzi',
//       role: 'Anggota Sejak 2020',
//       category: 'members',
//       location: 'Brangsong, Kendal',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Bergabung dengan Muda Mudi Brangsong adalah keputusan terbaik dalam hidup saya. Di sini saya belajar banyak hal tentang kepemimpinan, kerjasama tim, dan yang terpenting adalah berbagi dengan sesama. Organisasi ini benar-benar membentuk karakter saya.',
//       date: '3 Maret 2024'
//     },
//     {
//       id: 7,
//       name: 'Dr. Bambang Wijaya',
//       role: 'Dosen Universitas Diponegoro',
//       category: 'leaders',
//       location: 'Semarang, Jawa Tengah',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Sebagai akademisi, saya sangat mengapresiasi program-program inovatif dari Muda Mudi Brangsong. Pendekatan mereka dalam pemberdayaan masyarakat sangat sistematis dan berkelanjutan. Mereka layak menjadi contoh bagi organisasi kepemudaan lainnya.',
//       date: '28 Februari 2024'
//     },
//     {
//       id: 8,
//       name: 'Sari Dewi',
//       role: 'Peserta Pelatihan Keterampilan',
//       category: 'participants',
//       location: 'Kaliwungu, Kendal',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'video',
//       videoThumbnail: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
//       content: 'Pelatihan menjahit yang diadakan oleh Muda Mudi Brangsong membuka peluang usaha bagi saya. Sekarang saya sudah memiliki usaha konveksi kecil-kecilan dan bisa membantu ekonomi keluarga. Terima kasih atas ilmu dan motivasinya!',
//       date: '25 Februari 2024'
//     },
//     {
//       id: 9,
//       name: 'Bapak Hendra Kusuma',
//       role: 'Tokoh Agama',
//       category: 'leaders',
//       location: 'Brangsong, Kendal',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Program pengajian rutin dan kegiatan keagamaan yang diselenggarakan Muda Mudi Brangsong sangat baik untuk meningkatkan keimanan masyarakat. Anak-anak muda ini memiliki semangat dakwah yang luar biasa.',
//       date: '22 Februari 2024'
//     },
//     {
//       id: 10,
//       name: 'Ibu Rina Sari',
//       role: 'Orang Tua Peserta Bimbel',
//       category: 'community',
//       location: 'RT 05 Brangsong',
//       rating: 5,
//       image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
//       type: 'text',
//       content: 'Anak saya mengikuti bimbingan belajar gratis dari Muda Mudi Brangsong. Hasilnya sangat memuaskan, nilai-nilai sekolahnya meningkat signifikan. Yang saya suka, para pengajar tidak hanya mengajar akademis tapi juga memberikan motivasi dan pembentukan karakter.',
//       date: '20 Februari 2024'
//     }
//   ];

//   const filteredTestimonials = selectedCategory === 'all' 
//     ? testimonials 
//     : testimonials.filter(testimonial => testimonial.category === selectedCategory);

//   const openTestimonial = (testimonial) => {
//     setSelectedTestimonial(testimonial);
//   };

//   const closeTestimonial = () => {
//     setSelectedTestimonial(null);
//   };

//   const renderStars = (rating) => {
//     return Array.from({ length: 5 }, (_, index) => (
//       <Star
//         key={index}
//         className={`w-4 h-4 ${
//           index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
//         }`}
//       />
//     ));
//   };

//   const getCategoryName = (categoryId) => {
//     const category = testimonialCategories.find(cat => cat.id === categoryId);
//     return category ? category.name : '';
//   };

//   return (
//     <div className="pt-16 animate-fade-in">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Testimoni Masyarakat</h1>
//             <p className="text-xl text-primary-100 max-w-3xl mx-auto">
//               Dengarkan langsung dari masyarakat tentang dampak positif program-program 
//               Muda Mudi Brangsong dalam kehidupan mereka
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-white sticky top-16 z-40 border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-2">
//             {testimonialCategories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                 }`}
//               >
//                 {category.name}
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredTestimonials.map((testimonial) => (
//               <div
//                 key={testimonial.id}
//                 className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
//                 onClick={() => openTestimonial(testimonial)}
//               >
//                 <div className="flex items-start space-x-4 mb-4">
//                   <div className="relative">
//                     <img
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       className="w-16 h-16 rounded-full object-cover"
//                     />
//                     {testimonial.type === 'video' && (
//                       <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
//                         <Play className="w-6 h-6 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="font-semibold text-primary-900 mb-1">{testimonial.name}</h3>
//                     <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
//                     <div className="flex items-center space-x-1 mb-2">
//                       {renderStars(testimonial.rating)}
//                     </div>
//                     <div className="flex items-center text-xs text-gray-500">
//                       <MapPin className="w-3 h-3 mr-1" />
//                       <span>{testimonial.location}</span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="relative">
//                   <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
//                   <p className="text-gray-700 leading-relaxed pl-6 line-clamp-4">
//                     {testimonial.content}
//                   </p>
//                 </div>

//                 <div className="mt-4 pt-4 border-t border-gray-100">
//                   <div className="flex items-center justify-between">
//                     <span className="text-xs text-gray-500">{testimonial.date}</span>
//                     <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
//                       {getCategoryName(testimonial.category)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredTestimonials.length === 0 && (
//             <div className="text-center py-16">
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <User className="w-12 h-12 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada Testimoni</h3>
//               <p className="text-gray-600">Testimoni untuk kategori ini sedang dalam proses.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Testimonial Modal */}
//       {selectedTestimonial && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
//           <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-6">
//                 <div className="flex items-center space-x-4">
//                   <div className="relative">
//                     <img
//                       src={selectedTestimonial.image}
//                       alt={selectedTestimonial.name}
//                       className="w-16 h-16 rounded-full object-cover"
//                     />
//                     {selectedTestimonial.type === 'video' && (
//                       <div className="absolute inset-0 bg-black/30 rounded-full flex items-center justify-center">
//                         <Play className="w-6 h-6 text-white" />
//                       </div>
//                     )}
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-bold text-primary-900">{selectedTestimonial.name}</h2>
//                     <p className="text-gray-600">{selectedTestimonial.role}</p>
//                     <div className="flex items-center space-x-1 mt-1">
//                       {renderStars(selectedTestimonial.rating)}
//                     </div>
//                     <div className="flex items-center text-sm text-gray-500 mt-1">
//                       <MapPin className="w-4 h-4 mr-1" />
//                       <span>{selectedTestimonial.location}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   onClick={closeTestimonial}
//                   className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//                 >
//                   ×
//                 </button>
//               </div>

//               {selectedTestimonial.type === 'video' && (
//                 <div className="mb-6">
//                   <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
//                     <img
//                       src={selectedTestimonial.videoThumbnail}
//                       alt="Video Thumbnail"
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//                       <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
//                         <Play className="w-8 h-8 text-white ml-1" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               <div className="relative mb-6">
//                 <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary-200" />
//                 <p className="text-gray-700 leading-relaxed text-lg pl-8">
//                   {selectedTestimonial.content}
//                 </p>
//               </div>

//               <div className="flex items-center justify-between pt-4 border-t border-gray-100">
//                 <span className="text-sm text-gray-500">{selectedTestimonial.date}</span>
//                 <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
//                   {getCategoryName(selectedTestimonial.category)}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Statistics */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Kepuasan Masyarakat</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Tingkat kepuasan dan apresiasi masyarakat terhadap program-program kami
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
//               <div className="text-gray-600">Tingkat Kepuasan</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
//               <div className="text-gray-600">Testimoni Positif</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary-600 mb-2">4.9</div>
//               <div className="text-gray-600">Rating Rata-rata</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl font-bold text-primary-600 mb-2">1000+</div>
//               <div className="text-gray-600">Penerima Manfaat</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-primary-800 to-primary-900">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Bagikan Pengalaman Anda
//           </h2>
//           <p className="text-xl text-primary-100 mb-8">
//             Ceritakan pengalaman Anda bersama Muda Mudi Brangsong dan inspirasi untuk yang lain
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300">
//               Kirim Testimoni
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300">
//               Hubungi Kami
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Testimonials;

export default () => null;