export default function RegisterPage() {
  return (
    <div style={{minHeight: '100vh', background: '#0a0f1e', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'}}>
      <div style={{background: 'rgba(255,255,255,0.05)', borderRadius: '20px', padding: '40px', border: '1px solid rgba(255,255,255,0.1)', width: '100%', maxWidth: '420px'}}>
        <div style={{textAlign: 'center', marginBottom: '28px'}}>
          <div style={{fontSize: '32px', marginBottom: '8px'}}>📖</div>
          <h2 style={{color: '#fff', fontSize: '24px', fontWeight: 700, margin: '0 0 6px'}}>Tạo tài khoản</h2>
          <p style={{color: 'rgba(255,255,255,0.5)', fontSize: '14px', margin: 0}}>Bắt đầu học tiếng Trung miễn phí</p>
        </div>
        <div style={{marginBottom: '14px'}}>
          <label style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', display: 'block', marginBottom: '6px'}}>Họ và tên</label>
          <input type="text" placeholder="Nguyễn Văn A" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '13px 16px', color: '#fff', fontSize: '14px', boxSizing: 'border-box'}} />
        </div>
        <div style={{marginBottom: '14px'}}>
          <label style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', display: 'block', marginBottom: '6px'}}>Email</label>
          <input type="email" placeholder="example@gmail.com" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '13px 16px', color: '#fff', fontSize: '14px', boxSizing: 'border-box'}} />
        </div>
        <div style={{marginBottom: '14px'}}>
          <label style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', display: 'block', marginBottom: '6px'}}>Mật khẩu</label>
          <input type="password" placeholder="Tối thiểu 8 ký tự" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '13px 16px', color: '#fff', fontSize: '14px', boxSizing: 'border-box'}} />
        </div>
        <div style={{marginBottom: '24px'}}>
          <label style={{color: 'rgba(255,255,255,0.7)', fontSize: '13px', display: 'block', marginBottom: '6px'}}>Xác nhận mật khẩu</label>
          <input type="password" placeholder="Nhập lại mật khẩu" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '10px', padding: '13px 16px', color: '#fff', fontSize: '14px', boxSizing: 'border-box'}} />
        </div>
        <a href="/dashboard" style={{display: 'block', background: '#4a9eff', color: '#fff', textAlign: 'center', padding: '14px', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '16px', marginBottom: '16px'}}>Đăng ký</a>
        <p style={{textAlign: 'center', color: 'rgba(255,255,255,0.4)', fontSize: '13px', margin: 0}}>Đã có tài khoản? <a href="/login" style={{color: '#4a9eff'}}>Đăng nhập</a></p>
      </div>
    </div>
  )
}
