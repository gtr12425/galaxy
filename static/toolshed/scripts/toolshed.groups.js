define(["group_list","group_detail","group_model"],function(a,b){var c=Backbone.Router.extend({routes:{"":"groups",":group_id":"group_page"}}),d=Backbone.View.extend({groupListView:null,groupDetailView:null,collection:null,initialize:function(){window.globalTS.groups=this,this.ts_router=new c,this.ts_router.on("route:groups",function(){window.globalTS.groups.groupListView=new a.GroupListView}),this.ts_router.on("route:group_page",function(a){window.globalTS.groups.groupDetailView=new b.GroupDetailView({group_id:a})}),Backbone.history.start({pushState:!1})}});return{ToolshedGroups:d}});
//# sourceMappingURL=../maps/toolshed.groups.js.map