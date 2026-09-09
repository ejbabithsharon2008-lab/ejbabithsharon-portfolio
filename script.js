const body=document.body;
const themeBtn=document.getElementById('themeBtn');
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
const saved=localStorage.getItem('theme');
if(saved==='dark'){body.classList.add('dark');themeBtn.textContent='☀'}
themeBtn.addEventListener('click',()=>{body.classList.toggle('dark');const dark=body.classList.contains('dark');themeBtn.textContent=dark?'☀':'☾';localStorage.setItem('theme',dark?'dark':'light')});
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('progress').style.width=(window.scrollY/h*100)+'%'});
