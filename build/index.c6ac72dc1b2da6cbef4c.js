"use strict";(self.webpackChunkinteractive_card_details_form=self.webpackChunkinteractive_card_details_form||[]).push([[826],{91:function(e){e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},322:function(e,t,n){var r=n(91),c=n.n(r),o=new URL(n(198),n.b),u=new URL(n(65),n.b),a=new URL(n(593),n.b),i=new URL(n(674),n.b),l=(c()(o),c()(u),c()(a),c()(i),n.p+"images/caa4689407777a312ede.png"),s=n.p+"images/8fd757c0c5c44b1d597c.svg";const d=document.querySelector("#name"),m=document.querySelector("#ac-number"),f=document.querySelector("input[placeholder=MM]"),y=document.querySelector("input[placeholder=YY]"),p=document.querySelector("#cvc"),b=document.querySelector(".nameError"),g=document.querySelector(".numberError"),h=document.querySelector(".yyError"),v=document.querySelector(".cvcError"),S=document.querySelector(".form"),q=document.querySelector(".iACN"),L=document.querySelector(".iACVCN"),w=document.querySelector(".blue-background img"),N=document.querySelector(".formRight"),k=document.querySelector(".cvc"),x=document.querySelector(".acn"),C=document.querySelector("#loading");q.addEventListener("input",(e=>{let t=q.value;if(t){let e=t.match(/.{1,4}/g);x.textContent=e.join(" ")}4!==t.length&&9!==t.length&&14!==t.length&&19!==t.length||(q.value+=" ")})),L.addEventListener("input",(e=>{k.textContent=e.target.value})),window.innerWidth<=630&&(w.src=`${l}`);const _=e=>""!==e;function E(e,t,n){e.classList.remove("success"),e.classList.add("error"),t.style.color="red",t.textContent=n}function M(e,t){e.classList.remove("error"),e.classList.add("success"),t.textContent=""}function R(e){e.style.display="none"}function T(){let e=Array.from(N.children);e.splice(0,1);for(let t=0;t<e.length;t+=1)e[t].style.display="none"}S.addEventListener("submit",(async function(e){e.preventDefault();let t=function(){let e=!1;return _(d.value.trim())?(M(d,b),e=!0):E(d,b,"name field can't be empty"),e}(),n=function(){let e=!1,t=m.value.trim(),n=parseInt(t);return isNaN(n)?E(m,g,"Wrong, format, numbers only"):_(t)?(M(m,g),e=!0):E(m,g,"This field can't be empty"),e}(),r=function(){let e=!1,t=f.value.trim();return 0===t.length?E(f,h,"cant't be blank"):isNaN(t)?E(f,h,"Must be numbers"):(M(f,h),e=!0),e}(),c=function(){let e=!1,t=y.value.trim();return 0===t.length?E(y,h,"cant't be blank"):isNaN(t)?E(y,h,"Must be digits"):(M(y,h),e=!0),e}(),o=function(){let e=!1,t=p.value.trim();return 0===t.length?E(p,v,"cant't be blank"):isNaN(t)?E(p,v,"Must be digits"):(M(p,v),e=!0),e}();R(C);let u=t&&n&&r&&c&&o;if(console.log(u,"<--------"),u)try{T(),C.style.display="",await(a=u,new Promise((function(e,t){setTimeout((()=>{a?e():t()}),1500)})))}catch(e){T()}finally{R(C),N.innerHTML=`<div class='mainTwo flex column center'><div><img src=${s} alt='tick icon'></div><h2> Thank you!</h2><p>We have added your card details.</p><button class='btn'>Continue</button></div>`}var a}))},674:function(e,t,n){e.exports=n.p+"images/23f68fa3aa3d5b33dfc8.png"},593:function(e,t,n){e.exports=n.p+"images/8153e2ca184402a8385f.png"},65:function(e,t,n){e.exports=n.p+"images/806e7aa7b4dbc1d78bc3.png"},198:function(e,t,n){e.exports=n.p+"images/736eae1ff09acfe04c50.png"}},function(e){e(e.s=322)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCTSxHQUFZRyxHQUFRRyxFQUlqRSxHQUZBRyxRQUFRQyxJQUFJRixFQUFhLGFBRXJCQSxFQUNKLElBQ0kzQixJQUNLNUIsRUFhVXNCLE1BQU1LLFFBQVUsU0FhbkJXLEVBekJLaUIsRUEwQmQsSUFBSUcsU0FBUSxTQUFTQyxFQUFTQyxHQUNqQ0MsWUFBVyxLQUNIdkIsRUFDQXFCLElBRUFDLEdBQ0osR0FDRCxLQUNQLElBakNBLENBQUUsTUFBT0UsR0FFTGxDLEdBQ0osQ0FBRSxRQUNFSCxFQUFLekIsR0FTVEgsRUFBVWtFLFVBQVkseURBQXlELGdJQVAvRSxDQWtCSixJQUFvQnpCLENBaEJwQixHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJhY3RpdmUtY2FyZC1kZXRhaWxzLWZvcm0vLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9pbnRlcmFjdGl2ZS1jYXJkLWRldGFpbHMtZm9ybS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL2ludGVyYWN0aXZlLWNhcmQtZGV0YWlscy1mb3JtLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Zhdmljb24tMzJ4MzIucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYmctbWFpbi1kZXNrdG9wLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4uL3NyYy9pbWFnZXMvYmctY2FyZC1mcm9udC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaW1hZ2VzL2JnLWNhcmQtYmFjay5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD4gPGh0bWwgbGFuZz1cXFwiZW5cXFwiPiA8aGVhZD4gPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPiA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVxcXCI+IDxsaW5rIHJlbD1cXFwiaWNvblxcXCIgdHlwZT1cXFwiaW1hZ2UvcG5nXFxcIiBzaXplcz1cXFwiMzJ4MzJcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj4gPHRpdGxlPkZyb250ZW5kIE1lbnRvciB8IEludGVyYWN0aXZlIGNhcmQgZGV0YWlscyBmb3JtPC90aXRsZT4gPC9oZWFkPiA8Ym9keT4gPG1haW4gY2xhc3M9XFxcIm1haW4gZmxleCByZWxhdGl2ZS1wXFxcIj4gPGRpdiBjbGFzcz1cXFwiYmx1ZS1iYWNrZ3JvdW5kXFxcIj4gPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+IDwvZGl2PiA8Zm9ybSBhY3Rpb249XFxcIlxcXCIgY2xhc3M9XFxcImZvcm0gei1pbmRleC0xIGNlbnRlciBhYnNvbHV0ZS1wIGZsZXhcXFwiPiA8ZGl2IGNsYXNzPVxcXCJmb3JtTGVmdCBmbGV4IGNvbHVtbiB6LWluZGV4LTFcXFwiPiA8ZGl2IGNsYXNzPVxcXCJjYXJkRnJvbnQgei1pbmRleC0xIHJlbGF0aXZlLXBcXFwiPiA8ZGl2PiA8aW1nIGNsYXNzPVxcXCJmcm9udEltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJWaXNhXFxcIj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmRDaXJjbGVzIGZsZXggY2VudGVyIGFic29sdXRlLXBcXFwiPiA8c3BhbiBjbGFzcz1cXFwid2hpdGVDaXJjbGUgY2lyY2xlUmFkaXVzXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJib3JkZXJlZENpcmNsZSBjaXJjbGVSYWRpdXNcXFwiPjwvc3Bhbj4gPC9kaXY+IDxwIGNsYXNzPVxcXCJhYnNvbHV0ZS1wIGFjblxcXCI+MDAwMCAwMDAwIDAwMDAgMDAwMDwvcD4gPGRpdiBjbGFzcz1cXFwibmFtZUFuZERhdGUgZmxleCBhYnNvbHV0ZS1wXFxcIj4gPHNtYWxsPkZlbGljaWEgTGVpcmU8L3NtYWxsPiA8c21hbGw+MDkvMDA8L3NtYWxsPiA8L2Rpdj4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmRCYWNrIHotaW5kZXgtMSByZWxhdGl2ZS1wXFxcIj4gPGltZyBjbGFzcz1cXFwiYmFjay1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj4gPHAgY2xhc3M9XFxcImFic29sdXRlLXAgY3ZjXFxcIj4wMDA8L3A+IDwvZGl2PiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwiZm9ybVJpZ2h0XFxcIj4gPGgyIGlkPVxcXCJsb2FkaW5nXFxcIiBzdHlsZT1cXFwiZGlzcGxheTpub25lXFxcIj5sb2FkaW5nLi4uPC9oMj4gPGRpdiBjbGFzcz1cXFwiY2FyZEhvbGRlciBmbGV4IGNvbHVtblxcXCI+IDxsYWJlbCBmb3I9XFxcIm5hbWVcXFwiPkNhcmRob2xkZXIgTmFtZTwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiBuYW1lPVxcXCJuYW1lXFxcIiBtYXhsZW5ndGg9XFxcIjI1XFxcIiBhdXRvY29tcGxldGU9XFxcIm9uXFxcIiBwbGFjZWhvbGRlcj1cXFwiZS5nIEphbmUgQXBwbGVzZWVkXFxcIiBpZD1cXFwibmFtZVxcXCI+IDxwIGNsYXNzPVxcXCJuYW1lRXJyb3JcXFwiPjwvcD4gPC9kaXY+IDxkaXYgY2xhc3M9XFxcImNhcmROdW1iZXIgZmxleCBjb2x1bW5cXFwiPiA8bGFiZWwgZm9yPVxcXCJhYy1udW1iZXJcXFwiPkNhcmQgTnVtYmVyPC9sYWJlbD4gPGlucHV0IGlkPVxcXCJhYy1udW1iZXJcXFwiIG1heGxlbmd0aD1cXFwiMTlcXFwiIGF1dG9jb21wbGV0ZT1cXFwib25cXFwiIHBsYWNlaG9sZGVyPVxcXCJlLmcgMTIzNCA1Njc4IDkxMjMgMDAwMFxcXCIgY2xhc3M9XFxcImlBQ05cXFwiIHR5cGU9XFxcIlxcXCIgbmFtZT1cXFwibnVtYmVyXFxcIj4gPHAgY2xhc3M9XFxcIm51bWJlckVycm9yXFxcIj48L3A+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJleHBEYXRlQW5kQ3ZjXFxcIj4gPGRpdiBjbGFzcz1cXFwiZmxleFxcXCI+IDxkaXYgY2xhc3M9XFxcIm1tXFxcIj4gPGxhYmVsIGZvcj1cXFwibW1cXFwiPkV4cCBEYXRlPC9sYWJlbD4gPGlucHV0IHR5cGU9XFxcIlxcXCIgbWF4bGVuZ3RoPVxcXCIyXFxcIiBhdXRvY29tcGxldGU9XFxcIm9uXFxcIiBwbGFjZWhvbGRlcj1cXFwiTU1cXFwiIGlkPVxcXCJtbVxcXCIgbmFtZT1cXFwibW1cXFwiPiA8cCBjbGFzcz1cXFwieXlFcnJvclxcXCI+PC9wPiA8L2Rpdj4gPGRpdiBjbGFzcz1cXFwieXlcXFwiPiA8bGFiZWwgZm9yPVxcXCJ5eVxcXCI+KE1NL1lZKTwvbGFiZWw+IDxpbnB1dCBjbGFzcz1cXFwieXlFcnJvclxcXCIgdHlwZT1cXFwiXFxcIiBtYXhsZW5ndGg9XFxcIjJcXFwiIGF1dG9jb21wbGV0ZT1cXFwib25cXFwiIHBsYWNlaG9sZGVyPVxcXCJZWVxcXCIgaWQ9XFxcInl5XFxcIiBuYW1lPVxcXCJ5eVxcXCI+IDwvZGl2PiA8ZGl2IGNsYXNzPVxcXCJjdmNcXFwiPiA8bGFiZWwgZm9yPVxcXCJjdmNcXFwiPkNWQzwvbGFiZWw+IDxpbnB1dCB0eXBlPVxcXCJcXFwiIGF1dG9jb21wbGV0ZT1cXFwib25cXFwiIGNsYXNzPVxcXCJpQUNWQ05cXFwiIG1heGxlbmd0aD1cXFwiM1xcXCIgaWQ9XFxcImN2Y1xcXCIgbmFtZT1cXFwiY3ZjXFxcIiBwbGFjZWhvbGRlcj1cXFwiZS5nIDEyM1xcXCI+IDxwIGNsYXNzPVxcXCJjdmNFcnJvclxcXCI+PC9wPiA8L2Rpdj4gPC9kaXY+IDwvZGl2PiA8YnV0dG9uIGNsYXNzPVxcXCJidG5cXFwiIHR5cGU9XFxcInN1Ym1pdFxcXCI+Q29uZmlybTwvYnV0dG9uPiA8L2Rpdj4gPC9mb3JtPiA8L21haW4+IDwvYm9keT4gPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJpbXBvcnQgXCIuL2luZGV4Lmh0bWxcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL3N0eWxlcy5zY3NzXCI7XHJcbmltcG9ydCBiZ01haW5Nb2JpbGVTcmMgZnJvbSBcIi4uL3NyYy9pbWFnZXMvYmctbWFpbi1tb2JpbGUucG5nXCI7XHJcbmltcG9ydCB0aWNrIGZyb20gXCIuLi9zcmMvaW1hZ2VzL2ljb24tY29tcGxldGUuc3ZnXCI7XHJcblxyXG5cclxuY29uc3QgbmFtZUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuYW1lXCIpO1xyXG5jb25zdCBhY051bWJlckZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhYy1udW1iZXJcIik7XHJcbmNvbnN0IG1tRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRbcGxhY2Vob2xkZXI9TU1dXCIpO1xyXG5jb25zdCB5eUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0W3BsYWNlaG9sZGVyPVlZXVwiKTtcclxuY29uc3QgY3ZjRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2N2Y1wiKTtcclxuY29uc3QgbmFtZUZpZWxkRXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hbWVFcnJvclwiKTtcclxuY29uc3QgbnVtYmVyRmllbGRFcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubnVtYmVyRXJyb3JcIik7XHJcbmNvbnN0IGRhdGVGaWVsZHNFcnJvciA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnl5RXJyb3JcIik7XHJcbmNvbnN0IGN2Y0ZpZWxkRXJyb3IgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdmNFcnJvclwiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybVwiKTtcclxuY29uc3QgaUFDTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaUFDTlwiKTtcclxuY29uc3QgaUFDVkNOID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pQUNWQ05cIik7XHJcbmNvbnN0IGJnTWFpbk1vYmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmx1ZS1iYWNrZ3JvdW5kIGltZ1wiKTtcclxuY29uc3QgZm9ybVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtUmlnaHRcIik7XHJcbmNvbnN0IGN2YyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3ZjXCIpO1xyXG5jb25zdCBhY2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjblwiKTtcclxuY29uc3QgbG9hZGluZ01lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xvYWRpbmdcIik7XHJcblxyXG5pQUNOLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgbGV0IGFjb3VudFZhbCA9IGlBQ04udmFsdWU7XHJcbiAgICBpZiAoYWNvdW50VmFsKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IGFjb3VudFZhbC5tYXRjaCgvLnsxLDR9L2cpO1xyXG4gICAgICAgIGFjYy50ZXh0Q29udGVudCA9IHJlc3VsdC5qb2luKFwiIFwiKTtcclxuICAgIH0gXHJcbiAgICBcclxuICAgIGlmKGFjb3VudFZhbC5sZW5ndGggPT09IDQgfHwgYWNvdW50VmFsLmxlbmd0aCA9PT0gOSB8fCBcclxuICAgICAgICBhY291bnRWYWwubGVuZ3RoID09PSAxNCB8fCBhY291bnRWYWwubGVuZ3RoID09PSAxOSkge1xyXG4gICAgICAgIGlBQ04udmFsdWUgKz0gXCIgXCI7XHJcbiAgICB9XHJcbn0pO1xyXG5pQUNWQ04uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XHJcbiAgICBjdmMudGV4dENvbnRlbnQgPSBlLnRhcmdldC52YWx1ZTtcclxufSk7XHJcbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA2MzApIHtcclxuICAgIGJnTWFpbk1vYmlsZS5zcmM9IGAke2JnTWFpbk1vYmlsZVNyY31gO1xyXG59XHJcblxyXG5cclxuY29uc3QgaXNSZXF1aXJlZCA9ICh2YWx1ZSkgPT4gdmFsdWUgPT09IFwiXCIgPyBmYWxzZSA6IHRydWU7XHJcblxyXG5mdW5jdGlvbiBzaG93RXJyb3IoaW5wdXQsIGVycm9yRWwsIG1lc3NhZ2UpIHtcclxuICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJzdWNjZXNzXCIpO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImVycm9yXCIpO1xyXG4gICAgZXJyb3JFbC5zdHlsZS5jb2xvcj0gJ3JlZCc7XHJcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dTdWNjZXNzKGlucHV0LCBlcnJvckVsKSB7XHJcbiAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xyXG4gICAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3NcIik7XHJcbiAgICBlcnJvckVsLnRleHRDb250ZW50ID0gXCJcIjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGlzTmFtZVZhbGlkKCkge1xyXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICBpZiAoIWlzUmVxdWlyZWQobmFtZUZpZWxkLnZhbHVlLnRyaW0oKSkpIHtcclxuICAgICAgICBzaG93RXJyb3IobmFtZUZpZWxkLCBuYW1lRmllbGRFcnJvciwgXCJuYW1lIGZpZWxkIGNhbid0IGJlIGVtcHR5XCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U3VjY2VzcyhuYW1lRmllbGQsIG5hbWVGaWVsZEVycm9yKTtcclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFjY291bnROdW1iZXJWYWxpZCgpIHtcclxuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBhY051bWJlciA9ICBhY051bWJlckZpZWxkLnZhbHVlLnRyaW0oKTtcclxuICAgIGxldCB0b0ludCA9IHBhcnNlSW50KGFjTnVtYmVyKTtcclxuXHJcbiAgICBpZiAoaXNOYU4odG9JbnQpKXtcclxuICAgICAgICBzaG93RXJyb3IoYWNOdW1iZXJGaWVsZCwgbnVtYmVyRmllbGRFcnJvciwgXCJXcm9uZywgZm9ybWF0LCBudW1iZXJzIG9ubHlcIik7XHJcbiAgICB9IGVsc2UgaWYgKCFpc1JlcXVpcmVkKGFjTnVtYmVyKSkge1xyXG4gICAgICAgIHNob3dFcnJvcihhY051bWJlckZpZWxkLCBudW1iZXJGaWVsZEVycm9yLCBcIlRoaXMgZmllbGQgY2FuJ3QgYmUgZW1wdHlcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNob3dTdWNjZXNzKGFjTnVtYmVyRmllbGQsIG51bWJlckZpZWxkRXJyb3IpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNb250aFZhbGlkKCkge1xyXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcbiAgICBsZXQgbW0gPSBtbUZpZWxkLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmIChtbS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzaG93RXJyb3IobW1GaWVsZCwgZGF0ZUZpZWxkc0Vycm9yLCBcImNhbnQndCBiZSBibGFua1wiKTtcclxuICAgIH0gZWxzZSBpZiAoaXNOYU4obW0pKSB7XHJcbiAgICAgICAgc2hvd0Vycm9yKG1tRmllbGQsIGRhdGVGaWVsZHNFcnJvciwgXCJNdXN0IGJlIG51bWJlcnNcIilcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1N1Y2Nlc3MobW1GaWVsZCwgZGF0ZUZpZWxkc0Vycm9yKTtcclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsaWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzWWVhclZhbGlkKCkge1xyXG4gICAgbGV0IHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICBsZXQgeXkgPSB5eUZpZWxkLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh5eS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBzaG93RXJyb3IoeXlGaWVsZCwgZGF0ZUZpZWxkc0Vycm9yLCBcImNhbnQndCBiZSBibGFua1wiKTtcclxuICAgIH0gZWxzZSBpZiAoaXNOYU4oeXkpKSB7XHJcbiAgICAgICAgc2hvd0Vycm9yKHl5RmllbGQsIGRhdGVGaWVsZHNFcnJvciwgXCJNdXN0IGJlIGRpZ2l0c1wiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93U3VjY2Vzcyh5eUZpZWxkLCBkYXRlRmllbGRzRXJyb3IpO1xyXG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDVkNWYWxpZCgpIHtcclxuICAgIGxldCB2YWxpZCA9IGZhbHNlO1xyXG4gICAgbGV0IGN2YyA9IGN2Y0ZpZWxkLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmIChjdmMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgc2hvd0Vycm9yKGN2Y0ZpZWxkLCBjdmNGaWVsZEVycm9yLCBcImNhbnQndCBiZSBibGFua1wiKTtcclxuICAgIH0gZWxzZSBpZiAoaXNOYU4oY3ZjKSkge1xyXG4gICAgICAgIHNob3dFcnJvcihjdmNGaWVsZCwgY3ZjRmllbGRFcnJvciwgXCJNdXN0IGJlIGRpZ2l0c1wiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd1N1Y2Nlc3MoY3ZjRmllbGQsIGN2Y0ZpZWxkRXJyb3IpO1xyXG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWxpZDtcclxufVxyXG5cclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYXN5bmMgZnVuY3Rpb24oZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGlzbmFtZVYgPSBpc05hbWVWYWxpZCgpLFxyXG4gICAgaXNBY2NOdW1iZXJWID0gYWNjb3VudE51bWJlclZhbGlkKCksXHJcbiAgICBpc01vbnRoViA9IGlzTW9udGhWYWxpZCgpLFxyXG4gICAgaXNZViA9IGlzWWVhclZhbGlkKCksXHJcbiAgICBpc0N2Y1YgPSBpc0NWQ1ZhbGlkKCk7XHJcbiAgICBoaWRlKGxvYWRpbmdNZXNzYWdlKTtcclxuICAgIGxldCBpc0Zvcm1WYWxpZCA9IGlzbmFtZVYgJiYgaXNBY2NOdW1iZXJWICYmIGlzTW9udGhWICYmIGlzWVYgJiYgaXNDdmNWO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZyhpc0Zvcm1WYWxpZCwgXCI8LS0tLS0tLS1cIik7XHJcblxyXG4gICAgaWYgKGlzRm9ybVZhbGlkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGhpZGVmb3JtUmlnaHRDaGlsZHJlbigpO1xyXG4gICAgICAgIHNob3cobG9hZGluZ01lc3NhZ2UpO1xyXG4gICAgICAgIGF3YWl0IHN1Ym1pdEZvcm0oaXNGb3JtVmFsaWQpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIFxyXG4gICAgICAgIGhpZGVmb3JtUmlnaHRDaGlsZHJlbigpO1xyXG4gICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBoaWRlKGxvYWRpbmdNZXNzYWdlKTtcclxuICAgICAgICB0aGFua3lvdU1lc3NhZ2UoKTtcclxuICAgIH1cclxufVxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIGhpZGUgKGVsKSB7ZWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO31cclxuZnVuY3Rpb24gc2hvdyAoZWwpIHtlbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjt9XHJcbmZ1bmN0aW9uIHRoYW5reW91TWVzc2FnZSAoKSB7XHJcbiAgICBmb3JtUmlnaHQuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J21haW5Ud28gZmxleCBjb2x1bW4gY2VudGVyJz48ZGl2PjxpbWcgc3JjPSR7dGlja30gYWx0PSd0aWNrIGljb24nPjwvZGl2PjxoMj4gVGhhbmsgeW91ITwvaDI+PHA+V2UgaGF2ZSBhZGRlZCB5b3VyIGNhcmQgZGV0YWlscy48L3A+PGJ1dHRvbiBjbGFzcz0nYnRuJz5Db250aW51ZTwvYnV0dG9uPjwvZGl2PmA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVmb3JtUmlnaHRDaGlsZHJlbigpIHtcclxuICAgIGxldCBmb3JtUmlnaHRDaGlsZHJlbiA9IEFycmF5LmZyb20oZm9ybVJpZ2h0LmNoaWxkcmVuKTtcclxuICAgIGZvcm1SaWdodENoaWxkcmVuLnNwbGljZSgwLCAxKTtcclxuICAgIGZvciAobGV0IGk9MDsgaTwgZm9ybVJpZ2h0Q2hpbGRyZW4ubGVuZ3RoOyBpKz0xKSB7XHJcbiAgICAgICAgZm9ybVJpZ2h0Q2hpbGRyZW5baV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybSh2YWxpZCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMTUwMCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInVybCIsIm9wdGlvbnMiLCJTdHJpbmciLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsImhhc2giLCJtYXliZU5lZWRRdW90ZXMiLCJ0ZXN0IiwiY29uY2F0IiwiX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18iLCJVUkwiLCJfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyIsIl9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fIiwiX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18iLCJuYW1lRmllbGQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhY051bWJlckZpZWxkIiwibW1GaWVsZCIsInl5RmllbGQiLCJjdmNGaWVsZCIsIm5hbWVGaWVsZEVycm9yIiwibnVtYmVyRmllbGRFcnJvciIsImRhdGVGaWVsZHNFcnJvciIsImN2Y0ZpZWxkRXJyb3IiLCJpQUNOIiwiaUFDVkNOIiwiYmdNYWluTW9iaWxlIiwiZm9ybVJpZ2h0IiwiY3ZjIiwiYWNjIiwibG9hZGluZ01lc3NhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImFjb3VudFZhbCIsInZhbHVlIiwicmVzdWx0IiwibWF0Y2giLCJ0ZXh0Q29udGVudCIsImpvaW4iLCJsZW5ndGgiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic3JjIiwiaXNSZXF1aXJlZCIsInNob3dFcnJvciIsImlucHV0IiwiZXJyb3JFbCIsIm1lc3NhZ2UiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJzdHlsZSIsImNvbG9yIiwic2hvd1N1Y2Nlc3MiLCJoaWRlIiwiZWwiLCJkaXNwbGF5IiwiaGlkZWZvcm1SaWdodENoaWxkcmVuIiwiZm9ybVJpZ2h0Q2hpbGRyZW4iLCJBcnJheSIsImZyb20iLCJjaGlsZHJlbiIsInNwbGljZSIsImkiLCJhc3luYyIsInByZXZlbnREZWZhdWx0IiwiaXNuYW1lViIsInZhbGlkIiwidHJpbSIsImlzTmFtZVZhbGlkIiwiaXNBY2NOdW1iZXJWIiwiYWNOdW1iZXIiLCJ0b0ludCIsInBhcnNlSW50IiwiaXNOYU4iLCJhY2NvdW50TnVtYmVyVmFsaWQiLCJpc01vbnRoViIsIm1tIiwiaXNNb250aFZhbGlkIiwiaXNZViIsInl5IiwiaXNZZWFyVmFsaWQiLCJpc0N2Y1YiLCJpc0NWQ1ZhbGlkIiwiaXNGb3JtVmFsaWQiLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9