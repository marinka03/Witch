!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,o.call(d.exports,d,d.exports),d.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var d=o("jIcLr");const l=document.getElementById("witch"),r=document.getElementById("fire"),a=document.getElementById("arrow"),i=document.getElementById("bat"),u=document.getElementById("rangevalue");let c=document.getElementById("range-bat");const s=document.getElementById("reload-btn-dead"),m=document.getElementById("reload-btn-win");let g=0;document.addEventListener("keydown",(function(e){var t;"ArrowUp"!==e.code&&"KeyW"!==e.code||("jump"!=(t=l).classList&&(t.classList.add("jump"),t.classList.remove("move")),setTimeout((function(){t.classList.add("move"),t.classList.remove("jump")}),600))})),l.classList.add("move");parseInt(window.getComputedStyle(i).getPropertyValue("right")),c.value,setInterval((function(){let e=parseInt(window.getComputedStyle(r).getPropertyValue("right")),t=parseInt(window.getComputedStyle(a).getPropertyValue("right")),n=parseInt(window.getComputedStyle(l).getPropertyValue("bottom"));if(e<825&&e>780&&n<20||t<812&&t>767&&n<20){c.value=0,u.value=0,g=0;var o=new d.Modal(document.getElementById("modal-dead"),{});s.addEventListener("click",(()=>{document.location.reload()})),o.show()}}),100),setInterval((function(){let e=parseInt(window.getComputedStyle(l).getPropertyValue("bottom")),t=parseInt(window.getComputedStyle(i).getPropertyValue("right"));if(g>=15){g=0,c.value=0,u.value=0;var n=new d.Modal(document.getElementById("modal-win"),{});m.addEventListener("click",(()=>{document.location.reload()})),n.show()}t<812&&t>767&&e<20&&(g+=1,c.value=g,u.textContent=g)}),200)}();
//# sourceMappingURL=game-page.4e3e0f52.js.map
