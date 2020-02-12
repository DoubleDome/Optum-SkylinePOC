import React from 'react';

function FooterStyles() {
  return (
    <style jsx>{`
      .footer {
        display: block;
        width: 100%;
        margin: 50px 0 auto 0;
        background-color: white;
      }

      .footer-item{
        display: flex;
        align-items:center;
        justify-content: space-between;
      }
      .footer-item--vertical{
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
      }
      .priceMessage {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-top: 1px solid #ebebeb;
        border-bottom: 1px solid #ebebeb;
        font-size: 0.75em;
        height: 60px;
        line-height: 35px;
      }
      .priceMessage p {
        margin: auto;
        width: 900px;
      }
      .footerContent {
        margin-top: 15px;
      }

      .footerNavigation {
        border-bottom: 1px solid #ebebeb;
        font-size: 0.75em;
        overflow: auto;
        display: flex;
        padding: 0;
        justify-content: space-between;

      }
      .footerNavigation ul{
        padding: 0;
      }
      .footerNavigation li {
        list-style: none;
        margin-bottom: 5px;
      }
      .footerNavigation p {
        margin-bottom: 5px;
      }
      .footerNavigation h2 {
        font-size: 14pt;
        margin-bottom: 10px;
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
      .phoneContact img {
        width: 45px;
        margin-right: 10px;
      }
      .appIcons {
        height: 24px;
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
            <li className="footer-item phoneContact">
              <img src={require('../assets/images/phone-icon.png')}></img>
              <div>
                <p>Mon – Fri</p>
                <p>8am – 10pm (est)</p>
                <a href="#">Call me back</a>
              </div>
            </li>
            <li className="footer-item footer-item--vertical">
              <h2>Contact</h2>
              <ul>
                <li>Live Chat</li>
                <li>Email Forum</li>
              </ul>
            </li>
            <li className="footer-item footer-item--vertical">
              <h2>Help</h2>
              <ul>
                <li>FAQs</li>
                <li>Forms</li>
              </ul>
            </li>
            <li className="footer-item footer-item--vertical">
              <h2>About us</h2>
              <ul>
                <li>Who we are</li>
                <li>Get to know OptumRx</li>
              </ul>
            </li>
            <li className="footer-item footer-item--vertical">
              <h2>Try the app</h2>
              <ul>
                <li>
                  <img className="appIcons" src={require('../assets/images/app-icons.png')}></img>
                </li>
              </ul>
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
