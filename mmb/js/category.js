$(function () {
   //渲染一级分类
    $.ajax({
        type:"get",
        url:mmp_api.category,
        success:function (data) {
            console.log(data);
            // var html = template("tpl",data);
            // console.log(html);
            $(".mmb_category ul").html( template("tpl",data) );
        }
    })

    //渲染二级分类
function render(id,cid) {

    $.ajax({
        type:"get",
        url:mmp_api.cateList,
        data:{
            titleid:id
        },
        success:function (data) {
            console.log(data);
            var html = template("tpl2",data);
            // console.log(html);

            $("#"+cid).html(html);
        }
    });

}
    //绑定点击事件
    $(".mmb_category").on("click",".one",function () {
        // 点击的时候先判断是否有hide这个类,没有就渲染数据  ,有就清空数据
        var id = $(this).data("id");
        var cid = $(this).data("cid");
        render(id,cid);
    })

});



















