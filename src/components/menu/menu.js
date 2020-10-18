import React from "react";
import report from "../../assets/report.png";
import block from "../../assets/block.png";

function Menu() {
    return (
        <div className="person__menu menu">
            <div className="menu__item">
                <img src={report} alt="report"/><span>Report User</span>
            </div>
            <div className="menu__item">
                <img src={block} alt="block"/><span>Block User</span>
            </div>
        </div>
    );
}

export default Menu;
