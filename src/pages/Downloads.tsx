// import React, { useState } from 'react';
// import { 
//   Download, 
//   FileText, 
//   Image, 
//   Video, 
//   Calendar,
//   Eye,
//   CheckCircle,
//   Star,
//   Users,
//   Award
// } from 'lucide-react';

// const Downloads = () => {
//   const [selectedCategory, setSelectedCategory] = useState('all');
//   const [downloadCount, setDownloadCount] = useState({});

//   const categories = [
//     { id: 'all', name: 'Semua File', icon: FileText },
//     { id: 'proposals', name: 'Proposal Kegiatan', icon: FileText },
//     { id: 'reports', name: 'Laporan Program', icon: FileText },
//     { id: 'certificates', name: 'Template Sertifikat', icon: Award },
//     { id: 'media', name: 'Media Kit', icon: Image },
//     { id: 'forms', name: 'Formulir', icon: FileText }
//   ];

//   const downloadFiles = [
//     {
//       id: 1,
//       title: 'Proposal Pengajian Akbar Ramadhan 2024',
//       description: 'Proposal lengkap untuk kegiatan pengajian akbar yang akan diselenggarakan pada bulan Ramadhan',
//       category: 'proposals',
//       type: 'PDF',
//       size: '2.5 MB',
//       date: '15 Maret 2024',
//       downloads: 156,
//       featured: true,
//       preview: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 2,
//       title: 'Laporan Kegiatan Bakti Sosial 2023',
//       description: 'Laporan komprehensif kegiatan bakti sosial yang telah dilaksanakan sepanjang tahun 2023',
//       category: 'reports',
//       type: 'PDF',
//       size: '4.2 MB',
//       date: '10 Januari 2024',
//       downloads: 89,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 3,
//       title: 'Template Sertifikat Pelatihan',
//       description: 'Template sertifikat untuk berbagai kegiatan pelatihan dan workshop',
//       category: 'certificates',
//       type: 'PSD',
//       size: '15.8 MB',
//       date: '5 Maret 2024',
//       downloads: 234,
//       featured: true,
//       preview: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 4,
//       title: 'Profil Organisasi Muda Mudi Brangsong',
//       description: 'Company profile lengkap organisasi untuk keperluan kemitraan dan presentasi',
//       category: 'proposals',
//       type: 'PDF',
//       size: '8.1 MB',
//       date: '1 Maret 2024',
//       downloads: 312,
//       featured: true,
//       preview: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 5,
//       title: 'Logo dan Brand Guidelines',
//       description: 'Paket lengkap logo organisasi dalam berbagai format dan panduan penggunaan brand',
//       category: 'media',
//       type: 'ZIP',
//       size: '12.3 MB',
//       date: '25 Februari 2024',
//       downloads: 178,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 6,
//       title: 'Formulir Pendaftaran Anggota',
//       description: 'Formulir pendaftaran untuk calon anggota baru dalam format yang dapat diedit',
//       category: 'forms',
//       type: 'DOCX',
//       size: '0.8 MB',
//       date: '20 Februari 2024',
//       downloads: 145,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 7,
//       title: 'Proposal Program Bimbingan Belajar',
//       description: 'Proposal program bimbingan belajar gratis untuk anak-anak kurang mampu',
//       category: 'proposals',
//       type: 'PDF',
//       size: '3.7 MB',
//       date: '18 Februari 2024',
//       downloads: 92,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/8471928/pexels-photo-8471928.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 8,
//       title: 'Laporan Keuangan Tahunan 2023',
//       description: 'Laporan transparansi keuangan organisasi untuk tahun 2023',
//       category: 'reports',
//       type: 'PDF',
//       size: '1.9 MB',
//       date: '15 Februari 2024',
//       downloads: 67,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 9,
//       title: 'Template Undangan Kegiatan',
//       description: 'Template undangan untuk berbagai kegiatan organisasi',
//       category: 'media',
//       type: 'AI',
//       size: '5.4 MB',
//       date: '12 Februari 2024',
//       downloads: 203,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=400'
//     },
//     {
//       id: 10,
//       title: 'Formulir Proposal Kemitraan',
//       description: 'Formulir untuk pengajuan proposal kemitraan dengan pihak eksternal',
//       category: 'forms',
//       type: 'PDF',
//       size: '1.2 MB',
//       date: '10 Februari 2024',
//       downloads: 78,
//       featured: false,
//       preview: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400'
//     }
//   ];

