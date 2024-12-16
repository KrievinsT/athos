import React from 'react';
import '../style/LandingPage.css';

function LandingPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-16">
      <header className="fixed top-0 left-0 w-full bg-transparent z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-bold text-2xl">
            <img
              src="https://framerusercontent.com/images/3dpALmvrIR88qPmbDlYoTyJSig.png"
              className="w-16 h-16"
              alt="Logo"
            />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#work" className="text-gray-300 hover:text-white transition">
              Work
            </a>
            <a href="#experience" className="text-gray-300 hover:text-white transition">
              Experience
            </a>
            <a href="#blog" className="text-gray-300 hover:text-white transition">
              Blog
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition">
              FAQ
            </a>
          </nav>

          <a
            href="#contact"
            className="px-3 py-1 text-sm text-white border rounded-full hover:bg-gray-700 transition"
          >
            Get in Touch
          </a>

          <div className="md:hidden flex items-center">
            <button className="text-gray-300 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="relative w-full max-w-lg mt-20"> {/* Added margin top to space it from the header */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast"></div> {/* Purple ball */}
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast animation-delay-1000"></div> {/* Blue ball */}
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast animation-delay-2000"></div> {/* Teal ball */}
        <div className="m-8 relative space-y-4">
          {/* Add content here */}
          <div className="flex justify-center">
            <img
              src="https://framerusercontent.com/images/vq9vnuJruUyplvTmweJBT00k1I.jpg" 
              style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} 
            />
          </div>
          <p className="text-gray-300 text-4xl">Designed for Designers to showcase their work</p>
          <p className="text-gray-300 text-lg">Helping startups and brands to craft expressive and engaging solutions for their software needs.</p>
          </div>
          <button className="rounded-full  button-border-animation relative overflow-hidden  px-4 py-1.5 bg-black">
        <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg text-white text-sm">
        Use This Template
        </span>
        <span aria-hidden className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-white before:via-blue-200 before:to-blue-200" />
        </button>

        <button
         className="rounded-full bg-white/10 px-8 py-3 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 absolute right-14">
        Get Athos Plus
        </button>
        
        {/* neibeidzama scrolla animacija sadala */}
        <section>
        <div class="w-full inline-flex flex-nowrap">
            
        </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
