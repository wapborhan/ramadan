import React from "react";
import FootLogo from "../../assets/images/logo.png";
import PatterBG from "../../assets/images/pattern-bg.jpg";

const index = () => {
  const d = new Date();
  return (
    <footer>
      <div className="w-100 pt-50 thm-layer pb-30 opc8 position-relative">
        <div
          className="fixed-bg patern-bg back-blend-multiply thm-bg"
          style={{
            backgroundImage: `url("${PatterBG}")`,
          }}
        ></div>
        <div className="container">
          <div className="footer-data v2 w-100">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-lg-12">
                <div className="widget text-center w-100">
                  <div className="widget-inner d-inline-block">
                    <div className="logo text-center">
                      <h1 className="mb-4">
                        <a href="#" className="footlogo" title="Home">
                          <img
                            className="img-fluid"
                            src={FootLogo}
                            alt="IslamBD"
                            srcSet={FootLogo}
                          />
                        </a>
                      </h1>
                    </div>
                    <div className="mb-0 h5 text-center">
                      তোমরা আমার পক্ষ থেকে একটি আয়াত হলেও পৌঁছে দাও। <br /> -
                      জামে তিরমিযি।
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-bar2 text-center w-100">
            <p className="mb-0 text-center font-ar">
              Quranic Jibon - Copyright {d.getFullYear()}. Developed by{" "}
              <a
                className="text-light"
                href="https://srdreamlab.com"
                title="SR Dream Lab"
                target="_blank"
              >
                SR Dream Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default index;
