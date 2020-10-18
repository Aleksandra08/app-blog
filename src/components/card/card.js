import React from "react";

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
                    <div className="view-box__share">
                        Share
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Card;
