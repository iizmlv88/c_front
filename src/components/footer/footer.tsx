import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import {
  FaSquareInstagram,
  FaSquareFacebook,
  FaTelegram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_column">
          <div className="column_a">
            <div className="footer_logo">Тут лого</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim praesent elementum
              facilisis leo, vel
            </div>
          </div>
          <div className="column_b">
            <div className="column">
              <div className="column_h">Інформація</div>
              <ul>
                <li>
                  <Link to="/Gyms" onClick={scrollToTop}>
                    Клуби
                  </Link>
                </li>
                <li>
                  <Link to="/Promotions" onClick={scrollToTop}>
                    Акції
                  </Link>
                </li>
                <li>
                  <Link to="/Trainers" onClick={scrollToTop}>
                    Тренери
                  </Link>
                </li>
                <li>
                  <Link to="/Calendar" onClick={scrollToTop}>
                    Розклад
                  </Link>
                </li>
                <li>
                  <Link to="/Equipment" onClick={scrollToTop}>
                    Обладнання
                  </Link>
                </li>
                <li>
                  <Link to="/Work" onClick={scrollToTop}>
                    Вакансії
                  </Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="column_h">Послуги</div>
              <ul>
                <li className="links_footer">
                  <a href="#">Про нас</a>
                </li>
                <li className="links_footer">
                  <a href="#">Блог</a>
                </li>
                <li className="links_footer">
                  <a href="#">Термін та повернення</a>
                </li>
                <li className="links_footer">
                  <a href="#">Приватна політика</a>
                </li>
                <li className="links_footer">
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="column_h">Зворотній зв’язок</div>
              <ul>
                <li>Телефон: +XXXXXXXXXX</li>
                <li>Пошта: XXXXXXX@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="kami">
          <div>Будь з нами</div>
          <div className="footer_img">
            <div>
              <a href="#">
                <FaSquareInstagram size={24} color={"#FFF"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaTelegram size={24} color={"#FFF"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaSquareFacebook size={24} color={"#FFF"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaTwitter size={24} color={"#FFF"} />
              </a>
            </div>
            <div>
              <a href="#">
                <FaTiktok size={24} color={"#FFF"} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
