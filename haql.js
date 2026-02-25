// ===== بيانات محافظة حقل =====
const haqlData = {
  landmarks: [
    { img: "haql-hero.jpg", name: "حقل من الأعلى", desc: "منظر جوي رائع لمحافظة حقل يكشف موقعها الاستراتيجي على خليج العقبة بين الجبال والبحر." },
    { img: "haql-beach.jpg", name: "شواطئ حقل", desc: "شواطئ رملية جميلة تطل على خليج العقبة بمياهه الصافية وتشكيلاته الجبلية المذهلة." },
    { img: "haql-gulf.jpg", name: "خليج العقبة", desc: "خليج العقبة الاستراتيجي الذي تطل عليه حقل ويعد من أجمل الخلجان في المنطقة." },
    { img: "haql-hero.jpg", name: "جبال حقل", desc: "سلاسل جبلية شاهقة تحيط بحقل من جهات عدة وتمنحها مناظر طبيعية خلابة." },
    { img: "haql-beach.jpg", name: "الشعاب المرجانية", desc: "تحتضن مياه حقل شعاباً مرجانية رائعة تعد من أجمل الشعاب في خليج العقبة." },
    { img: "haql-gulf.jpg", name: "غروب الشمس على الخليج", desc: "مشهد غروب الشمس على خليج العقبة من حقل يعد من أجمل المشاهد الطبيعية في المنطقة." }
  ],
  tabs: {
    history: { title: "تاريخ حقل", content: `<p>تعد حقل من المناطق ذات الموقع الاستراتيجي المهم على خليج العقبة، وقد كانت ممراً تجارياً مهماً عبر التاريخ.</p>` },
    tourism: { title: "السياحة في حقل", content: `<p>تستقطب حقل السياح بمناظرها الطبيعية الخلابة وشواطئها الجميلة.</p><ul><li>الغوص في الشعاب المرجانية</li><li>التخييم في الجبال</li><li>الاستمتاع بشواطئ الخليج</li></ul>` },
    nature: { title: "الطبيعة في حقل", content: `<p>تتميز حقل بتنوع جغرافي فريد يجمع بين الجبال الشاهقة والشواطئ الرملية وخليج العقبة الأزرق.</p>` },
    location: { title: "الموقع الاستراتيجي", content: `<p>تقع حقل في أقصى الشمال الغربي للمملكة العربية السعودية على خليج العقبة، وتحدها الأردن شمالاً مما يجعلها بوابة المملكة الشمالية الغربية.</p>` },
  },
  gallery: [
    { src: "haql-hero.jpg", label: "حقل من الأعلى" },
    { src: "haql-beach.jpg", label: "شواطئ حقل" },
    { src: "haql-gulf.jpg", label: "خليج العقبة" },
    { src: "haql-hero.jpg", label: "جبال حقل" },
    { src: "haql-beach.jpg", label: "الشعاب المرجانية" },
    { src: "haql-gulf.jpg", label: "غروب الشمس على الخليج" }
  ]
};

function renderLandmarks() {
  const grid = document.getElementById('landmarksGrid');
  if (!grid) return;
  grid.innerHTML = haqlData.landmarks.map(lm => `
    <div class="landmark-card">
      <div class="lm-img" style="background-image:url('${lm.img}');"></div>
      <div class="lm-body"><h4>${lm.name}</h4><p>${lm.desc}</p></div>
    </div>`).join('');
}

function showTab(key) {
  const content = document.getElementById('tabContent');
  const tab = haqlData.tabs[key];
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
  grid.innerHTML = haqlData.gallery.map(item => `
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

document.addEventListener('DOMContentLoaded', () => { renderLandmarks(); showTab(Object.keys(haqlData.tabs)[0]); bindTabs(); renderGallery(); observeElements(); });

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
