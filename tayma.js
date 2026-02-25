// ===== بيانات محافظة تيماء =====
const taymaData = {
  landmarks: [
    { img: "tayma-hero.jpg", name: "آثار تيماء", desc: "موقع أثري استثنائي يعود إلى ما قبل 12 ألف عام يحمل إرثاً حضارياً إنسانياً لا مثيل له." },
    { img: "tayma-ruins.jpg", name: "النقوش الصخرية", desc: "نقوش صخرية نادرة تعود إلى آلاف السنين تعد من أثمن الوثائق التاريخية في شبه الجزيرة العربية." },
    { img: "tayma-rock.jpg", name: "صخرة تيماء المنشطرة", desc: "صخرة طبيعية عجيبة انشطرت إلى نصفين بشكل مثير للدهشة وتعد من أبرز معالم تيماء الطبيعية." },
    { img: "tayma-hero.jpg", name: "واحة تيماء", desc: "واحة خضراء خصبة في قلب الصحراء كانت مركزاً حضارياً مهماً وملتقى للقوافل التجارية القديمة." },
    { img: "tayma-ruins.jpg", name: "بئر هداج", desc: "بئر تاريخية عملاقة تعد من أكبر الآبار في شبه الجزيرة العربية وشاهداً على عبقرية الإنسان القديم." },
    { img: "tayma-rock.jpg", name: "الصحراء الرملية", desc: "صحراء رملية شاسعة تحيط بتيماء بكثبانها الذهبية الرائعة التي تجذب محبي التخييم والمغامرة." }
  ],
  tabs: {
    history: { title: "تاريخ تيماء العريق", content: `<p>تعد تيماء من أقدم المدن في شبه الجزيرة العربية، ويعود تاريخها إلى ما قبل 12 ألف عام. كانت مركزاً حضارياً مهماً وملتقى للقوافل التجارية القديمة.</p>` },
    tourism: { title: "السياحة في تيماء", content: `<p>تستقطب تيماء محبي السياحة الأثرية والتاريخية.</p><ul><li>زيارة المواقع الأثرية</li><li>مشاهدة النقوش الصخرية النادرة</li><li>التخييم في الصحراء</li><li>زيارة بئر هداج التاريخية</li></ul>` },
    nature: { title: "الطبيعة في تيماء", content: `<p>تتميز تيماء بطبيعة صحراوية فريدة تجمع بين الواحة الخضراء والكثبان الرملية الذهبية والتشكيلات الصخرية المذهلة.</p>` },
    archaeology: { title: "الكنوز الأثرية", content: `<p>تعد تيماء كنزاً أثرياً حقيقياً يضم آلاف القطع الأثرية والنقوش الصخرية التي تروي تاريخ الإنسان في شبه الجزيرة العربية.</p>` },
  },
  gallery: [
    { src: "tayma-hero.jpg", label: "آثار تيماء" },
    { src: "tayma-ruins.jpg", label: "النقوش الصخرية" },
    { src: "tayma-rock.jpg", label: "صخرة تيماء المنشطرة" },
    { src: "tayma-hero.jpg", label: "واحة تيماء" },
    { src: "tayma-ruins.jpg", label: "بئر هداج" },
    { src: "tayma-rock.jpg", label: "الصحراء الرملية" }
  ]
};

function renderLandmarks() {
  const grid = document.getElementById('landmarksGrid');
  if (!grid) return;
  grid.innerHTML = taymaData.landmarks.map(lm => `
    <div class="landmark-card">
      <div class="lm-img" style="background-image:url('${lm.img}');"></div>
      <div class="lm-body"><h4>${lm.name}</h4><p>${lm.desc}</p></div>
    </div>`).join('');
}

function showTab(key) {
  const content = document.getElementById('tabContent');
  const tab = taymaData.tabs[key];
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
  grid.innerHTML = taymaData.gallery.map(item => `
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

document.addEventListener('DOMContentLoaded', () => { renderLandmarks(); showTab(Object.keys(taymaData.tabs)[0]); bindTabs(); renderGallery(); observeElements(); });

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
