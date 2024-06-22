'use client'

import Link from 'next/link'
import { useState } from 'react'

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#F3F3F3]">
      <header className="relative overflow-hidden bg-white py-4 z-10">
        <div className="absolute top-0 right-0 w-3/4 h-full bg-[url('/imgs/home/banner-bg.png')] bg-contain bg-repeat -z-10"></div>
        <nav className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/">
              <img src="/imgs/logo.png" alt="logo" width={150} height={50} />
            </Link>
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation"
            >
              {/* Implement toggle button icon */}
            </button>
            <ul className={`md:flex space-x-12 ${isMenuOpen ? 'block' : 'hidden'}`}>
              <li>
                <Link href="/" className="uppercase text-base font-medium text-[#272B32] hover:scale-110 transition-transform">
                  projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="uppercase text-base font-medium text-[#272B32] hover:scale-110 transition-transform">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <section className="banner py-12 pb-4">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <div className="banner_thumbnail">
                  <img src="/imgs/home/headshot.png" alt="img" width={400} height={400} className="animate-zoomIn" />
                </div>
              </div>
              <div className="md:w-2/3 mt-8 md:mt-0">
                <div className="content md:pl-8">
                  <h3 className="text-4xl font-black text-[#6D6D78] tracking-wider leading-tight">
                    Hello! I'm a UX/UI designer who loves to solve hard problems and turn complex requirements into simple, intuitive designs.
                  </h3>
                </div>
              </div>
            </div>
            <ul className="flex justify-center flex-wrap mt-18 space-x-4">
              <li><a href="#" className="text-xs uppercase font-semibold text-[#B4B4C7] hover:scale-110 transition-transform">experience</a></li>
              <li>
                <a href="/resume/Resume.pdf" download className="text-xs uppercase font-semibold text-[#272B32] hover:scale-110 transition-transform flex items-center">
                  resume <img src="/imgs/home/icon.svg" alt="" width={12} height={12} className="ml-1" />
                </a>
              </li>
              <li><a href="#" className="text-xs uppercase font-semibold text-[#B4B4C7] hover:scale-110 transition-transform">contact</a></li>
              <li>
                <a href="mailto:designsbylilyliu@gmail.com" className="text-xs uppercase font-semibold text-[#272B32] hover:scale-110 transition-transform flex items-center">
                  email <img src="/imgs/home/icon2.svg" alt="" width={8} height={8} className="ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lily-liu-45ab15120/" className="text-xs uppercase font-semibold text-[#272B32] hover:scale-110 transition-transform flex items-center">
                  linkedin <img src="/imgs/home/icon2.svg" alt="" width={8} height={8} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </section>
      </header>

      <div className="headline pt-16">
        <div className="container mx-auto px-4">
          <div className="relative">
            <h5 className="text-sm uppercase text-[#525259] font-medium bg-[#F3F3F3] inline-block pr-2 relative z-10">PROJECTS</h5>
            <hr className="absolute top-2.5 left-0 w-full h-0.5 bg-[#B3B3B6] -z-10" />
          </div>
        </div>
      </div>

      <section className="home_widgets py-12">
        <div className="max-w-4xl mx-auto">
          {[
            {
              image: "/imgs/home/OAO TN.png",
              title: "Battle Bank & Savana Inc.",
              tags: ["UX/UI DESIGN", "website", "mobile"],
              description: "Designed the account opening flows for an online for a newly chartered US bank, from idea to implementation.",
            },
            {
              image: "/imgs/home/BAO TN.png",
              title: "Woodforest National Bank & Savana Inc.",
              tags: ["UX/UI DESIGN", "website"],
              description: "Designed a solution allowing multiple financial products to be opened in the same flow for multiple people, from concept to development.",
            },
            {
              image: "/imgs/home/Bravo TN.png",
              title: "BravoCare",
              tags: ["UX/UI DESIGN", "mobile"],
              description: "Prototyping and usability testing for a marketplace connecting healthcare facilities and on-demand clinicians.",
            }
          ].map((project, index) => (
            <div key={index} className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-md mb-8 animate-slideInUp">
              <div className="md:w-2/5 overflow-hidden">
                <Link href="#">
                  <img src={project.image} alt={project.title} width={450} height={300} className="transition-transform hover:scale-110" />
                </Link>
              </div>
              <div className="md:w-3/5 p-6">
                <h3 className="text-2xl text-[#525259] font-medium mb-2">{project.title}</h3>
                <ul className="flex flex-wrap mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <li key={tagIndex} className="mr-2 mb-2">
                      <a href="#" className="bg-[#D5E5E3] px-3 py-1 text-xs text-[#6D6D78] font-medium uppercase rounded-full hover:bg-black hover:text-white transition-colors">
                        {tag}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-[#272B32] mb-4">{project.description}</p>
                <Link href="#" className="text-xs uppercase text-[#525259] font-medium hover:scale-110 transition-transform inline-flex items-center">
                  Learn more <i className="fas fa-arrow-right-long ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="headline">
        <div className="container mx-auto px-4">
          <div className="relative">
            <h5 className="text-sm uppercase text-[#525259] font-medium bg-[#F3F3F3] inline-block pr-2 relative z-10">KIND WORDS FROM COWORKERS</h5>
            <hr className="absolute top-2.5 left-0 w-full h-0.5 bg-[#B3B3B6] -z-10" />
          </div>
        </div>
      </div>

      <section className="testimonials py-12 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-3/4 bg-[#CFCFD8]"></div>
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote: "Lily is an exceptionally talented UX Designer. I was always impressed with Lily's communication and problem-solving skills which greatly contributed to the overall success of our team. Lily is not only a skilled professional, but also a great team player. She consistently collaborated with myself and other team members, fostering an effective and productive work environment. She is known for her positive and cheerful disposition, as well as her reliability, dedication and creativity.",
                name: "NATHAN STEVENS",
                position: "SR. UX/UI DESIGNER"
              },
              {
                quote: "Having worked with Lily on several projects with tight deadlines at Savana, I've seen her consistently deliver quality designs that meet the needs of our users and stakeholders. Her work with Figma, in particular, has enabled our team to collaborate efficiently, iterating designs rapidly when needed. Despite the fast-paced nature of our projects, Lily maintained a steady hand, ensuring that her deliverables were both timely and professionally executed.",
                name: "DANIEL SINTRÃO",
                position: "SR. FRONT-END LEAD & DESIGN SYSTEMS ARCHITECT"
              }
            ].map((testimonial, index) => (
              <div key={index} className="mb-8">
                <p className="text-lg text-[#272B32] mb-6">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img src="/imgs/savana (1) 1.png" alt="Savana logo" width={50} height={50} />
                  <div className="ml-4">
                    <h6 className="text-sm font-bold text-[#15202B]">{testimonial.name}</h6>
                    <p className="text-xs text-[#15202B]">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer relative bg-[#F3F3F3] z-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-11/12 h-px bg-white -z-10"></div>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 lg:w-1/2 mb-4 md:mb-0">
              <h5 className="text-xl text-[#525259] font-semibold">
                Let's work together! <br /> <a href="#" className="text-[#3C8C86]">Get in touch.</a>
              </h5>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2">
              <ul className="flex flex-wrap justify-end">
                <li className="mr-4 mb-2"><a href="#" className="text-xs uppercase font-semibold text-[#B4B4C7] hover:scale-110 transition-transform">experience</a></li>
                <li className="mr-4 mb-2">
                  <a href="/resume/Resume.pdf" download className="text-xs uppercase font-semibold text-[#272B32] hover:scale-110 transition-transform flex items-center">
                    resume <img src="/imgs/home/icon.svg" alt="" width={12} height={12} className="ml-1" />
                  </a>
                </li>
                <li className="mr-4 mb-2"><a href="#" className="text-xs uppercase font-semibold text-[#B4B4C7] hover:scale-110 transition-transform">contact</a></li>
                <li className="mr-4 mb-2">
                  <a href="mailto:designsbylilyliu@gmail.com" className="text-xs uppercase font-semibold text-[#272B32] hover:scale-110 transition-transform flex items-center">
                    email <img src="/imgs/home/icon2.svg" alt="" width={8} height={8} className="ml-1" />
                  </a>
                </li>
                <li className="mb-2">
                  <a href="https://www.linkedin.com/in/lily-liu-45ab15120/" className="text-xs uppercase font-semibold text-[#272B32] hover:scale-110 transition-transform flex items-center">
                    linkedin <img src="/imgs/home/icon2.svg" alt="" width={8} height={8} className="ml-1" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>



  );
};

export default Home;