//   const filteredFiles = selectedCategory === 'all' 
//     ? downloadFiles 
//     : downloadFiles.filter(file => file.category === selectedCategory);

//   const handleDownload = (fileId) => {
//     setDownloadCount(prev => ({
//       ...prev,
//       [fileId]: (prev[fileId] || 0) + 1
//     }));
//     // Simulate download
//     console.log(`Downloading file ${fileId}`);
//   };

//   const getFileIcon = (type) => {
//     switch (type.toLowerCase()) {
//       case 'pdf':
//         return <FileText className="w-8 h-8 text-red-500" />;
//       case 'docx':
//         return <FileText className="w-8 h-8 text-blue-500" />;
//       case 'psd':
//       case 'ai':
//         return <Image className="w-8 h-8 text-purple-500" />;
//       case 'zip':
//         return <FileText className="w-8 h-8 text-gray-500" />;
//       default:
//         return <FileText className="w-8 h-8 text-gray-500" />;
//     }
//   };

//   const stats = [
//     { icon: Download, label: 'Total Download', value: '2,500+' },
//     { icon: FileText, label: 'File Tersedia', value: '50+' },
//     { icon: Users, label: 'Pengguna Aktif', value: '800+' },
//     { icon: Star, label: 'Rating Rata-rata', value: '4.8' }
//   ];

