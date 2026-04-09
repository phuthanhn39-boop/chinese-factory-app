export default function Dashboard() {
  return (
    <div style={{minHeight: '100vh', background: '#0a0f1e', fontFamily: 'sans-serif'}}>
      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
        <div style={{color: '#fff', fontWeight: 700, fontSize: '18px'}}>📖 汉语工坊</div>
        <div style={{display: 'flex', alignItems: 'center', gap: '16px'}}>
          <span style={{color: 'rgba(255,255,255,0.6)', fontSize: '14px'}}>Xin chào, học viên!</span>
          <div style={{width: '36px', height: '36px', borderRadius: '50%', background: '#4a9eff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700}}>H</div>
        </div>
      </nav>

      <div style={{maxWidth: '1100px', margin: '0 auto', padding: '40px'}}>
        <h1 style={{color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '8px'}}>Chào mừng trở lại! 👋</h1>
        <p style={{color: 'rgba(255,255,255,0.5)', marginBottom: '32px'}}>Tiếp tục hành trình học tiếng Trung của bạn</p>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '40px'}}>
          {[
            {num: '12', lbl: 'Bài đã học', icon: '📚'},
            {num: '89', lbl: 'Từ đã thuộc', icon: '✅'},
            {num: '7', lbl: 'Ngày liên tiếp', icon: '🔥'},
            {num: '85%', lbl: 'Độ chính xác', icon: '🎯'},
          ].map(s => (
            <div key={s.lbl} style={{background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '20px', border: '1px solid rgba(255,255,255,0.1)'}}>
              <div style={{fontSize: '24px', marginBottom: '8px'}}>{s.icon}</div>
              <div style={{color: '#4a9eff', fontSize: '28px', fontWeight: 700}}>{s.num}</div>
              <div style={{color: 'rgba(255,255,255,0.5)', fontSize: '13px'}}>{s.lbl}</div>
            </div>
          ))}
        </div>

        <h2 style={{color: '#fff', fontSize: '20px', fontWeight: 600, marginBottom: '20px'}}>Chủ đề học</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px'}}>
          {[
            {icon: '📦', title: 'Kho hàng & xuất nhập', words: 80, done: 45, color: '#ff6b6b'},
            {icon: '🏭', title: 'Dây chuyền sản xuất', words: 120, done: 30, color: '#4a9eff'},
            {icon: '👷', title: 'Giao tiếp công xưởng', words: 60, done: 14, color: '#51cf66'},
            {icon: '🔧', title: 'Máy móc & thiết bị', words: 90, done: 0, color: '#ffd43b'},
            {icon: '📋', title: 'Báo cáo & họp hành', words: 50, done: 0, color: '#cc5de8'},
            {icon: '🚛', title: 'Vận chuyển & logistics', words: 70, done: 0, color: '#ff922b'},
          ].map(t => (
            <div key={t.title} style={{background: 'rgba(255,255,255,0.05)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(255,255,255,0.1)', cursor: 'pointer'}}>
              <div style={{fontSize: '32px', marginBottom: '12px'}}>{t.icon}</div>
              <h3 style={{color: '#fff', fontSize: '15px', fontWeight: 600, margin: '0 0 8px'}}>{t.title}</h3>
              <p style={{color: 'rgba(255,255,255,0.4)', fontSize: '12px', margin: '0 0 16px'}}>{t.words} từ vựng</p>
              <div style={{background: 'rgba(255,255,255,0.1)', borderRadius: '4px', height: '6px', marginBottom: '8px'}}>
                <div style={{background: t.color, height: '6px', borderRadius: '4px', width: Math.round(t.done/t.words*100) + '%'}}></div>
              </div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{color: 'rgba(255,255,255,0.4)', fontSize: '12px'}}>{t.done}/{t.words} từ</span>
                <span style={{color: t.color, fontSize: '12px', fontWeight: 600}}>{Math.round(t.done/t.words*100)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
