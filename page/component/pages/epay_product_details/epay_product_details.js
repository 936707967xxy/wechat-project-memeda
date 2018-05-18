Page({
  data: {
    selected1: true,
    selected2: false,
    selected3: false,
    productImage: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg',
    productTitle: 'Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina显示屏/Touch ID技术 MPGW2CH/A）金色'
  },
  selected1: function (e) {
    this.setData({
      selected1: true,
      selected2: false,
      selected3: false
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected2: true,
      selected3: false
    })
  },
  selected3: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: true
    })
  }
})