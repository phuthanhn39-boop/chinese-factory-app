export default function LoginPage() {
  return (
    <div className="min-h-screen bg-red-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-red-600">学中文</h1>
          <p className="text-gray-500 mt-1">Hoc tieng Trung cong xuong</p>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input type="email" placeholder="example@gmail.com" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mat khau</label>
            <input type="password" placeholder="........" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400" />
          </div>
          <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">Dang nhap</button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-6">Chua co tai khoan? <a href="/register" className="text-red-600 font-medium hover:underline">Dang ky</a></p>
      </div>
    </div>
  )
}
