Page({
  data: {
    isAllSelect: false,
    totalMoney: 0,
    carts: [
      {
        pic: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg",
        name: "Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina...",
        productType: '0.85kg 黑色爆款 128G 全网通版',
        price: 8622.0,
        isSelect: false,
        min: 1,//最小值 整数类型，null表示不设置
        max: null,//最大值 整数类型，null表示不设置
        num: 1,//输入框数量 整数类型
        change: 1,//加减变化量 整数类型
        def_num: 1,//输入框值出现异常默认设置值,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        }
      },
      {
        pic: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg",
        name: "Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina...",
        productType: '0.85kg 黑色爆款 128G 全网通版',
        price: 8622.0,
        isSelect: false,
        min: 1,//最小值 整数类型，null表示不设置
        max: null,//最大值 整数类型，null表示不设置
        num: 1,//输入框数量 整数类型
        change: 1,//加减变化量 整数类型
        def_num: 1,//输入框值出现异常默认设置值,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        }
      },
      {
        pic: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg",
        name: "Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina...",
        productType: '0.85kg 黑色爆款 128G 全网通版',
        price: 8622.0,
        isSelect: false,
        min: 1,//最小值 整数类型，null表示不设置
        max: null,//最大值 整数类型，null表示不设置
        num: 1,//输入框数量 整数类型
        change: 1,//加减变化量 整数类型
        def_num: 1,//输入框值出现异常默认设置值,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        }
      },
      {
        pic: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg",
        name: "Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina...",
        productType: '0.85kg 黑色爆款 128G 全网通版',
        price: 8622.0,
        isSelect: false,
        min: 1,//最小值 整数类型，null表示不设置
        max: null,//最大值 整数类型，null表示不设置
        num: 1,//输入框数量 整数类型
        change: 1,//加减变化量 整数类型
        def_num: 1,//输入框值出现异常默认设置值,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        }
      },
      {
        pic: "http://img.pconline.com.cn/images/upload/upc/tx/wallpaper/1308/13/c0/24431877_1376375393220.jpg",
        name: "Apple iPad 平板电脑 9.7英寸（128G WLAN版/A9 芯片/Retina...",
        productType: '0.85kg 黑色爆款 128G 全网通版',
        price: 8622.0,
        isSelect: false,
        min: 1,//最小值 整数类型，null表示不设置
        max: null,//最大值 整数类型，null表示不设置
        num: 1,//输入框数量 整数类型
        change: 1,//加减变化量 整数类型
        def_num: 1,//输入框值出现异常默认设置值,
        // 数据设定
        count: {
          quantity: 2,
          min: 1,
          max: 20
        }
      }
    ]
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
  },
  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,

      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney + this.data.carts[index].price;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney + this.data.carts[i].price;
      }
    }
    else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 去结算
  toBuy() {
    /*
    wx.showToast({
      title: '去结算',
      icon: 'success',
      duration: 3000
    });
    this.setData({
      showDialog: !this.data.showDialog
    });
    */
    wx.navigateTo({
      url: '/page/component/pages/epay_product_submit/epay_product_submit'
    })
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    });
  }
})