import React from "react";
import "./Calemdar.scss";
import Header from "../header/Header";
import {
  FaBasketball,
  FaBaseball,
  FaBicycle,
  FaPersonRifle,
  FaCarTunnel,
  FaDrumstickBite,
} from "react-icons/fa6";

import { GrYoga } from "react-icons/gr";
import {
  MdSportsMartialArts,
  MdSportsKabaddi,
  MdOutlinePool,
} from "react-icons/md";

const Calendar: React.FC = () => {
  return (
    <div className="calendarWrapper">
      <div className="prom_background">
        <Header />
        <div className="container">
          <div className="prom_background_text">Mи завжди готові</div>
        </div>
      </div>
      <div className="container">
        <div className="grey_logo">
          <div className="logo_box">
            <div>
              <GrYoga size={90} style={{ color: "black" }} />
            </div>
            <div className="bold">Стретчінг</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
              eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet
            </div>
            <div className="btn_service">
              <div>Дізнатись більше</div>
            </div>
          </div>
          <div className="logo_box">
            <div>
              <MdSportsMartialArts size={90} style={{ color: "black" }} />
            </div>
            <div className="bold">Тайбо</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
              eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet
            </div>
            <div className="btn_service">
              <div>Дізнатись більше</div>
            </div>
          </div>
          <div className="logo_box">
            <div>
              <MdSportsKabaddi size={90} style={{ color: "black" }} />
            </div>
            <div className="bold">Боротбба</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
              eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet
            </div>
            <div className="btn_service">
              <div>Дізнатись більше</div>
            </div>
          </div>
          <div className="logo_box">
            <div>
              <MdOutlinePool size={90} style={{ color: "black" }} />
            </div>
            <div className="bold">Плавання</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed arcu
              eu, dui tortor, proin eu lectus pellentesque. A cras suscipit amet
            </div>
            <div className="btn_service">
              <div>Дізнатись більше</div>
            </div>
          </div>
        </div>
        <div className="three_cards">
          <div className="three_cards_back three_cards_back_one">
            <div className="free_zone">
              <div className="water">Клімбінг</div>
              <div className="timework">Вільне відвідування з 10 до 18ї</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </div>
            </div>
            <div className="btn_three_cards">
              <a href="#">Цікавить</a>
            </div>
          </div>
          <div className="three_cards_back three_cards_back_two">
            <div className="free_zone">
              <div className="water">Вільна зона</div>
              <div className="timework">Вільне відвідування з 7 до 22ї</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </div>
            </div>
            <div className="btn_three_cards">
              <a href="#">Цікавить</a>
            </div>
          </div>
          <div className="three_cards_back three_cards_back_three">
            <div className="free_zone">
              <div className="water">Басейн</div>
              <div className="timework">Вільне відвідування з 7 до 22ї</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis
              </div>
            </div>
            <div className="btn_three_cards">
              <a href="#">Цікавить</a>
            </div>
          </div>
        </div>
      </div>
      <div className="ven_back">
        <div className="container_ven">
          <div className="ven_back_l">
            <div id="facilities">Правила відвідування спортивних зон</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus non enim luctus venenatis,
              lectus magna fringilla urna, porttitor rhoncus dolor purus non eni
            </div>
            <div className="btn_ven">
              <a href="#">Дізнатись більше</a>
            </div>
          </div>
          <div className="complex_back_r">
            <div className="free_cards" style={{ backgroundColor: "green" }}>
              <div className="complex_back_img">
                <GrYoga size={55} style={{ color: "black" }} />
              </div>
              <div className="complex_back_big">Релакс</div>
              <div>Правила відвідування групових занять</div>
            </div>
            <div className="free_cards" style={{ backgroundColor: "blue" }}>
              <div className="complex_back_img">
                <MdOutlinePool size={55} style={{ color: "black" }} />
              </div>
              <div className="complex_back_big">Басейн</div>
              <div>Правила відвідування басейну</div>
            </div>
            <div className="free_cards" style={{ backgroundColor: "red" }}>
              <div className="complex_back_img">
                <MdSportsMartialArts size={55} style={{ color: "black" }} />
              </div>
              <div className="complex_back_big">Тайбо</div>
              <div>Правила відвідування ударної зони</div>
            </div>
            <div className="free_cards" style={{ backgroundColor: "orange" }}>
              <div className="complex_back_img">
                <MdSportsKabaddi size={55} style={{ color: "black" }} />
              </div>
              <div className="complex_back_big">Боротьба</div>
              <div>Правила відвідування зони боротби</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="our_serice">
          <div className="our">
            <div id="comlex">На території комплексу є</div>
            <div>зони відпочинку та спорту</div>
          </div>
          <div className="six_box_service">
            <div className="box_sbc">
              <div>
                <FaBasketball size={70} style={{ color: "black" }} />
              </div>
              <div className="colomn_sbc">
                <div>
                  <div id="sbc_head">Баскетбольна площадка</div>
                  <div>
                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                    ultricies magna et. Quisque euismod orci ut et lobortis.
                  </div>
                </div>
                <div className="btn_sbc">
                  <a href="#">Дізнатись більше</a>
                </div>
              </div>
            </div>
            <div className="box_sbc">
              <div>
                <FaBicycle size={70} style={{ color: "black" }} />
              </div>
              <div className="colomn_sbc">
                <div>
                  <div id="sbc_head">Прокат велосипедів</div>
                  <div>
                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                    ultricies magna et. Quisque euismod orci ut et lobortis.
                  </div>
                </div>
                <div className="btn_sbc">
                  <a href="#">Дізнатись більше</a>
                </div>
              </div>
            </div>
            <div className="box_sbc">
              <div>
                <FaBaseball size={70} style={{ color: "black" }} />
              </div>
              <div className="colomn_sbc">
                <div>
                  <div id="sbc_head">Поле для гри в бейсболл</div>
                  <div>
                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                    ultricies magna et. Quisque euismod orci ut et lobortis.
                  </div>
                </div>
                <div className="btn_sbc">
                  <a href="#">Дізнатись більше</a>
                </div>
              </div>
            </div>
            <div className="box_sbc">
              <div>
                <FaPersonRifle size={70} style={{ color: "black" }} />
              </div>
              <div className="colomn_sbc">
                <div>
                  <div id="sbc_head">Тир</div>
                  <div>
                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                    ultricies magna et. Quisque euismod orci ut et lobortis.
                  </div>
                </div>
                <div className="btn_sbc">
                  <a href="#">Дізнатись більше</a>
                </div>
              </div>
            </div>
            <div className="box_sbc">
              <div>
                <FaCarTunnel size={70} style={{ color: "black" }} />
              </div>
              <div className="colomn_sbc">
                <div>
                  <div id="sbc_head">Підземний паркінг</div>
                  <div>
                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                    ultricies magna et. Quisque euismod orci ut et lobortis.
                  </div>
                </div>
                <div className="btn_sbc">
                  <a href="#">Дізнатись більше</a>
                </div>
              </div>
            </div>
            <div className="box_sbc">
              <div>
                <FaDrumstickBite size={70} style={{ color: "black" }} />
              </div>
              <div className="colomn_sbc">
                <div>
                  <div id="sbc_head">Їдальня </div>
                  <div>
                    Phasellus enim libero, blandit vel sapien vitae, condimentum
                    ultricies magna et. Quisque euismod orci ut et lobortis.
                  </div>
                </div>
                <div className="btn_sbc">
                  <a href="#">Дізнатись більше</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
