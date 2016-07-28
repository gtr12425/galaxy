define(["utils/utils","mvc/ui/ui-table","mvc/ui/ui-portlet","mvc/ui/ui-misc"],function(a,b,c,d){var e=Backbone.View.extend({initialize:function(c){this.options=a.merge(c,{title:"Section",empty_text:"Not available.",max:null,min:null}),this.setElement("<div/>"),this.button_new=new d.ButtonIcon({icon:"fa-plus",title:"Insert "+this.options.title_new,tooltip:"Add new "+this.options.title_new+" block",floating:"clear",onclick:function(){c.onnew&&c.onnew()}}),this.table=new b.View({cls:"ui-table-plain",content:""}),this.$el.append(this.table.$el),this.$el.append($("<div/>").append(this.button_new.$el)),this.list={},this.n=0},size:function(){return this.n},add:function(a){if(!a.id||this.list[a.id])return void Galaxy.emit.debug("form-repeat::add()","Duplicate repeat block id.");this.n++;var b=new d.ButtonIcon({icon:"fa-trash-o",tooltip:"Delete this repeat block",cls:"ui-button-icon-plain",onclick:function(){a.ondel&&a.ondel()}}),e=new c.View({id:a.id,title:"placeholder",cls:a.cls||"ui-portlet-repeat",operations:{button_delete:b}});e.append(a.$el),e.$el.addClass("section-row"),this.list[a.id]=e,this.table.add(e.$el),this.table.append("row_"+a.id,!0),this.options.max>0&&this.n>=this.options.max&&this.button_new.disable(),this._refresh()},del:function(a){if(!this.list[a])return void Galaxy.emit.debug("form-repeat::del()","Invalid repeat block id.");this.n--;var b=this.table.get("row_"+a);b.remove(),delete this.list[a],this.button_new.enable(),this._refresh()},delAll:function(){for(var a in this.list)this.del(a)},hideOptions:function(){this.button_new.$el.hide(),_.each(this.list,function(a){a.hideOperation("button_delete")}),_.isEmpty(this.list)&&this.$el.append($("<div/>").addClass("ui-form-info").html(this.options.empty_text))},_refresh:function(){var a=0;for(var b in this.list){var c=this.list[b];c.title(++a+": "+this.options.title),this.n>this.options.min?c.showOperation("button_delete"):c.hideOperation("button_delete")}}});return{View:e}});
//# sourceMappingURL=../../../maps/mvc/form/form-repeat.js.map