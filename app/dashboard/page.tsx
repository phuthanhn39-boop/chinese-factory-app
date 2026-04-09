"use client";
export default function Dashboard() {
  return (
    <div style={{display:'flex',minHeight:'100vh',background:'#0a0f1e',fontFamily:'sans-serif',color:'#fff'}}>
      <div style={{width:'240px',background:'#0d1527',borderRight:'1px solid rgba(255,255,255,0.08)',padding:'20px'}}>
        <h2 style={{color:'#4a9eff'}}>📖 汉语工坊</h2>
        {['Tổng quan','Khóa học','Từ vựng','Luyện nghe','Thi HSK'].map(i=>(
          <div key={i} style={{padding:'10px',marginTop:'10px',borderRadius:'8px',cursor:'pointer',background:i==='Tổng quan'?'rgba(74,158,255,0.2)':'transparent'}}>{i}</div>
        ))}
      </div>
      <div style={{flex:1}}>
        <div style={{display:'flex',justifyContent:'space-between',padding:'16px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
          <div>🔍 Tìm bài học...</div>
          <div>🔥 7 ngày | 👤 User</div>
        </div>
        <div style={{padding:'20px'}}>
          <div style={{background:'linear-gradient(135deg,#1a2a4a,#0d1f3c)',padding:'24px',borderRadius:'16px',marginBottom:'20px'}}>
            <h2 style={{margin:'0 0 8px'}}>Chào mừng quay lại 👋</h2>
            <p style={{color:'rgba(255,255,255,0.6)',margin:'0 0 16px'}}>Tiếp tục hành trình học tiếng Trung</p>
            <div style={{background:'rgba(255,255,255,0.1)',height:'8px',borderRadius:'4px'}}>
              <div style={{width:'45%',background:'#4a9eff',height:'8px',borderRadius:'4px'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',marginTop:'8px'}}>
              <span style={{color:'rgba(255,255,255,0.4)',fontSize:'12px'}}>450/1000 XP</span>
              <span style={{color:'#4a9eff',fontSize:'12px'}}>45%</span>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'20px'}}>
            {[{n:'128',l:'Bài hoàn thành',c:'#4a9eff'},{n:'7 ngày',l:'Streak',c:'#ff922b'},{n:'85%',l:'Chính xác',c:'#ffd43b'},{n:'24h',l:'Thời gian học',c:'#51cf66'}].map(s=>(
              <div key={s.l} style={{background:'rgba(255,255,255,0.05)',padding:'16px',borderRadius:'12px',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div style={{color:s.c,fontSize:'22px',fontWeight:700}}>{s.n}</div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'12px',marginTop:'4px'}}>{s.l}</div>
              </div>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 280px',gap:'16px'}}>
            <div>
              <h3 style={{marginBottom:'14px'}}>Chủ đề học</h3>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
                {[{icon:'📦',t:'Kho hàng',w:80,d:45,c:'#ff6b6b'},{icon:'🏭',t:'Sản xuất',w:120,d:30,c:'#4a9eff'},{icon:'👷',t:'Giao tiếp',w:60,d:14,c:'#51cf66'},{icon:'🔧',t:'Máy móc',w:90,d:0,c:'#ffd43b'}].map(t=>(
                  <div key={t.t} style={{background:'rgba(255,255,255,0.05)',padding:'16px',borderRadius:'12px',border:'1px solid rgba(255,255,255,0.08)'}}>
                    <div style={{fontSize:'24px',marginBottom:'8px'}}>{t.icon}</div>
                    <div style={{fontWeight:600,marginBottom:'4px'}}>{t.t}</div>
                    <div style={{color:'rgba(255,255,255,0.4)',fontSize:'12px',marginBottom:'10px'}}>{t.w} từ</div>
                    <div style={{background:'rgba(255,255,255,0.1)',height:'4px',borderRadius:'4px'}}>
                      <div style={{width:Math.round(t.d/t.w*100)+'%',background:t.c,height:'4px',borderRadius:'4px'}}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',marginTop:'6px'}}>
                      <span style={{color:'rgba(255,255,255,0.4)',fontSize:'11px'}}>{t.d}/{t.w}</span>
                      <span style={{color:t.c,fontSize:'11px'}}>{Math.round(t.d/t.w*100)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'20px',border:'1px solid rgba(255,255,255,0.08)',marginBottom:'12px'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'12px'}}>
                  <span style={{fontWeight:600}}>Bảng xếp hạng</span>
                  <span style={{color:'#4a9eff',fontSize:'12px'}}>Xem tất cả</span>
                </div>
                {[{r:'🥇',n:'Liu Xiaoming',x:'2,450 XP'},{r:'🥈',n:'Trần Yến Nhi',x:'2,150 XP'},{r:'🥉',n:'Wang Wei',x:'1,980 XP'},{r:'4',n:'Bạn',x:'1,450 XP',me:true}].map(p=>(
                  <div key={p.n} style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px',borderRadius:'8px',marginBottom:'4px',background:p.me?'rgba(74,158,255,0.1)':'transparent'}}>
                    <span style={{fontSize:'14px',width:'20px'}}>{p.r}</span>
                    <div style={{width:'28px',height:'28px',borderRadius:'50%',background:p.me?'#4a9eff':'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:600}}>{p.n[0]}</div>
                    <div style={{flex:1,fontSize:'12px',color:p.me?'#4a9eff':'#fff'}}>{p.n}</div>
                    <span style={{color:'rgba(255,255,255,0.4)',fontSize:'11px'}}>{p.x}</span>
                  </div>
                ))}
              </div>
              <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'20px',border:'1px solid rgba(255,255,255,0.08)',textAlign:'center'}}>
                <div style={{fontSize:'40px',fontWeight:700,color:'#fff',marginBottom:'4px'}}>机器</div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'13px',marginBottom:'4px'}}>jī qì</div>
                <div style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',marginBottom:'16px'}}>máy móc, thiết bị</div>
                <div style={{display:'flex',gap:'8px'}}>
                  <div style={{flex:1,background:'rgba(255,255,255,0.08)',padding:'8px',borderRadius:'8px',fontSize:'12px',cursor:'pointer'}}>⭐ Lưu</div>
                  <div style={{flex:1,background:'#4a9eff',padding:'8px',borderRadius:'8px',fontSize:'12px',cursor:'pointer',fontWeight:600}}>✓ Biết rồi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
