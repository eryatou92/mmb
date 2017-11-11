$(function () {

    //渲染导航栏
    $.ajax({
        type:"get",
        url:mmp_api.nav,
        success:function (data) {
            console.log(data);
            //绑定数据与模板
            var html=template("tpl",data);
            $(".rows ul").html(html);
        }
    });
    //给rows添加点击事件
    $(".rows").on("click","li:eq(7)",function () {
    console.log(1);

        // $(".rows").animate({ height: "350rem/50" },$("li:gt(7)"),hidden());
        // $("li:gt(7)").toggle();

       
});

    //渲染超值推荐
    $.ajax({
        type:"get",
        url:mmp_api.discount,
        success:function (data) {
            console.log(data);

            // console.log(html);
            $(".mmb_recommen_product ul").html( template("tpl2",data) );
        }
    });

});
