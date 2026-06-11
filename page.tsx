export default function BuilderPage() {
  return (
    <main className="container">
      <div className="card">
        <h1>منشئ السيرة الذاتية</h1>

        <input
          type="text"
          placeholder="الاسم الكامل"
          className="input"
        />

        <input
          type="text"
          placeholder="المسمى الوظيفي"
          className="input"
        />

        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="input"
        />

        <textarea
          placeholder="نبذة تعريفية"
          className="input"
          rows={5}
        />

        <button className="btn">
          معاينة السيرة الذاتية
        </button>
      </div>
    </main>
  )
}
