import React, {Component} from "react";
import Menu from "../menu/menu.js";
import avatar from "../../assets/avatar.png";
import edit from "../../assets/edit.png";
import menu from "../../assets/menu.png";


class Details extends Component {

    constructor(props) {
        super(props);
        this.toggleBox = this.toggleBox.bind(this);
        this.state = {
            isOpened: false,
        };
    }

    toggleBox() {
        this.setState(oldState => ({isOpened: !oldState.isOpened}));
    }

    render() {
        const {isOpened} = this.state;
        return (
            <div className="content__details details">
                <div className="details__person person">
                    <div className="person__avatar">
                        <img src={avatar} alt="avatar"/>
                    </div>
                    <div className="person__data data">
                        <div className="data__name"> Benjamin Clementine</div>
                        <div className="data__nickname"> @benclementine</div>
                        <div className="data__edit-profile">
                            <img src={edit} alt="edit"/><span> Edit Profile </span>
                        </div>
                    </div>
                    <div onClick={this.toggleBox} className='person__setting'>
                        <img src={menu} alt="menu"/>
                        {isOpened && <Menu/>}
                    </div>
                </div>
                <div className="details__followers">
                    <div className="followers">
                        <div className="followers__amount">45</div>
                        <div className="followers__title">synths</div>
                    </div>
                    <div className="followers">
                        <div className="followers__amount">110</div>
                        <div className="followers__title">followers</div>
                    </div>
                    <div className="followers">
                        <div className="followers__amount">322</div>
                        <div className="followers__title">following</div>
                    </div>
                </div>
                <div className="details__descriptions">
                    Cryptocurrencies including Ethereum, Ripple, and Litecoin have
                    all plunged between 20 to 30 percent each, according to CoinMarketCap. Here is the latest Ripple
                    price news and live updates on XRP, bitcoin and Ethereum.
                </div>
            </div>
        );
    }
}

export default Details;
