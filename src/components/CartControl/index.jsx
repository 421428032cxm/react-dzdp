import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import * as sellerInfoCreators from '../../containers/Detail/store/actionCreators';
import './style.css';

class CartControl extends PureComponent {

    cartShowTab(str) {
        if (this.props.item.count && this.props.item.count > 0) {
            if (str === "decrease") {
                return "cart-decrease cart-show"
            }else{
                return "cart-count cart-show"
            }
        }else{
            if (str === "count") {
                return "cart-decrease cart-hide"
            }else{
                return "cart-count cart-hide"
            }
        }
    }

    render() {
        return (
            <Fragment>
                <div className={this.cartShowTab("decrease")} onClick={this.decreaseCart.bind(this)}>
                    <span className="inner icon-remove_circle_outline"></span>
                </div>
                {   
                    this.props.item.count ? 
                        <div className={this.cartShowTab("count")}>{this.props.item.count}</div>
                         : <div className={this.cartShowTab("count")}>0</div>        
                }
                <div className="cart-add icon-add_circle" onClick={this.addCart.bind(this)}></div>
            </Fragment>
        );
    }

    // 添加商品
    addCart() {
        let { item } = this.props;
        if (!item.count) {
            item.count = 1;
        }else{
            item.count++;
        }
        this.props.dispatchAddCart(this.props.item);
    }

    // 减少商品
    decreaseCart() {
        let { item } = this.props;
        if (item.count && item.count > 0) {
            item.count--;
        }else{
            item.count = 0;
        }
        this.props.dispatchDecreaseCart(this.props.item);
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatchAddCart(data) {
            dispatch(sellerInfoCreators.addGoodsToCart(data))
        },
        dispatchDecreaseCart(data) {
            dispatch(sellerInfoCreators.decreaseGoodsCart(data))
        }
    }
}

export default connect(null, mapDispatchToProps)(CartControl);