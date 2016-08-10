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
        }
    },
    paths:{
        jquery:"libs/jquery-1.9.1.min",
        underscore:"libs/underscore-min",
        backbone:"libs/backbone-min",
        text:"libs/text",
        backboneLocalstorage:"libs/backbone-localstorage",
    }
});

require(["jquery","underscore","backbone","module/textimg","collection/textimgs","view/textimg","view/app"],
    function ($,_,Backbone,textimg,textimgs,TextImgView,app) {
        var App = new app();
    });
