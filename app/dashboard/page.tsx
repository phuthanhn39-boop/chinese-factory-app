"use client";
export default function Dashboard() {
  return (
    <div style={{display:'flex',minHeight:'100vh',background:'#0a0f1e',fontFamily:'sans-serif',color:'#fff'}}>
      <div style={{width:'240px',background:'#0d1527',borderRight:'1px solid rgba(255,255,255,0.08)',padding:'20px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
          <div style={{marginBottom:'28px'}}>
            <div style={{fontSize:'18px',fontWeight:700,color:'#4a9eff'}}>📖 汉语工坊</div>
            <div style={{fontSize:'10px',color:'rgba(255,255,255,0.3)',letterSpacing:'2px'}}>CHINESE WORKSHOP</div>
          </div>
          {[['🏠','Tổng quan',true],['📚','Khóa học',false],['📦','Từ vựng CX',false],['🎧','Luyện nghe',false],['📝','Thi HSK',false],['👥','Cộng đồng',false]].map(([icon,label,active])=>(
            <div key={String(label)} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',borderRadius:'10px',marginBottom:'4px',background:active?'rgba(74,158,255,0.15)':'transparent',cursor:'pointer'}}>
              <span>{icon}</span>
              <span style={{color:active?'#4a9eff':'rgba(255,255,255,0.6)',fontSize:'14px',fontWeight:active?600:400}}>{String(label)}</span>
            </div>
          ))}
        </div>
        <div style={{background:'rgba(74,158,255,0.1)',borderRadius:'12px',padding:'16px',border:'1px solid rgba(74,158,255,0.2)'}}>
          <div style={{fontSize:'20px',marginBottom:'6px'}}>👑</div>
          <div style={{fontWeight:600,fontSize:'13px',marginBottom:'4px'}}>Nâng cấp PRO</div>
          <div style={{color:'rgba(255,255,255,0.5)',fontSize:'11px',marginBottom:'12px'}}>Mở khóa toàn bộ tính năng</div>
          <div style={{background:'#4a9eff',textAlign:'center',padding:'8px',borderRadius:'8px',fontSize:'12px',fontWeight:600,cursor:'pointer'}}>Nâng cấp ngay</div>
        </div>
      </div>
      <div style={{flex:1,display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'14px 24px',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'#0d1527'}}>
          <div style={{background:'rgba(255,255,255,0.06)',borderRadius:'8px',padding:'8px 16px',color:'rgba(255,255,255,0.3)',fontSize:'14px',width:'280px'}}>🔍 Tìm bài học, từ vựng...</div>
          <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
            <span style={{color:'#ff922b',fontWeight:600,fontSize:'14px'}}>🔥 7 ngày streak</span>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#4a9eff',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:700}}>H</div>
              <div>
                <div style={{fontSize:'13px',fontWeight:600}}>Học viên</div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,0.4)'}}>HSK 3 · 45%</div>
              </div>
            </div>
          </div>
        </div>
        <div style={{flex:1,padding:'24px',overflowY:'auto'}}>
          <div style={{background:'linear-gradient(135deg,#1a2a4a,#0d1f3c)',borderRadius:'16px',padding:'28px',marginBottom:'20px',border:'1px solid rgba(74,158,255,0.2)'}}>
            <div style={{color:'rgba(255,255,255,0.6)',fontSize:'14px',marginBottom:'4px'}}>Nǐ hǎo! 👋</div>
            <h2 style={{margin:'0 0 6px',fontSize:'24px'}}>Chào mừng quay lại!</h2>
            <p style={{color:'rgba(255,255,255,0.5)',fontSize:'13px',margin:'0 0 20px'}}>Hôm nay là ngày tuyệt vời để tiến bộ hơn.</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'8px'}}>
              <span style={{color:'#4a9eff',fontSize:'13px',fontWeight:600}}>HSK 3 · Cấp độ hiện tại</span>
              <span style={{fontSize:'13px'}}>45%</span>
            </div>
            <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'4px',height:'8px',marginBottom:'8px'}}>
              <div style={{width:'45%',background:'#4a9eff',height:'8px',borderRadius:'4px'}}/>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <span style={{color:'rgba(255,255,255,0.4)',fontSize:'12px'}}>450/1000 XP để lên cấp</span>
              <div style={{background:'#4a9eff',padding:'8px 20px',borderRadius:'8px',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>▶ Tiếp tục học</div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'24px'}}>
            {[{n:'128',l:'Bài hoàn thành',s:'+12 tuần này',c:'#4a9eff'},{n:'7 ngày',l:'Streak',s:'Giữ vững nhé!',c:'#ff922b'},{n:'85.6%',l:'Điểm TB',s:'HSK 3 Mock',c:'#ffd43b'},{n:'24.5h',l:'Thời gian học',s:'+5.2h tuần này',c:'#51cf66'}].map(s=>(
              <div key={s.l} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div style={{color:s.c,fontSize:'22px',fontWeight:700,marginBottom:'4px'}}>{s.n}</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.7)',marginBottom:'2px'}}>{s.l}</div>
                <div style={{fontSize:'11px',color:'rgba(255,255,255,0.35)'}}>{s.s}</div>
              </div>
            ))}
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 300px',gap:'20px'}}>
            <div>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'14px'}}>
                <h3 style={{margin:0,fontSize:'16px'}}>Chủ đề học</h3>
                <span style={{color:'#4a9eff',fontSize:'13px',cursor:'pointer'}}>Xem tất cả</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'12px'}}>
                {[{icon:'📦',t:'Kho hàng & xuất nhập',w:80,d:45,c:'#ff6b6b'},{icon:'🏭',t:'Dây chuyền sản xuất',w:120,d:30,c:'#4a9eff'},{icon:'👷',t:'Giao tiếp công xưởng',w:60,d:14,c:'#51cf66'},{icon:'🔧',t:'Máy móc & thiết bị',w:90,d:0,c:'#ffd43b'}].map(t=>(
                  <div key={t.t} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px',border:'1px solid rgba(255,255,255,0.08)',cursor:'pointer'}}>
                    <div style={{fontSize:'28px',marginBottom:'8px'}}>{t.icon}</div>
                    <div style={{fontWeight:600,fontSize:'14px',marginBottom:'4px'}}>{t.t}</div>
                    <div style={{color:'rgba(255,255,255,0.4)',fontSize:'12px',marginBottom:'12px'}}>{t.w} từ vựng</div>
                    <div style={{background:'rgba(255,255,255,0.1)',height:'4px',borderRadius:'4px',marginBottom:'6px'}}>
                      <div style={{width:Math.round(t.d/t.w*100)+'%',background:t.c,height:'4px',borderRadius:'4px'}}/>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <span style={{color:'rgba(255,255,255,0.4)',fontSize:'11px'}}>{t.d}/{t.w} từ</span>
                      <span style={{color:t.c,fontSize:'11px',fontWeight:600}}>{Math.round(t.d/t.w*100)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
              <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'20px',border:'1px solid rgba(255,255,255,0.08)'}}>
                <div style={{display:'flex',justifyContent:'space-between',marginBottom:'14px'}}>
                  <span style={{fontWeight:600,fontSize:'14px'}}>Bảng xếp hạng</span>
                  <span style={{color:'#4a9eff',fontSize:'12px',cursor:'pointer'}}>Xem tất cả</span>
                </div>
                {[{r:'🥇',n:'Liu Xiaoming',x:'2,450 XP'},{r:'🥈',n:'Tran Yen Nhi',x:'2,150 XP'},{r:'🥉',n:'Wang Wei',x:'1,980 XP'},{r:'4',n:'Ban',x:'1,450 XP',me:true},{r:'5',n:'Zhang Hao',x:'1,250 XP'}].map(p=>(
                  <div key={p.n} style={{display:'flex',alignItems:'center',gap:'8px',padding:'8px',borderRadius:'8px',marginBottom:'4px',background:p.me?'rgba(74,158,255,0.1)':'transparent',border:p.me?'1px solid rgba(74,158,255,0.2)':'none'}}>
                    <span style={{width:'20px',textAlign:'center',fontSize:'14px'}}>{p.r}</span>
                    <div style={{width:'28px',height:'28px',borderRadius:'50%',background:p.me?'#4a9eff':'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'12px',fontWeight:600}}>{p.n[0]}</div>
                    <div style={{flex:1,fontSize:'12px',color:p.me?'#4a9eff':'#fff'}}>{p.n}</div>
                    <span style={{color:'rgba(255,255,255,0.4)',fontSize:'11px'}}>{p.x}</span>
                  </div>
                ))}
              </div>
              <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'20px',border:'1px solid rgba(255,255,255,0.08)',textAlign:'center'}}>
                <div style={{color:'rgba(255,255,255,0.4)',fontSize:'12px',marginBottom:'8px'}}>Từ vựng hôm nay</div>
                <div style={{fontSize:'44px',fontWeight:700,marginBottom:'4px'}}>机器</div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'14px',marginBottom:'4px'}}>jī qì</div>
                <div style={{fontSize:'15px',marginBottom:'8px'}}>may moc, thiet bi</div>
                <div style={{color:'rgba(255,255,255,0.35)',fontSize:'12px',fontStyle:'italic',marginBottom:'16px'}}>Vi du: Cai may nay hoat dong tot.</div>
                <div style={{display:'flex',gap:'8px'}}>
                  <div style={{flex:1,background:'rgba(255,255,255,0.08)',padding:'10px',borderRadius:'8px',fontSize:'12px',cursor:'pointer'}}>⭐ Luu</div>
                  <div style={{flex:1,background:'rgba(255,255,255,0.08)',padding:'10px',borderRadius:'8px',fontSize:'12px',cursor:'pointer'}}>🔁 Tu khac</div>
                  <div style={{flex:1,background:'#4a9eff',padding:'10px',borderRadius:'8px',fontSize:'12px',cursor:'pointer',fontWeight:600}}>Biet roi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
