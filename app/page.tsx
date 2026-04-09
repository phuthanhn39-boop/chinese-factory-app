export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-red-600 mb-4">学中文</h1>
        <p className="text-2xl text-gray-600 mb-2">Học tiếng Trung công xưởng</p>
        <p className="text-gray-400 mb-12">Học từ vựng tiếng Trung chuyên ngành sản xuất, dễ hiểu, dễ nhớ</p>
        <div className="flex gap-4 justify-center">
          <a href="/login" className="bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition">Đăng nhập</a>
          <a href="/register" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-50 transition">Đăng ký miễn phí</a>
        </div>
        <div className="mt-20 grid grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-4xl mb-3">📦</div>
            <h3 className="font-bold text-gray-800 mb-2">Từ vựng kho hàng</h3>
            <p className="text-gray-500 text-sm">Học từ về xuất nhập kho, kiểm hàng, đóng gói</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-4xl mb-3">🏭</div>
            <h3 className="font-bold text-gray-800 mb-2">Từ vựng sản xuất</h3>
            <p className="text-gray-500 text-sm">Học từ về dây chuyền, máy móc, quy trình</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <div className="text-4xl mb-3">👷</div>
            <h3 className="font-bold text-gray-800 mb-2">Giao tiếp công xưởng</h3>
            <p className="text-gray-500 text-sm">Học câu giao tiếp hàng ngày với sếp Trung Quốc</p>
          </div>
        </div>
      </div>
    </div>
  )
}
