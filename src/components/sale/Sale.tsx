import React from "react";
import "./Header.scss";
import { MdClose } from "react-icons/md";

const Sale: React.FC = () => {
  const closeSale = () => {
    const saleDiv = document.getElementById("sale");
    if (saleDiv) {
      saleDiv.style.display = "none";
    }
  };
  return (
    <div className="sale">
      <div id="sale">
        <div id="sale-trio">
          <div id="sale-left"></div>
          <div id="sale-center">Акція до кінця місяця!</div>
          <div id="x" onClick={closeSale}>
            <MdClose size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
