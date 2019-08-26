
import {HTTP} from '../util/http.js';

//this.request 由于继承了HTTP类，所有不需要new一个对象，直接可以用this来调用
//使用回调的方法，剥夺return的能力，使用promise的方法来做。
class ClassicsModle extends HTTP{
  getLastest(scallback){
    this.request({
      url: '/classic/lastest',
    })
    success: (res) => {
      scallback(res)
    }

  }
 
}
export { ClassicsModle}
