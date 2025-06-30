// import React, { useState } from 'react';
// import { 
//   Search, 
//   CheckCircle, 
//   XCircle, 
//   FileCheck, 
//   Calendar,
//   User,
//   Award,
//   AlertCircle,
//   Download,
//   Share2
// } from 'lucide-react';

// const CertificateValidation = () => {
//   const [certificateCode, setCertificateCode] = useState('');
//   const [validationResult, setValidationResult] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   // Sample certificate data
//   const certificateDatabase = {
//     'MMB2024001': {
//       valid: true,
//       recipientName: 'Ahmad Fauzi',
//       programName: 'Pelatihan Kepemimpinan Pemuda',
//       issueDate: '15 Maret 2024',
//       completionDate: '10 Maret 2024',
//       duration: '3 Hari',
//       instructor: 'Dr. Bambang Wijaya',
//       grade: 'A',
//       certificateType: 'Pelatihan',
//       description: 'Telah menyelesaikan program pelatihan kepemimpinan pemuda dengan nilai memuaskan'
//     },
//     'MMB2024002': {
//       valid: true,
//       recipientName: 'Siti Nurhaliza',
//       programName: 'Workshop Digital Marketing',
//       issueDate: '20 Februari 2024',
//       completionDate: '18 Februari 2024',
//       duration: '2 Hari',
//       instructor: 'Andi Pratama, S.Kom',
//       grade: 'A-',
//       certificateType: 'Workshop',
//       description: 'Telah berpartisipasi aktif dalam workshop digital marketing dan media sosial'
//     },
//     'MMB2024003': {
//       valid: true,
//       recipientName: 'Muhammad Rizki',
//       programName: 'Sertifikasi Relawan Sosial',
//       issueDate: '5 Februari 2024',
//       completionDate: '1 Februari 2024',
//       duration: '1 Minggu',
//       instructor: 'Tim Muda Mudi Brangsong',
//       grade: 'B+',
//       certificateType: 'Sertifikasi',
//       description: 'Telah menyelesaikan program sertifikasi relawan sosial dengan komitmen tinggi'
//     }
//   };

//   const handleValidation = async (e) => {
//     e.preventDefault();
//     if (!certificateCode.trim()) return;

//     setIsLoading(true);
    
//     // Simulate API call
//     setTimeout(() => {
//       const result = certificateDatabase[certificateCode.toUpperCase()];
      
//       if (result) {
//         setValidationResult({
//           ...result,
//           code: certificateCode.toUpperCase()
//         });
//       } else {
//         setValidationResult({
//           valid: false,
//           message: 'Kode sertifikat tidak ditemukan atau tidak valid'
//         });
//       }
      
//       setIsLoading(false);
//     }, 1500);
//   };

//   const handleDownloadCertificate = () => {
//     // Simulate certificate download
//     console.log('Downloading certificate...');
//   };

//   const handleShareCertificate = () => {
//     // Simulate certificate sharing
//     if (navigator.share) {
//       navigator.share({
//         title: `Sertifikat ${validationResult.programName}`,
//         text: `Sertifikat atas nama ${validationResult.recipientName}`,
//         url: window.location.href
//       });
//     } else {
//       // Fallback for browsers that don't support Web Share API
//       navigator.clipboard.writeText(window.location.href);
//       alert('Link sertifikat telah disalin ke clipboard');
//     }
//   };

//   const sampleCodes = [
//     { code: 'MMB2024001', name: 'Ahmad Fauzi', program: 'Pelatihan Kepemimpinan' },
//     { code: 'MMB2024002', name: 'Siti Nurhaliza', program: 'Workshop Digital Marketing' },
//     { code: 'MMB2024003', name: 'Muhammad Rizki', program: 'Sertifikasi Relawan' }
//   ];

//   const stats = [
//     { icon: FileCheck, label: 'Sertifikat Terbit', value: '500+' },
//     { icon: User, label: 'Penerima Sertifikat', value: '350+' },
//     { icon: Award, label: 'Program Tersertifikasi', value: '25+' },
//     { icon: CheckCircle, label: 'Tingkat Validitas', value: '99.8%' }
//   ];

