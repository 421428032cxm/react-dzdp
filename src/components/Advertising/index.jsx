import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import './style.css';
import ad1 from '../../static/image/ad-1.png';
import ad2 from '../../static/image/ad-2.png';
import ad3 from '../../static/image/ad-3.png';
import ad4 from '../../static/image/ad-4.png';
import ad5 from '../../static/image/ad-5.png';
import ad6 from '../../static/image/ad-6.png';

const adImgArr = [ad1, ad2, ad3, ad4, ad5, ad6];

class Advertising extends PureComponent {
    getAdData() {
        const { advertising } = this.props;
        if (advertising) {
            return (
                <div id="home-ad">
                    <h2>超值特惠</h2>
                    <div className="ad-container clear-fix">
                        {
                            advertising.map((item, index) => {
                                return (
                                    <div key={index} className="ad-item float-left">
                                        <a href={item.link}>
                                            <img src={adImgArr[index]} alt={item.title}/>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }else{
            return null
        }
    }
    render() {
        return (
            <Fragment>
                {this.getAdData()}
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    advertising: state.homeData.advertising
})

export default connect(mapStateToProps, null)(Advertising);