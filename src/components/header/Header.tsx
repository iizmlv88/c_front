import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { MdClose } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
// import { FcSportsMode } from "react-icons/fc";
const cities = ["Київ", "Львів", "Харків", "Одеса", "Дніпро"];

const Header: React.FC = () => {
  const closeMenu = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  };
  const closeSale = () => {
    const saleDiv = document.getElementById("sale");
    if (saleDiv) {
      saleDiv.style.display = "none";
    }
  };
  return (
    <div className="header">
      <div id="sale">
        <div id="sale-trio">
          <div id="sale-left"></div>
          <div id="sale-center">Акція до кінця місяця!</div>
          <div id="x" onClick={closeSale}>
            <MdClose size={24} />
          </div>
        </div>
      </div>

      <div id="line">
        <div className="firstLine">
          <div id="city-container">
            <select style={{ width: "100%", padding: "0.5rem" }}>
              {cities.map((city) => (
                <option value={city} key={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="phone-container">
            <div className="svg-container">
              <AiFillPhone size={24} />
            </div>
            <div className="phone-number">99999999</div>
          </div>
        </div>
      </div>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <section className="secondLine">
        <div>Тут лого</div>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <div className="menu-button"></div>
        </label>
        <ul className="menu">
          <li>
            <Link to="/Gyms" onClick={closeMenu}>
              Клуби
            </Link>
          </li>
          <li>
            <Link to="/Promotions" onClick={closeMenu}>
              Акції
            </Link>
          </li>
          <li>
            <Link to="/Trainers" onClick={closeMenu}>
              Тренери
            </Link>
          </li>
          <li>
            <Link to="/Calendar" onClick={closeMenu}>
              Розклад
            </Link>
          </li>
          <li>
            <Link to="/Equipment" onClick={closeMenu}>
              Обладнання
            </Link>
          </li>
          <li>
            <Link to="/Work" onClick={closeMenu}>
              Вакансії
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Header;
