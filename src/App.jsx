import React, { useState, useEffect } from 'react';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isModalOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
  }, [isModalOpen]);

  const toggleFaq = (index) => setOpenFaq(openFaq === index ? null : index);
  const openModal = (e) => { e.preventDefault(); setIsModalOpen(true); };

  return (
    <div className="font-['Poppins'] bg-slate-950 text-slate-300 text-[16px] leading-relaxed antialiased min-h-screen selection:bg-blue-900 selection:text-white">
      
      {/* NAVEGACIÓN - Color metálico integrado al logo */}
      {/* Usamos un gris plomo (#7f858d) que simula el fondo de tu imagen original */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-3 bg-[#7f858d] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
        <div className="flex items-center gap-3">
          <img 
            src="/logo-final.png" 
            alt="JB Formación" 
            className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]" 
          />
        </div>
        <a 
          href="#precio" 
          onClick={openModal}
          className="bg-slate-950 hover:bg-slate-900 text-slate-100 px-6 py-2.5 rounded-full text-[14px] font-bold tracking-wide uppercase transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.3)] border border-slate-700"
        >
          Comenzar
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-[100px] pb-24 px-5 sm:px-10 overflow-hidden">
        {/* Fondo de portada - AHORA MÁS VISIBLE */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/portada-alumnos.jpg" 
            alt="Comunidad de alumnos" 
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradiente: Súper oscuro a la izquierda (para leer el texto), y casi transparente a la derecha (para ver la foto) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>
          {/* Difuminado sutil abajo para que no se corte feo al pasar a la siguiente sección */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent"></div>
        </div>

        <div className="max-w-[1200px] mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Texto Principal */}
          <div className="md:w-[55%]">
            <p className="text-[12px] font-bold tracking-[0.2em] text-blue-500 uppercase mb-6 flex items-center gap-4">
              <span className="w-10 h-[1px] bg-blue-600"></span>
              Diagnóstico Electrónico Automotriz
            </p>
            <h1 className="text-[clamp(36px,5.5vw,68px)] font-black leading-[1.05] text-white mb-6 tracking-tight">
              Diagnosticá fallas eléctricas con precisión de fábrica.
            </h1>
            <p className="text-[17px] text-slate-300 max-w-[500px] leading-[1.7] mb-10 font-light">
              El método estructurado para dejar de adivinar y empezar a medir. En 90 días, dominás el proceso completo después de leer el código de error.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <a 
                href="#precio" 
                onClick={openModal}
                className="inline-block bg-white hover:bg-slate-200 text-slate-950 px-8 py-3.5 rounded-full text-[15px] font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                Entrar al Nivel 1
              </a>
              <a 
                href="#metodo" 
                className="inline-block text-slate-300 hover:text-white text-[13px] uppercase tracking-[0.1em] font-semibold transition-colors duration-300"
              >
                El Método ↓
              </a>
            </div>
          </div>

          {/* Imagen de Josue - ESTILO EXACTO A TU CAPTURA */}
          <div className="md:w-[45%] flex justify-center perspective-1000">
            <div className="relative mt-12 md:mt-0">
              {/* Resplandor azul neón detrás de la tarjeta */}
              <div className="absolute -inset-1 bg-blue-600 rounded-2xl blur-lg opacity-60"></div>
              
              {/* Tarjeta */}
              <div className="relative bg-[#0b0f19] rounded-xl overflow-hidden border border-blue-500/30 flex flex-col shadow-2xl">
                <img 
                  src="/josue.jpg" 
                  alt="Instructor Josue" 
                  className="w-[280px] sm:w-[320px] h-[340px] sm:h-[380px] object-cover object-top opacity-90 mix-blend-lighten"
                />
                <div className="p-5 bg-gradient-to-b from-[#131b2c] to-[#0b0f19] text-center border-t border-slate-700/50">
                  <div className="font-bold text-white text-[17px] tracking-wide">Josué Balmaceda</div>
                  <div className="text-[11px] text-blue-400 uppercase tracking-widest mt-1">Instructor Especialista</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section id="metodo" className="py-24 px-5 sm:px-10 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-[12px] font-bold tracking-[0.2em] text-blue-400 uppercase mb-4">Ingeniería de Diagnóstico</p>
          <h2 className="text-[clamp(28px,4vw,44px)] font-black text-white leading-tight mb-16">
            Tres fases críticas para aislar cualquier falla
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { num: '01', title: 'Control de Fallos', desc: 'Lectura estratégica del escáner. Identificación del circuito comprometido sin asumir causas prematuras.' },
              { num: '02', title: 'Control de Conformidad', desc: 'Verificación empírica con multímetro y diagrama. Medición de variables físicas antes del desarme.' },
              { num: '03', title: 'Control por Efecto Cliente', desc: 'Triangulación de datos. Integración de la queja del usuario para fallas intermitentes o sin código.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 text-[72px] font-black text-slate-800/40 group-hover:text-blue-900/20 transition-colors leading-none">{step.num}</div>
                <h4 className="text-[19px] font-bold text-slate-100 mb-4 mt-8 relative z-10">{step.title}</h4>
                <p className="text-[14px] text-slate-400 leading-relaxed font-light relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS Y COMUNIDAD */}
      <section id="testimonios" className="py-24 px-5 sm:px-10 bg-slate-950 border-t border-slate-800/50 relative">
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-[12px] font-bold tracking-[0.2em] text-blue-500 uppercase mb-4">Casos de Éxito</p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-black text-white leading-tight">
              Lo que dicen nuestros alumnos
            </h2>
          </div>

          {/* CONTENEDOR VIDEO Y TESTIMONIOS ESCRITOS */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-20">
            
            {/* Columna del Video (Ocupa 3 columnas) */}
            <div className="lg:col-span-3 relative group flex flex-col justify-center">
              <div className="absolute -inset-1 bg-blue-600/30 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-[#050505] rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl aspect-video flex items-center justify-center">
                
                {/* REPRODUCTOR DE VIDEO (Acá va el link de YouTube) */}
                {/* Cambiá el "ID_DEL_VIDEO" por el código de tu video de YouTube */}
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/Qj4KIl61A5M?rel=0" 
                  title="Testimonios JB Formación" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Columna de Testimonios Escritos (Ocupa 2 columnas) */}
            <div className="lg:col-span-2 flex flex-col gap-6 justify-center">
              {/* Tarjeta Testimonio 1 */}
              <div className="p-7 bg-slate-900/80 border border-slate-700/50 rounded-2xl relative shadow-lg hover:border-blue-500/30 transition-colors">
                <span className="absolute -top-3 -left-1 text-[50px] text-blue-600/30 font-serif font-black leading-none">"</span>
                <p className="text-[15px] text-slate-300 italic mb-5 relative z-10 font-light leading-relaxed">
                  Tenía escáner pero no sabía qué hacer después del código. Cambiaba piezas a ver si alguna era. Ahora otros mecánicos me mandan los autos que no pueden resolver.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center font-bold text-blue-400 border border-slate-600">CA</div>
                  <div>
                    <div className="text-[14px] font-bold text-white tracking-wide">Carlos Almirón</div>
                    <div className="text-[12px] text-blue-400/80 uppercase tracking-widest mt-0.5">15 años de exp.</div>
                  </div>
                </div>
              </div>

              {/* Tarjeta Testimonio 2 */}
              <div className="p-7 bg-slate-900/80 border border-slate-700/50 rounded-2xl relative shadow-lg hover:border-blue-500/30 transition-colors">
                <span className="absolute -top-3 -left-1 text-[50px] text-blue-600/30 font-serif font-black leading-none">"</span>
                <p className="text-[15px] text-slate-300 italic mb-5 relative z-10 font-light leading-relaxed">
                  Un Mercedes que 3 talleres no pudieron resolver, lo saqué con un fusible faltante aplicando el método. En 3 trabajos recuperé la inversión del curso.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-slate-800 flex items-center justify-center font-bold text-blue-400 border border-slate-600">SP</div>
                  <div>
                    <div className="text-[14px] font-bold text-white tracking-wide">Sebastián Pereyra</div>
                    <div className="text-[12px] text-blue-400/80 uppercase tracking-widest mt-0.5">Taller propio</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CAPTURAS DE LA COMUNIDAD */}
          <div className="mt-20 pt-16 border-t border-slate-800/50">
            <div className="text-center mb-10">
              <h3 className="text-[22px] font-bold text-white mb-2">Comunidad técnica de apoyo 24/7</h3>
              <p className="text-[15px] text-slate-400 font-light">Casos reales y respuestas de colegas todos los días en nuestro grupo VIP de WhatsApp.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
              
              {/* 1. Captura en Imagen */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl group bg-slate-900 aspect-[9/16] sm:aspect-auto sm:h-[400px]">
                <p className="text-center m-3">Consultas 24/7</p>
                <img 
                  src="/captura1.png" 
                  alt="Chat de alumnos" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>

              {/* 2. CAPTURA EN VIDEO CON AUDIO (NUEVA) */}
              <div className="rounded-2xl overflow-hidden border border-blue-500/50 shadow-[0_0_25px_rgba(37,99,235,0.25)] bg-[#050505] aspect-[9/16] sm:aspect-auto sm:h-[400px] relative group flex flex-col justify-center">
                
                {/* Cartel Flotante Centrado */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] pointer-events-none animate-bounce whitespace-nowrap">
                  <span>🔊</span> Escuchar Audio
                </div>
                
                {/* Video con object-contain para no cortar los controles */}
                <video 
                  src="/captura-video.mp4" 
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                ></video>
              </div>

              {/* 3. CAPTURA EN VIDEO CON AUDIO (NUEVA) */}
              <div className="rounded-2xl overflow-hidden border border-blue-500/50 shadow-[0_0_25px_rgba(37,99,235,0.25)] bg-[#050505] aspect-[9/16] sm:aspect-auto sm:h-[400px] relative group flex flex-col justify-center">
                
                {/* Cartel Flotante Centrado */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-blue-600/90 backdrop-blur-md text-white text-[11px] font-bold px-4 py-2 rounded-full uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.5)] pointer-events-none animate-bounce whitespace-nowrap">
                  <span>🔊</span> Ver Captura
                </div>
                
                {/* Video con object-contain para no cortar los controles */}
                <video 
                  src="/captura-video2.mp4" 
                  controls
                  playsInline
                  className="w-full h-full object-contain"
                ></video>
              </div>

              {/* 4. Captura en Imagen */}
              <div className="rounded-2xl overflow-hidden border border-slate-700/50 shadow-xl group bg-slate-900 aspect-[9/16] sm:aspect-auto sm:h-[400px]">
              <p className="text-center m-3">Resolución de casos</p>
                <img 
                  src="/captura4.png" 
                  alt="Chat de alumnos" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* PRECIO (Tarjeta Metálica Pulida) */}
      <section id="precio" className="py-24 px-5 sm:px-10 bg-[radial-gradient(ellipse_at_center,rgba(30,58,138,0.15)_0%,rgba(2,6,23,1)_70%)]">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
            <span className="bg-gradient-to-r from-blue-900 to-slate-800 text-blue-100 text-[12px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-inner">
              Acceso Inmediato
            </span>
          </div>
          <h2 className="text-[36px] font-black text-white leading-tight mb-4">
            Inversión Tecnológica
          </h2>
          <p className="text-[16px] text-slate-400 mb-12 font-light">
            Recuperá el valor de la capacitación con tu primer diagnóstico exitoso.
          </p>

          <div className="bg-slate-900/80 backdrop-blur-sm border border-slate-700/60 rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(15,23,42,0.8)] relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
            
            <div className="p-10 border-b border-slate-800/80 relative text-center">
              <div className="text-[64px] font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-blue-100 to-slate-400 leading-none mb-3">
                USD 197
              </div>
              <div className="text-[13px] text-blue-400 uppercase tracking-[0.2em] font-medium">Nivel 1 · 3 Meses de Acceso</div>
            </div>
            
            <div className="p-10 text-left bg-gradient-to-b from-slate-900/50 to-slate-950/80">
              <ul className="space-y-6 mb-12">
                {[
                  '+ de 60 horas de contenido grabado',
                  'Acceso 24/7 a módulos técnicos',
                  'Clases de revisión de casos (Viernes)',
                  'Soporte en comunidad privada',
                  '+40.000 diagramas y Software Dicatec 3.3',
                  'Certificado de Especialización Nivel 1'
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-center text-[15px] text-slate-300 font-light">
                    <div className="w-5 h-5 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/30 shrink-0">
                      <span className="text-blue-400 text-[10px]">✓</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button 
                onClick={openModal}
                className="w-full bg-gradient-to-r from-slate-300 via-blue-100 to-white hover:from-white hover:to-blue-50 text-slate-900 py-4 rounded-xl text-[15px] font-bold uppercase tracking-widest transition-all duration-300 shadow-[0_5px_20px_rgba(191,219,254,0.2)] hover:shadow-[0_5px_25px_rgba(191,219,254,0.3)]"
              >
                Inscribirse al Nivel 1
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800/80 py-10 px-6 bg-slate-950 text-center text-[12px] text-slate-500 uppercase tracking-widest">
        <p className="mb-2"><strong className="text-slate-300">JB Formación Electromecánica</strong></p>
        <p>San Juan, Argentina · © 2026 Todos los derechos reservados.</p>
      </footer>

      {/* MODAL CHECKOUT */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[200] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-6"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl p-8 max-w-[440px] w-full relative shadow-[0_0_40px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-5 right-5 text-slate-500 hover:text-white text-[28px] leading-none transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h3 className="text-[24px] font-black text-white mb-2">Checkout Seguro</h3>
            <div className="text-slate-400 text-[14px] mb-8 font-light">Seleccioná tu método de contacto o pago.</div>
            
            <div className="flex flex-col gap-4">
              <a href="https://checkout.dlocalgo.com/validate/recurring/DCXhuxTsJQuNmReuVeIWqY97iyf2Lxj9" className="flex items-center gap-4 p-5 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-400/50 hover:bg-slate-800 transition-all group">
                <span className="text-[24px] grayscale group-hover:grayscale-0 transition-all">💳</span>
                <div>
                  <div className="text-[14px] font-bold text-white uppercase tracking-wider">Abonar Inscripción</div>
                  <div className="text-[12px] text-slate-400 mt-1 font-light">Tarjetas, Transferencia o Mercado Pago</div>
                </div>
              </a>
              
              <a href="https://wa.me/5492645571413" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-5 bg-slate-800/50 border border-slate-700 rounded-xl hover:border-blue-400/50 hover:bg-slate-800 transition-all group">
                <span className="text-[24px] grayscale group-hover:grayscale-0 transition-all">💬</span>
                <div>
                  <div className="text-[14px] font-bold text-white uppercase tracking-wider">Consultar Asesor</div>
                  <div className="text-[12px] text-slate-400 mt-1 font-light">Atención directa por WhatsApp</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* WHATSAPP FLOTANTE DISCRETO */}
      <a 
        href="https://wa.me/5492645571413" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[90] flex items-center justify-center w-14 h-14 bg-slate-900 border border-slate-700 text-white rounded-full shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 group"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-blue-300 group-hover:text-blue-100 transition-colors">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}