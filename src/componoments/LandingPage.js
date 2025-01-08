import React from 'react';
import '../style/LandingPage.css';

function LandingPage() {
    
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center px-16">
      <header className="static top-0 left-0 w-full bg-transparent z-50">
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



      <div className="relative w-full max-w-lg mt-20"> 
        <div className="absolute -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast"></div>
        <div className="absolute -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast animation-delay-1000"></div>
        <div className="absolute left-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast animation-delay-2000"></div>
        <div className="m-8 relative space-y-4">
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
         </div>
        
         <section className="relative w-full mt-10 overflow-hidden">
  <div className="flex items-center space-x-10 animate-scroll">
    {Array(2)
      .fill([
        "https://framerusercontent.com/images/9BXsOCAIoUWa18SOvVKxbkahg.png",
        "https://framerusercontent.com/images/UhyrGjyOSvUkVZWBmysfZCg6s4.png",
        "https://framerusercontent.com/images/axEbQrKhpYjJigPMinun2ajkc.png",
        "https://framerusercontent.com/images/hqIVsN8SplywoxNsCXdrELqh3Uc.png",
        "https://framerusercontent.com/images/ZCcbDAFfIHYrHLOqtVLKQXAIGY.png",
        "https://framerusercontent.com/images/PFfPRPqCnleo77thxuLEpUUjB0.png",
        "https://framerusercontent.com/images/Qs7RpNfTc6MXJVwxIY8QzQDhQ.png",
        "https://framerusercontent.com/images/vXxrIZDFEdcYsaqEYWnpcVYilU.png",
        "https://framerusercontent.com/images/T9PpAagNI1pVt63DYJjSH5ViE.png",
        "https://framerusercontent.com/images/neJyiCkJGsL33q9aEvjzzHMKHo.png",
      ])
      .flat()
      .map((src, idx) => (
        <img key={idx} src={src} className="w-16 h-16 object-contain" alt={`icon-${idx}`} />
      ))}
  </div>
  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-scroll {
      display: flex;
      animation: scroll 10s linear infinite;
    }
  `}</style>
</section>



     <section class="flex justify-center mt-24 w-[100%]">
    <div class="flex bg-gray-900 w-max-w-[1200px] rounded-xl p-16 border border-gray-800 overflow-hidden">
        <div class="absolute bg-green-400 blur-2xl rounded-full opacity-15 w-full"></div>
        <div class="relative z-10">
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="mb-4">
                        <h3 class="text-4xl text-white">Modernizing a Subscription Management Platform</h3> 
                    </div>
                    <div class="mb-6">
                        <p class="text-gray-500 text-xl"> 
                            With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.
                        </p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-center">
                        <img
                            src="https://framerusercontent.com/images/82V0lDZt5IN8w9i1157kfT8pSU.jpg?scale-down-to=1024"
                            class="max-w-[500px]" 
                        />
                        <div class="mt-4 text-white">
                            <p class="text-lg ">Engagement User Satisfaction</p>
                            <p class="text-lg">12min  4.5*</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <a
                    href="./work/modernization-of-a-subscription-management-platform"
                    class="inline-block bg-gray-900 border border-gray-700 rounded-xl shadow-md text-center px-8 py-4 text-white hover:bg-gray-800"> 
                    View case study
                </a>
            </div>
        </div>
    </div>
</section>

<section class="flex justify-center mt-24 w-[100%]">
    <div class="flex bg-gray-900 w-max-w-[1200px] rounded-xl p-16 border border-gray-800 overflow-hidden">
        <div class="absolute bg-green-400 blur-2xl rounded-full opacity-15 w-full"></div>
        <div class="relative z-10">
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="mb-4">
                        <h3 class="text-4xl text-white">Revamping an E-Commerce Website</h3> 
                    </div>
                    <div class="mb-6">
                        <p class="text-gray-500 text-xl"> 
                        Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies. 
                        </p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-center">
                        <img
                            src="https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=1024"
                            class="max-w-[500px]" 
                        />
                        <div class="mt-4 text-white">
                            <p class="text-lg ">Usability  User Retention</p>
                            <p class="text-lg">85%  70%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <a
                    href="./work/modernization-of-a-subscription-management-platform"
                    class="inline-block bg-gray-900 border border-gray-700 rounded-xl shadow-md text-center px-8 py-4 text-white hover:bg-gray-800"> 
                    View case study
                </a>
            </div>
        </div>
    </div>
</section>

<section class="flex justify-center mt-24 w-[100%]">
    <div class="flex bg-gray-900 w-max-w-[1000px] rounded-xl p-16 border border-gray-800 overflow-hidden">
        <div class="absolute bg-green-400 blur-2xl rounded-full opacity-15 w-full"></div>
        <div class="relative z-10">
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="mb-4">
                        <h3 class="text-4xl text-white">Developing a Mobile Health Tracking App</h3> 
                    </div>
                    <div class="mb-6">
                        <p class="text-gray-500 text-xl"> 
                        Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.                        
                        </p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-center">
                        <img
                            src="https://framerusercontent.com/images/Y1hHthCTPz6YNLIhonp2E5s5WU.jpg?scale-down-to=1024"
                            class="w-[400px] h-[300px] object-cover" 
                        />
                        <div class="mt-4 text-white">
                            <p class="text-lg ">Conversion Rate  User Satisfaction</p>
                            <p class="text-lg">12%  4.8*</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <a
                    href="./work/modernization-of-a-subscription-management-platform"
                    class="inline-block bg-gray-900 border border-gray-700 rounded-xl shadow-md text-center px-8 py-4 text-white hover:bg-gray-800"> 
                    View case study
                </a>
            </div>
        </div>
    </div>
</section>


<section class="flex justify-center mt-24 w-[100%]">
    <div class="flex bg-gray-900 w-max-w-[1000px] rounded-xl p-16 border border-gray-800 overflow-hidden">
        <div class="absolute bg-green-400 blur-2xl rounded-full opacity-15 w-full"></div>
        <div class="relative z-10">
            <div class="flex justify-between">
                <div class="flex-1">
                    <div class="mb-4">
                        <h3 class="text-4xl text-white">Optimizing a Corporate Intranet</h3> 
                    </div>
                    <div class="mb-6">
                        <p class="text-gray-500 text-xl"> 
                        An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money. 
                        </p>
                    </div>
                </div>
                <div class="flex justify-end">
                    <div class="text-center">
                        <img
                            src="https://framerusercontent.com/images/UlzZi7Dd7txMrOquJLbf9wyEiig.jpg?scale-down-to=1024"
                            class="w-[400px] h-[300px] object-cover" 
                        />
                        <div class="mt-4 text-white">
                            <p class="text-lg ">Conversion Rate  User Satisfaction</p>
                            <p class="text-lg">20% 95%</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6">
                <a
                    href="./work/modernization-of-a-subscription-management-platform"
                    class="inline-block bg-gray-900 border border-gray-700 rounded-xl shadow-md text-center px-8 py-4 text-white hover:bg-gray-800"> 
                    Coming Soon
                </a>
            </div> 
        </div>
    </div>
</section>

<section className="py-8">
  <div className="min-h-[30vh] p-4 flex items-center justify-center">
    <div className="max-w-3xl text-white text-lg md:text-2xl font-light leading-relaxed space-y-4">
      <p className="flex flex-wrap gap-2 items-center">
        Web designer and expert in
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          UX/UI Design
        </span>
        with over
      </p>
      
      <p className="flex flex-wrap gap-2 items-center">
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          15 years
        </span>
        of industry experience. Expertise extends to
      </p>
      
      <p className="flex flex-wrap gap-2 items-center">
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          Framer Development
        </span>
        enabling him to create
      </p>
      
      <p className="flex flex-wrap gap-2 items-center">
        both aesthetically pleasing and easily implementable.
      </p>
      
      <p className="flex flex-wrap gap-2 items-center">
        Currently works as
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          Product Designer
        </span>
        at FLYR Hospitality
      </p>
    </div>
  </div>
</section>


<section className="py-8 px-4">
  <div className="max-w-7xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-16 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/sQyyAhcgUbXckfoqQWM3dTteTA.png?scale-down-to=1024"
            alt="PerkUp Logo"
            className="max-h-full w-auto"
          />
        </div>
        <blockquote className="text-white text-lg font-light">
          &quot;He consistently exceeds our expectations&quot;
        </blockquote>
      </div>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-16 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/fATWoAolell4ae2UFdw2TeBM28.png"
            alt="S Logo"
            className="max-h-full w-auto"
          />
        </div>
        <blockquote className="text-white text-lg font-light">
          &quot;I recommend Goran whole-heartedly&quot;
        </blockquote>
      </div>

      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-16 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/rbcCSj5wo7EivYt5qpyuab4GMg.png?scale-down-to=512"
            alt="ISMS Connect Logo"
            className="max-h-full w-auto"
          />
        </div>
        <blockquote className="text-white text-lg font-light">
          &quot;Loved to work with Goran!&quot;
        </blockquote>
      </div>
    </div>
  </div>
</section>


<section className="py-16">
  <div className="p-8">
    <div className="text-4xl font-bold mb-4 text-white">Skills</div>
    <div className="flex flex-wrap gap-4">
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">UX Design</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">UI Design</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Product Design</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Consulting</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Design Systems</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Front-End Development</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Workshops</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Design Sprint</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Interaction Design</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">User Testing</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Usability Testing</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">UX Research</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Leadership</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">Mentoring</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">No-Code</div>
      <div className="px-4 py-2 bg-[#0F151F] rounded-full text-center text-white">+ More</div>
    </div>
  </div>
</section>

<section className="min-h-screen text-white p-8 md:p-16">
      <h1 className="text-[56px] font-light mb-32">Experience</h1>
      
      <div className="space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="text-[42px] font-light opacity-90">Design Lead</h2>
          <div className="text-right">
            <span className="block text-[42px] text-gray-300">Geonode</span>
            <span className="block text-2xl text-gray-400 mt-2">Jan 2020 - Jan 2023</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="text-[42px] font-light opacity-90">Lead UX/UI Designer</h2>
          <div className="text-right">
            <span className="block text-[42px] text-gray-300">Truely</span>
            <span className="block text-2xl text-gray-400 mt-2">Jan 2018 - Jan 2020</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="text-[42px] font-light opacity-90">Senior Product Designer</h2>
          <div className="text-right">
            <span className="block text-[42px] text-gray-300">Nicey Consulting</span>
            <span className="block text-2xl text-gray-400 mt-2">Jun 2016 - Present</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h2 className="text-[42px] font-light opacity-90">Co-Founder</h2>
          <div className="text-right">
            <span className="block text-[42px] text-gray-300">BrandingMag</span>
            <span className="block text-2xl text-gray-400 mt-2">Jan 2011 - Jun 2015</span>
          </div>
        </div>
      </div>
    </section>







      </div>
  );
}

export default LandingPage;
