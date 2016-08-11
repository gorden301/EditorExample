define([
        "underscore",
        "backbone"
    ],
    function (_,Backbone) {
        var TextImg = Backbone.Model.extend({
            defaults:{
                tittle:"",
                article:"正文",
            }
        });
        return TextImg;
})
