// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean,
      value:false,//默认值

    },
    count:{
      type:Number
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    //数据绑定
    yesUrl:"images/like.png",
    noUrl:"images/like@dis.png"


  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike:function(event){
      let like = this.properties.like;
      let count = this.properties.count;
      count = like?count-1:count+1; //判断完之后，记得赋值回来，不然值不会改变
      this.setData({
        count:count,
        like:!like
      })

    }

  }
})
