export default {
    getItem: function(key) {
      let value
      try {
        value = localStorage.getItem(key)
      } catch(ex){
        console.error('localStorage.getItem exception', ex.message)
      }finally {
        return value;
      }
    },
    setItem: function(key, value){
      try {
        localStorage.setItem(key, value)
      } catch (ex) {
        console.error('localStorage.setItem exception', ex.message);
      } finally {
  
      }
    }
}
  