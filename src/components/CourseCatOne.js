import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const CourseCatOne = () => {
  const params = {
    slidesPerView: 6,
    loop: true,
    speed: 1000,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },

    // Responsive breakpoints
    breakpoints: {
      1024: {
        slidesPerView: 6
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <section className="thm-gray-bg course-category-one">
      <div className="container-fluid text-center">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Available courses
          </h2>
        </div>
        <div className="course-category-one__carousel">
          <Swiper {...params}>
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-desktop"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none"><b>GCP</b> <br /> Cloud Platform</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-2">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-web-programming"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none"><b>Flutter</b> <br /> Mobile Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-3">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-training"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none"><b>TensorFlow</b> <br /> Machine Learning</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-4">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-magnifying-glass"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none"><b>Firebase</b> <br /> App. Deployment</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-5">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-professor"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none"><b>Android</b> <br /> App. Development</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-6">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-targeting"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none"><b>Maps</b> <br /> Location Tools</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-manager"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Website Developer Bootcamp</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-2">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-knowledge"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Machine Learning Bootcamp</a>
                </h3>
              </div>
            </div>
            <div className="item">
              <div className="course-category-one__single color-1">
                <div className="course-category-one__icon">
                  <i className="kipso-icon-contact"></i>
                </div>
                <h3 className="course-category-one__title">
                  <a href="#none">Professional Network Bootcamp</a>
                </h3>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default CourseCatOne;
