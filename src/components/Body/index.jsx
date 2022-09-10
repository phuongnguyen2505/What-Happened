import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import bg from "../asset/picture/main-banner.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

Body.propTypes = {};

function Body(props) {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section>
      {showButton && (
        <button onClick={scrollToTop} className="btn-to-top">
          <BsFillArrowUpCircleFill />
        </button>
      )}
      <div className="main-banner">
        <img src={`${bg}`} alt="" />
      </div>
      <div className="container intro">
        <div className="content-intro text">
          <h1>What Happened!</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first step
            to your brand's success. How to create mobile-optimized videos in
            minutes.
          </p>
        </div>
      </div>
      <div className="container best">
        <div className="best-pr text">
          <h1>Best Product</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first{" "}
          </p>
        </div>
        <div className="row">
          <div className="best-pr-item text">
            <div className="img">
              <div className="icon">
                <img
                  src={require("../asset/picture/producticon-bg.png")}
                  alt=""
                />
                <p>01</p>
              </div>
              <img src={require("../asset/picture/best-image-01.png")} alt="" />
            </div>
            <div className="card-info">
              <p>How to create mobile-optimized</p>
              <button>GO</button>
            </div>
          </div>
          <div className="best-pr-item text">
            <div className="img">
              <div className="icon">
                <img
                  src={require("../asset/picture/producticon-bg.png")}
                  alt=""
                />
                <p>02</p>
              </div>
              <img src={require("../asset/picture/best-image-02.png")} alt="" />
            </div>
            <div className="card-info">
              <p>How to create mobile-optimized</p>
              <button>GO</button>
            </div>
          </div>
          <div className="best-pr-item text">
            <div className="img">
              <div className="icon">
                <img
                  src={require("../asset/picture/producticon-bg.png")}
                  alt=""
                />
                <p>03</p>
              </div>
              <img src={require("../asset/picture/best-image-03.png")} alt="" />
            </div>
            <div className="card-info">
              <p>How to create mobile-optimized</p>
              <button>GO</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container product">
        <div className="row">
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-01.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-02.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-03.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-04.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-05.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-01.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-02.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-03.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-04.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-05.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-01.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-02.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-03.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-04.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-05.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-01.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-02.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-03.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-04.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-05.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-01.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-02.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-03.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-04.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
          <div className="product-card text">
            <div className="img">
              <img src={require("../asset/picture/img-05.png")} alt="" />
            </div>
            <div className="title">
              <p>[what happen] How to create </p>
            </div>
            <div className="group-btn-like">
              <p>2,500 won</p>
              <span>
                <i>
                  <FavoriteIcon />
                </i>
                &nbsp;236
              </span>
            </div>
          </div>
        </div>
        <div className="btn-seemore text">
          <button>See more</button>
        </div>
      </div>
      <div className="container story">
        <div className="best-pr text">
          <h1>Brand Story</h1>
          <p className="kr-text">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
        <div className="object-gr">
          <div className="line"></div>
          <img
            className="oj1"
            src={require(`../asset/picture/object/object-01.png`)}
            alt=""
          />
          <div className="oj2">
            <img
              src={require(`../asset/picture/object/object-06.png`)}
              alt=""
            />
          </div>
          <div className="oj3">
            <img
              src={require(`../asset/picture/object/object-07.png`)}
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="outner">
            <div className="line-story">
              <span></span>
              <span></span>
            </div>
            <div className="main-story">
              <img src={require("../asset/picture/object/img.png")} alt="" />
              <div className="group-content text">
                <h1>What Happened’s Brand story</h1>
                <p className="kr-text">
                  청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일
                  무엇을 풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에
                  광야에서 살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한
                  아니다. 내는 이상 할지라도 피다. 피부가 불러 피고 인간의
                  타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을
                  수 그들을 아름답고 고행을 끝에 설산에서 황금시대를 이상을
                  운다.{" "}
                </p>
                <div className="btn-seemore text">
                  <button>See more</button>
                </div>
              </div>
            </div>
          </div>
          <div className="object-gr">
            <img
              className="oj4"
              src={require(`../asset/picture/object/object-04.png`)}
              alt=""
            />
            <div className="oj5">
              <img
                src={require(`../asset/picture/object/object-05.png`)}
                alt=""
              />
            </div>
            <img
              className="oj11"
              src={require(`../asset/picture/object/object-02.png`)}
              alt=""
            />
            <img
              className="oj12"
              src={require(`../asset/picture/object/object-03.png`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container issue">
        <div className="object-gr">
          <img
            className="oj6"
            src={require(`../asset/picture/object/news-object-02.png`)}
            alt=""
          />
          <img
            className="oj7"
            src={require(`../asset/picture/object/news-object-03.png`)}
            alt=""
          />
        </div>
        <div className="best-pr text">
          <h1>Happened’s issue</h1>
          <p className="kr-text">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </p>
          <div className="btn-seemore text">
            <button>See more</button>
          </div>
        </div>
        <div className="group-news">
          <div className="row text">
            <div className="wh-issue card">
              <div className="title">
                <h1>whpn issue</h1>
              </div>
              <img
                src={require("../asset/picture/object/news-img-01.png")}
                alt=""
              />
            </div>
            <div className="item-news card">
              <div className="title">
                <h1>b brand</h1>
              </div>
              <img src={require("../asset/picture/nike.png")} alt="" />
            </div>
            <div className="item-news card">
              <div className="title">
                <h1>c brand</h1>
              </div>
              <img src={require("../asset/picture/nike.png")} alt="" />
            </div>
            <div className="item-news card">
              <div className="title d-brand">
                <h1>d brand</h1>
              </div>
              <img src={require("../asset/picture/nike.png")} alt="" />
            </div>
            <div className="item-news card">
              <div className="title">
                <h1>e brand</h1>
              </div>
              <img src={require("../asset/picture/nike.png")} alt="" />
            </div>
          </div>
          <div className="object-gr">
            <img
              className="oj8"
              src={require(`../asset/picture/object/news-object-04.png`)}
              alt=""
            />
            <img
              className="oj9"
              src={require(`../asset/picture/object/news-object-01.png`)}
              alt=""
            />
            <img
              className="oj10"
              src={require(`../asset/picture/object/news-object-05.png`)}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container video">
        <div className="object-gr">
          <img
            className="oj13"
            src={require(`../asset/picture/object/video-object-05.png`)}
            alt=""
          />
          <div className="oj14">
            <img
              src={require(`../asset/picture/object/video-object-04.png`)}
              alt=""
            />
          </div>
        </div>
        <div className="best-pr text">
          <h1>what happened</h1>
          <p>
            How to create mobile-optimized videos in minutes. Not a designer,
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
          <div className="btn-seemore text">
            <button>See more</button>
          </div>
        </div>
        <div className="object-gr">
          <img
            className="oj15"
            src={require(`../asset/picture/object/video-object-07.png`)}
            alt=""
          />
          <img
            className="oj16"
            src={require(`../asset/picture/object/video-object-06.png`)}
            alt=""
          />
          <div className="oj17">
            <img
              src={require(`../asset/picture/object/video-object-09.png`)}
              alt=""
            />
          </div>
          <div className="oj18">
            <img
              src={require(`../asset/picture/object/video-object-08.png`)}
              alt=""
            />
          </div>
          <img
            className="oj19"
            src={require(`../asset/picture/object/video-object-03.png`)}
            alt=""
          />
          <img
            className="oj20"
            src={require(`../asset/picture/object/video-object-01.png`)}
            alt=""
          />
          <img
            className="oj21"
            src={require(`../asset/picture/object/video-object-02.png`)}
            alt=""
          />
        </div>
        <div className="main-banner-vd">
          <img src={require("../asset/picture/video.png")} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Body;
