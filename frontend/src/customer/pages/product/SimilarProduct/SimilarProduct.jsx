import SimilarProductCard from "./SimilarProductCard";

const SimilarProduct = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-between gap-4 gap-y-8">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <div key={item._id}>
            <SimilarProductCard product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
