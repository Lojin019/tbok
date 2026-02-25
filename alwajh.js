// ===== بيانات محافظة الوجه =====
const alwajhData = {
  landmarks: [
    { img: "alwajh-hero.jpg", name: "مدينة الوجه", desc: "مدينة ساحلية رائعة تقع على البحر الأحمر تتميز بتراثها المعماري العريق وروشانها الخشبية التقليدية." },
    { img: "alwajh-heritage.jpg", name: "الروشان التراثي", desc: "الروشان هو النافذة الخشبية التقليدية المزخرفة التي تعد من أبرز مظاهر العمارة الحجازية في الوجه." },
    { img: "alwajh-coast.jpg", name: "ساحل الوجه", desc: "ساحل بحري خلاب يمتد لكيلومترات بمياهه الفيروزية وشعابه المرجانية الغنية بالحياة البحرية." },
    { img: "alwajh-hero.jpg", name: "جزر الوجه", desc: "تحتضن المنطقة عدداً من الجزر الساحرة التي تعد وجهة مثالية لهواة الغوص والسياحة البحرية." },
    { img: "alwajh-heritage.jpg", name: "التراث العمراني", desc: "تزخر الوجه بمبانٍ تراثية تعكس الهوية المعمارية الحجازية الأصيلة التي تمتد عبر قرون من التاريخ." },
    { img: "alwajh-coast.jpg", name: "الشعاب المرجانية", desc: "تعد شعاب الوجه المرجانية من أغنى الشعاب في البحر الأحمر بتنوعها البيولوجي الاستثنائي." }
  ],
  tabs: {
    history: { title: "تاريخ الوجه العريق", content: `<p>تعد الوجه من أقدم المدن الساحلية في منطقة تبوك، وقد كانت مركزاً تجارياً مهماً على طريق التجارة البحرية في البحر الأحمر.</p>` },
    tourism: { title: "السياحة في الوجه", content: `<p>تستقطب الوجه محبي السياحة البحرية والتراثية.</p><ul><li>الغوص في الشعاب المرجانية</li><li>زيارة الجزر الساحلية</li><li>التجول في الحي التراثي</li></ul>` },
    nature: { title: "الطبيعة البحرية", content: `<p>تتميز الوجه بثروة بحرية استثنائية، إذ تحتضن مياهها شعاباً مرجانية غنية وأسماكاً استوائية ملونة.</p>` },
    future: { title: "مستقبل الوجه", content: `<p>مدرجة الوجه ضمن خطط التطوير في رؤية السعودية 2030 لتصبح وجهة سياحية عالمية بارزة.</p>` },
  },
  gallery: [
    { src: "alwajh-hero.jpg", label: "مدينة الوجه" },
    { src: "alwajh-heritage.jpg", label: "الروشان التراثي" },
    { src: "alwajh-coast.jpg", label: "ساحل الوجه" },
    { src: "alwajh-hero.jpg", label: "جزر الوجه" },
    { src: "alwajh-heritage.jpg", label: "التراث العمراني" },
    { src: "alwajh-coast.jpg", label: "الشعاب المرجانية" }
  ]
};

function renderLandmarks() {
  const grid = document.getElementById('landmarksGrid');
  if (!grid) return;
  grid.innerHTML = alwajhData.landmarks.map(lm => `
    <div class="landmark-card">
      <div class="lm-img" style="background-image:url('${lm.img}');"></div>
      <div class="lm-body"><h4>${lm.name}</h4><p>${lm.desc}</p></div>
    </div>`).join('');
}

function showTab(key) {
  const content = document.getElementById('tabContent');
  const tab = alwajhData.tabs[key];
  if (!tab || !content) return;
  content.innerHTML = `<div class="tab-pane"><h3>${tab.title}</h3>${tab.content}</div>`;
}

function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active'); showTab(btn.dataset.tab);
    });
  });
}

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = alwajhData.gallery.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <div class="g-label">${item.label}</div>
    </div>`).join('');
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target); const step = target / (2000 / 16); let current = 0;
  const timer = setInterval(() => {
    current += step; if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('ar-SA');
  }, 16);
}

function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.landmark-card, .info-card, .gallery-item, .overview-text').forEach(el => {
    el.style.opacity = '0'; el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; observer.observe(el);
  });
  const counterEl = document.getElementById('counter-pop');
  if (counterEl) new IntersectionObserver((e) => { e.forEach(en => { if (en.isIntersecting) animateCounter(counterEl); }); }).observe(counterEl);
}

document.addEventListener('DOMContentLoaded', () => { renderLandmarks(); showTab(Object.keys(alwajhData.tabs)[0]); bindTabs(); renderGallery(); observeElements(); });

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
