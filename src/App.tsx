export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* NAV */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="font-semibold tracking-tight text-lg">
            Beniah
          </div>

          <nav className="hidden md:flex gap-8 text-sm text-white/70">
            <a href="#servicios" className="hover:text-white transition">
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-white transition">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-white transition">
              Contacto
            </a>
          </nav>

          <a
            href="#contacto"
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:opacity-80 transition"
          >
            Empezar
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-28 text-center px-6">
        <div className="max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight">
            Construimos productos digitales
            <span className="text-white/60"> de nivel mundial</span>
          </h1>

          <p className="mt-6 text-white/60 text-lg max-w-2xl mx-auto">
            Diseño, ingeniería y performance unidos en experiencias que se sienten
            tan bien como se ven.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#servicios"
              className="px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.02] transition"
            >
              Ver servicios
            </a>

            <a
              href="#contacto"
              className="px-6 py-3 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            Servicios
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Desarrollo Web",
                desc: "Aplicaciones rápidas, escalables y modernas con enfoque en performance."
              },
              {
                title: "UI / UX Premium",
                desc: "Interfaces minimalistas con enfoque en experiencia y conversión."
              },
              {
                title: "Optimización",
                desc: "Velocidad, SEO y arquitectura lista para escalar sin límites."
              }
            ].map((s, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition"
              >
                <h3 className="text-lg font-medium group-hover:translate-x-1 transition">
                  {s.title}
                </h3>
                <p className="mt-3 text-white/60 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="nosotros" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Sobre nosotros
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            Somos un equipo enfocado en construir productos digitales que combinan
            diseño de nivel Apple con ingeniería sólida tipo Stripe. Cada detalle
            importa: desde la primera impresión hasta la última interacción.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          
          <div className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
            
            <h2 className="text-3xl font-semibold">
              ¿Tienes un proyecto?
            </h2>

            <p className="mt-4 text-white/60">
              Construyamos algo que se sienta premium desde el primer clic.
            </p>

            <a
              href="mailto:contacto@beniah.com"
              className="inline-block mt-8 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.02] transition"
            >
              Hablemos
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/40 text-sm">
        © {new Date().getFullYear()} Beniah. Crafted with precision.
      </footer>
    </div>
  );
}