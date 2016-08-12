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
        }
    },
    paths:{
        jquery:"libs/jquery-1.9.1.min",
        underscore:"libs/underscore-1.6",
        backbone:"libs/backbone-min-0.9.10",
        text:"libs/text",
        backboneLocalstorage:"libs/backbone-localstorage",
        bootstrap:"libs/bootstrap.min",
        bootbox:"libs/bootbox.min"
    }
});

require(["jquery","underscore","backbone","module/textimg","collection/textimgs","view/textimg","view/app"],
    function ($,_,Backbone,textimg,textimgs,TextImgView,app) {
        var App = new app();
    });
