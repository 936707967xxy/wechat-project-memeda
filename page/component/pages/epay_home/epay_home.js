Page({
  data: {
    imgUrls: [
      'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1306/15/c0/22095866_1371264002968.jpg',
      'http://desk.fd.zol-img.com.cn/t_s960x600c5/g5/M00/02/03/ChMkJlbKxvOIH6XEAA77F_zYBP8AALHswG2SeoADvsv762.jpg',
      'http://pic1.win4000.com/wallpaper/2017-12-01/5a20f87388b5e.jpg'
    ],
    imageFirst_1:'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg',
    imageFirst_2:'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1204/26/c0/11385431_1335424130346.jpg',
    imageFirst_3:'http://t1.niutuku.com/960/09/09-392794.jpg',
    imageFirst_4:'http://p16.qhimg.com/bdr/__/d/_open360/mc0608/24.jpg',
    indicatorDots: true,
    vertical: false,//是否纵向滑动
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  tapName: function (event){
    console.log(event.currentTarget);
    wx.navigateTo({
      url: '/page/component/pages/epay_login/epay_login'
    })
  },
  productList: function (event) {
    console.log(event.currentTarget);
    wx.navigateTo({
      url: '/page/component/pages/epay_product_list/epay_product_list'
    })
  }

})
