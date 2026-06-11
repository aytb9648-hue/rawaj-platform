export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <h1>روَاج</h1>
        <p>منصة إنشاء السيرة الذاتية الاحترافية والقوالب الجاهزة</p>

        <a href="#templates" className="btn-primary">
      <a href="/builder" className="btn">
  ابدأ إنشاء سيرتك الآن
</a>
        </a>
      </section>

      {/* لماذا رواج */}
      <section className="section">
        <h2>لماذا روَاج؟</h2>
        <p>
          نوفر قوالب عربية وإنجليزية حديثة تساعدك على الظهور بشكل احترافي
          أمام جهات التوظيف.
        </p>
      </section>

      {/* القوالب المجانية */}
      <section id="templates" className="section">
        <h2>القوالب المجانية</h2>

        <div className="card">
          <h3>قالب سيرة ذاتية احترافي</h3>
          <p>قالب PDF مجاني جاهز للتحميل والاستخدام.</p>
          <h4>مجاناً</h4>

          <button className="btn-blue">
            تحميل القالب
          </button>
        </div>

        <div className="card">
          <h3>قالب عربي بسيط</h3>
          <p>مناسب للخريجين والباحثين عن أول وظيفة.</p>
          <h4>مجاناً</h4>

          <button className="btn-blue">
            تحميل PDF
          </button>
        </div>
      </section>

      {/* القوالب المدفوعة */}
      <section className="section">
        <h2>القوالب المدفوعة</h2>

        <div className="card">
          <h3>باقة السيرة الاحترافية</h3>
          <p>قوالب عربية وإنجليزية بتصاميم فخمة.</p>
          <h4>19 ريال</h4>

          <a
            href="https://wa.me/966544873310"
            className="btn-green"
          >
            اطلب عبر واتساب
          </a>
        </div>

        <div className="card">
          <h3>باقة الباحث عن عمل</h3>
          <p>سيرة ذاتية + خطاب تعريفي + قالب لينكدإن.</p>
          <h4>39 ريال</h4>

          <a
            href="https://wa.me/966544873310"
            className="btn-green"
          >
            اطلب الآن
          </a>
        </div>
      </section>

      {/* التواصل */}
      <section className="section">
        <h2>تواصل معنا</h2>

        <p>
          لطلب قالب خاص أو إضافة قوالب جديدة تواصل معنا عبر واتساب.
        </p>

        <a
          href="https://wa.me/966544873310"
          className="btn-green"
        >
          تواصل عبر واتساب
        </a>
      </section>

      <footer className="footer">
        © 2026 روَاج - جميع الحقوق محفوظة
      </footer>
    </main>
  );
}
