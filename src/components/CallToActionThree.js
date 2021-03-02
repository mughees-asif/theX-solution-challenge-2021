import React, { Component } from "react";
import cta1 from "../assets/images/MalcolmX.jpg";
class CallToActionThree extends Component {
  render() {
    return (
      <section id="calltoactionthree" className="cta-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 clearfix">
              <img src={cta1} width="650" className="cta-three__image" alt="" />
            </div>
            <div className="col-lg-6">
              <div className="cta-three__content">
                <div className="block-title text-left">
                  <h2 className="block-title__title">
                    Changing Attitudes 
                  </h2>
                </div>
                <p className="cta-three__text">
                In 1946, twenty-year old <b>Malcolm X</b> began serving an eight-to-ten year prison 
                sentence for burglary. Prison generally has the effect of hardening the criminal 
                and narrowing his already narrow view of the world. Instead, Malcolm decided to 
                reassess his life. He began to spend time in the prison library and fell in love 
                with books and learning. As he saw it now, prison afforded him the best possible 
                means of changing himself and his attitude toward life. With so much time on his 
                hands, he could study and earn himself a degree. He could develop the discipline he 
                had always been missing. He could train himself to become an expert speaker. He 
                embraced the experience without any bitterness and emerged stronger than ever. 
                Once he left prison, he saw any difficulty, large or small, as a means to test 
                and toughen himself.
                </p>
                <div className="cta-three__single-wrap">
                  <div className="cta-three__single">
                    <i className="kipso-icon-strategy"></i>
                    <p className="cta-three__single-text">
                      Upskill
                    </p>
                  </div>
                  <div className="cta-three__single">
                    <i className="kipso-icon-training"></i>
                    <p className="cta-three__single-text">Train</p>
                  </div>

                  <div className="cta-three__single">
                    <i className="kipso-icon-human-resources"></i>
                    <p className="cta-three__single-text">Develop</p>
                  </div>
                </div>
                {/* <a href="/about" className="thm-btn">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CallToActionThree;
