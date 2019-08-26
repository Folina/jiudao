import{config} from '../config.js'
const tips ={
  "1":"出现一个错误",
  "1007":"没有开发者key",
  "3000":"没有刊期"
  
}
class HTTP{
  request(params){
    if(!params.method){
      params.method='GET'
    }
    wx.request({
      url: config.pre_url+params.url,
      data:params.data,
      method:params.method,
      header:{
        'content-type':'complication/json',
        'appkey':config.appkey
      },
      success:(res) =>{
        //startsWith、endsWith
        let code = res.statusCode.toString()
        if(code.startsWith('2')){
          params.success(res.data)

        }
        else{
         let error_code = res.data.error_code
         this._show_error(error_code)

        }

      },
      fail:(err) =>{
        this._show_error(1)

      }
    })

  }
  _show_error(error_code){
    if(!error_code){
        error_code=1
    }
    wx.showToast({
      title:tips[error_code],
      icon:"none",
      duration:2000
    })

  }
}
export{HTTP}