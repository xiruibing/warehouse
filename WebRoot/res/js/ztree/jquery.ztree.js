/*
 * JQuery zTree 2.5
 * http://code.google.com/p/jquerytree/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Date: 2011-03-08
 *
 */
(function(f){function nb(a,b){b.unbind(ka);b.bind(ka,function(c,d,e){typeof a.callback.nodeCreated=="function"&&a.callback.nodeCreated(c,d,e)});b.unbind(la);b.bind(la,function(c,d,e){typeof a.callback.click=="function"&&a.callback.click(c,d,e)});b.unbind(ma);b.bind(ma,function(c,d,e){typeof a.callback.change=="function"&&a.callback.change(c,d,e)});b.unbind(aa);b.bind(aa,function(c,d,e){typeof a.callback.rename=="function"&&a.callback.rename(c,d,e)});b.unbind(na);b.bind(na,function(c,d,e){typeof a.callback.remove==
"function"&&a.callback.remove(c,d,e)});b.unbind(oa);b.bind(oa,function(c,d,e){typeof a.callback.drag=="function"&&a.callback.drag(c,d,e)});b.unbind(ba);b.bind(ba,function(c,d,e,g,i){typeof a.callback.drop=="function"&&a.callback.drop(c,d,e,g,i)});b.unbind(pa);b.bind(pa,function(c,d,e){typeof a.callback.expand=="function"&&a.callback.expand(c,d,e)});b.unbind(qa);b.bind(qa,function(c,d,e){typeof a.callback.collapse=="function"&&a.callback.collapse(c,d,e)});b.unbind(ra);b.bind(ra,function(c,d,e,g){typeof a.callback.asyncSuccess==
"function"&&a.callback.asyncSuccess(c,d,e,g)});b.unbind(sa);b.bind(sa,function(c,d,e,g,i,j){typeof a.callback.asyncError=="function"&&a.callback.asyncError(c,d,e,g,i,j)});a.treeObj.bind("contextmenu",function(c){var d=f(c.target);d=ta(a,d);var e=true;if(typeof a.callback.beforeRightClick=="function")e=a.callback.beforeRightClick(a.treeObjId,d);if(e&&typeof a.callback.rightClick=="function"){a.callback.rightClick(c,a.treeObjId,d);return false}return typeof a.callback.rightClick!="function"});a.treeObj.bind("mouseup",
function(c){var d=f(c.target);d=ta(a,d);var e=true;if(typeof a.callback.beforeMouseUp=="function")e=a.callback.beforeMouseUp(a.treeObjId,d);e&&typeof a.callback.mouseUp=="function"&&a.callback.mouseUp(c,a.treeObjId,d);return true});a.treeObj.bind("mousedown",function(c){var d=f(c.target);d=ta(a,d);var e=true;if(typeof a.callback.beforeMouseDown=="function")e=a.callback.beforeMouseDown(a.treeObjId,d);e&&typeof a.callback.mouseDown=="function"&&a.callback.mouseDown(c,a.treeObjId,d);return true})}function ta(a,
b){var c;c=f(b);if(c.attr("id")==a.treeObjId)c=null;else{for(;!c.is("li")&&c.attr("id")!=a.treeObjId;)c=c.parent();c=c.attr("id");c=W(a,c)}return c}function X(a,b,c,d){if(c)for(var e=0;e<c.length;e++){var g=c[e];g.level=b;g.tId=a.treeObjId+"_"+ ++ua;g.parentNode=d;g[a.checkedCol]=g[a.checkedCol]==true;g.checkedOld=g[a.checkedCol];g.check_Focus=false;g.check_True_Full=true;g.check_False_Full=true;g.editNameStatus=false;Sa(a,g);g.isFirstNode=(d?d:a.root)[a.nodesCol].length==c.length&&e==0;g.isLastNode=
e==c.length-1;if(g[a.nodesCol]&&g[a.nodesCol].length>0){g.open=g.open?true:false;g.isParent=true;Ta(a,g);X(a,b+1,g[a.nodesCol],g)}else{g.isParent=g.isParent?true:false;Ta(a,g);a.checkable&&e==c.length-1&&ca(a,g)}}}function Ta(a,b){var c=b.parentNode;c=c?f("#"+b.parentNode.tId+v):a.treeObj;c.append("<li id='"+b.tId+"' class='tree-node'><button type=\"button\" id='"+b.tId+z+"' title='' onfocus='this.blur();'></button><a id='"+b.tId+n+"' onclick=\""+(b.click||"")+'" ><button type="button" id=\''+b.tId+
t+"' title='' onfocus='this.blur();'></button><span id='"+b.tId+M+"'></span></a><ul id='"+b.tId+v+"'></ul></li>");c=f("#"+b.tId+z);var d=f("#"+b.tId+n);f("#"+b.tId+M);var e=f("#"+b.tId+v),g=f("#"+b.tId+t);Ua(a,b);H(a,b);Va(a,b);e.css({display:b.open?"block":"none"});if(b.isParent){c.bind("click",{treeObjId:a.treeObjId,treeNode:b},R);d.bind("dblclick",{treeObjId:a.treeObjId,treeNode:b},R)}d.bind("click",function(){var j=true;if(typeof a.callback.beforeClick=="function")j=a.callback.beforeClick(a.treeObjId,
b);if(j!=false){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();N(a,b);a.treeObj.trigger(la,[a.treeObjId,b])}});g.bind("mousedown",function(){b.editNameStatus=false});if(a.checkable){c.after("<BUTTON type='BUTTON' ID='"+b.tId+F+"' onfocus='this.blur();' ></BUTTON>");var i=f("#"+b.tId+F);if(a.checkStyle==S&&a.checkRadioType==va&&b[a.checkedCol])a.checkRadioCheckedList=a.checkRadioCheckedList.concat([b]);B(a,i,b);i.bind("click",function(){var j=true;if(typeof a.callback.beforeChange==
"function")j=a.callback.beforeChange(a.treeObjId,b);if(j!=false){b[a.checkedCol]=!b[a.checkedCol];wa(a,b);B(a,i,b);T(a,b);a.treeObj.trigger(ma,[a.treeObjId,b])}});i.bind("mouseover",function(){b.checkboxFocus=true;B(a,i,b)});i.bind("mouseout",function(){b.checkboxFocus=false;B(a,i,b)})}Wa(b);Xa(a,b);d.hover(function(){Ya(a,b)},function(){a.curTreeNode!=b&&da(a,b)});d.bind("mousedown",function(j){if(!(j.button==2||!a.editable)){var r=document,q,o,k,u=false,h=a,U=null,O=null,p=null,y=x,ob=j.clientX,
pb=j.clientY,Za=(new Date).getTime();f(r).mousemove(function(l){if(b.editNameStatus)return true;window.getSelection?window.getSelection().removeAllRanges():document.selection.empty();if(a.dragStatus==0&&Math.abs(ob-l.clientX)<$a&&Math.abs(pb-l.clientY)<$a)return true;f("body").css("cursor","pointer");f("#"+b.tId+z);if(a.dragStatus==0&&b.isParent&&b.open){I(a,b,!b.open);a.dragNodeShowBefore=true}if(a.dragStatus==0){a.dragStatus=-1;var m=true;if(typeof a.callback.beforeDrag=="function")m=a.callback.beforeDrag(a.treeObjId,
b);if(m==false)return;a.dragStatus=1;ab(true);N(a,b);da(a,b);m=f("#"+b.tId).clone();m.attr("id",b.tId+"_tmp");m.css("padding","0");m.children("#"+b.tId+n).removeClass(xa);m.children("#"+b.tId+v).css("display","none");q=f("<ul class='zTreeDragUL'></ul>").append(m);q.attr("id",b.tId+v+"_tmp");q.addClass(a.treeObj.attr("class"));q.appendTo("body");o=f("<button class='tmpzTreeMove_arrow'></button>");o.attr("id","zTreeMove_arrow_tmp");o.appendTo("body");a.treeObj.trigger(oa,[a.treeObjId,b])}if(a.dragStatus==
1&&o.attr("id")!=l.target.id){if(k){k.removeClass(ya);p&&f("#"+p+n,k).removeClass(za)}p=k=null;u=false;h=a;for(var C in G)if(G[C].editable&&G[C].treeObjId!=a.treeObjId&&(l.target.id==G[C].treeObjId||f(l.target).parents("#"+G[C].treeObjId).length>0)){u=true;h=G[C]}C=f(r).scrollTop();m=f(r).scrollLeft();var D=h.treeObj.offset(),Aa=h.treeObj.get(0).scrollHeight,w=h.treeObj.get(0).scrollWidth,s=l.clientY+C-D.top,J=h.treeObj.height()+D.top-l.clientY-C,K=l.clientX+m-D.left;D=h.treeObj.width()+D.left-l.clientX-
m;s=s<10&&s>-5;J=J<10&&J>-5;K=K<10&&K>-5;D=D<10&&D>-5;var qb=s&&h.treeObj.scrollTop()<=0;Aa=J&&h.treeObj.scrollTop()+h.treeObj.height()+10>=Aa;var rb=K&&h.treeObj.scrollLeft()<=0;w=D&&h.treeObj.scrollLeft()+h.treeObj.width()+10>=w;if(l.target.id&&h.treeObj.find("#"+l.target.id).length>0){for(var A=f("#"+l.target.id);!A.is("li")&&A.attr("id")!=h.treeObjId;)A=A.parent();var Ba=false;if(b.parentNode&&A.attr("id")!=b.tId&&f("#"+b.tId).find("#"+A.attr("id")).length==0)Ba=true;else if(b.parentNode==null&&
A.attr("id")!=b.tId&&f("#"+b.tId).find("#"+A.attr("id")).length==0)Ba=true;if(Ba)if(l.target.id&&(l.target.id==A.attr("id")+n||f(l.target).parents("#"+A.attr("id")+n).length>0)){k=A;p=A.attr("id");f("#"+p+n,k).addClass(za)}}if(l.target.id==h.treeObjId||f(l.target).parents("#"+h.treeObjId).length>0){if(!k&&(qb||Aa||rb||w)&&(u||!u&&b.parentNode!=null)){k=h.treeObj;k.addClass(ya)}if(s)h.treeObj.scrollTop(h.treeObj.scrollTop()-10);else J&&h.treeObj.scrollTop(h.treeObj.scrollTop()+10);if(K)h.treeObj.scrollLeft(h.treeObj.scrollLeft()-
10);else D&&h.treeObj.scrollLeft(h.treeObj.scrollLeft()+10);k&&k!=h.treeObj&&k.offset().left<h.treeObj.offset().left&&h.treeObj.scrollLeft(h.treeObj.scrollLeft()+k.offset().left-h.treeObj.offset().left)}q.css({top:l.clientY+C+3+"px",left:l.clientX+m+3+"px"});s=m=0;if(k&&k.attr("id")!=h.treeObjId){w=p==null?null:W(h,p);m=f("#"+b.tId);s=m.prev().attr("id")==p;m=m.next().attr("id")!=p;s=!s;w=!(b.parentNode&&b.parentNode.tId==p)&&!(h.keepLeaf&&!w.isParent);J=m?w?0.25:s?0.5:1:-1;K=s?w?0.75:m?0.5:0:-1;
w=f("#"+p+n,k);l=(l.clientY+C-w.offset().top)/w.height();if((J==1||l<=J&&l>=-0.2)&&m){m=1-o.width();s=0-o.height()/2;y=Y}else if((K==0||l>=K&&l<=1.2)&&s){m=1-o.width();s=w.height()-o.height()/2;y=ea}else{m=5-o.width();s=0;y=x}o.css({display:"block",top:w.offset().top+s+"px",left:w.offset().left+m+"px"});if(U!=p||O!=y)Za=(new Date).getTime();if(y==x)window.moveTimer=setTimeout(function(){if(y==x){var fa=W(h,p);fa&&fa.isParent&&!fa.open&&(new Date).getTime()-Za>500&&Ca(h,fa)}},600)}else{y=x;o.css({display:"none"});
window.moveTimer&&clearTimeout(window.moveTimer)}U=p;O=y}return false});f(r).mouseup(function(){this.moveTimer&&clearTimeout(this.moveTimer);O=U=null;f(r).unbind("mousemove");f(r).unbind("mouseup");f("body").css("cursor","auto");if(k){k.removeClass(ya);p&&f("#"+p+n,k).removeClass(za)}ab(false);if(a.dragStatus!=0){a.dragStatus=0;if(b.isParent&&a.dragNodeShowBefore&&!b.open){I(a,b,!b.open);a.dragNodeShowBefore=false}q&&q.remove();o&&o.remove();if(k&&p&&b.parentNode&&p==b.parentNode.tId&&y==x)k=null;
if(k){var l=p==null?null:W(h,p),m=true;if(typeof h.callback.beforeDrop=="function")m=h.callback.beforeDrop(h.treeObjId,b,l,y);if(m!=false){if(u){Da(a,b);ga(h,null,[b],false);Ea(h,l,b,y);N(h,b)}else Ea(h,l,b,y);f("#"+b.tId+t).focus().blur();a.treeObj.trigger(ba,[h.treeObjId,b,l,y])}}else a.treeObj.trigger(ba,[a.treeObjId,null,null,null])}});j.preventDefault&&j.preventDefault()}});typeof a.addDiyDom=="function"&&a.addDiyDom(a.treeObjId,b);a.treeObj.trigger(ka,[a.treeObjId,b])}function sb(a,b){if(a.setSelectionRange){a.focus();
a.setSelectionRange(b,b)}else if(a.createTextRange){var c=a.createTextRange();c.collapse(true);c.moveEnd("character",b);c.moveStart("character",b);c.select()}}function ab(a){for(;ha.length>0;){ha[0].remove();ha.shift()}if(a){a=f("iframe");for(var b=0;b<a.length;b++){var c=a.get(b),d;d=Array(2);oRect=c.getBoundingClientRect();d[0]=oRect.left;d[1]=oRect.top;c=f("<div id='zTreeMask_"+b+"' class='zTreeMask' style='top:"+d[1]+"px; left:"+d[0]+"px; width:"+c.offsetWidth+"px; height:"+c.offsetHeight+"px;'></div>");
c.appendTo("body");ha.push(c)}}}function Ua(a,b){f("#"+b.tId+M).text(b[a.nameCol])}function Wa(a){f("#"+a.tId+n).attr("target",a.target||"_blank")}function Xa(a,b){var c=f("#"+b.tId+n);b.url&&!a.editable?c.attr("href",b.url):c.removeAttr("href")}function H(a,b){if(b){var c=f("#"+b.tId+z);f("#"+b.tId+n);var d=f("#"+b.tId+v),e=f("#"+b.tId+t);c.attr("class","switch");if(a.showLine){if(b.level==0&&b.isFirstNode&&b.isLastNode)c.attr("class","switch_"+Fa);else if(b.level==0&&b.isFirstNode)c.attr("class",
"switch_"+Ga);else b.isLastNode?c.attr("class","switch_"+ia):c.attr("class","switch_"+bb);b.isLastNode?d.removeClass(Ha):d.addClass(Ha)}else c.attr("class","switch_"+cb);d=b.open?"_"+P:"_"+Q;c.attr("class",b.isParent?c.attr("class")+d:c.attr("class")+"_"+L);if(!b.isAjaxing){e.attr("class",b.iconSkin?b.iconSkin:"");e.addClass(b.isParent?"ico"+d:"ico_"+L);c="";if(b.icon)c+="background:url("+b.icon+") 0 0 no-repeat;";if(a.showIcon==false||typeof a.showIcon=="function"&&!a.showIcon(a.treeObjId,b))c+=
"width:0px;height:0px;";c!=""?e.attr("style",c):e.attr("style","")}}}function Va(a,b){var c=f("#"+b.tId+n),d={};(d=typeof a.fontCss=="function"?a.fontCss(a.treeObjId,b):a.fontCss)&&c.css(d)}function E(a,b){if(a){var c=a.attr("class");if(c!=undefined){c=c.split("_");switch(b){case Fa:case Ga:case bb:case ia:case cb:c[1]=b;break;case P:case Q:case L:c[2]=b}a.attr("class",c.join("_"))}}}function V(a,b,c){if(!(!b||a.isAjaxing)){a=b.attr("class");if(a!=undefined){a=a.split("_");switch(c){case P:case Q:case L:a[1]=
c}b.attr("class",a.join("_"))}}}function Ya(a,b){if(a.dragStatus==0){b.isHover=true;if(a.editable){tb(a,b);ub(a,b)}typeof a.addHoverDom=="function"&&a.addHoverDom(a.treeObjId,b)}}function da(a,b){b.isHover=false;f("#"+b.tId+ja).unbind().remove();f("#"+b.tId+Z).unbind().remove();typeof a.removeHoverDom=="function"&&a.removeHoverDom(a.treeObjId,b)}function tb(a,b){if(!(b.editNameStatus||f("#"+b.tId+ja).length>0)){var c=a.edit_renameBtn;if(typeof a.edit_renameBtn=="function")c=a.edit_renameBtn(b);if(c){f("#"+
b.tId+n);f("#"+b.tId+M).after("<button type='button' class='edit' id='"+b.tId+ja+"' title='' onfocus='this.blur();' style='display:none;'></button>");f("#"+b.tId+ja).bind("click",function(){var d=true;if(typeof a.callback.beforeRename=="function")d=a.callback.beforeRename(a.treeObjId,b);if(d!=false){da(a,b);b.editNameStatus=true;N(a,b);return false}}).bind("mousedown",function(){return true}).show()}}}function ub(a,b){if(!(!a.edit_removeBtn||f("#"+b.tId+Z).length>0)){var c=a.edit_removeBtn;if(typeof a.edit_removeBtn==
"function")c=a.edit_removeBtn(b);if(c){f("#"+b.tId+n).append("<button type='button' class='remove' id='"+b.tId+Z+"' title='' onfocus='this.blur();' style='display:none;'></button>");f("#"+b.tId+Z);f("#"+b.tId+Z).bind("click",function(){var d=true;if(typeof a.callback.beforeRemove=="function")d=a.callback.beforeRemove(a.treeObjId,b);if(d!=false){Da(a,b);a.treeObj.trigger(na,[a.treeObjId,b]);return false}}).bind("mousedown",function(){return true}).show()}}}function wa(a,b){if(a.checkStyle==S)if(b[a.checkedCol])if(a.checkRadioType==
va){for(var c=a.checkRadioCheckedList.length-1;c>=0;c--){var d=a.checkRadioCheckedList[c];d[a.checkedCol]=false;a.checkRadioCheckedList.splice(c,1);B(a,f("#"+d.tId+F),d);d.parentNode!=b.parentNode&&T(a,d)}a.checkRadioCheckedList=a.checkRadioCheckedList.concat([b])}else{c=b.parentNode?b.parentNode:a.root;for(var e=0;e<c[a.nodesCol].length;e++){d=c[a.nodesCol][e];if(d[a.checkedCol]&&d!=b){d[a.checkedCol]=false;B(a,f("#"+d.tId+F),d)}}}else{if(a.checkRadioType==va)for(c=0;c<a.checkRadioCheckedList.length;c++)if(b==
a.checkRadioCheckedList[c]){a.checkRadioCheckedList.splice(c,1);break}}else{if(b[a.checkedCol]&&a.checkType.Y.indexOf("s")>-1){Ia(a,b,true);Ja(a,b)}b[a.checkedCol]&&a.checkType.Y.indexOf("p")>-1&&Ka(a,b,true);if(!b[a.checkedCol]&&a.checkType.N.indexOf("s")>-1){Ia(a,b,false);Ja(a,b)}!b[a.checkedCol]&&a.checkType.N.indexOf("p")>-1&&Ka(a,b,false)}}function B(a,b,c){if(b){b.removeClass();a=a.checkStyle+"_"+(c[a.checkedCol]?vb:wb)+"_"+(c[a.checkedCol]||a.checkStyle==S?c.check_True_Full?db:eb:c.check_False_Full?
db:eb);a=c.checkboxFocus?a+"_"+xb:a;b.addClass(yb);b.addClass(a)}}function ca(a,b){if(b&&b.parentNode){La(a,b.parentNode);ca(a,b.parentNode)}}function T(a,b){b[a.nodesCol]&&b[a.nodesCol].length>0?ca(a,b[a.nodesCol][0]):ca(a,b)}function Ja(a,b){if(b&&b[a.nodesCol]){for(var c=0;c<b[a.nodesCol].length;c++)b[a.nodesCol][c][a.nodesCol]&&Ja(a,b[a.nodesCol][c]);La(a,b)}}function La(a,b){if(b){var c=true,d=true;if(b[a.nodesCol])for(var e=0;e<b[a.nodesCol].length;e++){if(a.checkStyle==S&&(b[a.nodesCol][e][a.checkedCol]||
!b[a.nodesCol][e].check_True_Full))c=false;else if(a.checkStyle!=S&&b[a.checkedCol]&&(!b[a.nodesCol][e][a.checkedCol]||!b[a.nodesCol][e].check_True_Full))c=false;else if(a.checkStyle!=S&&!b[a.checkedCol]&&(b[a.nodesCol][e][a.checkedCol]||!b[a.nodesCol][e].check_False_Full))d=false;if(!c||!d)break}b.check_True_Full=c;b.check_False_Full=d;c=f("#"+b.tId+F);B(a,c,b)}}function R(a){var b=G[a.data.treeObjId];a=a.data.treeNode;if(a.open){var c=true;if(typeof b.callback.beforeCollapse=="function")c=b.callback.beforeCollapse(b.treeObjId,
a)}else{c=true;if(typeof b.callback.beforeExpand=="function")c=b.callback.beforeExpand(b.treeObjId,a)}if(c==false)return;b.expandTriggerFlag=true;Ca(b,a)}function Ca(a,b){if(b.open||b&&b[a.nodesCol]&&b[a.nodesCol].length>0)I(a,b,!b.open);else if(a.async){var c=true;if(typeof a.callback.beforeAsync=="function")c=a.callback.beforeAsync(a.treeObjId,b);c==false?I(a,b,!b.open):Ma(a,b)}else b&&I(a,b,!b.open)}function Ma(a,b){if(!(b&&(b.isAjaxing||!b.isParent))){if(b){b.isAjaxing=true;f("#"+b.tId+t).attr("class",
"ico_loading")}for(var c="",d=0;b&&d<a.asyncParam.length;d++)c+=(c.length>0?"&":"")+a.asyncParam[d]+"="+b[a.asyncParam[d]];if(Object.prototype.toString.apply(a.asyncParamOther)==="[object Array]")for(d=0;d<a.asyncParamOther.length;d+=2)c+=(c.length>0?"&":"")+a.asyncParamOther[d]+"="+a.asyncParamOther[d+1];else for(var e in a.asyncParamOther)c+=(c.length>0?"&":"")+e+"="+a.asyncParamOther[e];d=a.asyncUrl;if(typeof a.asyncUrl=="function")d=a.asyncUrl(b);f.ajax({type:"POST",url:d,data:c,success:function(g){var i=
[];try{i=!g||g.length==0?[]:typeof g=="string"?eval("("+g+")"):g}catch(j){}if(b)b.isAjaxing=undefined;H(a,b);i&&i!=""?ga(a,b,i,false):ga(a,b,[],false);a.treeObj.trigger(ra,[a.treeObjId,b,g])},error:function(g,i,j){a.expandTriggerFlag=false;H(a,b);if(b)b.isAjaxing=undefined;a.treeObj.trigger(sa,[a.treeObjId,b,g,i,j])}})}}function I(a,b,c,d,e){if(!b||b.open==c)typeof e=="function"&&e();else{if(a.expandTriggerFlag){e=function(){b.open?a.treeObj.trigger(pa,[a.treeObjId,b]):a.treeObj.trigger(qa,[a.treeObjId,
b])};a.expandTriggerFlag=false}c=f("#"+b.tId+z);var g=f("#"+b.tId+t),i=f("#"+b.tId+v);if(b.isParent)if(b.open){E(c,Q);V(b,g,Q);b.open=false;if(d==false||a.expandSpeed==""){i.hide();typeof e=="function"&&e()}else i.hide(a.expandSpeed,e)}else{E(c,P);V(b,g,P);b.open=true;if(d==false||a.expandSpeed==""){i.show();typeof e=="function"&&e()}else if(b[a.nodesCol]&&b[a.nodesCol].length>0)i.show(a.expandSpeed,e);else{i.show();typeof e=="function"&&e()}}else typeof e=="function"&&e()}}function Na(a,b,c,d,e){var g=
b?b[a.nodesCol]:a.root[a.nodesCol],i=b?false:d;if(g)for(var j=0;j<g.length;j++)g[j]&&Na(a,g[j],c,i);I(a,b,c,d,e)}function $(a,b,c,d,e){if(b)if(b.parentNode){I(a,b,c,d);b.parentNode&&$(a,b.parentNode,c,d,e)}else I(a,b,c,d,e)}function Ka(a,b,c){var d=f("#"+b.tId+F);b[a.checkedCol]=c;B(a,d,b);if(b.parentNode){d=true;if(!c)for(var e=0;e<b.parentNode[a.nodesCol].length;e++)if(b.parentNode[a.nodesCol][e][a.checkedCol]){d=false;break}d&&Ka(a,b.parentNode,c)}}function Ia(a,b,c){if(b){var d=f("#"+b.tId+F);
if(b!=a.root){b[a.checkedCol]=c;B(a,d,b)}if(b[a.nodesCol])for(d=0;d<b[a.nodesCol].length;d++)b[a.nodesCol][d]&&Ia(a,b[a.nodesCol][d],c)}}function fb(a,b,c){if(c){c.level=b?b.level+1:0;if(c[a.nodesCol])for(b=0;b<c[a.nodesCol].length;b++)c[a.nodesCol][b]&&fb(a,c,c[a.nodesCol][b])}}function ga(a,b,c,d){if(!(a.keepLeaf&&b&&!b.isParent)){if(a.isSimpleData)c=Oa(a,c);if(b){if(a.treeObj.find("#"+b.tId).length!=0){target_switchObj=f("#"+b.tId+z);target_icoObj=f("#"+b.tId+t);target_aObj=f("#"+b.tId+n);target_ulObj=
f("#"+b.tId+v);if(!b.open){E(target_switchObj,Q);V(b,target_icoObj,Q);b.open=false;target_ulObj.css({display:"none"})}if(!b.isParent){target_switchObj.unbind("click");target_switchObj.bind("click",{treeObjId:a.treeObjId,treeNode:b},R);target_aObj.unbind("dblclick");target_aObj.bind("dblclick",{treeObjId:a.treeObjId,treeNode:b},R)}gb(a,b,c);X(a,b.level+1,c,b);d||$(a,b,true)}}else{gb(a,a.root,c);X(a,0,c,null)}}}function gb(a,b,c){b[a.nodesCol]||(b[a.nodesCol]=[]);if(b[a.nodesCol].length>0){b[a.nodesCol][b[a.nodesCol].length-
1].isLastNode=false;H(a,b[a.nodesCol][b[a.nodesCol].length-1])}b.isParent=true;b[a.nodesCol]=b[a.nodesCol].concat(c)}function Ea(a,b,c,d,e){if(b!=c)if(!(a.keepLeaf&&b&&!b.isParent&&d==x)){var g=c.parentNode==null?a.root:c.parentNode,i=b===null||b==a.root;if(i&&b===null)b=a.root;if(i)d=x;var j=b.parentNode?b.parentNode:a.root;if(d!=Y&&d!=ea)d=x;var r=-1,q=0,o=null,k=null;if(c.isFirstNode){r=0;if(g[a.nodesCol].length>1){o=g[a.nodesCol][1];o.isFirstNode=true}}else if(c.isLastNode){r=g[a.nodesCol].length-
1;o=g[a.nodesCol][r-1];o.isLastNode=true}else for(var u=0;u<g[a.nodesCol].length;u++)if(g[a.nodesCol][u].tId==c.tId)r=u;r>=0&&g[a.nodesCol].splice(r,1);if(d!=x)for(u=0;u<j[a.nodesCol].length;u++)if(j[a.nodesCol][u].tId==b.tId)q=u;r=false;if(d==x){if(i)c.parentNode=null;else{r=!b.isParent;b.isParent=true;c.parentNode=b}b[a.nodesCol]||(b[a.nodesCol]=[]);if(b[a.nodesCol].length>0){k=b[a.nodesCol][b[a.nodesCol].length-1];k.isLastNode=false}b[a.nodesCol].splice(b[a.nodesCol].length,0,c);c.isLastNode=true;
c.isFirstNode=b[a.nodesCol].length==1}else if(b.isFirstNode&&d==Y){j[a.nodesCol].splice(q,0,c);k=b;k.isFirstNode=false;c.parentNode=b.parentNode;c.isFirstNode=true;c.isLastNode=false}else if(b.isLastNode&&d==ea){j[a.nodesCol].splice(q+1,0,c);k=b;k.isLastNode=false;c.parentNode=b.parentNode;c.isFirstNode=false;c.isLastNode=true}else{d==Y?j[a.nodesCol].splice(q,0,c):j[a.nodesCol].splice(q+1,0,c);c.parentNode=b.parentNode;c.isFirstNode=false;c.isLastNode=false}Sa(a,c);fb(a,c.parentNode,c);f("#"+c.tId+
z);f("#"+c.tId+v);var h,U,O;if(i)q=j=a.treeObj;else{j=f("#"+b.tId);h=f("#"+b.tId+z);U=f("#"+b.tId+t);O=f("#"+b.tId+n);q=f("#"+b.tId+v)}if(d==x){E(h,P);V(b,U,P);b.open=true;q.css({display:"block"});if(r&&!i){h.unbind("click");h.bind("click",{treeObjId:a.treeObjId,treeNode:b},R);O.unbind("dblclick");O.bind("dblclick",{treeObjId:a.treeObjId,treeNode:b},R)}q.append(f("#"+c.tId).detach())}else if(d==Y)j.before(f("#"+c.tId).detach());else d==ea&&j.after(f("#"+c.tId).detach());H(a,c);if(!a.keepParent&&g[a.nodesCol].length<
1){g.isParent=false;b=f("#"+g.tId+v);d=f("#"+g.tId+z);i=f("#"+g.tId+t);E(d,L);V(g,i,L);b.css("display","none")}else o&&H(a,o);k&&H(a,k);if(a.checkable){La(a,g);T(a,g);g!=c.parent&&T(a,c)}$(a,c.parentNode,true,e)}}function Sa(a,b){if(a.isSimpleData)b[a.treeNodeParentKey]=b.parentNode?b.parentNode[a.treeNodeKey]:a.rootPID}function Da(a,b){var c=b.parentNode==null?a.root:b.parentNode;if(a.curTreeNode===b)a.curTreeNode=null;if(a.curEditTreeNode===b)a.curEditTreeNode=null;f("#"+b.tId).remove();for(var d=
-1,e=0;e<c[a.nodesCol].length;e++)if(c[a.nodesCol][e].tId==b.tId)d=e;d>=0&&c[a.nodesCol].splice(d,1);if(!a.keepParent&&c[a.nodesCol].length<1){c.isParent=false;c.open=false;d=f("#"+c.tId+v);e=f("#"+c.tId+z);var g=f("#"+c.tId+t);E(e,L);V(c,g,L);d.css("display","none")}else if(a.showLine&&c[a.nodesCol].length>0){c[a.nodesCol][c[a.nodesCol].length-1].isLastNode=true;c[a.nodesCol][c[a.nodesCol].length-1].isFirstNode=c[a.nodesCol].length==1;d=f("#"+c[a.nodesCol][c[a.nodesCol].length-1].tId+v);e=f("#"+
c[a.nodesCol][c[a.nodesCol].length-1].tId+z);f("#"+c[a.nodesCol][c[a.nodesCol].length-1].tId+t);if(c==a.root)if(c[a.nodesCol].length==1)E(e,Fa);else{c=f("#"+c[a.nodesCol][0].tId+z);E(c,Ga);E(e,ia)}else E(e,ia);d.removeClass(Ha)}}function W(a,b){return Pa(a,a.root[a.nodesCol],"tId",b)}function Pa(a,b,c,d){if(!b||!c)return null;for(var e=0;e<b.length;e++){if(b[e][c]==d)return b[e];var g=Pa(a,b[e][a.nodesCol],c,d);if(g)return g}return null}function hb(a,b,c,d){if(!b||!c)return[];for(var e=[],g=0;g<b.length;g++){b[g][c]==
d&&e.push(b[g]);e=e.concat(hb(a,b[g][a.nodesCol],c,d))}return e}function ib(a,b,c,d){if(!b||!c)return[];for(var e=[],g=0;g<b.length;g++){typeof b[g][c]=="string"&&b[g][c].indexOf(d)>-1&&e.push(b[g]);e=e.concat(ib(a,b[g][a.nodesCol],c,d))}return e}function jb(a){if(a.curTreeNode){f("#"+a.curTreeNode.tId+n).removeClass(xa);f("#"+a.curTreeNode.tId+M).text(a.curTreeNode[a.nameCol]);da(a,a.curTreeNode);a.curTreeNode=null}}function zb(a){if(a.curEditTreeNode){f("#"+a.curEditTreeNode.tId+n).removeClass(kb);
f("#"+a.curEditTreeNode.tId+Qa).unbind();f("#"+a.curEditTreeNode.tId+M).text(a.curEditTreeNode[a.nameCol]);a.curEditTreeNode.editNameStatus=false;a.curEditTreeNode=null}}function N(a,b){if(!(a.curTreeNode==b&&!b.editNameStatus)){jb(a);zb(a);if(a.editable&&b.editNameStatus){f("#"+b.tId+M).html("<input type=text class='rename' id='"+b.tId+Qa+"'>");var c=f("#"+b.tId+Qa);c.attr("value",b[a.nameCol]);c.focus();sb(c.get(0),b[a.nameCol].length);c.bind("blur",function(){b[a.nameCol]=this.value;a.treeObj.trigger(aa,
[a.treeObjId,b]);N(a,b)}).bind("keypress",function(d){if(d.keyCode=="13"){b[a.nameCol]=this.value;a.treeObj.trigger(aa,[a.treeObjId,b]);N(a,b)}}).bind("click",function(){return false}).bind("dblclick",function(){return false});f("#"+b.tId+n).addClass(kb);a.curEditTreeNode=b}else f("#"+b.tId+n).addClass(xa);Ya(a,b);a.curTreeNode=b}}function lb(a,b,c){if(!b)return[];for(var d=[],e=0;e<b.length;e++){if(b[e][a.checkedCol]==c)d=d.concat([b[e]]);var g=lb(a,b[e][a.nodesCol],c);if(g.length>0)d=d.concat(g)}return d}
function mb(a,b){if(!b)return[];for(var c=[],d=0;d<b.length;d++){if(b[d][a.checkedCol]!=b[d].checkedOld)c=c.concat([b[d]]);var e=mb(a,b[d][a.nodesCol]);if(e.length>0)c=c.concat(e)}return c}function Oa(a,b){var c=a.treeNodeKey,d=a.treeNodeParentKey;if(!c||c==""||!b)return[];if(Object.prototype.toString.apply(b)==="[object Array]"){for(var e=[],g=[],i=0;i<b.length;i++)g[b[i][c]]=b[i];for(i=0;i<b.length;i++)if(g[b[i][d]]){g[b[i][d]][a.nodesCol]||(g[b[i][d]][a.nodesCol]=[]);g[b[i][d]][a.nodesCol].push(b[i])}else e.push(b[i]);
return e}else return[b]}function Ra(a,b){if(!b)return[];var c=[];if(Object.prototype.toString.apply(b)==="[object Array]")for(var d=0;d<b.length;d++){c.push(b[d]);if(b[d][a.nodesCol])c=c.concat(Ra(a,b[d][a.nodesCol]))}else{c.push(b);if(b[a.nodesCol])c=c.concat(Ra(a,b[a.nodesCol]))}return c}function Ab(){return{container:null,setting:null,init:function(a){this.container=a;this.setting=G[a.attr("id")];return this},refresh:function(){this.setting.treeObj.empty();this.setting.curTreeNode=null;this.setting.curEditTreeNode=
null;this.setting.dragStatus=0;this.setting.dragNodeShowBefore=false;this.setting.checkRadioCheckedList=[];ua=0;X(this.setting,0,this.setting.root[this.setting.nodesCol])},setEditable:function(a){this.setting.editable=a;return this.refresh()},transformTozTreeNodes:function(a){return Oa(this.setting,a)},transformToArray:function(a){return Ra(this.setting,a)},getNodes:function(){return this.setting.root[this.setting.nodesCol]},getSelectedNode:function(){return this.setting.curTreeNode},getCheckedNodes:function(a){return lb(this.setting,
this.setting.root[this.setting.nodesCol],a!=false)},getChangeCheckedNodes:function(){return mb(this.setting,this.setting.root[this.setting.nodesCol])},getNodeByTId:function(a){if(a)return W(this.setting,a)},getNodeByParam:function(a,b){if(a)return Pa(this.setting,this.setting.root[this.setting.nodesCol],a,b)},getNodesByParam:function(a,b){if(a)return hb(this.setting,this.setting.root[this.setting.nodesCol],a,b)},getNodesByParamFuzzy:function(a,b,c){if(a)return ib(this.setting,c?c[this.setting.nodesCol]:
this.setting.root[this.setting.nodesCol],a,b)},getNodeIndex:function(a){if(a){for(var b=a.parentNode==null?this.setting.root:a.parentNode,c=0;c<b[this.setting.nodesCol].length;c++)if(b[this.setting.nodesCol][c]==a)return c;return-1}},getSetting:function(){var a=this.setting,b={checkType:{},callback:{}},c=a.checkType;a.checkType=undefined;var d=a.callback;a.callback=undefined;var e=a.root;a.root=undefined;f.extend(b,a);a.checkType=c;a.callback=d;a.root=e;f.extend(true,b.checkType,c);f.extend(b.callback,
d);return b},updateSetting:function(a){if(a){var b=this.setting,c=b.treeObjId,d=a.checkType;a.checkType=undefined;var e=a.callback;a.callback=undefined;var g=a.root;a.root=undefined;f.extend(b,a);a.checkType=d;a.callback=e;a.root=g;f.extend(true,b.checkType,d);f.extend(b.callback,e);b.treeObjId=c;b.treeObj=this.container}},expandAll:function(a){Na(this.setting,null,a,true)},expandNode:function(a,b,c){if(a){b&&a.parentNode&&$(this.setting,a.parentNode,b,false);if(c)Na(this.setting,a,b,false,function(){f("#"+
a.tId+t).focus().blur()});else if(a.open!=b){Ca(this.setting,a);f("#"+a.tId+t).focus().blur()}}},selectNode:function(a){if(a){N(this.setting,a);a.parentNode?$(this.setting,a.parentNode,true,false,function(){f("#"+a.tId+t).focus().blur()}):f("#"+a.tId+t).focus().blur()}},cancleSelectedNode:function(){this.cancelSelectedNode()},cancelSelectedNode:function(){jb(this.setting)},checkAllNodes:function(a){var b=this.setting;if(b.checkable)for(var c=0;c<b.root[b.nodesCol].length;c++){var d=b.root[b.nodesCol][c];
d[b.checkedCol]=a;wa(b,d);var e=f("#"+d.tId+F);B(b,e,d);T(b,d)}},reAsyncChildNodes:function(a,b){if(this.setting.async){var c=!a;if(c)a=this.setting.root;if(b=="refresh"){a[this.setting.nodesCol]=[];c?this.setting.treeObj.empty():f("#"+a.tId+v).empty()}Ma(this.setting,c?null:a)}},addNodes:function(a,b,c){if(b){a||(a=null);b=Object.prototype.toString.apply(b)==="[object Array]"?b:[b];ga(this.setting,a,b,c==true)}},updateNode:function(a,b){if(a){var c=f("#"+a.tId+F);if(this.setting.checkable){b==true&&
wa(this.setting,a);B(this.setting,c,a);T(this.setting,a)}Ua(this.setting,a);Wa(a);Xa(this.setting,a);H(this.setting,a);Va(this.setting,a)}},moveNode:function(a,b,c){if(b)if(!(a&&(b.parentNode==a&&c==x||f("#"+b.tId).find("#"+a.tId).length>0))){a||(a=null);Ea(this.setting,a,b,c,false)}},removeNode:function(a){a&&Da(this.setting,a)}}}var ka="ZTREE_NODECREATED",la="ZTREE_CLICK",ma="ZTREE_CHANGE",aa="ZTREE_RENAME",na="ZTREE_REMOVE",oa="ZTREE_DRAG",ba="ZTREE_DROP",pa="ZTREE_EXPAND",qa="ZTREE_COLLAPSE",
ra="ZTREE_ASYNC_SUCCESS",sa="ZTREE_ASYNC_ERROR",z="_switch",t="_ico",M="_span",Qa="_input",F="_check",ja="_edit",Z="_remove",v="_ul",n="_a",Fa="root",Ga="roots",bb="center",ia="bottom",cb="noLine",Ha="line",P="open",Q="close",L="docu",xa="curSelectedNode",kb="curSelectedNode_Edit",ya="tmpTargetTree",za="tmpTargetNode",S="radio",yb="chk",wb="false",vb="true",db="full",eb="part",xb="focus",va="all",x="inner",Y="before",ea="after",$a="5",G=[],ua=0;f.fn.zTree=function(a,b){var c={treeObjId:"",checkable:false,
editable:false,edit_renameBtn:true,edit_removeBtn:true,showLine:true,showIcon:true,keepParent:false,keepLeaf:false,curTreeNode:null,curEditTreeNode:null,dragStatus:0,dragNodeShowBefore:false,checkStyle:"checkbox",checkType:{Y:"ps",N:"ps"},checkRadioType:"level",checkRadioCheckedList:[],async:false,asyncUrl:"",asyncParam:[],asyncParamOther:[],isSimpleData:false,treeNodeKey:"",treeNodeParentKey:"",rootPID:null,nameCol:"name",nodesCol:"nodes",checkedCol:"checked",expandSpeed:"fast",expandTriggerFlag:false,
addHoverDom:null,removeHoverDom:null,addDiyDom:null,fontCss:{},root:{isRoot:true,nodes:[]},callback:{beforeAsync:null,beforeClick:null,beforeRightClick:null,beforeMouseDown:null,beforeMouseUp:null,beforeChange:null,beforeDrag:null,beforeDrop:null,beforeRename:null,beforeRemove:null,beforeExpand:null,beforeCollapse:null,nodeCreated:null,click:null,rightClick:null,mouseDown:null,mouseUp:null,change:null,drag:null,drop:null,rename:null,remove:null,expand:null,collapse:null,asyncSuccess:null,asyncError:null}};
if(a){var d=a.checkType;a.checkType=undefined;var e=a.callback;a.callback=undefined;var g=a.root;a.root=undefined;f.extend(c,a);a.checkType=d;f.extend(true,c.checkType,d);a.callback=e;f.extend(c.callback,e);a.root=g;f.extend(c.root,g)}c.treeObjId=this.attr("id");c.treeObj=this;c.root.tId=-1;c.root.name="ZTREE ROOT";c.root.isRoot=true;c.checkRadioCheckedList=[];c.curTreeNode=null;c.curEditTreeNode=null;c.dragNodeShowBefore=false;c.dragStatus=0;c.expandTriggerFlag=false;c.root[c.nodesCol]||(c.root[c.nodesCol]=
[]);ua=0;if(b)c.root[c.nodesCol]=b;if(c.isSimpleData)c.root[c.nodesCol]=Oa(c,c.root[c.nodesCol]);G[c.treeObjId]=c;c.treeObj.empty();nb(c,this);if(c.root[c.nodesCol]&&c.root[c.nodesCol].length>0)X(c,0,c.root[c.nodesCol]);else c.async&&c.asyncUrl&&c.asyncUrl.length>0&&Ma(c);return(new Ab).init(this)};var ha=[]})(jQuery);