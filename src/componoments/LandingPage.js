import React from 'react';
import '../style/LandingPage.css';

function LandingPage() {
    
  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-16">
            <img src = "/images/white-noise-1920-x-1080-wallpaper-1wh7gq8010no3mp0.jpg" className = "w-screen h-screen fixed opacity-[5%] top-0 "></img>
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
      className="px-3 py-1 text-sm text-white border rounded-full hover:bg-gray-700 transition hidden md:inline-block"
    >
      Get in Touch
    </a>

    <div className="md:hidden flex items-center">
      <button
        className="text-gray-300 hover:text-white"
        onClick={() =>
          document
            .getElementById("mobile-menu")
            .classList.toggle("hidden")
        }
      >
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
 
  <nav
    id="mobile-menu"
    className="hidden bg-black bg-opacity-90 text-white absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 z-40"
  >
    <a
      href="#work"
      className="text-gray-300 hover:text-white transition text-xl"
    >
      Work
    </a>
    <a
      href="#experience"
      className="text-gray-300 hover:text-white transition text-xl"
    >
      Experience
    </a>
    <a
      href="#blog"
      className="text-gray-300 hover:text-white transition text-xl"
    >
      Blog
    </a>
    <a
      href="#faq"
      className="text-gray-300 hover:text-white transition text-xl"
    >
      FAQ
    </a>
    <a
      href="#contact"
      className="px-4 py-2 text-sm text-white border rounded-full hover:bg-gray-700 transition"
    >
      Get in Touch
    </a>
  </nav>
</header>



<div className="relative w-full max-w-lg mt-10 sm:mt-20">
  <div className="absolute -left-4 w-40 h-40 sm:w-72 sm:h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast"></div>
  <div className="absolute -right-4 w-40 h-40 sm:w-72 sm:h-72 bg-blue-500 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast animation-delay-1000"></div>
  <div className="absolute left-10 w-40 h-40 sm:w-72 sm:h-72 bg-blue-400 rounded-full mix-blend-screen filter blur-xl opacity-80 animate-blob animation-fast animation-delay-2000"></div>

  <div className="m-4 sm:m-8 relative space-y-4">
    <div className="flex justify-center">
      <img
        src="https://framerusercontent.com/images/vq9vnuJruUyplvTmweJBT00k1I.jpg"
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
        className="sm:w-32 sm:h-32"
      />
    </div>

    <p className="text-gray-300 text-2xl sm:text-4xl text-center">Designed for Designers to showcase their work</p>
    <p className="text-gray-300 text-base sm:text-lg text-center">Helping startups and brands to craft expressive and engaging solutions for their software needs.</p>
  </div>

  <div className="flex justify-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
    <button className="rounded-full button-border-animation relative overflow-hidden px-6 py-3 sm:px-8 sm:py-4 bg-black w-full sm:w-auto">
      <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg text-white text-sm sm:text-base">
        Use This Template
      </span>
      <span
        aria-hidden
        className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-white before:via-blue-200 before:to-blue-200"
      />
    </button>

    <button className="rounded-full bg-white/10 px-8 py-3 text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 w-full sm:w-auto">
      Get Athos Plus
    </button>
  </div>
</div>


<section className="relative w-full mt-10 overflow-hidden">
  <div className="flex items-center space-x-4 sm:space-x-10 animate-scroll">
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
        <img
          key={idx}
          src={src}
          className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          alt={`icon-${idx}`}
        />
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

    @media (max-width: 640px) {
      .animate-scroll {
        animation-duration: 15s; /* Slow down the animation on mobile */
      }

      .animate-scroll img {
        width: 8rem; /* Adjust image size for mobile */
        height: 8rem;
      }
    }
  `}</style>
</section>





<section className="relative w-full mt-24">
  <div className="flex flex-col gap-12 sm:gap-16">

    {/* Card Template */}
    {[
      {
        title: "Modernizing a Subscription Management Platform",
        description:
          "With a user-centered approach, the goal was to create an intuitive interface for effortless financial management while incorporating gamification.",
        imageUrl:
          "https://framerusercontent.com/images/82V0lDZt5IN8w9i1157kfT8pSU.jpg?scale-down-to=1024",
        metrics: ["Engagement User Satisfaction", "12min 4.5*"],
        linkText: "View case study",
        linkUrl: "./work/modernization-of-a-subscription-management-platform",
      },
      {
        title: "Revamping an E-Commerce Website",
        description:
          "Focus was to create a user-friendly interface that simplified the process of accessing premium operational web scraping proxies.",
        imageUrl:
          "https://framerusercontent.com/images/8ZlsEfjDITR5nOu3Yn61F22cbg.jpg?scale-down-to=1024",
        metrics: ["Usability User Retention", "85% 70%"],
        linkText: "View case study",
        linkUrl: "./work/modernization-of-a-subscription-management-platform",
      },
      {
        title: "Developing a Mobile Health Tracking App",
        description:
          "Leading Bitcoin Data and Stats site. Live price action, monitor on-chain data, and track key economic indicators.",
        imageUrl:
          "https://framerusercontent.com/images/Y1hHthCTPz6YNLIhonp2E5s5WU.jpg?scale-down-to=1024",
        metrics: ["Conversion Rate User Satisfaction", "12% 4.8*"],
        linkText: "View case study",
        linkUrl: "./work/modernization-of-a-subscription-management-platform",
      },
      {
        title: "Optimizing a Corporate Intranet",
        description:
          "An innovative app and approach for taking advantage of unused internet from people's devices. It differs from others because of its simplicity, functions, and ways to earn extra money.",
        imageUrl:
          "https://framerusercontent.com/images/UlzZi7Dd7txMrOquJLbf9wyEiig.jpg?scale-down-to=1024",
        metrics: ["Conversion Rate User Satisfaction", "20% 95%"],
        linkText: "Coming Soon",
        linkUrl: "./work/modernization-of-a-subscription-management-platform",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="sticky top-0 bg-gray-900 rounded-xl p-6 sm:p-16 border border-gray-800 transform transition-transform duration-200 hover:scale-105"
      >
        <div className="absolute inset-0 bg-green-400 blur-2xl rounded-full opacity-15"></div>
        <div className="relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-6 sm:gap-12">
            <div className="flex-1 sm:w-1/2">
              <h3 className="text-2xl sm:text-4xl text-white mb-4">
                {card.title}
              </h3>
              <p className="text-gray-500 text-lg sm:text-xl mb-6">
                {card.description}
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-[300px] sm:w-[400px] h-[200px] sm:h-[300px] overflow-hidden rounded-lg">
                <img
                  src={card.imageUrl}
                  className="object-cover w-full h-full"
                  alt="project-image"
                />
              </div>
              <div className="mt-4 text-white">
                {card.metrics.map((metric, idx) => (
                  <p key={idx} className="text-sm sm:text-lg">
                    {metric}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a
              href={card.linkUrl}
              className="inline-block bg-gray-900 border border-gray-700 rounded-xl shadow-md text-center px-6 py-3 sm:px-8 sm:py-4 text-white hover:bg-gray-800"
            >
              {card.linkText}
            </a>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




<section className="py-8">
  <div className="min-h-[30vh] p-4 flex items-center justify-center">
    <div className="max-w-3xl text-white text-base sm:text-lg md:text-2xl font-light leading-relaxed space-y-4">
      <p className="flex flex-wrap gap-2 items-center justify-center text-center">
        Web designer and expert in
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          UX/UI Design
        </span>
        with over
      </p>
      
      <p className="flex flex-wrap gap-2 items-center justify-center text-center">
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          15 years
        </span>
        of industry experience. Expertise extends to
      </p>
      
      <p className="flex flex-wrap gap-2 items-center justify-center text-center">
        <span className="bg-black/90 px-4 py-2 rounded-full inline-flex items-center">
          Framer Development
        </span>
        enabling him to create
      </p>
      
      <p className="flex flex-wrap gap-2 items-center justify-center text-center">
        both aesthetically pleasing and easily implementable.
      </p>
      
      <p className="flex flex-wrap gap-2 items-center justify-center text-center">
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
      {/* First Testimonial */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-12 sm:h-16 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/sQyyAhcgUbXckfoqQWM3dTteTA.png?scale-down-to=1024"
            alt="PerkUp Logo"
            className="max-h-full w-auto"
          />
        </div>
        <blockquote className="text-white text-sm sm:text-lg font-light">
          &quot;He consistently exceeds our expectations&quot;
        </blockquote>
      </div>

      {/* Second Testimonial */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-12 sm:h-16 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/fATWoAolell4ae2UFdw2TeBM28.png"
            alt="S Logo"
            className="max-h-full w-auto"
          />
        </div>
        <blockquote className="text-white text-sm sm:text-lg font-light">
          &quot;I recommend Goran whole-heartedly&quot;
        </blockquote>
      </div>

      {/* Third Testimonial */}
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="h-12 sm:h-16 flex items-center justify-center">
          <img
            src="https://framerusercontent.com/images/rbcCSj5wo7EivYt5qpyuab4GMg.png?scale-down-to=512"
            alt="ISMS Connect Logo"
            className="max-h-full w-auto"
          />
        </div>
        <blockquote className="text-white text-sm sm:text-lg font-light">
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

<section className="min-h-screen text-white p-6 sm:p-8 md:p-16">
  <h1 className="text-3xl sm:text-4xl md:text-[56px] font-light mb-16 sm:mb-24">Experience</h1>

  <div className="space-y-16 sm:space-y-24">
    <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-light opacity-90">
        Design Lead
      </h2>
      <div className="text-left sm:text-right">
        <span className="block text-xl sm:text-2xl md:text-[42px] text-gray-300">
          Geonode
        </span>
        <span className="block text-sm sm:text-lg md:text-2xl text-gray-400 mt-1">
          Jan 2020 - Jan 2023
        </span>
      </div>
    </div>

    <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-light opacity-90">
        Lead UX/UI Designer
      </h2>
      <div className="text-left sm:text-right">
        <span className="block text-xl sm:text-2xl md:text-[42px] text-gray-300">
          Truely
        </span>
        <span className="block text-sm sm:text-lg md:text-2xl text-gray-400 mt-1">
          Jan 2018 - Jan 2020
        </span>
      </div>
    </div>

    <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-light opacity-90">
        Senior Product Designer
      </h2>
      <div className="text-left sm:text-right">
        <span className="block text-xl sm:text-2xl md:text-[42px] text-gray-300">
          Nicey Consulting
        </span>
        <span className="block text-sm sm:text-lg md:text-2xl text-gray-400 mt-1">
          Jun 2016 - Present
        </span>
      </div>
    </div>

    <div className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-4 sm:space-y-0">
      <h2 className="text-2xl sm:text-3xl md:text-[42px] font-light opacity-90">
        Co-Founder
      </h2>
      <div className="text-left sm:text-right">
        <span className="block text-xl sm:text-2xl md:text-[42px] text-gray-300">
          BrandingMag
        </span>
        <span className="block text-sm sm:text-lg md:text-2xl text-gray-400 mt-1">
          Jan 2011 - Jun 2015
        </span>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="min-h-screen p-4 md:p-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-white text-3xl md:text-5xl font-light mb-8 md:mb-16">Blog</div>

      {/* First Blog Post */}
      <div className="group cursor-pointer">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-200 via-pink-200 to-blue-200 flex-shrink-0">
            <img
              src="https://framerusercontent.com/images/LRNzrbcrRDBJ0JszkJzxPBakkPw.jpg?scale-down-to=512"
              alt="Blog Post 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-gray-400 mb-2 text-sm md:text-base">Sep 5, 2023</div>
            <div className="text-white text-2xl md:text-3xl font-light group-hover:text-gray-300 transition-colors">
              The Benefits of Using Free Framer Templates
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-800 mb-8 md:mb-12"></div>
      </div>

      {/* Second Blog Post */}
      <div className="group cursor-pointer">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden bg-gradient-to-b from-pink-200 to-blue-200 flex-shrink-0">
            <img
              src="https://framerusercontent.com/images/KMjg7IZncg1lzgObKZfV9sWxxYM.jpg?scale-down-to=1024"
              alt="Blog Post 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-gray-400 mb-2 text-sm md:text-base">Sep 4, 2023</div>
            <div className="text-white text-2xl md:text-3xl font-light group-hover:text-gray-300 transition-colors">
              How to Customize Free Framer Templates to Fit Your Brand
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-800 mb-8 md:mb-12"></div>
      </div>

      {/* Third Blog Post */}
      <div className="group cursor-pointer">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mb-8 md:mb-12">
          <div className="w-full md:w-64 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-red-800 to-red-600 flex-shrink-0">
            <img
              src="https://framerusercontent.com/images/ovbOvxTe7o4FDCaxu51bTPIsLvU.jpg?scale-down-to=2048"
              alt="Blog Post 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-gray-400 mb-2 text-sm md:text-base">Sep 3, 2023</div>
            <div className="text-white text-2xl md:text-3xl font-light group-hover:text-gray-300 transition-colors">
              Top 5 Free Framer Templates for Startups
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-800 mb-8 md:mb-12"></div>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#0F151F] inline-block px-4 md:px-6 py-2 md:py-3 rounded-full text-white hover:bg-black/40 transition-colors cursor-pointer">
          View More
        </div>
      </div>
    </div>
  </div>
</section>

<section className="min-h-screen text-white p-4 md:p-16">
  <h1 className="text-[36px] md:text-[56px] font-light mb-16 md:mb-32">
    Frequently Asked Questions
  </h1>
  <div className="space-y-16 md:space-y-28">
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-300 px-4 md:px-6 py-4 rounded-lg shadow-md">
      <span className="text-base md:text-xl font-medium mb-2 md:mb-0">
        What is your design process?
      </span>
      <button className="text-gray-400 hover:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-300 px-4 md:px-6 py-4 rounded-lg shadow-md">
      <span className="text-base md:text-xl font-medium mb-2 md:mb-0">
        What tools and software do you use for UX design?
      </span>
      <button className="text-gray-400 hover:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <div className="flex flex-col md:flex-row items-start md:items-center justify-between text-gray-300 px-4 md:px-6 py-4 rounded-lg shadow-md">
      <span className="text-base md:text-xl font-medium mb-2 md:mb-0">
        How do you measure the success of your UX designs?
      </span>
      <button className="text-gray-400 hover:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </div>
</section>


<section className="relative">
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative max-w-6xl w-full p-8 md:p-16 bg-slate-800 bg-opacity-90 text-center text-white rounded-3xl md:rounded-[10rem] group overflow-hidden">
      {/* Background hover effect */}
      <div className="absolute inset-0 group-hover:bg-orange-500 group-hover:bg-opacity-40 transition-all duration-500 rounded-3xl md:rounded-[10rem]"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 md:mb-8">
          Upgrade your web presence with Framer
        </h1>
        <div className="flex flex-col items-center">
          <button className="flex items-center justify-center">
            <img
              src="https://contra.com/static/embed/media/hiremeoncontra-light.png"
              alt="Hire Me on Contra"
              className="h-auto w-auto max-w-full"
            />
          </button>
          <div className="flex items-center justify-center mt-4 md:mt-6">
            <img
              src="https://framerusercontent.com/images/vq9vnuJruUyplvTmweJBT00k1I.jpg?scale-down-to=512"
              alt="Profile"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full mr-2 md:mr-3"
            />
            <p className="text-sm md:text-lg text-gray-400">
              Goran Babarogic - Framer Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>













      </div>
  );
}

export default LandingPage;
