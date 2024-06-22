'use client'

import Link from 'next/link'

const Home = () => {

  return (
    <main className="font-['Montserrat',sans-serif]">


      <header className="header">
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="index.html"><img src="imgs/logo.png" alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <div id="nav-icon1">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="banner_thumbnail">
                  <img src="imgs/home/headshot.png" alt="img" className="wow animate__zoomIn" data-wow-duration="2.2s" />
                </div>
              </div>
              <div className="col-md-8">
                <div className="content">
                  <h3>Hello! I'm a UX/UI designer who loves to <span>solve hard problems</span> and turn complex requirements into <span>simple, intuitive designs</span>.</h3>
                </div>
              </div>
            </div>
            <ul className="menu-bottom">
              <li className="li"><a href="#">experience</a></li>
              <li className="li"> <a href="resume/Resume.pdf" download> resume <img src="imgs/home/icon.svg" alt="" /></a></li>
              <li className="li"><a href="#">contact</a></li>
              <li className="li"><a href="mailto:designsbylilyliu@gmail.com">email <img className="icon2" src="imgs/home/icon2.svg" alt="" /></a></li>
              <li className="li"><a href="https://www.linkedin.com/in/lily-liu-45ab15120/">linkedin <img className="icon2" src="imgs/home/icon2.svg" alt="" /></a></li>
            </ul>
          </div>
        </section>
      </header>
      <div className="headline">
        <div className="container-fluid">
          <div className="content">
            <h5>PROJECTS</h5>
            <hr />
          </div>
        </div>
      </div>
      <section className="home_widgets">
        <div className="wrapper">
          <div className="widget_single wow animate__slideInUp" data-wow-duration="2s">
            <div className="row gx-0">
              <div className="col-lg-6 col-md-6">
                <div className="thubmnail">
                  <a href="#"><img src="imgs/home/OAO TN.png" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h3>Battle Bank & Savana Inc.</h3>
                  <ul>
                    <li><a href="#">UX/UI DESIGN</a></li>
                    <li><a href="#">website</a></li>
                    <li><a href="#">mobile</a></li>
                  </ul>
                  <p>Designed the account opening flows for an online for a newly chartered US bank, from idea to implementation.</p>
                  <a href="#" className="widget_btn">Learn more <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                </div>
              </div>
            </div>
          </div>

          <div className="widget_single wow animate__slideInUp" data-wow-duration="2.5s">
            <div className="row gx-0">
              <div className="col-lg-6 col-md-6">
                <div className="thubmnail">
                  <a href="#"><img src="imgs/home/BAO TN.png" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h3>Woodforest National Bank & Savana Inc.</h3>
                  <ul>
                    <li><a>UX/UI DESIGN</a></li>
                    <li><a>website</a></li>
                  </ul>
                  <p>Designed a solution allowing multiple financial products to be opened in the same flow for multiple people, from concept to development.</p>
                  <a href="#" className="widget_btn">Learn more <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                </div>
              </div>
            </div>


          </div>

          <div className="widget_single wow animate__slideInUp" data-wow-duration="3s">
            <div className="row gx-0">
              <div className="col-lg-6 col-md-6">
                <div className="thubmnail">
                  <a href="#"><img src="imgs/home/Bravo TN.png" alt="" /></a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="content">
                  <h3>BravoCare</h3>
                  <ul>
                    <li><a>UX/UI DESIGN</a></li>
                    <li><a>mobile</a></li>
                  </ul>
                  <p>Prototyping and usability testing for a marketplace connecting healthcare facilities and on-demand clinicians.</p>
                  <a href="#" className="widget_btn">Learn more <span><i className="fa-solid fa-arrow-right-long"></i></span></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="headline">
        <div className="container-fluid">
          <div className="content">
            <h5>KIND WORDS FROM COWORKERS</h5>
            <hr />
          </div>
        </div>
      </div>

      <section className="testimonials">
        <span className="line"></span>
        <div className="wrapper">
          <div className="row gx-5">
            <div className="col-md-6">
              <div className="content">
                <p>"Lily is an exceptionally talented UX Designer. I was always impressed with Lily's communication and problem-solving skills which greatly contributed to the overall success of our team.</p>
                <p>Lily is not only a skilled professional, but also a great team player. She consistently collaborated with myself and other team members, fostering an effective and productive work environment. She is known for her positive and cheerful disposition, as well as her reliability, dedication and creativity."</p>
                <div className="brand">
                  <img src="imgs/savana (1) 1.png" alt="" />
                  <h6>NATHAN STEVENS <br />
                    SR. UX/UI DESIGNER</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content">
                <p>"Having worked with Lily on several projects with tight deadlines at Savana, I've seen her consistently deliver quality designs that meet the needs of our users and stakeholders.</p>
                <p>Her work with Figma, in particular, has enabled our team to collaborate efficiently, iterating designs rapidly when needed. Despite the fast-paced nature of our projects, Lily maintained a steady hand, ensuring that her deliverables were both timely and professionally executed."</p>
                <div className="brand">
                  <img src="imgs/savana (1) 1.png" alt="" />
                  <h6>DANIEL SINTRÃO <br />
                    SR. FRONT-END LEAD & DESIGN SYSTEMS ARCHITECT </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4 col-8">
              <div className="footer-widget">
                <h5>Let’s work together! <br /> <a href="#">Get in touch.</a></h5>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-4">
              <ul className="menu-bottom">
                <li className="li"><a href="#">experience</a></li>
                <li className="li"> <a href="resume/Resume.pdf" download> resume <img src="imgs/home/icon.svg" alt="" /></a></li>
                <li className="li"><a href="#">contact</a></li>
                <li className="li"><a href="mailto:designsbylilyliu@gmail.com">email <img className="icon2" src="imgs/home/icon2.svg" alt="" /></a></li>
                <li className="li"><a href="https://www.linkedin.com/in/lily-liu-45ab15120/">linkedin <img className="icon2" src="imgs/home/icon2.svg" alt="" /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>


    </main >
  );
};

export default Home;