//   return (
//     <div className="pt-16 animate-fade-in">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Pusat Download</h1>
//             <p className="text-xl text-primary-100 max-w-3xl mx-auto">
//               Download berbagai dokumen, proposal, laporan, dan materi lainnya 
//               yang dapat membantu Anda memahami lebih dalam tentang organisasi kami
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-3xl font-bold text-primary-900 mb-1">{stat.value}</div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Category Filter */}
//       <section className="py-8 bg-gray-50 sticky top-16 z-40 border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-wrap justify-center gap-2">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setSelectedCategory(category.id)}
//                 className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
//                   selectedCategory === category.id
//                     ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg'
//                     : 'bg-white text-gray-700 hover:bg-gray-100 shadow-sm'
//                 }`}
//               >
//                 <category.icon className="w-4 h-4" />
//                 <span>{category.name}</span>
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Downloads */}
//       {selectedCategory === 'all' && (
//         <section className="py-16 bg-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-primary-900 mb-4">Download Populer</h2>
//               <p className="text-gray-600 max-w-2xl mx-auto">
//                 File-file yang paling sering didownload dan direkomendasikan
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {downloadFiles.filter(file => file.featured).map((file) => (
//                 <div key={file.id} className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
//                   <div className="absolute top-4 right-4 z-10">
//                     <span className="bg-secondary-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
//                       <Star className="w-3 h-3" />
//                       <span>Populer</span>
//                     </span>
//                   </div>
                  
//                   <div className="relative h-48 overflow-hidden">
//                     <img
//                       src={file.preview}
//                       alt={file.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
//                   </div>
                  
//                   <div className="p-6">
//                     <div className="flex items-center justify-between mb-3">
//                       {getFileIcon(file.type)}
//                       <span className="text-sm bg-white px-2 py-1 rounded-full text-gray-600">
//                         {file.type} • {file.size}
//                       </span>
//                     </div>
                    
//                     <h3 className="text-lg font-semibold text-primary-900 mb-2 line-clamp-2">
//                       {file.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                       {file.description}
//                     </p>
                    
//                     <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                       <div className="flex items-center space-x-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>{file.date}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Download className="w-4 h-4" />
//                         <span>{file.downloads + (downloadCount[file.id] || 0)} downloads</span>
//                       </div>
//                     </div>
                    
//                     <div className="flex space-x-2">
//                       <button
//                         onClick={() => handleDownload(file.id)}
//                         className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2"
//                       >
//                         <Download className="w-4 h-4" />
//                         <span>Download</span>
//                       </button>
//                       <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                         <Eye className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* All Downloads */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">
//               {selectedCategory === 'all' ? 'Semua File' : categories.find(c => c.id === selectedCategory)?.name}
//             </h2>
//             <p className="text-gray-600">
//               {filteredFiles.length} file tersedia untuk didownload
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredFiles.map((file) => (
//               <div key={file.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
//                 <div className="flex items-start justify-between mb-4">
//                   {getFileIcon(file.type)}
//                   <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-600">
//                     {file.type} • {file.size}
//                   </span>
//                 </div>
                
//                 <h3 className="text-lg font-semibold text-primary-900 mb-2 line-clamp-2">
//                   {file.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                   {file.description}
//                 </p>
                
//                 <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
//                   <div className="flex items-center space-x-1">
//                     <Calendar className="w-4 h-4" />
//                     <span>{file.date}</span>
//                   </div>
//                   <div className="flex items-center space-x-1">
//                     <Download className="w-4 h-4" />
//                     <span>{file.downloads + (downloadCount[file.id] || 0)}</span>
//                   </div>
//                 </div>
                
//                 <div className="flex space-x-2">
//                   <button
//                     onClick={() => handleDownload(file.id)}
//                     className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-lg font-medium hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2"
//                   >
//                     <Download className="w-4 h-4" />
//                     <span>Download</span>
//                   </button>
//                   <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
//                     <Eye className="w-4 h-4" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {filteredFiles.length === 0 && (
//             <div className="text-center py-16">
//               <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <FileText className="w-12 h-12 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">Belum Ada File</h3>
//               <p className="text-gray-600">File untuk kategori ini sedang dalam proses.</p>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Download Guidelines */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Panduan Download</h2>
//             <p className="text-gray-600">
//               Informasi penting sebelum mendownload file
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div className="bg-gray-50 rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
//                 <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
//                 Ketentuan Penggunaan
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
//                   <span>File dapat digunakan untuk keperluan non-komersial</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
//                   <span>Wajib mencantumkan sumber jika digunakan untuk publikasi</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
//                   <span>Dilarang mendistribusikan ulang tanpa izin</span>
//                 </li>
//                 <li className="flex items-start space-x-2">
//                   <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
//                   <span>Hubungi kami untuk penggunaan komersial</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gray-50 rounded-xl p-6">
//               <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center">
//                 <FileText className="w-5 h-5 mr-2 text-blue-500" />
//                 Format File
//               </h3>
//               <ul className="space-y-2 text-gray-700">
//                 <li className="flex items-center space-x-2">
//                   <span className="w-8 h-6 bg-red-100 text-red-600 text-xs font-medium rounded flex items-center justify-center">PDF</span>
//                   <span>Dokumen dan proposal</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <span className="w-8 h-6 bg-blue-100 text-blue-600 text-xs font-medium rounded flex items-center justify-center">DOC</span>
//                   <span>Formulir yang dapat diedit</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <span className="w-8 h-6 bg-purple-100 text-purple-600 text-xs font-medium rounded flex items-center justify-center">PSD</span>
//                   <span>Template desain</span>
//                 </li>
//                 <li className="flex items-center space-x-2">
//                   <span className="w-8 h-6 bg-gray-100 text-gray-600 text-xs font-medium rounded flex items-center justify-center">ZIP</span>
//                   <span>Paket file lengkap</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact for Custom Request */}
//       <section className="py-16 bg-primary-800">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Butuh File Khusus?
//           </h2>
//           <p className="text-xl text-primary-100 mb-8">
//             Jika Anda membutuhkan dokumen atau file khusus yang tidak tersedia di sini, 
//             jangan ragu untuk menghubungi kami
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300">
//               Request File Khusus
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300">
//               Hubungi Tim Kami
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Downloads;

export default () => null;