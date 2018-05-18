Page({
  data: {
    imageFirst_1: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg'
  },
  productDetails: function (event) {
    console.log(event.currentTarget);
    wx.navigateTo({
      url: '/page/component/pages/epay_product_details/epay_product_details'
    })
  }
})