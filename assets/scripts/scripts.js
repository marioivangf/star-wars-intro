!function(){function n(t){if(t>=o+20){o=t;var e=s[Math.floor(Math.random()*s.length)];e.classList.remove("blink"),e.getBBox(),e.classList.add("blink")}a(n)}function t(n,t){var a=["webkitAnimationEnd","animationend","oanimationend"];_(a).each(function(a){e(n,a,t)})}function e(n,t,e){n.addEventListener(t,function(t){return n.removeEventListener(t.type,arguments.callee),e(t)},!1)}var a=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,i=document.getElementById("run-again"),o=0,r=document.querySelectorAll(".star-wars-paths path"),s=document.querySelectorAll("#starry-sky-svg circle"),c=new Audio("assets/star-wars.mp3");c.load(),function(n,t){var a=["webkitAnimationStart","animationstart","oanimationstart"];_(a).each(function(a){e(n,a,t)})}(r[0],function(n){c.play()}),i.addEventListener("click",function(n){location.reload()}),a(n),_(r).each(function(n){t(n,function(t){n.classList.add("reset")})})}();
//# sourceMappingURL=scripts.js.map