// ===== بيانات محافظة تبوك =====
const tabukData = {
  landmarks: [
    {
      img: "tabuk-castle.jpg",
      name: "قلعة تبوك",
      desc: "قلعة أثرية تاريخية بُنيت في العصر العباسي، وتُعدّ من أبرز المعالم التاريخية في المنطقة، وقد رُمِّمت وحُوِّلت إلى متحف يعرض تاريخ المنطقة."
    },
    {
      img: "tabuk-snow.jpg",
      name: "جبل اللوز بالثلج",
      desc: "أعلى قمة جبلية في منطقة تبوك يصل ارتفاعها إلى 2580 متراً، يكتسي بالثلوج في فصل الشتاء ويستقطب آلاف الزوار سنوياً."
    },
    {
      img: "tabuk-wadi.jpg",
      name: "وادي الديسة",
      desc: "وادٍ طبيعي خلاب يتميز بأعمدة الحجر الرملي الشاهقة ضمن محمية الأمير محمد بن سلمان الطبيعية، وجهة مفضلة لمحبي المغامرة والتخييم."
    },
    {
      img: "tabuk-wadi2.jpg",
      name: "محمية الأمير محمد بن سلمان",
      desc: "محمية طبيعية واسعة تضم تنوعاً بيولوجياً نادراً وتشكيلات صخرية مذهلة تجذب المصورين والمغامرين من كل مكان."
    },
    {
      img: "tabuk-hero.jpg",
      name: "مدينة تبوك الحديثة",
      desc: "عاصمة المنطقة تجمع بين الأصالة والحداثة، بشوارعها الواسعة ومبانيها العصرية ومرافقها المتكاملة."
    },
    {
      img: "tabuk-wadi3.jpg",
      name: "وادي الديسة — الخضرة",
      desc: "الجانب الأخضر من وادي الديسة حيث تتدفق المياه وتنمو النخيل والأشجار في قلب الصحراء."
    }
  ],
  tabs: {
    history: {
      title: "تاريخ تبوك العريق",
      content: `
        <p>يعود تاريخ تبوك إلى ما قبل الميلاد بأكثر من 500 عام، حين كانت تُعرف باسم "طابو" وكانت عاصمة للعيانيين. وقد مرّت بها حضارات عديدة تركت آثارها الواضحة في المنطقة.</p>
        <p>في صدر الإسلام، اشتُهرت تبوك بغزوة تبوك الشهيرة في العام التاسع الهجري، حين قاد النبي محمد ﷺ جيشاً كبيراً إليها، وتحتضن المدينة اليوم مسجد التوبة الذي يُعدّ من أقدس المواقع الإسلامية.</p>
        <p>في العهد العثماني، كانت تبوك محطة مهمة على خط سكة حديد الحجاز الذي ربط الشام بالمدينة المنورة.</p>
      `
    },
    tourism: {
      title: "السياحة في تبوك",
      content: `
        <p>تُعدّ تبوك وجهة سياحية متكاملة تجمع بين السياحة التاريخية والطبيعية والترفيهية. تستقطب المدينة ملايين الزوار سنوياً من داخل المملكة وخارجها.</p>
        <ul>
          <li>قلعة تبوك الأثرية ومتحفها التاريخي</li>
          <li>مسجد التوبة والمواقع الإسلامية</li>
          <li>وادي الديسة ومحمية الأمير محمد بن سلمان</li>
          <li>جبل اللوز وتجربة الثلج في الشتاء</li>
          <li>الشواطئ الرملية على البحر الأحمر</li>
        </ul>
      `
    },
    nature: {
      title: "الطبيعة والجغرافيا",
      content: `
        <p>تتميز تبوك بتنوع جغرافي استثنائي يجمع بين الجبال الشاهقة والصحاري الواسعة والسهول الخصبة والشواطئ الخلابة على البحر الأحمر.</p>
        <p>تقع المدينة على ارتفاع 768 متراً فوق مستوى سطح البحر، مما يمنحها مناخاً أكثر اعتدالاً مقارنة بسائر مناطق المملكة.</p>
      `
    },
    projects: {
      title: "مشاريع التطوير ورؤية 2030",
      content: `
        <p>تشهد تبوك نهضة تنموية غير مسبوقة في إطار رؤية المملكة 2030، وتُعدّ المنطقة من أكثر المناطق استقطاباً للاستثمارات الكبرى.</p>
        <ul>
          <li>مشروع نيوم العملاق — مدينة المستقبل على ساحل البحر الأحمر</li>
          <li>مشروع البحر الأحمر السياحي الفاخر</li>
          <li>تطوير البنية التحتية والمطار الدولي</li>
          <li>مشاريع الطاقة المتجددة والطاقة الشمسية</li>
        </ul>
      `
    }
  },
  gallery: [
    { src: "tabuk-hero.jpg",    label: "مدينة تبوك الجوية" },
    { src: "tabuk-castle.jpg",  label: "قلعة تبوك التاريخية" },
    { src: "tabuk-snow.jpg",    label: "جبل اللوز بالثلج" },
    { src: "tabuk-wadi.jpg",    label: "وادي الديسة" },
    { src: "tabuk-wadi2.jpg",   label: "محمية الأمير محمد بن سلمان" },
    { src: "tabuk-wadi3.jpg",   label: "وادي الديسة — الخضرة" }
  ]
};

// ===== إنشاء بطاقات المعالم =====
function renderLandmarks() {
  const grid = document.getElementById('landmarksGrid');
  if (!grid) return;
  grid.innerHTML = tabukData.landmarks.map(lm => `
    <div class="landmark-card">
      <div class="lm-img" style="background-image:url('${lm.img}');"></div>
      <div class="lm-body">
        <h4>${lm.name}</h4>
        <p>${lm.desc}</p>
      </div>
    </div>
  `).join('');
}

// ===== إنشاء التبويبات =====
function renderTabs() {
  const content = document.getElementById('tabContent');
  if (!content) return;
  const firstKey = Object.keys(tabukData.tabs)[0];
  showTab(firstKey);
}

function showTab(key) {
  const content = document.getElementById('tabContent');
  const tab = tabukData.tabs[key];
  if (!tab || !content) return;
  content.innerHTML = `<div class="tab-pane"><h3>${tab.title}</h3>${tab.content}</div>`;
}

// ===== ربط أزرار التبويبات =====
function bindTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      showTab(btn.dataset.tab);
    });
  });
}

// ===== إنشاء المعرض بصور حقيقية =====
function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = tabukData.gallery.map(item => `
    <div class="gallery-item">
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <div class="g-label">${item.label}</div>
    </div>
  `).join('');
}

// ===== عداد الأرقام =====
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('ar-SA');
  }, 16);
}

// ===== تأثير الظهور عند التمرير =====
function observeElements() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.landmark-card, .info-card, .gallery-item, .overview-text').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  const counterEl = document.getElementById('counter-pop');
  if (counterEl) {
    const heroObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) animateCounter(counterEl); });
    });
    heroObserver.observe(counterEl);
  }
}

// ===== تشغيل كل الوظائف =====
document.addEventListener('DOMContentLoaded', () => {
  renderLandmarks();
  renderTabs();
  bindTabs();
  renderGallery();
  observeElements();
});

// ===== تفعيل القائمة في الجوال =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => { navLinks.classList.toggle('open'); });
}
