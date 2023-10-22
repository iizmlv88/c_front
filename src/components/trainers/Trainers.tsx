import React from "react";
import "./Trainers.scss";
import Header from "../header/Header";
import { GrGremlin, GrHorton, GrFanOption } from "react-icons/gr";
import { GiSportMedal } from "react-icons/gi";
import { MdSportsKabaddi, MdSportsMartialArts } from "react-icons/md";
import { GrSwim } from "react-icons/gr";

const Trainers: React.FC = () => {
  return (
    <div className="prom">
      <div className="team">
        <Header />
        <div className="container">
          <div className="about_uss">Наші тренери</div>
        </div>
      </div>
      <div className="container">
        <div className="why">
          <div className="choose">
            <div id="us">Чого варто обрати нас ?</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              adipisci, blanditiis molestiae tenetur doloremque amet sunt
              dolorum necessitatibus culpa rem magnam vitae ut possimus esse
              nostrum dolore, delectus explicabo quibusdam.
            </div>
          </div>
          <div className="triple_green_logo">
            <div className="green_logo_box">
              <div className="img_center">
                <GrFanOption size={60} />
              </div>
              <div className="triple_green_text">
                <div className="best">У нас є кондиціонери</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            <div className="green_logo_box">
              <div className="img_center">
                <GrGremlin size={60} />
              </div>
              <div className="triple_green_text">
                <div className="best">Задоволені клієнти</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
            <div className="green_logo_box">
              <div className="img_center">
                <GrHorton size={60} />
              </div>
              <div className="triple_green_text">
                <div className="best">У нас є слон</div>
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block">
          <div className="ka4ki">
            <div>
              <div id="ka4ki_h">Про нашу команду</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                dictum et in feugiat. Platea in diam, est congue. Posuere sapien
                morbi augue ultrices. Et facilisi orci sollicitudin placerat
                lacus lacus nibh. Egestas semper massa viverra massa proin in
                morbi placerat. Pharetra nec, est non integer nisi, ut faucibus.
                Non, in nam sollicitudin vitae volutpat ac molestie. Turpis
                pellentesque sit pellentesque id cras lobortis tortor, blandit.
              </div>
            </div>
            <div>
              Id ac non, semper turpis maecenas. Convallis tempor fringilla
              quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae.
              Malesuada velit, at mattis adipiscing quisque tristique id magna.
              Blandit porta sit nam magna sit. Turpis vestibulum facilisis
              placerat habitant gravida eget. Lacus pretium, arcu non adipiscing
              sed faucibus semper eget tempor.
            </div>
          </div>
          <div id="ka4ki_img">
            <img
              src="/alora-griffiths-kUN69w8jb4U-unsplash.jpg"
              alt="ka4ki"
              id="photo_podrujki"
            />
          </div>
        </div>
        <div className="our_team">
          <div className="our_team_h">
            <div>Our Teams</div>
            <div id="oth">Lorem ipsum dolor sit amet</div>
          </div>
          <div className="four_tm">
            <div className="four_t">
              <div>
                <img
                  src="/vadim-paripa-8VI6WwEEEHw-unsplash.jpg"
                  alt="Христина"
                  className="four_img_t"
                />
              </div>
              <div>
                <div>Христина</div>
                <div>Функціональні тренування</div>
              </div>
            </div>
            <div className="four_t">
              <div>
                <img
                  src="/sushil-ghimire-DC5akQJyH4I-unsplash.jpg"
                  alt="Софія"
                  className="four_img_t"
                />
              </div>
              <div>
                <div>Софія</div>
                <div>Чтретчінг</div>
              </div>
            </div>
            <div className="four_t">
              <div>
                <img
                  src="/alora-griffiths-JNeYWQncbj8-unsplash.jpg"
                  alt="Віталій"
                  className="four_img_t"
                />
              </div>
              <div>
                <div>Віталій</div>
                <div>Силові тренування</div>
              </div>
            </div>
            <div className="four_t">
              <div>
                <img
                  src="/brandon-webb-U5bcwyMf6kY-unsplash.jpg"
                  alt="Анастасія"
                  className="four_img_t"
                />
              </div>
              <div>
                <div>Анастасія</div>
                <div>Тайбо</div>
              </div>
            </div>
            <div className="four_t">
              <div>
                <img
                  src="/john-fornander-TAZoUmDqzXk-unsplash.jpg"
                  alt="Станіслав"
                  className="four_img_t"
                />
              </div>
              <div>
                <div>Станіслав</div>
                <div>Спортивний реаьілітолог</div>
              </div>
            </div>
          </div>
        </div>
        <div className="four_svg">
          <div className="four_row">
            <a href="#">
              <GiSportMedal size={90} style={{ color: "black" }} />
            </a>
          </div>
          <div className="four_row">
            <a href="#">
              <MdSportsKabaddi size={90} style={{ color: "black" }} />
            </a>
          </div>
          <div className="four_row">
            <a href="#">
              <MdSportsMartialArts size={90} style={{ color: "black" }} />
            </a>
          </div>
          <div className="four_row">
            <a href="#">
              <GrSwim size={90} style={{ color: "black" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
