import React from 'react';

interface SlideProps {
  slideNumber: number;
  totalSlides: number;
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

const PresentationSlide: React.FC<SlideProps> = ({ slideNumber, isActive }) => {
  const renderSlide = () => {
    const slideClass = isActive ? 'animate-fade-in' : '';
    const parallaxClass = isActive ? 'animate-scale-in' : '';
    
    switch (slideNumber) {
      case 1:
        return (
          <div className="relative h-full bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className={`absolute inset-0 transition-all duration-2000 ${isActive ? 'scale-110' : 'scale-100'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay'
              }}
            />
            <div className={`relative z-10 text-center text-white ${slideClass} ${parallaxClass}`}>
              <h1 className={`text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Let Me Introduce Myself
              </h1>
              <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20 transition-all duration-2000 delay-300 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <h2 className="text-4xl font-semibold mb-6 whitespace-nowrap">Nathannael Wijaya, S.Ds., M.IT.</h2>
                <p className="text-2xl mb-8 text-purple-200">Creative Director & Multidisciplinary Digital Creator</p>
                <div className="text-xl font-bold text-yellow-400 mb-6">RUBIX STUDIO</div>
                
                <div className="grid grid-cols-2 gap-6 text-lg">
                  <div className="space-y-3">
                    {[
                      { text: '• Marisini.com', color: 'from-blue-500 to-cyan-500' },
                      { text: '• SERRSAN.clo', color: 'from-green-500 to-emerald-500' },
                      { text: '• MudaBisnis.com', color: 'from-orange-500 to-red-500' },
                      { text: '• SENTINEL – Satsiber TNI', color: 'from-purple-500 to-pink-500' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-center bg-gradient-to-r ${item.color} rounded-lg p-3 transition-all duration-1000 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}
                        style={{ transitionDelay: `${800 + index * 200}ms` }}
                      >
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {[
                      { text: '• BunnyClown - Counter-Attack', color: 'from-indigo-500 to-blue-500' },
                      { text: '• BERSIH.IN – Bank Sampah Digital', color: 'from-teal-500 to-green-500' },
                      { text: '• PT. Ghalib Cahaya Mulia', color: 'from-yellow-500 to-orange-500' },
                      { text: '• Literacy Community Hub', color: 'from-pink-500 to-rose-500' }
                    ].map((item, index) => (
                      <div 
                        key={index}
                        className={`flex items-center justify-center bg-gradient-to-r ${item.color} rounded-lg p-3 transition-all duration-1000 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-[50px] opacity-0'}`}
                        style={{ transitionDelay: `${800 + index * 200}ms` }}
                      >
                        <span>{item.text}</span>
                      </div>
                    ))}
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
            <div 
              className={`absolute inset-0 transition-all duration-3000 ${isActive ? 'scale-105' : 'scale-100'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-7xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                Setiap Mimpi Dimulai dari Tidur yang Nyenyak
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                {[
                  'Kita semua pernah membayangkan versi terbaik dari diri kita.',
                  'Tapi banyak dari kita masih tertidur dalam zona nyaman.',
                  'Kita merasa bergerak, padahal hanya scroll tanpa arah.',
                  'Diam Di Tempat, tak pernah bertumbuh.'
                ].map((text, index) => (
                  <div 
                    key={index}
                    className={`bg-white/15 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1200 hover:scale-105 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} ${index === 3 ? 'text-yellow-300 font-semibold' : ''}`}
                    style={{ transitionDelay: `${500 + index * 300}ms` }}
                  >
                    <p className="leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="relative h-full bg-gradient-to-br from-red-900 via-orange-900 to-yellow-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className={`absolute inset-0 transition-all duration-2500 ${isActive ? 'scale-110 rotate-1' : 'scale-100 rotate-0'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.5
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-7xl font-bold mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'rotate-0 opacity-100' : 'rotate-3 opacity-0'}`}>
                Masalah Kita Bukan Skill, Tapi Ketakutan
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                {[
                  'Kita bisa, tapi seringkali takut gagal.',
                  'Takut diremehkan, takut dianggap sok jago.',
                  'Yang mengurung kita bukan dunia, tapi pikiran sendiri.',
                  'Musuh terbesar adalah diri sendiri.'
                ].map((text, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-400/30 transition-all duration-1000 ${isActive ? 'translate-x-0 opacity-100' : `translate-x-${index % 2 === 0 ? '[-100px]' : '[100px]'} opacity-0`} ${index === 3 ? 'text-yellow-300 font-bold text-3xl from-red-500/30 to-orange-500/30 border-red-400/40' : ''}`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <p className="leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="relative h-full bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div 
              className={`absolute inset-0 transition-all duration-3000 ${isActive ? 'scale-105' : 'scale-95'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.7
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-6xl font-bold mb-12 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight transition-all duration-2000 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                Gagal Itu Bukan Ketika Kita Belum Punya, Tapi Ketika Kita Menyerah
              </h1>
              <div className="grid grid-cols-1 gap-8 text-3xl max-w-4xl mx-auto">
                {[
                  { text: 'Kita tidak perlu jadi siapa-siapa untuk memulai.', color: 'from-green-500/25 to-emerald-500/25', border: 'border-green-400/30', textColor: 'text-green-200' },
                  { text: 'Jangan akui kegagalan kalau kamu belum pernah berhasil.', color: 'from-emerald-500/25 to-teal-500/25', border: 'border-emerald-400/30', textColor: 'text-emerald-200 font-bold' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-r ${item.color} backdrop-blur-sm rounded-2xl p-12 border ${item.border} transition-all duration-1500 hover:scale-105 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
                    style={{ transitionDelay: `${800 + index * 400}ms` }}
                  >
                    <p className={`leading-relaxed ${item.textColor}`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="relative h-full bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className={`absolute inset-0 transition-all duration-2500 ${isActive ? 'scale-110' : 'scale-100'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-7xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-6xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[-20px] opacity-0'}`}>
                Media Digital Itu Lautan, Kita Bisa Tenggelam atau Berselancar
              </h1>
              <div className="grid grid-cols-2 gap-6 text-xl mb-8">
                {[
                  { text: 'Jangan cuma jadi penonton di dunia digital.', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-400/30' },
                  { text: 'Kontenmu bukan hanya postingan, tapi jejak digital.', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-400/30' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl p-6 border ${item.border} transition-all duration-1200 ${isActive ? 'translate-x-0 opacity-100' : `translate-x-${index === 0 ? '[-50px]' : '[50px]'} opacity-0`}`}
                    style={{ transitionDelay: `${600 + index * 200}ms` }}
                  >
                    <p className="leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className={`bg-gradient-to-r from-yellow-500/30 to-orange-500/30 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/40 mb-8 transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
                <p className="text-3xl font-bold text-yellow-300">Marisini.com = Dari suara lokal, Dengan Kualitas global.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {['WhatsApp', 'TikTok', 'Instagram', 'Twitter', 'Facebook', 'YouTube', 'Dan Lainnya'].map((platform, index) => (
                  <div 
                    key={index}
                    className={`bg-white/15 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20 transition-all duration-1000 hover:scale-110 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[20px] opacity-0'}`}
                    style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  >
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
            <div 
              className={`absolute inset-0 transition-all duration-3000 ${isActive ? 'scale-105 rotate-1' : 'scale-100 rotate-0'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                METAMORFOSIS
              </h1>
              <h2 className={`text-4xl font-semibold mb-12 text-pink-300 transition-all duration-1200 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
                Kalau Mau Tumbuh, Harus Berani Muncul ke Permukaan
              </h2>
              <div className="grid grid-cols-2 gap-8 text-2xl">
                {[
                  'Konten pertama mungkin jelek.',
                  'Tapi lebih baik malu karena mencoba, daripada diam karena takut.'
                ].map((text, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-purple-500/25 to-pink-500/25 backdrop-blur-sm rounded-2xl p-10 border border-purple-400/30 transition-all duration-1500 hover:scale-105 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} ${index === 1 ? 'font-bold text-pink-200' : ''}`}
                    style={{ transitionDelay: `${600 + index * 400}ms` }}
                  >
                    <p className="leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="relative h-full bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className={`absolute inset-0 transition-all duration-2500 ${isActive ? 'scale-105' : 'scale-95'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.5
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-6xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'rotate-0 opacity-100' : 'rotate-[-2deg] opacity-0'}`}>
                Kesempatan Tidak Datang, Tapi Diciptakan
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl mb-8">
                {[
                  'Mobil sport cuma punya dua kursi: untuk dirimu, dan untuk peluang.',
                  'Jangan nunggu diajak, mulai aja sendiri!'
                ].map((text, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-yellow-500/25 to-orange-500/25 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 transition-all duration-1200 ${isActive ? 'translate-x-0 opacity-100' : `translate-x-${index === 0 ? '[-60px]' : '[60px]'} opacity-0`} ${index === 1 ? 'transform hover:scale-105 text-yellow-300 font-bold' : ''}`}
                    style={{ transitionDelay: `${500 + index * 300}ms` }}
                  >
                    <p className="leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className={`bg-gradient-to-r from-red-500/30 to-yellow-500/30 backdrop-blur-sm rounded-2xl p-8 border border-red-400/40 transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1100ms' }}>
                <h3 className="text-3xl font-bold mb-6 text-yellow-300">Pelajari Cara Mengemudi</h3>
                <div className="grid grid-cols-2 gap-6 text-xl">
                  {[
                    '• Kebutuhan dan Keinginan',
                    '• Rasa dan Pelayanan / Service'
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className={`bg-white/10 rounded-lg p-4 transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                      style={{ transitionDelay: `${1500 + index * 200}ms` }}
                    >
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 8:
        return (
          <div className="relative h-full bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div 
              className={`absolute inset-0 transition-all duration-3000 ${isActive ? 'scale-110' : 'scale-100'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-7xl font-bold mb-12 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
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
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${item.color}/25 backdrop-blur-sm rounded-2xl p-8 border border-white/20 transition-all duration-1200 hover:scale-110 hover:rotate-3 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                    style={{ transitionDelay: `${400 + index * 200}ms` }}
                  >
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
            <div 
              className={`absolute inset-0 transition-all duration-2500 ${isActive ? 'scale-105' : 'scale-95'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-5xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent leading-tight transition-all duration-1500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-[-15px] opacity-0'}`}>
                Kamu Tidak Perlu Viral, Cukup Jadi Lebih Berani dari Kemarin
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl mb-8">
                {[
                  { text: 'Tidak harus cepat, tapi Konsisten.', color: 'from-emerald-500/25 to-teal-500/25', border: 'border-emerald-400/30' },
                  { text: 'Bertanggung Jawab.', color: 'from-teal-500/25 to-cyan-500/25', border: 'border-teal-400/30', textColor: 'font-bold text-teal-200' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl p-8 border ${item.border} transition-all duration-1200 ${isActive ? 'translate-x-0 opacity-100' : `translate-x-${index === 0 ? '[-40px]' : '[40px]'} opacity-0`}`}
                    style={{ transitionDelay: `${600 + index * 300}ms` }}
                  >
                    <p className={`leading-relaxed ${item.textColor || ''}`}>{item.text}</p>
                  </div>
                ))}
              </div>
              <div className={`bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40 transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
                <h3 className="text-3xl font-bold mb-6 text-cyan-300">Tangga Pertumbuhan</h3>
                <div className="flex justify-center items-center space-x-4 text-xl">
                  {['Takut', 'Coba', 'Malu', 'Belajar', 'Percaya', 'Terbang'].map((step, index) => (
                    <React.Fragment key={index}>
                      <div 
                        className={`bg-white/15 backdrop-blur-sm rounded-lg px-4 py-2 transition-all duration-1000 hover:scale-110 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                        style={{ transitionDelay: `${1500 + index * 150}ms` }}
                      >
                        {step}
                      </div>
                      {index < 5 && (
                        <div 
                          className={`text-cyan-300 transition-all duration-800 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                          style={{ transitionDelay: `${1650 + index * 150}ms` }}
                        >
                          →
                        </div>
                      )}
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
            <div 
              className={`absolute inset-0 transition-all duration-3000 ${isActive ? 'scale-110' : 'scale-100'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.6
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-7xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-7xl font-bold mb-12 bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
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
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${item.color}/25 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-1200 hover:scale-105 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
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
                  null
                ].map((item, index) => (
                  item ? (
                    <div 
                      key={index}
                      className={`bg-gradient-to-br ${item.color}/25 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-1200 hover:scale-105 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                      style={{ transitionDelay: `${1150 + index * 150}ms` }}
                    >
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
            <div 
              className={`absolute inset-0 transition-all duration-2500 ${isActive ? 'scale-105' : 'scale-95'}`}
              style={{ 
                backgroundImage: 'url(https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&h=1080&fit=crop)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'overlay',
                opacity: 0.7
              }}
            />
            <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-8 ${slideClass}`}>
              <h1 className={`text-7xl font-bold mb-12 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent transition-all duration-1500 ${isActive ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
                Jangan Jadi Cermin, Jadilah Lentera!
              </h1>
              <div className="grid grid-cols-2 gap-8 text-2xl mb-8">
                {[
                  'Cermin hanya memantulkan Object.',
                  'Tapi Lentera menerangi jalan.'
                ].map((text, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br from-amber-500/25 to-orange-500/25 backdrop-blur-sm rounded-2xl p-10 border border-amber-400/30 transition-all duration-1500 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'} ${index === 1 ? 'font-bold text-orange-200' : ''}`}
                    style={{ transitionDelay: `${600 + index * 400}ms` }}
                  >
                    <p className="leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
              <div className={`bg-gradient-to-r from-yellow-500/30 to-amber-500/30 backdrop-blur-sm rounded-2xl p-12 border border-yellow-400/40 transition-all duration-1800 ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
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
    </div>
  );
};

export default PresentationSlide;
