/**
 * Created by Administrator on 2017/11/6.
 */
$(function () {
    var ip = "192.168.32.71";
    var mmp_api = {
        //首页导航页
        nav:"http://"+ip+":9090/api/getindexmenu",
        //省钱控页面
        discount:"http://"+ip+":9090/api/getmoneyctrl",
        
        //省钱控页面
        //分类页
        category:"http://"+ip+":9090/api/getcategorytitle",
        //分类清单
        cateList:"http://"+ip+":9090/api/getcategory",
        //商品列表 要传categoryid
        productIdList:"http://"+ip+":9090/api/getcategorybyid",
        productList:"http://"+ip+":9090/api/getproductlist",
        //比价页面
        bijiaproduct:"http://"+ip+":9090/api/getproduct",
        bijiacom:"http://"+ip+":9090/api/getproductcom",


        //国内折扣页面
        inlanddiscount:"http://"+ip+":9090/api/getinlanddiscount",
        discountpro:"http://"+ip+":9090/api/getdiscountproduct",
        moneyctrl:"http://"+ip+":9090/api/getmoneyctrlproduct",


        //白菜价页面
        title:"http://"+ip+":9090/api/getbaicaijiatitle",
        product:"http://"+ip+":9090/api/getbaicaijiaproduct",


        //优惠券页面
        coupon:"http://"+ip+":9090/api/getcoupon",
        couponproduct:"http://"+ip+":9090/api/getcouponproduct",


        //凑单页页面
        gsproductshop:"http://"+ip+":9090/api/getgsshop",
        gsshoparea:"http://"+ip+":9090/api/getgsshoparea",
        gsproduct:"http://"+ip+":9090/api/getgsproduct",

        //商场导航
        sitenav:"http://"+ip+":9090/api/getsitenav",

        //十大品牌分類頁
        brandtitle:"http://"+ip+":9090/api/getbrandtitle",
        brand:"http://"+ip+":9090/api/getbrand",
        brandlist:"http://"+ip+":9090/api/getbrandproductlist",
        brandcom:"http://"+ip+":9090/api/getproductcom",


        //商品列表功能
        productlist:"http://"+ip+":9090/api/getproductlist",


    }
    window.mmp_api=mmp_api;
});
