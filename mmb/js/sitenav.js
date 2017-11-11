$(function () {

    $.ajax({
        type:"get",
        url:mmp_api.sitenav,
        success:function (data) {
            console.log(data);

            $(".link").html( template("navId",data) );
        }
    })
});

