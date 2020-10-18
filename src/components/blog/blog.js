import React from "react";
import Card from "../card/card.js";
import Card2 from "../card/card2.js";

function Blog() {

    return (
        <div className="content__blog blog">
            <div className="blog__toggle-menu toggle-menu">
                <div className="toggle-menu__title">Public</div>
                <div className="toggle-menu__button">
                    <input type="checkbox" className="checkbox"/>
                    <div className="knobs"></div>
                    <div className="layer"></div>
                </div>
                <div className="toggle-menu__title">Private</div>
            </div>
            <div className="blog__section-cards cards">
                <Card link=" "/>
                <Card link=" "/>
                <Card2 link="Shared to #discussionaboutanimgttdds…"/>
                <Card2 link="Shared via weblink"/>
            </div>
        </div>
    );
}

export default Blog;
