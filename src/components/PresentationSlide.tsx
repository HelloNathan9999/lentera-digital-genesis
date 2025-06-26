
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
}

const PresentationSlide: React.FC<SlideProps> = ({ slideNumber, totalSlides, onNext, onPrev }) => {
  const renderSlide = () => {
    switch (slideNumber) {
      case 1:
        return (
          <div className="relative h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop" 
              alt="Professional workspace" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
            />
            <div className="relative z-10 text-center text-white animate-fade-in">
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let Me Introduce Myself
              </h1>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
                <h2 className="text-4xl font-semibold mb-6 whitespace-nowrap">Nathannael Wijaya, S.Ds., M.IT.</h2>
                <p className="text-2xl mb-8 text-purple-200">Creative Director & Multidisciplinary Digital Creator</p>
                <div className="text-xl font-bold text-yellow-400 mb-6">RUBIX STUDIO</div>
                
                <div className="grid grid-cols-2 gap-6 text-lg">
                  <div className="space-y-3">
                    <div className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg p-3">
                      <span>• Marisini.com</span>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg p-3">
                      <span>• SERRSAN.clo</span>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-3">
                      <span>• MudaBisnis.com</span>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-3">
                      <span>• SENTINEL – Satsiber TNI</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg p-3">
                      <span>• BunnyClown - Counter-Attack</span>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-teal-500 to-green-500 rounded-lg p-3">
                      <span>• BERSIH.IN – Bank Sampah Digital</span>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg p-3">
                      <span>• PT. Ghalib Cahaya Mulia</span>
                    </div>
                    <div className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg p-3">
                      <span>• Literacy Community Hub</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="relative h-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop" 
              alt="Peaceful mountain" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 text-center text-white animate-scale-in max-w-6xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Setiap Mimpi Dimulai dari Tidur yang Nyenyak
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed">Kita semua pernah membayangkan versi terbaik dari diri kita.</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed">Tapi banyak dari kita masih tertidur dalam zona nyaman.</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed">Kita merasa bergerak, padahal hanya scroll tanpa arah.</p>
                </div>
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed text-yellow-300 font-semibold">Diam Di Tempat, tak pernah bertumbuh.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="relative h-full bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop" 
              alt="Matrix code" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            <div className="relative z-10 text-center text-white animate-fade-in max-w-6xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Masalah Kita Bukan Skill, Tapi Ketakutan
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30">
                  <p className="leading-relaxed">Kita bisa, tapi seringkali takut gagal.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30">
                  <p className="leading-relaxed">Takut diremehkan, takut dianggap sok jago.</p>
                </div>
                <div className="bg-gradient-to-br from-yellow-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                  <p className="leading-relaxed">Yang mengurung kita bukan dunia, tapi pikiran sendiri.</p>
                </div>
                <div className="bg-gradient-to-br from-red-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/40">
                  <p className="leading-relaxed text-yellow-300 font-bold text-3xl">Musuh terbesar adalah diri sendiri.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="relative h-full bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop" 
              alt="Mountain peak" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
            />
            <div className="relative z-10 text-center text-white animate-scale-in max-w-6xl mx-auto px-8">
              <h1 className="text-6xl font-bold mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight">
                Gagal Itu Bukan Ketika Kita Belum Punya, Tapi Ketika Kita Menyerah
              </h1>
              <div className="grid grid-cols-1 gap-8 text-3xl max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-green-500/25 to-emerald-500/25 backdrop-blur-sm rounded-2xl p-12 border border-green-400/30 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed text-green-200">Kita tidak perlu jadi siapa-siapa untuk memulai.</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-500/25 to-teal-500/25 backdrop-blur-sm rounded-2xl p-12 border border-emerald-400/30 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed text-emerald-200 font-bold">Jangan akui kegagalan kalau kamu belum pernah berhasil.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="relative h-full bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop" 
              alt="Ocean waves" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 text-center text-white animate-fade-in max-w-7xl mx-auto px-8">
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Media Digital Itu Lautan, Kita Bisa Tenggelam atau Berselancar
              </h1>
              <div className="grid grid-cols-2 gap-6 text-xl mb-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/30">
                  <p className="leading-relaxed">Jangan cuma jadi penonton di dunia digital.</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                  <p className="leading-relaxed">Kontenmu bukan hanya postingan, tapi jejak digital.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 mb-8">
                <p className="text-3xl font-bold text-yellow-300">Marisini.com = Dari suara lokal, Dengan Kualitas global.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {['WhatsApp', 'TikTok', 'Instagram', 'Twitter', 'Facebook', 'YouTube', 'Dan Lainnya'].map((platform, index) => (
                  <div key={index} className="bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 transform hover:scale-110 transition-transform">
                    {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="relative h-full bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop" 
              alt="Forest sunbeam" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 text-center text-white animate-scale-in max-w-6xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                METAMORFOSIS
              </h1>
              <h2 className="text-4xl font-semibold mb-12 text-pink-300">
                Kalau Mau Tumbuh, Harus Berani Muncul ke Permukaan
              </h2>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                <div className="bg-gradient-to-br from-purple-500/25 to-pink-500/25 backdrop-blur-sm rounded-2xl p-10 border border-purple-400/30 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed">Konten pertama mungkin jelek.</p>
                </div>
                <div className="bg-gradient-to-br from-pink-500/25 to-rose-500/25 backdrop-blur-sm rounded-2xl p-10 border border-pink-400/30 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed font-bold text-pink-200">Tapi lebih baik malu karena mencoba, daripada diam karena takut.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="relative h-full bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop" 
              alt="Laptop technology" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
            />
            <div className="relative z-10 text-center text-white animate-fade-in max-w-6xl mx-auto px-8">
              <h1 className="text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Kesempatan Tidak Datang, Tapi Diciptakan
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl mb-8">
                <div className="bg-gradient-to-br from-yellow-500/25 to-orange-500/25 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                  <p className="leading-relaxed">Mobil sport cuma punya dua kursi: untuk dirimu, dan untuk peluang.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/25 to-red-500/25 backdrop-blur-sm rounded-2xl p-8 border border-orange-400/30 transform hover:scale-105 transition-transform">
                  <p className="leading-relaxed text-yellow-300 font-bold">Jangan nunggu diajak, mulai aja sendiri!</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-500/30 to-yellow-500/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/40">
                <h3 className="text-3xl font-bold mb-6 text-yellow-300">Pelajari Cara Mengemudi</h3>
                <div className="grid grid-cols-2 gap-6 text-xl">
                  <div className="bg-white/10 rounded-lg p-4">
                    <span>• Kebutuhan dan Keinginan</span>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <span>• Rasa dan Pelayanan / Service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="relative h-full bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop" 
              alt="Water reflection" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 text-center text-white animate-scale-in max-w-6xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Beda Warna, Rasa, dan Jentaka
              </h1>
              <div className="grid grid-cols-5 gap-6 text-xl">
                {[
                  { text: 'Percobaan', color: 'from-red-500 to-pink-500' },
                  { text: 'Evaluasi', color: 'from-orange-500 to-yellow-500' },
                  { text: 'Bercermin', color: 'from-green-500 to-emerald-500' },
                  { text: 'Refleksi', color: 'from-blue-500 to-cyan-500' },
                  { text: 'Mencoba Kembali dengan cara yang berbeda', color: 'from-purple-500 to-indigo-500' }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${item.color}/25 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transform hover:scale-110 transition-all duration-300 hover:rotate-3`}>
                    <p className="leading-relaxed font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 9:
        return (
          <div className="relative h-full bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop" 
              alt="Green mountain" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 text-center text-white animate-fade-in max-w-6xl mx-auto px-8">
              <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight">
                Kamu Tidak Perlu Viral, Cukup Jadi Lebih Berani dari Kemarin
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl mb-8">
                <div className="bg-gradient-to-br from-emerald-500/25 to-teal-500/25 backdrop-blur-sm rounded-2xl p-8 border border-emerald-400/30">
                  <p className="leading-relaxed">Tidak harus cepat, tapi Konsisten.</p>
                </div>
                <div className="bg-gradient-to-br from-teal-500/25 to-cyan-500/25 backdrop-blur-sm rounded-2xl p-8 border border-teal-400/30">
                  <p className="leading-relaxed font-bold text-teal-200">Bertanggung Jawab.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40">
                <h3 className="text-3xl font-bold mb-6 text-cyan-300">Tangga Pertumbuhan</h3>
                <div className="flex justify-center items-center space-x-4 text-xl">
                  {['Takut', 'Coba', 'Malu', 'Belajar', 'Percaya', 'Terbang'].map((step, index) => (
                    <React.Fragment key={index}>
                      <div className="bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 transform hover:scale-110 transition-transform">
                        {step}
                      </div>
                      {index < 5 && <ChevronRight className="text-cyan-300" size={20} />}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 10:
        return (
          <div className="relative h-full bg-gradient-to-br from-violet-900 via-purple-900 to-indigo-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&h=1080&fit=crop" 
              alt="Mountain summit" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
            />
            <div className="relative z-10 text-center text-white animate-scale-in max-w-7xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-12 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                Puncak Tertinggi
              </h1>
              <div className="grid grid-cols-5 gap-4 text-lg">
                {[
                  { text: 'Berusaha', color: 'from-red-500 to-pink-500' },
                  { text: 'Menabung', color: 'from-orange-500 to-yellow-500' },
                  { text: 'Buka Peluang Usaha, Dan Lapangan Kerja Baru', color: 'from-green-500 to-emerald-500' },
                  { text: 'Monitoring', color: 'from-blue-500 to-cyan-500' },
                  { text: 'Management', color: 'from-purple-500 to-indigo-500' }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${item.color}/25 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300`}>
                    <p className="leading-relaxed font-semibold">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-4 text-lg mt-6">
                {[
                  { text: 'Pola Berfikir Start-UP', color: 'from-teal-500 to-green-500' },
                  { text: 'Langkah dan Value', color: 'from-cyan-500 to-blue-500' },
                  { text: 'Trading', color: 'from-indigo-500 to-purple-500' },
                  { text: 'Investasi', color: 'from-pink-500 to-rose-500' },
                  { text: '', color: '' }
                ].map((item, index) => (
                  item.text ? (
                    <div key={index} className={`bg-gradient-to-br ${item.color}/25 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transform hover:scale-105 transition-all duration-300`}>
                      <p className="leading-relaxed font-semibold">{item.text}</p>
                    </div>
                  ) : <div key={index}></div>
                ))}
              </div>
            </div>
          </div>
        );

      case 11:
        return (
          <div className="relative h-full bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <img 
              src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop" 
              alt="Light through forest" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-70"
            />
            <div className="relative z-10 text-center text-white animate-fade-in max-w-6xl mx-auto px-8">
              <h1 className="text-7xl font-bold mb-12 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                Jangan Jadi Cermin, Jadilah Lentera!
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl mb-8">
                <div className="bg-gradient-to-br from-amber-500/25 to-orange-500/25 backdrop-blur-sm rounded-2xl p-10 border border-amber-400/30">
                  <p className="leading-relaxed">Cermin hanya memantulkan Object.</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/25 to-red-500/25 backdrop-blur-sm rounded-2xl p-10 border border-orange-400/30">
                  <p className="leading-relaxed font-bold text-orange-200">Tapi Lentera menerangi jalan.</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-yellow-500/30 to-amber-500/30 backdrop-blur-sm rounded-2xl p-12 border border-yellow-400/40">
                <p className="text-4xl font-bold text-yellow-300 leading-relaxed">
                  Dunia ini butuh pemuda yang menyalakan arah, bukan hanya mengikuti arus.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Slide not found</div>;
    }
  };

  return (
    <div className="relative w-full h-full">
      {renderSlide()}
      
      {/* Pagination Dots */}
      <div className="absolute top-8 left-8 flex space-x-2 z-20">
        {Array.from({ length: totalSlides }, (_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i + 1 === slideNumber
                ? 'bg-white shadow-lg scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Visual Only) */}
      <div className="absolute bottom-8 right-8 flex space-x-4 z-20">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
          <ChevronLeft className="text-white" size={24} />
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border border-white/30">
          <ChevronRight className="text-white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default PresentationSlide;
