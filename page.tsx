'use client'
import {useEffect,useState} from 'react'
export default function Saved(){const [cv,setCv]=useState<any>(null);useEffect(()=>{const x=localStorage.getItem('rawaj-cv');if(x)setCv(JSON.parse(x))},[]);return <main className="container"><h1>القوالب المحفوظة</h1>{cv?<div className="card"><h2>{cv.name}</h2><p>{cv.job}</p><a className="btn" href="/templates/editor">فتح للتعديل</a></div>:<div className="card">لا توجد سير محفوظة بعد.</div>}</main>}
