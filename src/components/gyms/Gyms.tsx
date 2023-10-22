// First.tsx
import React from "react";
import "./Gyms.scss";
import { FaMapMarkerAlt } from "react-icons/fa";
import Header from "../header/Header";

const Gyms: React.FC = () => {
  return (
    <div className="prom">
      <div className="gym_back">
        <Header />
        <div className="container">
          <div className="gym_text">Починай разом з Нами</div>
        </div>
      </div>

      <div className="container">
        <div className="gym">
          <div className="first_block">
            <div className="smap">
              <div className="s_row">
                <div id="s">S</div>
                <div>
                  port ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel fringilla est
                  ullamcorper eget nulla facilisi.
                </div>
              </div>
              <div>
                Enim lobortis scelerisque fermentum dui faucibus in ornare quam
                viverra orci sagittis eu volutpat odio facilisis mauris sit amet
                massa vitae tortor condimentum lacinia quis vel eros donec ac
                odio tempor orci dapibus ultrices in iaculis nunc sed augue
                lacus, viverra vitae congue eu, consequat ac felis donec et odio
                pellentesque diam volutpat commodo sed egestas egestas fringilla
                fau.
              </div>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d257351.40633242843!2d26.250482723813676!3d50.61997420444016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47369a3ecb0c6a3f%3A0xd14477e8a0a89eb5!2sRivne%2C%20Rivne%20Oblast%2C%2033000!5e0!3m2!1sen!2sua!4v1676078813278!5m2!1sen!2sua"
                width="300"
                height="213"
                style={{ border: "0" }}
                loading="lazy"
                className="mapa"
              ></iframe>
            </div>
          </div>

          <div className="second_block">
            <div className="second_block_left">
              <div className="gym_block">
                <div className="gym_block_img"></div>
                <div className="gym_block_text">
                  <div>Тут назва</div>
                  <div className="tag_gym">
                    <div>
                      <FaMapMarkerAlt size={24} />
                    </div>
                    <div>Україна, Рівне</div>
                  </div>
                </div>
              </div>
              <div className="second_block_text">
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  integer facilisis aliquet erat vitae viverra ornare. Placerat
                  urna integer nibh justo. Dictum vulputate odio mauris amet,
                  dictumst molestie. Faucibus consectetur mauris tristique dolor
                  ut diam, adipiscing et. Semper mi proin malesuada orci
                  phasellus. Consectetur posuere iaculis amet sem. Euismod
                  turpis pellentesque sit risus eu, sagittis nulla. Facilisis
                  urna, mi pharetra sed.
                </div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  integer facilisis aliquet erat vitae viverra ornare. Placerat
                  urna integer nibh justo. Dictum vulputate odio mauris amet,
                  dictumst molestie.
                </div>
              </div>
              <div className="second_block_doublepic">
                <div className="double_pic_one"></div>
                <div className="double_pic_two">1</div>
              </div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                integer facilisis aliquet erat vitae viverra ornare. Placerat
                urna integer nibh justo. Dictum vulputate odio mauris amet,
                dictumst molestie. Faucibus consectetur mauris tristique dolor
                ut diam, adipiscing et. Semper mi proin malesuada orci
                phasellus. Consectetur posuere iaculis amet sem. Euismod turpis
                pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi
                pharetra sed.
              </div>
            </div>
            <div className="four_cards">
              <div className="four_cards_header_row">
                <div>Інші зали</div>
                <div id="all_cards">Показати всі</div>
              </div>
              <div className="plus_div">
                <div className="cards inique">
                  <div className="tyt_nazva">Тут назва</div>
                  <div className="city">Україна, Київ</div>
                  <div className="cards_btn">
                    <a href="#">Дізнатись більше</a>
                  </div>
                </div>
                <div className="bulo_ne_bulo">
                  <div className="cards">
                    <div className="tyt_nazva">Тут назва</div>
                    <div className="city">Україна, Харків</div>
                    <div className="cards_btn">
                      <a href="#">Дізнатись більше</a>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="tyt_nazva">Тут назва</div>
                    <div className="city">Україна, Львів</div>
                    <div className="cards_btn">
                      <a href="#">Дізнатись більше</a>
                    </div>
                  </div>
                  <div className="cards">
                    <div className="tyt_nazva">Тут назва</div>
                    <div className="city">Україна, Севастопіль</div>
                    <div className="cards_btn">
                      <a href="#">Дізнатись більше</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gyms;