//   return (
//     <div className="pt-16 animate-fade-in">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Validasi Sertifikat</h1>
//             <p className="text-xl text-primary-100 max-w-3xl mx-auto">
//               Verifikasi keaslian sertifikat yang diterbitkan oleh Muda Mudi Brangsong 
//               dengan memasukkan kode sertifikat yang tertera
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

//       {/* Validation Form */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Cek Validitas Sertifikat</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Masukkan kode sertifikat yang tertera pada sertifikat Anda untuk memverifikasi keasliannya
//             </p>
//           </div>

//           <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
//             <form onSubmit={handleValidation} className="space-y-6">
//               <div>
//                 <label htmlFor="certificateCode" className="block text-sm font-medium text-gray-700 mb-2">
//                   Kode Sertifikat
//                 </label>
//                 <div className="relative">
//                   <input
//                     type="text"
//                     id="certificateCode"
//                     value={certificateCode}
//                     onChange={(e) => setCertificateCode(e.target.value)}
//                     placeholder="Contoh: MMB2024001"
//                     className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-lg"
//                     required
//                   />
//                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
//                 </div>
//                 <p className="text-sm text-gray-500 mt-2">
//                   Kode sertifikat biasanya terdapat di bagian bawah sertifikat dengan format MMB + Tahun + Nomor
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {isLoading ? (
//                   <>
//                     <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                     <span>Memvalidasi...</span>
//                   </>
//                 ) : (
//                   <>
//                     <FileCheck className="w-5 h-5" />
//                     <span>Validasi Sertifikat</span>
//                   </>
//                 )}
//               </button>
//             </form>
//           </div>

//           {/* Validation Result */}
//           {validationResult && (
//             <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
//               {validationResult.valid ? (
//                 <div>
//                   <div className="flex items-center mb-6">
//                     <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
//                     <div>
//                       <h3 className="text-xl font-bold text-green-600">Sertifikat Valid</h3>
//                       <p className="text-gray-600">Sertifikat ini telah terverifikasi dan sah</p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Kode Sertifikat</label>
//                         <p className="text-lg font-semibold text-primary-900">{validationResult.code}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Nama Penerima</label>
//                         <p className="text-lg font-semibold text-primary-900">{validationResult.recipientName}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Program</label>
//                         <p className="text-lg font-semibold text-primary-900">{validationResult.programName}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Jenis Sertifikat</label>
//                         <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
//                           {validationResult.certificateType}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="space-y-4">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Tanggal Penyelesaian</label>
//                         <p className="text-lg text-gray-900">{validationResult.completionDate}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Tanggal Terbit</label>
//                         <p className="text-lg text-gray-900">{validationResult.issueDate}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Durasi Program</label>
//                         <p className="text-lg text-gray-900">{validationResult.duration}</p>
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700">Nilai</label>
//                         <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
//                           {validationResult.grade}
//                         </span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Instruktur/Penyelenggara</label>
//                     <p className="text-lg text-gray-900">{validationResult.instructor}</p>
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Deskripsi</label>
//                     <p className="text-gray-700">{validationResult.description}</p>
//                   </div>

//                   <div className="flex flex-col sm:flex-row gap-4">
//                     <button
//                       onClick={handleDownloadCertificate}
//                       className="flex-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2"
//                     >
//                       <Download className="w-5 h-5" />
//                       <span>Download Sertifikat</span>
//                     </button>
//                     <button
//                       onClick={handleShareCertificate}
//                       className="flex-1 border-2 border-primary-600 text-primary-600 py-3 px-6 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 flex items-center justify-center space-x-2"
//                     >
//                       <Share2 className="w-5 h-5" />
//                       <span>Bagikan</span>
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <div>
//                   <div className="flex items-center mb-4">
//                     <XCircle className="w-8 h-8 text-red-500 mr-3" />
//                     <div>
//                       <h3 className="text-xl font-bold text-red-600">Sertifikat Tidak Valid</h3>
//                       <p className="text-gray-600">{validationResult.message}</p>
//                     </div>
//                   </div>
                  
//                   <div className="bg-red-50 border border-red-200 rounded-lg p-4">
//                     <div className="flex items-start">
//                       <AlertCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
//                       <div className="text-red-700 text-sm">
//                         <p className="font-medium mb-1">Kemungkinan penyebab:</p>
//                         <ul className="list-disc list-inside space-y-1">
//                           <li>Kode sertifikat salah atau tidak lengkap</li>
//                           <li>Sertifikat belum diterbitkan secara resmi</li>
//                           <li>Sertifikat telah dicabut atau tidak berlaku</li>
//                           <li>Kode sertifikat palsu atau dipalsukan</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Sample Codes for Testing */}
//           <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
//             <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
//               <AlertCircle className="w-5 h-5 mr-2" />
//               Kode Sertifikat untuk Testing
//             </h3>
//             <p className="text-blue-700 mb-4 text-sm">
//               Gunakan kode-kode berikut untuk mencoba fitur validasi:
//             </p>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               {sampleCodes.map((sample, index) => (
//                 <div key={index} className="bg-white rounded-lg p-4 border border-blue-200">
//                   <div className="font-mono text-sm font-bold text-blue-900 mb-1">{sample.code}</div>
//                   <div className="text-sm text-gray-700">{sample.name}</div>
//                   <div className="text-xs text-gray-500">{sample.program}</div>
//                   <button
//                     onClick={() => setCertificateCode(sample.code)}
//                     className="mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
//                   >
//                     Gunakan Kode
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* How It Works */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Cara Kerja Validasi</h2>
//             <p className="text-gray-600">
//               Proses validasi sertifikat yang aman dan terpercaya
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 step: '01',
//                 title: 'Masukkan Kode',
//                 description: 'Input kode sertifikat yang tertera pada sertifikat fisik atau digital Anda'
//               },
//               {
//                 step: '02',
//                 title: 'Verifikasi Database',
//                 description: 'Sistem akan mencocokkan kode dengan database sertifikat resmi kami'
//               },
//               {
//                 step: '03',
//                 title: 'Hasil Validasi',
//                 description: 'Dapatkan informasi lengkap tentang keaslian dan detail sertifikat'
//               }
//             ].map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white font-bold text-lg">{step.step}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-primary-900 mb-2">{step.title}</h3>
//                 <p className="text-gray-600 text-sm">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Pertanyaan Umum</h2>
//             <p className="text-gray-600">
//               Jawaban untuk pertanyaan yang sering diajukan tentang validasi sertifikat
//             </p>
//           </div>

//           <div className="space-y-6">
//             {[
//               {
//                 question: 'Di mana saya bisa menemukan kode sertifikat?',
//                 answer: 'Kode sertifikat biasanya terletak di bagian bawah sertifikat dengan format MMB + Tahun + Nomor urut (contoh: MMB2024001). Untuk sertifikat digital, kode ini juga tercantum dalam metadata file.'
//               },
//               {
//                 question: 'Berapa lama sertifikat berlaku?',
//                 answer: 'Sertifikat yang diterbitkan oleh Muda Mudi Brangsong berlaku selamanya dan tidak memiliki masa kadaluarsa, kecuali untuk sertifikat tertentu yang memiliki ketentuan khusus.'
//               },
//               {
//                 question: 'Apa yang harus dilakukan jika sertifikat tidak valid?',
//                 answer: 'Jika sertifikat menunjukkan status tidak valid, pastikan kode yang dimasukkan benar. Jika masih bermasalah, hubungi kami melalui email atau WhatsApp untuk verifikasi manual.'
//               },
//               {
//                 question: 'Bisakah saya meminta sertifikat pengganti jika hilang?',
//                 answer: 'Ya, Anda dapat meminta sertifikat pengganti dengan menghubungi kami dan menyertakan data diri serta bukti partisipasi dalam program. Akan ada biaya administrasi untuk penerbitan ulang.'
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
//                 <h3 className="text-lg font-semibold text-primary-900 mb-3">{faq.question}</h3>
//                 <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Support */}
//       <section className="py-16 bg-primary-800">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-white mb-4">
//             Butuh Bantuan Validasi?
//           </h2>
//           <p className="text-xl text-primary-100 mb-8">
//             Tim support kami siap membantu Anda dengan proses validasi sertifikat
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-secondary-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary-600 transition-colors duration-300">
//               Hubungi Support
//             </button>
//             <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300">
//               Panduan Lengkap
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default CertificateValidation;