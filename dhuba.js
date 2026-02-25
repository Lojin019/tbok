// ===== بيانات محافظة ضباء =====
const dhubaData = {
  landmarks: [
    { img: "dhuba-hero.jpg",  name: "ضباء من الأعلى",         desc: "منظر جوي رائع لمحافظة ضباء يكشف جمال موقعها الساحلي على البحر الأحمر وامتداد شوارعها وميناؤها." },
    { img: "dhuba-port.jpg",  name: "ميناء ضباء",             desc: "ميناء تجاري وصيدي مهم على البحر الأحمر، يُعدّ من أبرز الموانئ في منطقة تبوك ويشهد حركة تجارية نشطة." },
    { img: "dhuba-beach.jpg", name: "شاطئ ضباء",              desc: "شواطئ رملية بيضاء ناصعة تُعدّ من أجمل شواطئ البحر الأحمر، تتميز بمياهها الصافية وشعابها المرجانية." },
    { img: "dhuba-hero.jpg",  name: "كورنيش ضباء",            desc: "كورنيش ساحلي جميل يمتد على طول الشاطئ، يوفر للزوار تجربة رائعة للاستمتاع بغروب الشمس على البحر الأحمر." },
    { img: "dhuba-port.jpg",  name: "قلعة الملك عبدالعزيز",   desc: "بُنيت عام 1352هـ/1933م لتكون مقراً للحكم في المنطقة، وتُعدّ رمزاً لبداية عهد جديد في ضباء." },
    { img: "dhuba-beach.jpg", name: "الشعاب المرجانية",        desc: "تحتضن مياه ضباء شعاباً مرجانية استثنائية تُعدّ من أجمل الشعاب في البحر الأحمر." }
  ],
  tabs: {
    history: {
      title: "تاريخ ضباء العريق",
      content: `<p>تُعدّ ضباء من أقدم المدن الساحلية على البحر الأحمر، وقد كانت محطة أساسية على طريق الحج المصري القديم الذي كان يمر عبر الساحل الغربي لشبه الجزيرة العربية.</p>
        <p>ازدهرت ضباء في العهد السعودي حين أُنشئت فيها المشاريع التنموية الكبرى، وبُنيت قلعة الملك عبدالعزيز عام 1352هـ لتكون مقراً للحكم في المنطقة.</p>`
    },
    tourism: {
      title: "السياحة في ضباء",
      content: `<p>تُعدّ ضباء وجهة سياحية ساحلية متميزة تستقطب محبي البحر والطبيعة والتاريخ. تُعرف بلقب "درة البحر الأحمر" لما تتمتع به من شواطئ فائقة الجمال.</p>
        <ul><li>الغوص والسنوركل في الشعاب المرجانية</li><li>صيد الأسماك والرحلات البحرية</li><li>زيارة قلعة الملك عبدالعزيز</li><li>الاستمتاع بالشواطئ الرملية</li></ul>`
    },
    nature: {
      title: "الطبيعة الساحلية",
      content: `<p>تتميز ضباء بساحل بحري رائع يمتد لكيلومترات، وتحتضن مياهها الفيروزية الصافية شعاباً مرجانية وأسماكاً استوائية ملونة تجعلها جنة للغواصين.</p>`
    },
    port: {
      title: "الميناء والاقتصاد",
      content: `<p>يُعدّ ميناء ضباء من أهم الموانئ التجارية والصيدية في منطقة تبوك، وقد أسهم تاريخياً في ازدهار تجارة اللؤلؤ والأسماك والبضائع على البحر الأحمر.</p>`
    }
  },
  gallery: [
    { src: "dhuba-hero.jpg",  label: "ضباء من الأعلى" },
    { src: "dhuba-port.jpg",  label: "ميناء ضباء" },
    { src: "dhuba-beach.jpg", label: "شاطئ ضباء" },
    { src: "dhuba-hero.jpg",  label: "الكورنيش الساحلي" },
    { src: "dhuba-port.jpg",  label: "قلعة الملك عبدالعزيز" },
    { src: "dhuba-beach.jpg", label: "الشعاب المرجانية" }
  ]
};

function renderLandmarks() {
  const grid = document.getElementById('landmarksGrid');
  if (!grid) return;
  grid.innerHTML = dhubaData.landmarks.map(lm => `
    <div class="landmark-card">
      <div class="lm-img" style="background-image:url('${lm.img}');"></div>
      <div class="lm-body"><h4>${lm.name}</h4><p>${lm.desc}</p></div>
    </div>`).join('');
}

function renderTabs() {
  const firstKey = Object.keys(dhubaData.tabs)[0];
  showTab(firstKey);
}

function showTab(key) {
  const content = document.getElementById('tabContent');
  const tab = dhubaData.tabs[key];
  if (!tab || !content) return;
  content.innerHTML = `<div class="tab-pane"><h3>${tab.title}</h3>${tab.content}</div>`;
}

function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showTab(btn.dataset.tab);
    });
  });
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = dhubaData.gallery.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <div class="g-label">${item.label}</div>
    </div>`).join('');
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const step = target / (2000 / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('ar-SA');
  }, 16);
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.landmark-card, .info-card, .gallery-item, .overview-text').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
  const counterEl = document.getElementById('counter-pop');
  if (counterEl) {
    new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) animateCounter(counterEl); });
    }).observe(counterEl);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderLandmarks(); renderTabs(); bindTabs(); renderGallery(); observeElements();
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => { navLinks.classList.toggle('open'); });
}
