

/**
 * Intro.js v0.4.0
 * https://github.com/usablica/intro.js
 * MIT licensed
 *
 * Copyright (C) 2013 usabli.ca - A weekend project by Afshin Mehrabani (@afshinmeh)
 */
!function(t,e){"object"==typeof exports?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t)}(this,function(t){function e(t){this._targetElement=t,this._options={nextLabel:"Next &rarr;",prevLabel:"&larr; Back",skipLabel:"Skip",doneLabel:"Done",tooltipPosition:"bottom",exitOnEsc:!0,exitOnOverlayClick:!0,showStepNumbers:!0}}function n(t){var e=[],n=this;if(this._options.steps)for(var o=[],l=0,c=this._options.steps.length;c>l;l++){var u=this._options.steps[l];u.step=l+1,u.element=document.querySelector(u.element),e.push(u)}else{var o=t.querySelectorAll("*[data-intro]");if(o.length<1)return!1;for(var l=0,p=o.length;p>l;l++){var h=o[l];e.push({element:h,intro:h.getAttribute("data-intro"),step:parseInt(h.getAttribute("data-step"),10),position:h.getAttribute("data-position")||this._options.tooltipPosition})}}if(e.sort(function(t,e){return t.step-e.step}),n._introItems=e,d.call(n,t)){i.call(n);t.querySelector(".introjs-skipbutton"),t.querySelector(".introjs-nextbutton");n._onKeyDown=function(e){27===e.keyCode&&1==n._options.exitOnEsc?s.call(n,t):37===e.keyCode?r.call(n):(39===e.keyCode||13===e.keyCode)&&(i.call(n),e.preventDefault?e.preventDefault():e.returnValue=!1)},n._onResize=function(t){a.call(n,document.querySelector(".introjs-helperLayer"))},window.addEventListener?(window.addEventListener("keydown",n._onKeyDown,!0),window.addEventListener("resize",n._onResize,!0)):document.attachEvent&&(document.attachEvent("onkeydown",n._onKeyDown),document.attachEvent("onresize",n._onResize))}return!1}function o(t){this._currentStep=t-2,"undefined"!=typeof this._introItems&&i.call(this)}function i(){return"undefined"==typeof this._currentStep?this._currentStep=0:++this._currentStep,this._introItems.length<=this._currentStep?("function"==typeof this._introCompleteCallback&&this._introCompleteCallback.call(this),void s.call(this,this._targetElement)):void c.call(this,this._introItems[this._currentStep])}function r(){return 0===this._currentStep?!1:void c.call(this,this._introItems[--this._currentStep])}function s(t){var e=t.querySelector(".introjs-overlay");e.style.opacity=0,setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e)},500);var n=t.querySelector(".introjs-helperLayer");n&&n.parentNode.removeChild(n);var o=document.querySelector(".introjs-showElement");o&&(o.className=o.className.replace(/introjs-[a-zA-Z]+/g,"").replace(/^\s+|\s+$/g,""));var i=document.querySelectorAll(".introjs-fixParent");if(i&&i.length>0)for(var r=i.length-1;r>=0;r--)i[r].className=i[r].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");window.removeEventListener?window.removeEventListener("keydown",this._onKeyDown,!0):document.detachEvent&&document.detachEvent("onkeydown",this._onKeyDown),this._currentStep=void 0,void 0!=this._introExitCallback&&this._introExitCallback.call(this)}function l(t,e,n){if(e.style.top=null,e.style.right=null,e.style.bottom=null,e.style.left=null,this._introItems[this._currentStep]){var o=this._introItems[this._currentStep].position;switch(o){case"top":e.style.left="15px",e.style.top="-"+(f(e).height+10)+"px",n.className="introjs-arrow bottom";break;case"right":e.style.left=f(t).width+20+"px",n.className="introjs-arrow left";break;case"left":e.style.top="15px",e.style.right=f(t).width+20+"px",n.className="introjs-arrow right";break;case"bottom":default:e.style.bottom="-"+(f(e).height+10)+"px",n.className="introjs-arrow top"}}}function a(t){if(t){if(!this._introItems[this._currentStep])return;var e=f(this._introItems[this._currentStep].element);t.setAttribute("style","width: "+(e.width+10)+"px; height:"+(e.height+10)+"px; top:"+(e.top-5)+"px;left: "+(e.left-5)+"px;")}}function c(t){"undefined"!=typeof this._introChangeCallback&&this._introChangeCallback.call(this,t.element);var e=this,n=document.querySelector(".introjs-helperLayer");f(t.element);if(null!=n){var o=n.querySelector(".introjs-helperNumberLayer"),c=n.querySelector(".introjs-tooltiptext"),d=n.querySelector(".introjs-arrow"),m=n.querySelector(".introjs-tooltip"),v=n.querySelector(".introjs-skipbutton"),y=n.querySelector(".introjs-prevbutton"),w=n.querySelector(".introjs-nextbutton");m.style.opacity=0,a.call(e,n);var b=document.querySelectorAll(".introjs-fixParent");if(b&&b.length>0)for(var _=b.length-1;_>=0;_--)b[_].className=b[_].className.replace(/introjs-fixParent/g,"").replace(/^\s+|\s+$/g,"");var g=document.querySelector(".introjs-showElement");g.className=g.className.replace(/introjs-[a-zA-Z]+/g,"").replace(/^\s+|\s+$/g,""),e._lastShowElementTimer&&clearTimeout(e._lastShowElementTimer),e._lastShowElementTimer=setTimeout(function(){null!=o&&(o.innerHTML=t.step),c.innerHTML=t.intro,l.call(e,t.element,m,d),m.style.opacity=1},350)}else{var j=document.createElement("div"),S=document.createElement("div"),x=document.createElement("div");if(j.className="introjs-helperLayer",a.call(e,j),this._targetElement.appendChild(j),S.className="introjs-arrow",x.className="introjs-tooltip",x.innerHTML='<div class="introjs-tooltiptext">'+t.intro+'</div><div class="introjs-tooltipbuttons"></div>',this._options.showStepNumbers){var C=document.createElement("span");C.className="introjs-helperNumberLayer",C.innerHTML=t.step,j.appendChild(C)}x.appendChild(S),j.appendChild(x);var w=document.createElement("a");w.onclick=function(){e._introItems.length-1!=e._currentStep&&i.call(e)},w.href="javascript:void(0);",w.innerHTML=this._options.nextLabel;var y=document.createElement("a");y.onclick=function(){0!=e._currentStep&&r.call(e)},y.href="javascript:void(0);",y.innerHTML=this._options.prevLabel;var v=document.createElement("a");v.className="introjs-button introjs-skipbutton",v.href="javascript:void(0);",v.innerHTML=this._options.skipLabel,v.onclick=function(){e._introItems.length-1==e._currentStep&&"function"==typeof e._introCompleteCallback&&e._introCompleteCallback.call(e),s.call(e,e._targetElement)};var N=x.querySelector(".introjs-tooltipbuttons");N.appendChild(v),N.appendChild(y),N.appendChild(w),l.call(e,t.element,x,S)}0==this._currentStep?(y.className="introjs-button introjs-prevbutton introjs-disabled",w.className="introjs-button introjs-nextbutton",v.innerHTML=this._options.skipLabel):this._introItems.length-1==this._currentStep?(v.innerHTML=this._options.doneLabel,y.className="introjs-button introjs-prevbutton",w.className="introjs-button introjs-nextbutton introjs-disabled"):(y.className="introjs-button introjs-prevbutton",w.className="introjs-button introjs-nextbutton",v.innerHTML=this._options.skipLabel),w.focus(),t.element.className+=" introjs-showElement";var k=u(t.element,"position");"absolute"!==k&&"relative"!==k&&(t.element.className+=" introjs-relativePosition");for(var E=t.element.parentNode;null!=E&&"body"!==E.tagName.toLowerCase();){var L=u(E,"z-index");/[0-9]+/.test(L)&&(E.className+=" introjs-fixParent"),E=E.parentNode}if(!h(t.element)){var q=t.element.getBoundingClientRect(),T=q.bottom-(q.bottom-q.top),H=q.bottom-p().height;0>T?window.scrollBy(0,T-30):window.scrollBy(0,H+100)}}function u(t,e){var n="";return t.currentStyle?n=t.currentStyle[e]:document.defaultView&&document.defaultView.getComputedStyle&&(n=document.defaultView.getComputedStyle(t,null).getPropertyValue(e)),n.toLowerCase?n.toLowerCase():n}function p(){if(void 0!=window.innerWidth)return{width:window.innerWidth,height:window.innerHeight};var t=document.documentElement;return{width:t.clientWidth,height:t.clientHeight}}function h(t){var e=t.getBoundingClientRect();return e.top>=0&&e.left>=0&&e.bottom+80<=window.innerHeight&&e.right<=window.innerWidth}function d(t){var e=document.createElement("div"),n="",o=this;if(e.className="introjs-overlay","body"===t.tagName.toLowerCase())n+="top: 0;bottom: 0; left: 0;right: 0;position: fixed;",e.setAttribute("style",n);else{var i=f(t);i&&(n+="width: "+i.width+"px; height:"+i.height+"px; top:"+i.top+"px;left: "+i.left+"px;",e.setAttribute("style",n))}return t.appendChild(e),e.onclick=function(){1==o._options.exitOnOverlayClick&&s.call(o,t)},setTimeout(function(){n+="opacity: .8;",e.setAttribute("style",n)},10),!0}function f(t){var e={};e.width=t.offsetWidth,e.height=t.offsetHeight;for(var n=0,o=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent;return e.top=o,e.left=n,e}function m(t,e){var n={};for(var o in t)n[o]=t[o];for(var o in e)n[o]=e[o];return n}var v="0.4.0",y=function(t){if("object"==typeof t)return new e(t);if("string"==typeof t){var n=document.querySelector(t);if(n)return new e(n);throw new Error("There is no element with given selector.")}return new e(document.body)};return y.version=v,y.fn=e.prototype={clone:function(){return new e(this)},setOption:function(t,e){return this._options[t]=e,this},setOptions:function(t){return this._options=m(this._options,t),this},start:function(){return n.call(this,this._targetElement),this},goToStep:function(t){return o.call(this,t),this},exit:function(){s.call(this,this._targetElement)},onchange:function(t){if("function"!=typeof t)throw new Error("Provided callback for onchange was not a function.");return this._introChangeCallback=t,this},oncomplete:function(t){if("function"!=typeof t)throw new Error("Provided callback for oncomplete was not a function.");return this._introCompleteCallback=t,this},onexit:function(t){if("function"!=typeof t)throw new Error("Provided callback for onexit was not a function.");return this._introExitCallback=t,this}},t.introJs=y,y});
