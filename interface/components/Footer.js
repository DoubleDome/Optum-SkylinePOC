import React from 'react';

function FooterStyles() {
  return (
    <style jsx>{`
      .footer {
        display: block;
        width: 100%;
        float: left;
      }

      .footer ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: block;
      }
      .priceMessage {
        text-align: center;
        border-top: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
        font-size: 0.75em;
        height: 60px;
        line-height: 35px;
      }
      .footerContent {
        margin-top: 15px;
      }

      .footerNavigation {
        border-bottom: 1px solid #ebebeb;
        font-size: 0.75em;
      }
      .footerNavigation li {
        width: 180px;
        display: inline-block;
      }
      .footerNavigation h2 {
        display: inline-block;
        font-size: 14pt;
      }

      .bottomFooter {
        padding-top: 20px;
        font-size: 0.75em;
        padding-bottom: 10px;
      }
      .helpfulLinks,
      .internationalLinks {
        display: inline-block;
        width: 50%;
      }
      .internationalLinks {
        text-align: right;
      }

      .helpfulLinks a,
      .internationalLinks a {
        padding-left: 5px;
      }
      .phoneContact div,
      .phoneContact img {
        float: left;
      }
    `}</style>
  );
}

function Footer(props) {
  return (
    <React.Fragment>
      <FooterStyles></FooterStyles>
      <nav className="footer">
        <div className="priceMessage">
          <p>
            Prices on some of your medication(s) may very based on your doctor’s instructions or on the manufacturer’s
            price provided to us at the time you place your order online or at a pharmacy.
          </p>
        </div>
        <div className="footerContent contentContainer">
          <ul className="footerNavigation">
            <li className="phoneContact">
              <img src="phone.png"></img>
              <div>
                <p>Mon – Fri</p>
                <p>8am – 10pm (est)</p>
                <a href="#">Call me back</a>
              </div>
            </li>
            <li>
              <h2>Contact</h2>
              <ul>
                <li>Live Chat</li>
                <li>Email Forum</li>
              </ul>
            </li>
            <li>
              <h2>Help</h2>
              <ul>
                <li>FAQs</li>
                <li>Forms</li>
              </ul>
            </li>
            <li>
              <h2>About us</h2>
              <ul>
                <li>Who we are</li>
                <li>Get to know OptumRx</li>
              </ul>
            </li>
            <li>
              <h2>Try the app</h2>
            </li>
          </ul>
          <div className="bottomFooter">
            <div>© 2020 OptumRx, Inc.</div>
            <div className="helpfulLinks">
              <a href="#">Privacy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Accessibility</a>
            </div>
            <div className="internationalLinks">
              <a href="#">Language assistance</a>
              <a href="#">Asistencia en varios idiomas</a>
              <a href="#">語言協助</a>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Footer;
