Page({
  data: {
    selected1: true,
    selected2: false,
    selected3: false,
    productImage: 'http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg',
    productTitle: 'Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina显示屏/Touch ID技术 MPGW2CH/A）金色',
    min: 1,//最小值 整数类型，null表示不设置
    max: null,//最大值 整数类型，null表示不设置
    num: 1,//输入框数量 整数类型
    change: 1,//加减变化量 整数类型
    def_num: 1//输入框值出现异常默认设置值
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
  },
  //输入框失去焦点事件
  evblur: function (e) {
    var zval = parseInt(e.detail.value);
    console.log(zval)
    //正则 正整数 0 负整数
    if (/(^-[1-9][0-9]{0,}$)|(^0$)|(^[1-9][0-9]{0,}$)/.test(zval)) {
      //最大值
      if (this.data.max != null) {
        if (zval > this.data.max) {
          console.log("超出最大值")
          this.setData({ num: this.data.def_num })
        } else {
          this.setData({ num: zval })
        };
      } else {
        this.setData({ num: zval })
      };
      //最小值
      if (this.data.min != null) {
        if (zval < this.data.min) {
          console.log("低于最小值")
          this.setData({ num: this.data.def_num })
        } else {
          this.setData({ num: zval })
        };
      } else {
        this.setData({ num: zval })
      };
    } else {
      console.log("不是整数")
      this.setData({ num: this.data.def_num })
    };
  },
  //加
  evad: function () {
    var cval = Number(this.data.num) + this.data.change;
    if (this.data.max != null) {
      if (cval > this.data.max) {
        console.log("超出最大值")
      } else {
        this.setData({ num: cval })
      };
    } else {
      this.setData({ num: cval })
    };
  },
  //减
  evic: function () {
    var cval = Number(this.data.num) - this.data.change;
    if (this.data.min != null) {
      if (cval < this.data.min) {
        console.log("低于最小值")
      } else {
        this.setData({ num: cval })
      };
    } else {
      this.setData({ num: cval })
    };
  }
})