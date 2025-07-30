import './AboutUs.css';
import logo from "../assets/logo.png"

const AboutMe = () => {
  return (
    <section id="about-us-section" className="about-us-section">
      <div className="container">
        
        <div id="about-header" className="about-header">
          <div className="icon-container">
            <img src={logo} width="150px"/>
          </div>
          <h2 className="main-title">About Santhosh Farm's</h2>
          <p className="subtitle">
            For over three generations, we've been nurturing the land and growing premium organic produce with sustainable farming practices that honor both tradition and innovation.
          </p>
        </div>

        <div id="about-main-content" className="row align-items-center mb-5">
          <div className="col-lg-6">
            <div id="about-story" className="about-story">
              <h3 className="section-title">Our Story</h3>
              <p className="story-text">
                Founded in 1952 by the Thompson family, Green Valley Farms began as a small 50-acre homestead with a simple mission: to grow the healthiest, most flavorful produce while caring for the earth that sustains us all.
              </p>
              <p className="story-text">
                Today, we've grown to over 500 acres of certified organic farmland, but our commitment remains unchanged. We use time-tested sustainable methods combined with modern technology to ensure every crop meets our rigorous standards for quality and environmental responsibility.
              </p>
              <div id="about-stats" className="row mt-4">
                <div className="col-6">
                  <div className="stat-card">
                    <div className="stat-number">70+</div>
                    <div className="stat-label">Years of Experience</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card">
                    <div className="stat-number">500+</div>
                    <div className="stat-label">Acres Farmed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6">
            <div id="about-image" className="about-image-container">
              <img 
                className="about-image" 
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3f943be066-9f265f2a46fe744d930a.png" 
                alt="organic farm field with green crops, farmers working, sustainable agriculture, natural lighting, professional photography"
              />
              <div className="certification-badge">
                <i className="fa-solid fa-certificate"></i>
                <div className="cert-title">USDA Organic</div>
                <div className="cert-subtitle">Certified</div>
              </div>
            </div>
          </div>
        </div>

        <div id="mission-vision" className="row mb-5">
          <div className="col-md-6">
            <div id="mission-card" className="mission-vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fa-solid fa-bullseye"></i>
                </div>
                <h3 className="card-title">Our Mission</h3>
              </div>
              <p className="card-text">
                To provide the freshest, healthiest organic produce while maintaining sustainable farming practices that preserve our environment for future generations. We believe in transparency, quality, and building lasting relationships with our community.
              </p>
            </div>
          </div>
          
          <div className="col-md-6">
            <div id="vision-card" className="mission-vision-card">
              <div className="card-header">
                <div className="card-icon">
                  <i className="fa-solid fa-eye"></i>
                </div>
                <h3 className="card-title">Our Vision</h3>
              </div>
              <p className="card-text">
                To lead the agricultural industry in sustainable farming innovation, creating a model that other farms can follow while ensuring food security and environmental stewardship for generations to come.
              </p>
            </div>
          </div>
        </div>

        <div id="values-section" className="values-section">
          <h3 className="section1-title text-center mb-5">Our Core Values</h3>
          <div className="row">
            <div className="col-md-4">
              <div id="sustainability-value" className="value-item">
                <div className="value-icon">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <h4 className="value-title text-white">Sustainability</h4>
                <p className="value-description text-white">We practice regenerative agriculture that improves soil health and biodiversity while reducing our carbon footprint.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div id="quality-value" className="value-item">
                <div className="value-icon">
                  <i className="fa-solid fa-award"></i>
                </div>
                <h4 className="value-title text-white">Quality</h4>
                <p className="value-description text-white">Every product meets our stringent quality standards, from seed to harvest, ensuring exceptional taste and nutrition.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div id="community-value" className="value-item">
                <div className="value-icon">
                  <i className="fa-solid fa-handshake"></i>
                </div>
                <h4 className="value-title text-white">Community</h4>
                <p className="value-description text-white">We support local communities through fair employment, educational programs, and partnerships with local businesses.</p>
              </div>
            </div>
          </div>
        </div>

        <div id="team-section" className="team-section">
          <h3 className="section-title text-center mb-5">Meet Our Team</h3>
          <div className="row">
            <div className="col-md-4">
              <div id="team-member-1" className="team-member">
                <img 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-2.jpg" 
                  alt="John Thompson" 
                  className="team-photo"
                />
                <h4 className="team-name">John Thompson</h4>
                <p className="team-role">Farm Owner & CEO</p>
                <p className="team-description">Third-generation farmer with 25 years of experience in sustainable agriculture and organic certification.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div id="team-member-2" className="team-member">
                <img 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-5.jpg" 
                  alt="Sarah Martinez" 
                  className="team-photo"
                />
                <h4 className="team-name">Sarah Martinez</h4>
                <p className="team-role">Head of Operations</p>
                <p className="team-description">Agricultural engineer specializing in crop rotation and soil health management with 15 years of field experience.</p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div id="team-member-3" className="team-member">
                <img 
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/avatars/avatar-8.jpg" 
                  alt="Mike Chen" 
                  className="team-photo"
                />
                <h4 className="team-name">Mike Chen</h4>
                <p className="team-role">Sustainability Director</p>
                <p className="team-description">Environmental scientist focused on implementing cutting-edge sustainable farming technologies and practices.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;