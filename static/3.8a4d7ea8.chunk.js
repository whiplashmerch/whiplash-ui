webpackJsonp([3],{789:function(t,n,e){var o=e(15),r=e(45),a=e(292).PageRenderer;a.__esModule&&(a=a.default);var d=r({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:e(800)}},componentWillMount:function(){},render:function(){return o.createElement(a,Object.assign({},this.props,{content:this.state.content}))}});d.__catalog_loader__=!0,t.exports=d},800:function(t,n){t.exports='In order to implement this, you need to have the following HTML structure:\n\nThere are two orientations -- a menu that drops down uses the class dropdown-down on the div that wraps dropdown-list. A menu that pops up from the button uses the class dropdown-up.\n\n```html\nnoSource: true\n---\n<iframe src="./elements/dropdown.html" width="600" height="400" frameborder="0"> </iframe>\n```\n\n```code\nlang: html\n---\n<div class="dropdown-wrapper">\n\t<button class="button text" data-dropdown="up-menu">Menu Button/Link</button>\n\t<div class="dropdown dropdown-up" id="up-menu">\n\t\t<ul class="dropdown-list">\n\t\t\t<li><a href="#">Stuff</a></li>\n\t\t\t<li><a href="#">Biz</a></li>\n\t\t</ul>\n\t</div>\n</div>\n```'}});
//# sourceMappingURL=3.8a4d7ea8.chunk.js.map