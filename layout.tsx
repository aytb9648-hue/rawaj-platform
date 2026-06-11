import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'رَواج | منصة إنشاء السيرة الذاتية',
  description: 'منصة عربية احترافية لإنشاء وتعديل وتحميل السير الذاتية'
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="ar" dir="rtl"><body><Nav />{children}<footer className="footer">© 2026 رَواج - جميع الحقوق محفوظة</footer></body></html>
}

function Nav(){return <nav className="nav"><a className="logo" href="/">رَواج</a><div><a href="/templates">القوالب</a><a href="/saved">المحفوظات</a><a href="/privacy">الخصوصية</a><a href="/terms">الشروط</a><a href="/contact">تواصل معنا</a><a className="btn" href="/login">دخول</a></div></nav>}
