const SimilarProductCard = () => {
  // ✅ tránh lỗi undefined

  return (
    <div className="group cursor-pointer">
      {/* IMAGE */}
      <div className="relative h-[300px] overflow-hidden rounded-md">
        <img
          className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
          src="https://cdn.notegpt.io/notegpt/static/tario_image/ai-image-editor/example/change-clothes-after.png"
          alt=""
        />
      </div>

      {/* DETAILS */}
      <div className="pt-3 space-y-1 transition-all duration-300">
        <div className="space-y-1">
          <h1 className="font-semibold text-sm line-clamp-2 min-h-[40px]">
            Sản phẩm tương tự
          </h1>

          <p className="text-xs text-gray-500">BoxOS</p>
        </div>

        {/* PRICE */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-gray-800 text-sm">200.000₫</span>

          <span className="text-xs line-through text-gray-400">300.000₫</span>

          <span className="text-[#00927c] text-xs font-semibold">-33%</span>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
