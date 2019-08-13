// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    //三元表达式
    like:true,
    count1:99,
    count2:999,
    yesSrc:"images/like.png",
    noSrc:"images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      console.log("1111")
    }
  }
})
