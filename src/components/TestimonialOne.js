import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import qoute1 from "../assets/images/qoute-1-1.png";
import team1 from "../assets/images/team-1-1.jpg";
import team2 from "../assets/images/team-1-2.jpg";
import team3 from "../assets/images/team-1-3.jpg";
import team4 from "../assets/images/team-1-4.jpg";
import team5 from "../assets/images/team-1-5.jpg";
import team6 from "../assets/images/team-1-6.jpg";

const TestimonialOne = () => {
  const params = {
    slidesPerView: 3,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <section className="testimonials-one testimonials-one__home-three">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            What our students <br />
            have to say
          </h2>
        </div>
        <div className="testimonials-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority.
                </p>
                <img src={team1} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Anne Hall</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority have suffered alteration in some form.
                </p>
                <img src={team2} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Andre Obrien</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
                <img src={team3} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Shane Vasquez</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority.
                </p>
                <img src={team4} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Maud Lee</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority have suffered alteration in some form.
                </p>
                <img src={team5} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Barbara Kennedy</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
                <img src={team6} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Duane Carter</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority.
                </p>
                <img src={team1} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Sally Green</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority have suffered alteration in some form.
                </p>
                <img src={team2} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Iva Santos</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
            <div className="item">
              <div className="testimonials-one__single">
                <div className="testimonials-one__qoute">
                  <img src={qoute1} alt="" />
                </div>
                <p className="testimonials-one__text">
                  There are many variations of passages of lore ipsu available
                  but the majority have suffered alteration in some form, by
                  injected humour.
                </p>
                <img src={team3} alt="" className="testimonials-one__img" />
                <h3 className="testimonials-one__name">Max Burns</h3>
                <p className="testimonials-one__designation">Student</p>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialOne;
