import * as actionTypes from './actionTypes'

export const update = (data) => {
  return {
    type: actionTypes.USERINFO_UPDATE,
    data
  }
}