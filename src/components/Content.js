import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div class="sections">
        <div class="section-home">
          <div class="content">
            <h1>
              Design<sup>+</sup> Develop<sup>+</sup><br />
              Interactive<sup>+</sup> Art<sup>+</sup>
            </h1>
            <p>
              Hello, I am Benjamin Thomson. I Have 8 years of experience
              in Web and UX design.I am worked on a variety of brands and
              with agencies both big and small.
            </p>
            <div class="main-btns">
              <button class="btn-hire">Hire Me Now</button>
              <button class="btn-download">Download CV</button>
            </div>
          </div>
          <div class="photo">
            <img src="man01.png" alt="photo" class="photo-man" />
          </div>
        </div>
        <div class="section-about">
          <div class="container">
            <h2>About Me</h2>
            <div class="row">
              <div class="col-sm-3">
                <img alt="man2" src="man02.png" class="section-img" />
              </div>
              <div class="col-sm-9">
                <h3 class="name">BENJAMIN THOMSON</h3>
                <h5 class="title">WEB & UX DESIGNER</h5>
                <p>
                  Ultricies nisi voluptatem, illo inventore veritatis et
                  quasi architecto beatae vitae dicta sunt explicabo nemo
                  enim ipsam voluptatem. Sed ut perspiciatis unde omnis iste
                  natus error sit voluptatem accusantium doloremque latu
                  dantium, totam rem aperiam, eaque ipsa quae ab illo tempor 
                  dignissim at. 
                </p>
                <div class="sign">
                  <img alt="signature" src="sign.png" class="img-sign" />
                </div>
                <ul class="info">
                  <li><b>Date Of Birth:</b> 24 Jan 1989</li>
                  <li><b>Phone:</b> 012-345-6789</li>
                  <li><b>Email:</b> Sility@example.com</li>
                  <li><b>Address:</b> 123 Sility, South Corner Street, Melborne, Australia.</li>
                  <li><b>Website:</b> http://www.example.com</li>
                </ul>
                <h3>What I'm doing</h3>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="card">
                      <i class="fas fa-tv"></i>
                      <h5>WEB & UX DESIGN</h5>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <i class="fas fa-mobile-alt"></i>
                      <h5>APP DEVELOPMENT</h5>
                    </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="card">
                      <i class="fas fa-trophy"></i>
                      <h5>MARKETING</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
