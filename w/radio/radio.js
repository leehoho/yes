// radio/radio.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      radio: []
  },
  search: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '../search/search?id='+e.currentTarget.id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://tingapi.ting.baidu.com/v1/restserver/ting',
      data: {
        from: 'qianqian',
        version: '2.1.0',
        method: 'baidu.ting.radio.getCategoryList',
        format: 'json'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:res=>{
        console.log(res);
        this.setData({
          radio:res.data.result[0].channellist
        })
      }

    })
  },
  radio:function(e){
    var id = e.currentTarget.id;
    console.log(id);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})