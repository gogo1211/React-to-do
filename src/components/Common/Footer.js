import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <h4>Address</h4>
                <p>123 Sility, South Corner Street,<br/>Melbornem Australia.</p>
              </div>
              <div className="col-sm-4">
                <h4>Connect</h4>
                <div className="social-icons">
                  <a className="social-icons__icon">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a className="social-icons__icon">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a className="social-icons__icon">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a className="social-icons__icon">
                    <i className="fa fa-behance"></i>
                  </a>
                  <a className="social-icons__icon">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
              <div className="col-sm-4">
                <h4>Contact</h4>
                <p>Tel: +61 123-456-7890<br/>Mail: gbgodlike1211@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">Copyright. All Rights Reserved.</div>
      </div>
    );
  }
}

export default Footer;
