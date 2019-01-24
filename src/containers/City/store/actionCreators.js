import * as actionTypes from './actionTypes'

export const update = (data) => {
  return {
    type: actionTypes.UPDATE_CITYNAME,
    data
  }
}