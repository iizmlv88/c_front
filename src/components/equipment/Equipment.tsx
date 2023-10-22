import React from "react";
import "./Equipment.scss";
import Header from "../header/Header";

const Equipment: React.FC = () => {
  return (
    <div className="prom">
      <div className="eq">
        <Header />
        <div className="container">
          <div className="gym_text">З нами найкращі</div>
        </div>
      </div>

      <div className="container">
        <div className="section_three">
          <div className="section_three_header">
            <div id="destination">Відчуй себе на високому рівні</div>
            <div>Бренди та представники</div>
          </div>
          <div className="six_blocks">
            <div className="blocks">
              <div className="box_pic">
                <div>
                  <a href="#">
                    <img
                      src="/ctrl-a-meal-replacement-03e4RajfFAE-unsplash.jpg"
                      alt="CTRL"
                      className="img_six"
                    />
                  </a>
                </div>
                <div>CTRL</div>
              </div>
              <div className="box_bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur sed maxime alias, natus, odit voluptas quibusdam sequi
                fuga tempora distinctio repellat voluptatibus quasi unde saepe
                perspiciatis? Aperiam cupiditate animi fugiat!
              </div>
            </div>
            <div className="blocks">
              <div className="box_pic">
                <div>
                  <a href="#">
                    <img
                      src="/sylwester-walczak-XFhaYR1kbCc-unsplash.jpg"
                      alt="Everlast"
                      className="img_six"
                    />
                  </a>
                </div>
                <div>Everlast</div>
              </div>
              <div className="box_bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident aliquam nesciunt temporibus voluptatibus, odio maxime
                repellendus pariatur eaque suscipit, vel reiciendis amet quis
                quo voluptatum, neque atque nisi expedita? Aspernatur.
              </div>
            </div>
            <div className="blocks">
              <div className="box_pic">
                <div>
                  <a href="#">
                    <img
                      src="/joseph-greve-Tivp5fYe4Ng-unsplash.jpg"
                      alt="Huel"
                      className="img_six"
                    />
                  </a>
                </div>
                <div>Huel</div>
              </div>
              <div className="box_bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                repudiandae provident fugit quidem ad, fuga incidunt dolor quam
                ullam esse in, nobis architecto distinctio, beatae consectetur?
                Iusto vitae illo dignissimos.
              </div>
            </div>
            <div className="blocks">
              <div className="box_pic">
                <div>
                  <a href="#">
                    <img
                      src="/wu-yi-zY3zIOdKXL4-unsplash.jpg"
                      alt="Nike"
                      className="img_six"
                    />
                  </a>
                </div>
                <div>Nike</div>
              </div>
              <div className="box_bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, itaque. Cum beatae quis impedit optio voluptatem
                minima aspernatur pariatur, facere expedita commodi ad nam et
                eos laboriosam cumque quaerat quam.
              </div>
            </div>
            <div className="blocks">
              <div className="box_pic">
                <div>
                  <a href="#">
                    <img
                      src="/max-letek-3Bn1F4BxumI-unsplash.jpg"
                      alt="Adidas"
                      className="img_six"
                    />
                  </a>
                </div>
                <div>Adidas</div>
              </div>
              <div className="box_bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia nam quisquam reiciendis nostrum repellat, fuga hic
                minima voluptas deleniti consequatur amet at quaerat eos
                blanditiis similique suscipit. Doloremque, nemo mollitia!
              </div>
            </div>

            <div className="blocks">
              <div className="box_pic">
                <div>
                  <a href="#">
                    <img
                      src="/john-fornander-y6_SJpU3Alk-unsplash.jpg"
                      alt="Wilson"
                      className="img_six"
                    />
                  </a>
                </div>
                <div>Wilson</div>
              </div>
              <div className="box_bottom">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                possimus minus incidunt corrupti, dolores temporibus totam
                accusamus soluta eveniet, culpa vero expedita nobis ullam
                exercitationem amet est ea nihil. Ullam.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
