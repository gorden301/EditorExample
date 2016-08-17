require.config({
    shim:{
      underscore:{
          exports:"_"
      },
      backbone:{
          deps:["underscore","jquery"],
          exports:"Backbone"
      },
      backboneLocalstorage:{
            deps:["backbone"],
            exports:"Store"
        },
        bootbox:{
            deps:["jquery","bootstrap"],
        },
        bootstrap:{
            deps:["jquery"],
        }
    },
    paths:{
        jquery:"editor/js/libs/jquery-1.9.1.min",
        underscore:"editor/js/libs/underscore-1.6",
        backbone:"editor/js/libs/backbone-min-0.9.10",
        text:"editor/js/libs/text",
        backboneLocalstorage:"editor/js/libs/backbone-localstorage",
        bootstrap:"editor/js/libs/bootstrap",
        bootbox:"editor/js/libs/bootbox.min",
        edit:"editor/js/libs/edit",
        collection:"editor/js/collection/textimgs",
        model:"editor/js/module/textimg",
        appview:"editor/js/view/app",
        articleview:"editor/js/view/article",
        editor_articleView:"editor/js/view/editor_article",
        editor_imgView:"editor/js/view/editor_img",
        imgView:"editor/js/view/img",

    }
});

require(["jquery","underscore","backbone","bootbox","model","collection","appview"],
    function ($,_,Backbone,bot,textimg,textimgs,app) {
        console.log("1111");
        var _model = new Backbone.Model();
        var App = new app(
            {
                model:_model
            }
        );
        $(function(){
            initTiny();

            var getstore = JSON.parse(window.localStorage?localStorage.getItem("store"):Cookie.read("store"));
            if(getstore) {
                for (var i = 0; i < getstore.length; i++) {
                    var model = new textimg(getstore[i]);
                    list.add(model);

                }
            }

            $(".second").on("click",function () {
                var articlemodel = new textimg({type:"txt"});
                list.add(articlemodel);
            });

            $(".third").on("click",function () {
                var imgemodel = new textimg({type:"img"});
                list.add(imgemodel);
            })

            $('#preview').on('click',function (){
                bootbox.alert({
                    title:'预览',
                    message:$('.main_editor').html()
                });
            });
            $("#savelocal").on("click",function () {
                var source = JSON.stringify(list);
                if(window.localStorage){
                    localStorage.removeItem("store");
                    localStorage.setItem("store",source);
                }
                else{
                    Cookie.write("store",source);
                };
                $.ajax({
                    url:'/savemsg',
                    data:{_source:source},
                    type:'post',
                    success:function(e){
                        if(e.success){
                            alert('成功发送');
                        }
                        else{
                            alert('no');
                        }
                    },
                    error:function(){
                        alert('重复了');
                    }
                });
            })
        })

    });
