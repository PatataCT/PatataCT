// Titanes del Pleistoceno — JS compartido (scroll reveal + nav scrolled + mobile menu)
(function(){
  // Scroll reveal
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold:.12, rootMargin:"0px 0px -40px 0px" });
  document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // Navbar scrolled state
    const nav = document.querySelector('.nav');
    const onScroll = ()=> nav && nav.classList.toggle('scrolled', window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);

    // Mobile menu
    const ham = document.querySelector('.hamburger');
    const links = document.querySelector('.nav-links');
    if(ham && links){
      ham.addEventListener('click', ()=>{
        links.classList.toggle('open');
        ham.textContent = links.classList.contains('open') ? '✕' : '☰';
      });
    }

    // Back to top
    document.querySelectorAll('[data-back-top]').forEach(b=>{
      b.addEventListener('click', e=>{ e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'}); });
    });

    // Smooth anchors on same page
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', e=>{
        const id = a.getAttribute('href').slice(1);
        const el = document.getElementById(id);
        if(el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
      });
    });
  });
})();
