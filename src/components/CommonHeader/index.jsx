import React, { PureComponent } from 'react';
// import { hashHistory } from 'react-router-dom';
import './style.css';

class CityHeader extends PureComponent {
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
    clickHandle() {
        window.history.back(); //浏览器自带的返回上一级页面的方式
    }
}

export default CityHeader;