import React from "react"

const Footer = (props) => (
  <div>
    <div className="footer__logo-box">
        <img src="assets/images/sp-logo3.png" alt="footer-logo" className="footer__logo" />
        <div className="footer__logo-wrap"></div>
        </div>

        <section className="footer" id="footer">
        <h4 className="footer__heading--main">I'm Currently for hire as a web developer!</h4>

        <h5 className="footer__heading--sub">Find Me on these sites!</h5>
        <div className="footer__links">
          <div className="row">
            <div className="col-1-of-4">
              <div className="footer__links-item">
                <div className="footer__email">
                  <p className="footer__email-content">
                    sasha8patsel@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="footer__links-item">
                <a href="https://github.com/SashaPatsel" target="_blank">
                  <img className="footer__img" src="https://png.icons8.com/metro/1600/github.png" alt="codepenlink" />
                </a>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="footer__links-item">
                <a href="https://www.linkedin.com/in/sasha-patsel-064aab132/" target="_blank">
                  <img className="footer__img" src="https://www.scylf.com.au/wp-content/uploads/2018/04/linkedin-logo.png" alt="codepenlink" />
                </a>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="footer__links-item">
                <a href="https://codepen.io/SPeight/" target="_blank">
                  <img className="footer__img" src="http://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png" alt="codepenlink" />
                </a>
              </div>
            </div>
          </div>
        </div>
        </section>

  </div>
)

export default Footer;