import * as actionTypes from './actionTypes';

const defaultState = {
    sellerInfo: {},
    cartGoods: [],
    totalPrice: 0,
    totalMount: 0,
    shopCartShow: false
}

// 添加商品 统计购物车信息
const AddCalculate = (newState, action) => {
    let isSame = false;
    newState.totalPrice = 0;
    newState.totalMount = 0;
    if (newState.cartGoods.length > 0) {
        for(let i = 0; i < newState.cartGoods.length; i++) {
            if (newState.cartGoods[i].spuName === action.data.spuName) {
                newState.cartGoods[i].count++;
                isSame = true;
                break;
            }else{
                isSame = false;
            }
        }
        if (!isSame) {
            newState.cartGoods.push(action.data); 
        }
    }else{
        newState.cartGoods.push(action.data); 
    }
    newState.cartGoods.forEach((item) => {
        newState.totalMount += item.count;
        newState.totalPrice += item.currentPrice * item.count
    })
}

// 移除商品 统计购物车信息
const decreaseCalculate = (newState, action) => {
    newState.totalPrice = 0;
    newState.totalMount = 0;
    for(let i = 0; i < newState.cartGoods.length; i++) {
        if (newState.cartGoods[i].spuName === action.data.spuName) {
            if (newState.cartGoods[i].count > 1) {
                newState.cartGoods[i].count--;
            }else{
                newState.cartGoods.splice(i, 1); 
            }
        }
    }
    newState.cartGoods.forEach((item) => {
        newState.totalMount += item.count;
        newState.totalPrice += item.currentPrice * item.count
    })
}

// 控制购物车列表的展示隐藏
const shopCartShowTab = (newState) => {
    if (newState.shopCartShow) {
        newState.shopCartShow = false
    }else{
        newState.shopCartShow = true
    }
    return newState
}

export default (state = defaultState, action) => {
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type) {
        case actionTypes.GET_SELLER_INFO:
            newState.sellerInfo = action.data
            return newState;
        case actionTypes.Add_GOODS_TO_CART:
            AddCalculate(newState, action);
            return newState;
        case actionTypes.DECREASE_GOODS_FROM_CART:
            decreaseCalculate(newState, action);
            return newState;
        case actionTypes.SHOPCART_SHOW_TAB:
            return shopCartShowTab(newState);
        default:
            return state
    }
}