// pages/home/home.js

// getApp()获取App()产生的示例对象(相当于vuex)
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad(){}
  onLoad: function (options) {
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  },
  handleGetUserInfo(event){
    console.log(event)
  }
})