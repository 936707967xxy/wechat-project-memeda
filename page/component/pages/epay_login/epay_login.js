Page({
  data: {
    imageLoginBg: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg'
  },
  formSubmit: function (e) {
    var that = this;
    var tokend = wx.getStorageSync('tokend')
    var userName = e.detail.value.userName;         //获取input初始值
    var userPwd = e.detail.value.userPwd;    //获取input初始值
    
    var name = that.data.userName ? that.data.userName : userName ;
    var Pwd = that.data.userPwd ? that.data.userPwd : userPwd;

    console.log('cuowu' + ':' + tokend);

    wx.request({
      method: 'POST',
      url: 'http://127.0.0.1:8080/epaySms/user/login/?token=' + tokend, //接口地址
      data: {
        'userName': name,
        'userPwd': Pwd
      },
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: function (res) {
        console.log(res.data.code);
        if ("0000" == res.data.code){
          wx.showToast({
            title: '资料修改成功',
            image: '../image/icon64_appwx_logo.png',
            duration: 2000
          })
          setTimeout(function () {
            wx.switchTab({
              url: '../epay_login/epay_login',
            })
          }, 2000)
        }else{
          console.log("登录异常，异常原因" + res.data.message);
        }
        

      },
      fail: function (res) {
        console.log(res.data.code);
      }
    })

  }
  
})
