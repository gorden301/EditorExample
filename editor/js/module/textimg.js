define([
        "underscore",
        "backbone"
    ],
    function (_,Backbone) {
        var TextImg = Backbone.Model.extend({
            defaults:{

                tittle:"",
                article:"",
            }
        });
        return TextImg;
})
