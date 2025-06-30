import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  Twitter,
  Download,
  FileCheck
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-lg">Muda Mudi Brangsong</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Organisasi kepemudaan yang berkomitmen untuk aktif, kreatif, dan peduli terhadap masyarakat melalui berbagai program sosial dan keagamaan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-secondary-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">Beranda</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary-400 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-secondary-400 transition-colors">Program</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-secondary-400 transition-colors">Galeri</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-secondary-400 transition-colors">Berita</Link></li>
            </ul>
          </div>

          {/* Services */}
          {/* <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li><Link to="/partnerships" className="text-gray-300 hover:text-secondary-400 transition-colors">Kemitraan</Link></li>
              <li>
                <Link to="/downloads" className="text-gray-300 hover:text-secondary-400 transition-colors flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>Download Proposal</span>
                </Link>
              </li>
              <li>
                <Link to="/certificate-validation" className="text-gray-300 hover:text-secondary-400 transition-colors flex items-center space-x-1">
                  <FileCheck className="w-4 h-4" />
                  <span>Validasi Sertifikat</span>
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Jl. Raya Brangsong No. 123<br />
                  Brangsong, Kendal, Jawa Tengah
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+62 812-3456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@mudamudibrangsong.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © 2024 Muda Mudi Brangsong. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;