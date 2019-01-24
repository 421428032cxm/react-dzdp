import React, { Component } from 'react';
import { connect } from 'react-redux';
import BScroll from 'better-scroll';
import CartControl from '../CartControl';
import ShopCart from '../ShopCart';
import './style.css';

class Goods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listHeight: [],
            scrollY: 0,
            index: 0  // 当前类别索引
        }
        this.menuWrap = React.createRef();
        this.goodsWrap = React.createRef();
    }


    render() {
        return (
            <div className="foods-root">
                <div className="menu-wrap" ref={this.menuWrap}>
                    <ul>
                        {
                            this.props.categoryList.map((item ,index) => {
                                return (
                                    <li className={this.state.index === index ? 'menu-item current' : 'menu-item'} key={index} onClick={this.selectMenuClick.bind(this, index)}>
                                        <span className="text">{item.categoryName}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="goods-wrap" ref={this.goodsWrap}>
                    <ul>
                        {
                            this.props.categoryList.map((listItem ,index) => {
                                return (
                                    <li className="goods-list goods-list-hook" key={index}>
                                        <h1 className="title">{listItem.categoryName}</h1>
                                        <ul>
                                            {
                                                listItem.spuList.map((item, index) => {
                                                    return (
                                                        <li className="goods-item" key={index}>
                                                            <div className="image">
                                                                <img src={item.bigImageUrl} alt="商品图片" />
                                                            </div>
                                                            <div className="content">
                                                                <h2 className="name">{item.spuName}</h2>
                                                                <p className="desc">{item.spuDesc}</p>
                                                                <div className="extra">
                                                                    <span className="count">月售{item.saleVolume}份</span>
                                                                    <span>好评率{item.saleVolume}%</span>
                                                                </div>
                                                                <div className="price">
                                                                    <span className="now">¥{item.currentPrice}</span>
                                                                    <span className="old">¥{item.originPrice}</span>
                                                                </div>
                                                                <div className="cart-control-wrap">
                                                                    <CartControl item={item}/>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <ShopCart />
            </div>
        );
    }

    componentDidMount() {
        let nowScrollY = null,
            currentIndex = null;
        // 初始化滚动列表
        this.meunScroll = new BScroll(this.menuWrap.current,{
            click: true                                                                                       
        }); 
        this.goodsScroll = new BScroll(this.goodsWrap.current,{
            probeType: 3,
            click: true                                                                                         
        });
        
        this.goodsScroll.on('scroll', (pos) => {
            nowScrollY = Math.abs(Math.round(pos.y));
            currentIndex = this.currentIndex(nowScrollY);   
            this.setState((preState) => {
                if (preState.index !== currentIndex) {
                    return {
                        index: currentIndex
                    }
                }
            });
        })
        this.calculateHeight();
    }

    // 计算每个类别需要滚动的高度
    calculateHeight() {
        let goodsList = this.goodsScroll.wrapper.getElementsByClassName('goods-list-hook');
        let height = 0;
        this.state.listHeight.push(height);
        for(let i = 0; i < goodsList.length; i++) {
          let item = goodsList[i];
          height += item.clientHeight;
          this.state.listHeight.push(height);
        }
    }

    // 两级联动 -- 类别索引控制展示区域
    selectMenuClick(index) {
        let goodsList = this.goodsScroll.wrapper.getElementsByClassName('goods-list-hook');
        let el = goodsList[index];
        this.goodsScroll.scrollToElement(el, 500);
    }

    // 两级联动 -- 滑动展示区域锁定指定类别
    currentIndex(nowScrollY) {
        for(let i = 0; i < this.state.listHeight.length; i++) {
            let height1 = this.state.listHeight[i];
            let height2 = this.state.listHeight[i + 1];
            if(nowScrollY >= height1 && nowScrollY < height2) {
                return i;
            }
        }
    }
}

const mapStateToProps = (state) => ({
    cartGoods: state.sellerData.cartGoods
})

export default connect(mapStateToProps, null)(Goods);