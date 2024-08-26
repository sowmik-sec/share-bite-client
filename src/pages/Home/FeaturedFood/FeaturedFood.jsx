import ShowFoods from "../../ShowFoods/ShowFoods";

function FeaturedFood() {
  return (
    <>
      <div className="mb-5">
        <h2 className="text-5xl text-center font-bold">Featured Foods</h2>
      </div>
      <ShowFoods from={"featuredFood"} />
    </>
  );
}

export default FeaturedFood;
