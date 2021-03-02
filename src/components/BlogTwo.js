import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import blogTwo1 from "../assets/images/blog-2-1.png";
import blogTwo2 from "../assets/images/blog-2-2.jpg";
import blogTwo3 from "../assets/images/blog-2-3.png";
import blogTwo4 from "../assets/images/blog-2-3.jpg";
import blogTwo5 from "../assets/images/blog-2-4.png";
import blogTwo6 from "../assets/images/blog-2-5.png";

const BlogTwo = () => {
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
        slidesPerView: 1
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <section className="blog-two">
      <div className="container">
        <div className="block-title text-center">
          <h2 className="block-title__title">
            Blog
          </h2>
        </div>
        <div className="blog-two__carousel">
          <Swiper {...params}>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(${blogTwo1})` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    <span>25</span>
                    Jul
                  </a>
                  <div className="blog-two__meta">
                    <a href="#none">by John</a>
                    <a href="#none">3 Comments</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Learning to code after custody
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(${blogTwo2})` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    <span>25</span>
                    Jul
                  </a>
                  <div className="blog-two__meta">
                    <a href="#none">by Googler</a>
                    <a href="#none">3 Comments</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Thoughts on mentoring an ex-con
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(${blogTwo3})` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    <span>25</span>
                    Jul
                  </a>
                  <div className="blog-two__meta">
                    <a href="#none">by Admin</a>
                    <a href="#none">3 Comments</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Attending networking events
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(${blogTwo4})` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    <span>25</span>
                    Jul
                  </a>
                  <div className="blog-two__meta">
                    <a href="#none">by Admin</a>
                    <a href="#none">3 Comments</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Building a strong social media presence
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(${blogTwo5})` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    <span>25</span>
                    Jul
                  </a>
                  <div className="blog-two__meta">
                    <a href="#none">by Googler</a>
                    <a href="#none">3 Comments</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Most in-demand technical skills
                    </a>
                  </h3>
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="blog-two__single"
                style={{ backgroundImage: `url(${blogTwo6})` }}
              >
                <div className="blog-two__inner">
                  <a href="news-details.html" className="blog-two__date">
                    <span>25</span>
                    Jul
                  </a>
                  <div className="blog-two__meta">
                    <a href="#none">by Admin</a>
                    <a href="#none">3 Comments</a>
                  </div>
                  <h3 className="blog-two__title">
                    <a href="news-details.html">
                      Higher education?
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
export default BlogTwo;
