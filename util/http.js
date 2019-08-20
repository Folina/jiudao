import{config} from '../config.js'

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
        let code = res.statusCode
        if(code.startsWith('2')){

        }
        else{

        }

      },
      fail:(err) =>{

      }
    })

  }
}
export{HTTP}