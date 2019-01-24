import 'whatwg-fetch';

export function get(url){
  return fetch(url,{
    credentials:'include',
    headers:{
      'Accept':'application/json, text/plain,*/*'
    }
  })
}
