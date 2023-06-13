import React from "react";
import "./TrainningFlex.css";

const TrainningFlex = () => {
  return (
    <div>
      {/* -------Nav bar-------- */}
      <div className="nav">
        <ul className="nav-list">
          <li className="nav-item">Gioi thieu</li>
          <li className="nav-item">Ket noi</li>
          <li className="nav-item">Noi dung</li>
        </ul>
        <ul className="nav-list">
          <li className="nav-item">Dang ky</li>
          <li className="nav-item">Dang nhap</li>
        </ul>
      </div>
    </div>
  );
};

export default TrainningFlex;
