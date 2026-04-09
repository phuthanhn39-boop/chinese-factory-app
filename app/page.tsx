export default function Home() {
  return (
    <div style={{minHeight: '100vh', background: '#0a0f1e', fontFamily: 'sans-serif'}}>
      <nav style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 40px', borderBottom: '1px solid rgba(255,255,255,0.1)'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <span style={{fontSize: '24px'}}>📖</span>
          <div>
            <div style={{color: '#fff', fontWeight: 700, fontSize: '18px'}}>汉语工坊</div>
            <div style={{color: '#4a9eff', fontSize: '10px', letterSpacing: '2px'}}>CHINESE WORKSHOP</div>
          </div>
        </div>
        <div style={{display: 'flex', gap: '32px'}}>
          {['Trang chủ','Khóa học','Lộ trình','Luyện tập','Bảng giá'].map(item => (
            <a key={item} href="#" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px'}}>{item}</a>
          ))}
        </div>
        <a href="/login" style={{background: '#4a9eff', color: '#fff', padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '14px', fontWeight: 600}}>Đăng nhập</a>
      </nav>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 420px', gap: '40px', padding: '60px 40px', maxWidth: '1200px', margin: '0 auto'}}>
        <div>
          <div style={{display: 'inline-block', background: 'rgba(74,158,255,0.15)', color: '#4a9eff', fontSize: '12px', padding: '6px 16px', borderRadius: '20px', marginBottom: '24px', border: '1px solid rgba(74,158,255,0.3)'}}>HỌC TIẾNG TRUNG CÔNG XƯỞNG</div>
          <h1 style={{color: '#fff', fontSize: '48px', fontWeight: 800, lineHeight: 1.2, margin: '0 0 8px'}}>THÀNH THẠO</h1>
          <h1 style={{fontSize: '48px', fontWeight: 800, lineHeight: 1.2, margin: '0 0 24px'}}><span style={{color: '#fff'}}>TIẾNG TRUNG </span><span style={{color: '#4a9eff'}}>CÔNG XƯỞNG</span></h1>
          <p style={{color: 'rgba(255,255,255,0.6)', fontSize: '16px', lineHeight: 1.7, marginBottom: '40px', maxWidth: '500px'}}>Học từ vựng chuyên ngành sản xuất, giao tiếp với sếp Trung Quốc tự tin mỗi ngày.</p>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginBottom: '48px'}}>
            {[
              {icon: '📦', title: 'Từ vựng kho hàng', sub: 'Xuất nhập kho, kiểm hàng'},
              {icon: '🏭', title: 'Dây chuyền SX', sub: 'Máy móc, quy trình'},
              {icon: '🎧', title: 'Giao tiếp thực tế', sub: 'Họp, báo cáo hàng ngày'},
            ].map(f => (
              <div key={f.title}>
                <div style={{fontSize: '28px', marginBottom: '8px'}}>{f.icon}</div>
                <div style={{color: '#fff', fontWeight: 600, fontSize: '14px'}}>{f.title}</div>
                <div style={{color: 'rgba(255,255,255,0.5)', fontSize: '12px'}}>{f.sub}</div>
              </div>
            ))}
          </div>
          <div style={{display: 'flex', gap: '40px', padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)'}}>
            {[['500+','Từ vựng'],['50+','Bài học'],['1,200+','Học viên'],['4.9/5','Đánh giá']].map(([num,lbl]) => (
              <div key={lbl} style={{textAlign:'center'}}>
                <div style={{color:'#4a9eff',fontWeight:700,fontSize:'22px'}}>{num}</div>
                <div style={{color:'rgba(255,255,255,0.5)',fontSize:'12px'}}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '36px', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)'}}>
          <h2 style={{color: '#fff', fontSize: '24px', fontWeight: 700, margin: '0 0 8px', textAlign: 'center'}}>Đăng nhập</h2>
          <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '14px', textAlign: 'center', marginBottom: '28px'}}>Chào mừng bạn quay trở lại!</p>
          <div style={{marginBottom: '16px'}}>
            <input type="email" placeholder="Email hoặc số điện thoại" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '14px 16px', color: '#fff', fontSize: '14px', boxSizing: 'border-box'}} />
          </div>
          <div style={{marginBottom: '20px'}}>
            <input type="password" placeholder="Mật khẩu" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '14px 16px', color: '#fff', fontSize: '14px', boxSizing: 'border-box'}} />
          </div>
          <a href="/login" style={{display: 'block', background: '#4a9eff', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', marginBottom: '20px'}}>Đăng nhập</a>
          <div style={{textAlign:'center',color:'rgba(255,255,255,0.4)',fontSize:'13px',marginBottom:'16px'}}>hoặc</div>
          <a href="/register" style={{display:'block',background:'rgba(255,255,255,0.08)',color:'#fff',textAlign:'center',padding:'12px',borderRadius:'10px',textDecoration:'none',fontSize:'14px',border:'1px solid rgba(255,255,255,0.15)'}}>Đăng ký miễn phí</a>
          <p style={{textAlign:'center',color:'rgba(255,255,255,0.4)',fontSize:'13px',marginTop:'20px'}}>Chưa có tài khoản? <a href="/register" style={{color:'#4a9eff'}}>Đăng ký ngay</a></p>
        </div>
      </div>
    </div>
  )
}
