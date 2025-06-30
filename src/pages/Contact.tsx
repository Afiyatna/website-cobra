// import React, { useState } from 'react';
// import { 
//   MapPin, 
//   Phone, 
//   Mail, 
//   Clock, 
//   Send,
//   MessageCircle,
//   Instagram,
//   Facebook,
//   Twitter,
//   CheckCircle
// } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Simulate form submission
//     setIsSubmitted(true);
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: ''
//       });
//     }, 3000);
//   };

//   const contactInfo = [
//     {
//       icon: MapPin,
//       title: 'Alamat Sekretariat',
//       details: [
//         'Jl. Raya Brangsong No. 123',
//         'Desa Brangsong, Kecamatan Brangsong',
//         'Kabupaten Kendal, Jawa Tengah 51371'
//       ]
//     },
//     {
//       icon: Phone,
//       title: 'Nomor Telepon',
//       details: [
//         '+62 812-3456-7890 (WhatsApp)',
//         '+62 856-7890-1234 (Call/SMS)',
//         '+62 878-9012-3456 (Telegram)'
//       ]
//     },
//     {
//       icon: Mail,
//       title: 'Email',
//       details: [
//         'info@mudamudibrangsong.org',
//         'program@mudamudibrangsong.org',
//         'partnership@mudamudibrangsong.org'
//       ]
//     },
//     {
//       icon: Clock,
//       title: 'Jam Operasional',
//       details: [
//         'Senin - Jumat: 08.00 - 17.00 WIB',
//         'Sabtu: 08.00 - 12.00 WIB',
//         'Minggu: Tutup (kecuali ada acara)'
//       ]
//     }
//   ];

//   const socialMedia = [
//     {
//       icon: Instagram,
//       name: 'Instagram',
//       handle: '@mudamudibrangsong',
//       url: '#',
//       color: 'from-pink-500 to-purple-500'
//     },
//     {
//       icon: Facebook,
//       name: 'Facebook',
//       handle: 'Muda Mudi Brangsong',
//       url: '#',
//       color: 'from-blue-600 to-blue-700'
//     },
//     {
//       icon: Twitter,
//       name: 'Twitter',
//       handle: '@mudamudibrangsong',
//       url: '#',
//       color: 'from-blue-400 to-blue-500'
//     }
//   ];

//   const quickContacts = [
//     {
//       title: 'Program & Kegiatan',
//       description: 'Informasi tentang program dan cara berpartisipasi',
//       contact: 'program@mudamudibrangsong.org',
//       whatsapp: '+62 812-3456-7890'
//     },
//     {
//       title: 'Kemitraan & Donasi',
//       description: 'Kerjasama dan dukungan untuk organisasi',
//       contact: 'partnership@mudamudibrangsong.org',
//       whatsapp: '+62 856-7890-1234'
//     },
//     {
//       title: 'Media & Publikasi',
//       description: 'Liputan media dan informasi publikasi',
//       contact: 'media@mudamudibrangsong.org',
//       whatsapp: '+62 878-9012-3456'
//     }
//   ];

