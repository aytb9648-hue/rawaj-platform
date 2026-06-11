export default function Builder() {
  return (
    <main style={{maxWidth:'800px',margin:'40px auto',padding:'20px'}}>
      <h1>إنشاء السيرة الذاتية</h1>

      <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
        <input placeholder="الاسم الكامل" />
        <input placeholder="البريد الإلكتروني" />
        <input placeholder="رقم الجوال" />
        <input placeholder="المدينة" />

        <textarea
          placeholder="الخبرات العملية"
          rows={5}
        />

        <textarea
          placeholder="المهارات"
          rows={5}
        />

        <button>
          حفظ السيرة الذاتية
        </button>
      </div>
    </main>
  )
}
