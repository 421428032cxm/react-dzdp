import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import CartControl from '../CartControl'
import * as sellerInfoCreators from '../../containers/Detail/store/actionCreators';
import './style.css';

class ShopCart extends Component {
    constructor(props){
        super(props);
        this.state = {
            minPrice: 20
        }
    }

    goodsListReturn() {
        if (this.props.cartGoods.length > 0) {
                return (
                    <ul>
                        {
                            this.props.cartGoods.map((item, index) => {
                                return (
                                    <li className="food" key={index}>
                                        <span className="name">{item.spuName}</span>
                                        <div className="price"><span>¥{item.currentPrice}</span></div>
                                        <div className="cartcontrol-wrap">
                                            <CartControl item={item} />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
        }else{
            return null;
        }
    }

    render() {
        return (
            <div className="shopcart-root">
                <div className="shop-cart">
                    <div className="content">
                        <div className="content-left">
                            <div className="logo-wrap" onClick={this.unfoldClick.bind(this)}>
                                <div className={this.props.totalMount >0 ? "logo highlight" : "logo"}>
                                    <span className={this.props.totalMount > 0 ? "icon-shopping_cart highlight" : "icon-shopping_cart"}></span>
                                </div>
                                <div className="num" v-show="totalCount>0">{this.props.totalMount}</div>
                            </div>
                            <div className={this.props.totalPrice > 0 ? "price highlight" : "price"}>¥{this.props.totalPrice}</div>
                            <div className="desc">另需配送费¥3元</div>
                        </div>
                        <div className="content-right">
                            <div className={this.props.totalPrice > this.state.minPrice ? "pay enough" : "pay"}>{this.payDesc()}</div>
                        </div>
                    </div>
                </div>
                <CSSTransition timeout={200} in={this.props.shopCartShow} classNames="slider">
                    <div className={this.props.shopCartShow ? "shopcart-list unfold" : "shopcart-list"}>
                        <div className="list-header">
                            <h1 className="title">购物车</h1>
                            <span className="empty">清空</span>
                        </div>
                        <div className="list-content">
                            {this.goodsListReturn()}
                        </div>
                    </div>
                </CSSTransition>
            </div>
        );
    }

    payDesc() {
        if(this.props.totalPrice === 0) {
            return '¥' + 0 + '元起送';
        }else if(this.props.totalPrice < this.state.minPrice) {
            let diff = this.state.minPrice - this.props.totalPrice;
            return '还差' + diff + '元起送';
        }else{
            return '去结算';
        }
    }

    unfoldClick() {
        this.props.dispatchShopCartShow();
    }
}

const mapStateToProps = (state) => ({
    totalPrice: state.sellerData.totalPrice,
    totalMount: state.sellerData.totalMount,
    cartGoods: state.sellerData.cartGoods,
    shopCartShow: state.sellerData.shopCartShow
})

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchShopCartShow() {
            dispatch(sellerInfoCreators.shopCartShow())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopCart);