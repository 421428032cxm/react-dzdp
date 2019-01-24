import * as actionTypes from './actionTypes';
import { fetchSellerInfo } from '../../../fetch/detail/sellerInfo';

export const SellerInfoAction = (data) => {
  return {
    type: actionTypes.GET_SELLER_INFO,
    data
  }
}

// 获取商家详情页信息
export const getSellerInfo = () => {
  return (dispatch) => {
      const result = fetchSellerInfo();
      result.then((response) => {
          return response.json();
      }).then((json) => {
          if (json.code === 0) {
              dispatch(SellerInfoAction(json.data))
          }
      })
  }
}

// 添加商品
export const addGoodsToCart = (data) => {
    return {
        type: actionTypes.Add_GOODS_TO_CART,
        data
    }
}

// 减少商品
export const decreaseGoodsCart = (data) => {
    return {
        type: actionTypes.DECREASE_GOODS_FROM_CART,
        data
    }
}

// 购物车展示和隐藏
export const shopCartShow = () => {
    return {
        type: actionTypes.SHOPCART_SHOW_TAB
    }
}