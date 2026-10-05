const progressBar=document.getElementById('progressBar');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progressBar.style.width=(window.scrollY/Math.max(h,1)*100)+'%'});
const menu=document.querySelector('.menu'); const nav=document.querySelector('nav');
menu.addEventListener('click',()=>{nav.classList.toggle('open')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.exp-card,.interest,.timeline-item,.facts>div,.skills-list div').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(18px)';el.style.transition='opacity .65s ease, transform .65s ease';observer.observe(el)});
const style=document.createElement('style');style.textContent='.visible{opacity:1!important;transform:none!important}nav.open{display:flex;position:absolute;top:76px;left:0;right:0;padding:20px 6vw;background:var(--paper);flex-direction:column;border-bottom:1px solid var(--line)}';document.head.appendChild(style);
