const burger3 = document.getElementById('burger3');
const nav3 = document.getElementById('nav3');
const close3 = document.getElementById('close3');
const overlay3 = document.getElementById('overlay3');
burger3.addEventListener('click', function() {
nav3.classList.add('active');
overlay3.classList.add('active');
});
close3.addEventListener('click', function() {
nav3.classList.remove('active');
overlay3.classList.remove('active');
});
overlay3.addEventListener('click', function() {
nav3.classList.remove('active');
overlay3.classList.remove('active');
});document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".fq1");if(!t)return;let e=t.querySelectorAll('[data-toggle="collapse"]');e.forEach(function(t){t.addEventListener("click",function(n){n.preventDefault();let i=t.getAttribute("href").substring(1),c=document.getElementById(i);if(!c)return;t.classList.contains("active"),e.forEach(function(e){if(e!==t){e.classList.remove("active");let n=e.getAttribute("href").substring(1),i=document.getElementById(n);i&&i.classList.remove("active");let c=e.querySelector(".faq-icon");c&&(c.textContent="+")}}),t.classList.toggle("active"),c.classList.toggle("active");let l=t.querySelector(".faq-icon");l&&(l.textContent=t.classList.contains("active")?"−":"+")})})});