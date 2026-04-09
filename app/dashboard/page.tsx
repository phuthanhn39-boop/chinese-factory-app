export default function Dashboard() {
  return (
    <div style={{display:'flex',minHeight:'100vh',background:'#0a0f1e',fontFamily:'sans-serif'}}>
      <div style={{width:'220px',background:'#0d1527',borderRight:'1px solid rgba(255,255,255,0.08)',padding:'20px 0',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
          <div style={{padding:'0 20px 24px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
            <div style={{color:'#fff',fontWeight:700,fontSize:'16px'}}>📖 汉语工坊</div>
            <div style={{color:'#4a9eff',fontSize:'10px',letterSpacing:'2px'}}>CHINESE WORKSHOP</div>
          </div>
          <div style={{padding:'16px 12px'}}>
            {[['🏠','Tổng quan',true],['📚','Khóa học',false],['📦','Từ vựng CX',false],['🎧','Luyện nghe',false],['🎤','Luyện nói AI',false],['📝','Thi thử HSK',false],['👥','Cộng đồng',false]].map(([icon,label,active]) => (
              <div key={label} style={{display:'flex',alignItems:'center',gap:'10px',padding:'10px 12px',borderRadius:'10px',marginBottom:'4px',background:active?'rgba(74,158,255,0.15)':'transparent',cursor:'pointer'}}>
                <span style={{fontSize:'16px'}}>{icon}</span>
                <span style={{color:active?'#4a9eff':'rgba(255,255,255,0.6)',fontSize:'14px',fontWeight:active?600:400}}>{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{padding:'16px',margin:'12px',background:'rgba(74,158,255,0.1)',borderRadius:'12px',border:'1px solid rgba(74,158,255,0.2)'}}>
          <div style={{fontSize:'16px',marginBottom:'6px'}}>👑</div>
          <div style={{color:'#fff',fontWeight:600,fontSize:'13px',marginBottom:'4px'}}>Nâng cấp PRO</div>
          <div style={{color:'rgba(255,255,255,0.5)',fontSize:'11px',marginBottom:'12px'}}>Mở khóa toàn bộ tính năng AI</div>
          <div style={{background:'#4a9eff',color:'#fff',textAlign:'center',padding:'8px',borderRadius:'8px',fontSize:'12px',fontWeight:600,cursor:'pointer'}}>Nâng cấp ngay</div>
        </div>
      </div>

      <div style={{flex:1,overflow:'auto'}}>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 24px',borderBottom:'1px solid rgba(255,255,255,0.08)',background:'#0d1527'}}>
          <div style={{background:'rgba(255,255,255,0.06)',borderRadius:'8px',padding:'8px 16px',display:'flex',alignItems:'center',gap:'8px',width:'300px'}}>
            <span style={{color:'rgba(255,255,255,0.3)'}}>🔍</span>
            <span style={{color:'rgba(255,255,255,0.3)',fontSize:'14px'}}>Tìm bài học, từ vựng...</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'20px'}}>
            <span style={{color:'#ff922b',fontSize:'14px',fontWeight:600}}>🔥 7 ngày streak</span>
            <span style={{color:'rgba(255,255,255,0.6)',fontSize:'14px'}}>🌐 Tiếng Việt</span>
            <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
              <div style={{width:'36px',height:'36px',borderRadius:'50%',background:'#4a9eff',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>H</div>
              <div>
                <div style={{color:'#fff',fontSize:'13px',fontWeight:600}}>Học viên</div>
                <div style={{color:'rgba(255,255,255,0.4)',fontSize:'11px'}}>HSK 3 · 45%</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{padding:'24px',display:'grid',gridTemplateColumns:'1fr 280px',gap:'20px'}}>
          <div>
            <div style={{background:'linear-gradient(135deg,#1a2a4a,#0d1f3c)',borderRadius:'16px',padding:'28px',marginBottom:'20px',border:'1px solid rgba(74,158,255,0.2)',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',right:'20px',top:'50%',transform:'translateY(-50%)',fontSize:'80px',opacity:0.15}}>汉</div>
              <div style={{color:'rgba(255,255,255,0.7)',fontSize:'14px',marginBottom:'4px'}}>Nǐ hǎo! 👋</div>
              <h2 style={{color:'#fff',fontSize:'26px',fontWeight:700,margin:'0 0 4px'}}>Chào mừng quay lại!</h2>
              <p style={{color:'rgba(255,255,255,0.5)',fontSize:'13px',marginBottom:'20px'}}>Hôm nay là ngày tuyệt vời để tiến bộ hơn.</p>
              <div style={{marginBottom:'8px',display:'flex',justifyContent:'space-between'}}>
                <span style={{color:'#4a9eff',fontSize:'13px',fontWeight:600}}>HSK 3 · Cấp độ hiện tại</span>
                <span style={{color:'#fff',fontSize:'13px'}}>45%</span>
              </div>
              <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'4px',height:'8px',marginBottom:'8px'}}>
                <div style={{background:'#4a9eff',height:'8px',borderRadius:'4px',width:'45%'}}></div>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{color:'rgba(255,255,255,0.4)',fontSize:'12px'}}>450 / 1000 XP để lên cấp</span>
                <div style={{background:'#4a9eff',color:'#fff',padding:'8px 20px',borderRadius:'8px',fontSize:'13px',fontWeight:600,cursor:'pointer'}}>▶ Tiếp tục học</div>
              </div>
            </div>

            <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'12px',marginBottom:'20px'}}>
              {[
                {icon:'📚',num:'128',lbl:'Bài hoàn thành',sub:'+12 tuần này',color:'#4a9eff'},
                {icon:'🔥',num:'7 ngày',lbl:'Chuỗi ngày học',sub:'Giữ vững nhé!',color:'#ff922b'},
                {icon:'⭐',num:'85.6%',lbl:'Điểm trung bình',sub:'HSK 3 Mock',color:'#ffd43b'},
                {icon:'⏱',num:'24.5h',lbl:'Thời gian học',sub:'+5.2h tuần này',color:'#51cf66'},
              ].map(s => (
                <div key={s.lbl} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px',border:'1px solid rgba(255,255,255,0.08)'}}>
                  <div style={{fontSize:'20px',marginBottom:'8px'}}>{s.icon}</div>
                  <div style={{color:s.color,fontSize:'20px',fontWeight:700,marginBottom:'2px'}}>{s.num}</div>
                  <div style={{color:'rgba(255,255,255,0.7)',fontSize:'12px',marginBottom:'2px'}}>{s.lbl}</div>
                  <div style={{color:'rgba(255,255,255,0.35)',fontSize:'11px'}}>{s.sub}</div>
                </div>
              ))}
            </div>

            <div style={{marginBottom:'20px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'14px'}}>
                <h3 style={{color:'#fff',fontSize:'16px',fontWeight:600,margin:0}}>Chủ đề đang học</h3>
                <span style={{color:'#4a9eff',fontSize:'13px',cursor:'pointer'}}>Xem tất cả</span>
              </div>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'12px'}}>
                {[
                  {icon:'📦',title:'Kho hàng & xuất nhập',words:80,done:45,color:'#ff6b6b',tag:'Đang học'},
                  {icon:'🏭',title:'Dây chuyền sản xuất',words:120,done:30,color:'#4a9eff',tag:'Đang học'},
                  {icon:'👷',title:'Giao tiếp công xưởng',words:60,done:14,color:'#51cf66',tag:'Mới'},
                ].map(t => (
                  <div key={t.title} style={{background:'rgba(255,255,255,0.05)',borderRadius:'12px',padding:'16px',border:'1px solid rgba(255,255,255,0.08)',cursor:'pointer'}}>
                    <div style={{display:'flex',justifyContent:'space-between',marginBottom:'10px'}}>
                      <span style={{fontSize:'24px'}}>{t.icon}</span>
                      <span style={{background:'rgba(74,158,255,0.15)',color:'#4a9eff',fontSize:'11px',padding:'3px 8px',borderRadius:'20px',height:'fit-content'}}>{t.tag}</span>
                    </div>
                    <div style={{color:'#fff',fontSize:'13px',fontWeight:600,marginBottom:'4px'}}>{t.title}</div>
                    <div style={{color:'rgba(255,255,255,0.4)',fontSize:'11px',marginBottom:'12px'}}>{t.words} từ vựng</div>
                    <div style={{background:'rgba(255,255,255,0.1)',borderRadius:'4px',height:'4px',marginBottom:'6px'}}>
                      <div style={{background:t.color,height:'4px',borderRadius:'4px',width:Math.round(t.done/t.words*100)+'%'}}></div>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <span style={{color:'rgba(255,255,255,0.4)',fontSize:'11px'}}>{t.done}/{t.words} từ</span>
                      <span style={{color:t.color,fontSize:'11px',fontWeight:600}}>{Math.round(t.done/t.words*100)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'16px',padding:'20px',border:'1px solid rgba(255,255,255,0.08)',marginBottom:'16px'}}>
              <div style={{display:'flex',justifyContent:'space-between',marginBottom:'16px'}}>
                <span style={{color:'#fff',fontWeight:600,fontSize:'14px'}}>Bảng xếp hạng</span>
                <span style={{color:'#4a9eff',fontSize:'12px',cursor:'pointer'}}>Xem tất cả</span>
              </div>
              {[
                {rank:'🥇',name:'Liu Xiaoming',xp:'2,450 XP'},
                {rank:'🥈',name:'Trần Yến Nhi',xp:'2,150 XP'},
                {rank:'🥉',name:'Wang Wei',xp:'1,980 XP'},
                {rank:'4',name:'Bạn',xp:'1,450 XP',me:true},
                {rank:'5',name:'Zhang Hao',xp:'1,250 XP'},
              ].map(p => (
                <div key={p.name} style={{display:'flex',alignItems:'center',gap:'10px',padding:'8px',borderRadius:'8px',marginBottom:'4px',background:p.me?'rgba(74,158,255,0.1)':'transparent',border:p.me?'1px solid rgba(74,158,255,0.2)':'1px solid transparent'}}>
                  <span style={{fontSize:'16px',width:'24px',textAlign:'center'}}>{p.rank}</span>
                  <div style={{width:'28px',height:'28px',borderRadius:'50%',background:p.me?'#4a9eff':'rgba(255,255,255,0.15)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'12px',fontWeight:600}}>{p.name[0]}</div>
                  <div style={{flex:1}}>
                    <div style={{color:p.me?'#4a9eff':'#fff',fontSize:'12px',fontWeight:p.me?600:400}}>{p.name}</div>
                  </div>
                  <span style={{color:'rgba(255,255,255,0.5)',fontSize:'11px'}}>{p.xp}</span>
                </div>
              ))}
            </div>

            <div style={{background:'rgba(255,255,255,0.05)',borderRadius:'16px',padding:'20px',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{textAlign:'center',marginBottom:'12px'}}>
                <div style={{color:'#fff',fontSize:'40px',fontWeight:700,marginBottom:'4px'}}>机器</div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'14px',marginBottom:'4px'}}>jī qì</div>
                <div style={{color:'rgba(255,255,255,0.8)',fontSize:'14px',marginBottom:'12px'}}>máy móc, thiết bị</div>
                <div style={{color:'rgba(255,255,255,0.4)',fontSize:'12px',fontStyle:'italic'}}>这台机器运行很好。</div>
                <div style={{color:'rgba(255,255,255,0.3)',fontSize:'11px',marginBottom:'16px'}}>Cái máy này hoạt động rất tốt.</div>
              </div>
              <div style={{display:'flex',gap:'8px'}}>
                <div style={{flex:1,background:'rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.6)',textAlign:'center',padding:'10px',borderRadius:'8px',fontSize:'12px',cursor:'pointer'}}>⭐ Lưu</div>
                <div style={{flex:1,background:'rgba(255,255,255,0.08)',color:'rgba(255,255,255,0.6)',textAlign:'center',padding:'10px',borderRadius:'8px',fontSize:'12px',cursor:'pointer'}}>🔁 Từ khác</div>
                <div style={{flex:1,background:'#4a9eff',color:'#fff',textAlign:'center',padding:'10px',borderRadius:'8px',fontSize:'12px',cursor:'pointer',fontWeight:600}}>✓ Biết rồi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
