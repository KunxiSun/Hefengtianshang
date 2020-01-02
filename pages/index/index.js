// pages/index/index.js
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
    //region:wx.getUserInfo,
    region:['北京市','北京市','东城区'],
    now:''
  },

//server key:da8f1b13cf2e4df4b35b944f27f30af6
  /**
   * 组件的方法列表
   */
  methods: {
    changeRegion:function(e){
      this.setData({
        region:e.detail.value
      })
      this.getWeather();
    },
    getWeather:function(){
      var that = this;
      wx.request({
        url: 'https://free-api.heweather.net/s6/weather/now?',
        data:{
          location:that.data.region[1],
          key:'da8f1b13cf2e4df4b35b944f27f30af6'
        },
        success:function(res){
          //console.log(res.data)
          that.setData({now:res.data.HeWeather6[0].now});
        }
      })
    },
    onLoad:function(options){
      this.getWeather()
    }
  }
})
