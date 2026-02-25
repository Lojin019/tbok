// ===== بيانات محافظة أملج =====
const amlajData = {
  landmarks: [
    { img: "amlaj-hero.jpg", name: "جزيرة أملج الفيروزية", desc: "جزيرة استوائية رائعة بمياهها الفيروزية الشفافة وشعابها المرجانية البكر التي تعد من أجمل الجزر في البحر الأحمر." },
    { img: "amlaj-island.jpg", name: "منتجع أملج البحري", desc: "منتجع سياحي فاخر على شكل دائرة في قلب البحر الأحمر يوفر تجربة إقامة استثنائية وسط الطبيعة البحرية." },
    { img: "amlaj-reef.jpg", name: "الشعاب المرجانية البكر", desc: "شعاب مرجانية بكر لم تمسها يد الإنسان تزخر بالحياة البحرية المتنوعة وتعد من أغنى البيئات البحرية." },
    { img: "amlaj-hero.jpg", name: "شاطئ أملج", desc: "شاطئ رملي أبيض ناصع يمتد على طول الساحل بمياهه الصافية التي تدعو للسباحة والاسترخاء." },
    { img: "amlaj-island.jpg", name: "مزارع المانجو", desc: "تشتهر أملج بزراعة المانجو وتعد من أبرز مناطق إنتاجه في المملكة العربية السعودية." },
    { img: "amlaj-reef.jpg", name: "الغوص في أملج", desc: "تعد أملج وجهة عالمية لهواة الغوص بفضل شعابها المرجانية الاستثنائية ومياهها الصافية." }
  ],
  tabs: {
    history: { title: "تاريخ أملج", content: `<p>تعد أملج من المناطق الساحلية العريقة التي ارتبطت تاريخياً بالتجارة البحرية على البحر الأحمر.</p>` },
    tourism: { title: "السياحة في أملج", content: `<p>تعد أملج وجهة سياحية بحرية استثنائية تستقطب محبي الطبيعة والغوص.</p><ul><li>الغوص في الشعاب المرجانية</li><li>جولات الجزر البحرية</li><li>الاستمتاع بالشواطئ البكر</li></ul>` },
    nature: { title: "الطبيعة في أملج", content: `<p>تتميز أملج بتنوع بيئي استثنائي يجمع بين البيئة الساحلية والجزر البحرية والشعاب المرجانية البكر.</p>` },
    mango: { title: "أملج ومزارع المانجو", content: `<p>تشتهر أملج بزراعة المانجو وتعد من أبرز مناطق إنتاجه في المملكة، وتقام فيها مهرجانات سنوية للاحتفاء بهذه الثمرة.</p>` },
  },
  gallery: [
    { src: "amlaj-hero.jpg", label: "جزيرة أملج الفيروزية" },
    { src: "amlaj-island.jpg", label: "منتجع أملج البحري" },
    { src: "amlaj-reef.jpg", label: "الشعاب المرجانية البكر" },
    { src: "amlaj-hero.jpg", label: "شاطئ أملج" },
    { src: "amlaj-island.jpg", label: "مزارع المانجو" },
    { src: "amlaj-reef.jpg", label: "الغوص في أملج" }
  ]
};

function renderLandmarks() {
  const grid = document.getElementById('landmarksGrid');
  if (!grid) return;
  grid.innerHTML = amlajData.landmarks.map(lm => `
    <div class="landmark-card">
      <div class="lm-img" style="background-image:url('${lm.img}');"></div>
      <div class="lm-body"><h4>${lm.name}</h4><p>${lm.desc}</p></div>
    </div>`).join('');
}

function showTab(key) {
  const content = document.getElementById('tabContent');
  const tab = amlajData.tabs[key];
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
  grid.innerHTML = amlajData.gallery.map(item => `
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

document.addEventListener('DOMContentLoaded', () => { renderLandmarks(); showTab(Object.keys(amlajData.tabs)[0]); bindTabs(); renderGallery(); observeElements(); });

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
