import React from "react";
import view from "../../assets/view.png";
import like from "../../assets/like.png";

function Card(props) {
    return (
        <div className="cards__card card">
            <div className="card__url"> {props.link} </div>

            <div className="card__text">
                New air routes that promise cheap flights in
            </div>

            <div className="card__bottom-info bottom-info">
                <div className="bottom-info__author author">
                    <div className="author__img"></div>
                    <div className="author__name"> Gregory Watkins</div>
                </div>
                <div className="bottom-info__view-box view-box">
                    <div className="view-box__amount">
                        <img src={view} alt="view"/><span className="number"> 88 </span>
                    </div>
                    <div className="view-box__amount">
                        <img src={like} alt="like"/><span className="number"> 24 </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