//   return (
//     <div className="pt-16 animate-fade-in">
//       {/* Hero Section */}
//       <section className="py-20 bg-gradient-to-r from-primary-800 to-primary-900 text-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center">
//             <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
//             <p className="text-xl text-primary-100 max-w-3xl mx-auto">
//               Kami siap mendengar dan membantu Anda. Jangan ragu untuk menghubungi kami 
//               untuk informasi, kerjasama, atau bergabung dengan program kami
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Information */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {contactInfo.map((info, index) => (
//               <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
//                 <div className="w-16 h-16 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg">
//                   <info.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-primary-900 mb-3">{info.title}</h3>
//                 <div className="space-y-1">
//                   {info.details.map((detail, detailIndex) => (
//                     <p key={detailIndex} className="text-gray-600 text-sm">{detail}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form and Map */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-white rounded-xl shadow-lg p-8">
//               <h2 className="text-2xl font-bold text-primary-900 mb-6">Kirim Pesan</h2>
              
//               {isSubmitted ? (
//                 <div className="text-center py-8">
//                   <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold text-green-600 mb-2">Pesan Terkirim!</h3>
//                   <p className="text-gray-600">Terima kasih atas pesan Anda. Kami akan segera merespons.</p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                         Nama Lengkap *
//                       </label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="Masukkan nama lengkap"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                         Email *
//                       </label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="nama@email.com"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                         Nomor WhatsApp
//                       </label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                         placeholder="+62 812-3456-7890"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                         Subjek *
//                       </label>
//                       <select
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       >
//                         <option value="">Pilih subjek</option>
//                         <option value="program">Informasi Program</option>
//                         <option value="join">Bergabung sebagai Anggota</option>
//                         <option value="partnership">Kemitraan</option>
//                         <option value="donation">Donasi</option>
//                         <option value="media">Media & Publikasi</option>
//                         <option value="other">Lainnya</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                       Pesan *
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       required
//                       rows={6}
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
//                       placeholder="Tulis pesan Anda di sini..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 flex items-center justify-center space-x-2"
//                   >
//                     <Send className="w-5 h-5" />
//                     <span>Kirim Pesan</span>
//                   </button>
//                 </form>
//               )}
//             </div>

//             {/* Map */}
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="h-full min-h-[500px] bg-gray-200 relative">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8984!2d110.1234567!3d-6.9876543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMTUuNiJTIDExMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sid!4v1234567890"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   className="absolute inset-0"
//                 ></iframe>
//                 <div className="absolute top-4 left-4 bg-white rounded-lg p-3 shadow-lg">
//                   <div className="flex items-center space-x-2">
//                     <MapPin className="w-5 h-5 text-primary-600" />
//                     <div>
//                       <div className="font-semibold text-primary-900 text-sm">Sekretariat</div>
//                       <div className="text-gray-600 text-xs">Desa Brangsong, Kendal</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Contacts */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Kontak Cepat</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Hubungi langsung departemen yang sesuai dengan kebutuhan Anda
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {quickContacts.map((contact, index) => (
//               <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
//                 <h3 className="text-lg font-semibold text-primary-900 mb-2">{contact.title}</h3>
//                 <p className="text-gray-600 mb-4 text-sm">{contact.description}</p>
                
//                 <div className="space-y-3">
//                   <a
//                     href={`mailto:${contact.contact}`}
//                     className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
//                   >
//                     <Mail className="w-4 h-4" />
//                     <span className="text-sm">{contact.contact}</span>
//                   </a>
//                   <a
//                     href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     <span className="text-sm">{contact.whatsapp}</span>
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Social Media */}
//       <section className="py-16 bg-gray-50">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl font-bold text-primary-900 mb-4">Ikuti Media Sosial Kami</h2>
//           <p className="text-gray-600 mb-8">
//             Dapatkan update terbaru tentang kegiatan dan program kami
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {socialMedia.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group"
//               >
//                 <div className={`bg-gradient-to-r ${social.color} rounded-xl p-6 text-white hover:scale-105 transition-transform duration-300`}>
//                   <social.icon className="w-12 h-12 mx-auto mb-4" />
//                   <h3 className="text-lg font-semibold mb-2">{social.name}</h3>
//                   <p className="text-sm opacity-90">{social.handle}</p>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-primary-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
//             <p className="text-gray-600">
//               Jawaban untuk pertanyaan yang paling sering ditanyakan
//             </p>
//           </div>

//           <div className="space-y-6">
//             {[
//               {
//                 question: 'Bagaimana cara bergabung dengan Muda Mudi Brangsong?',
//                 answer: 'Anda dapat bergabung dengan mengisi formulir pendaftaran di halaman "Bergabung" atau datang langsung ke sekretariat kami. Syarat utama adalah berusia 17-35 tahun dan berdomisili di Brangsong atau sekitarnya.'
//               },
//               {
//                 question: 'Apakah ada biaya untuk mengikuti program-program yang ada?',
//                 answer: 'Sebagian besar program kami gratis, terutama program sosial dan keagamaan. Untuk beberapa pelatihan khusus mungkin ada kontribusi minimal untuk biaya operasional.'
//               },
//               {
//                 question: 'Bagaimana cara menjadi mitra atau sponsor kegiatan?',
//                 answer: 'Anda dapat menghubungi kami melalui email partnership@mudamudibrangsong.org atau WhatsApp untuk mendiskusikan bentuk kerjasama yang sesuai dengan kebutuhan dan tujuan organisasi Anda.'
//               },
//               {
//                 question: 'Apakah organisasi ini terbuka untuk semua agama?',
//                 answer: 'Muda Mudi Brangsong terbuka untuk semua, namun sebagian besar program keagamaan kami berfokus pada nilai-nilai Islam. Kami menghormati keberagaman dan menyambut partisipasi dari semua kalangan dalam program sosial.'
//               }
//             ].map((faq, index) => (
//               <div key={index} className="bg-gray-50 rounded-lg p-6">
//                 <h3 className="text-lg font-semibold text-primary-900 mb-3">{faq.question}</h3>
//                 <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;

export default () => null;