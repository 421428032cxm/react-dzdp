import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Item extends PureComponent {
    render() {
        const { data } = this.props;
        return (
            <div>
                <div className="list-item clear-fix">
                    <Link to="/detail">
                        <div className="item-img-container float-left">
                            <img src={data.img} alt={data.title}/>
                        </div>
                        <div className="item-content">
                            <div className="item-title-container clear-fix">
                                {
                                    this.props.keyword ? 
                                        <h3 className="float-left">{data.title + '(当前类别:' + this.props.keyword  + ')'}</h3> : 
                                            <h3 className="float-left">{data.title}</h3>
                                }
                                <span className="float-right">{data.distance}</span>
                            </div>
                            <p className="item-sub-title">
                                {data.subTitle}
                            </p>
                            <div className="item-price-container clear-fix">
                                <span className="price float-left">￥{data.price}</span>
                                <span className="mumber float-right">已售{data.mumber}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Item;