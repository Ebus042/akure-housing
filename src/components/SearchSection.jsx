const SearchSection = () => {
  return (
    <section>
      <h1 className="text-center text-2xl font-bold my-10">
        Find Your Home in Akure
      </h1>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4 mx-10
      md:gap-10 md:mx-auto md:w-[650px]"
      >
        <div>
          <select
            name="location"
            id=""
            className="w-[150px] p-2 border-2  text-lg"
          >
            <option value="">Location</option>
            <option value="">Alagbaka</option>
            <option value="">Ijapo Estate</option>
            <option value="">Alagbaka Extension</option>
            <option value="">Ijapo Extension</option>
            <option value="">Oba Ile</option>
          </select>
        </div>

        <div>
          <select name="Type" id="" className="w-[150px] p-2 border-2 text-lg">
            <option value="">House Type</option>
            <option value="">A Room Self Con</option>
            <option value="">1 bedroom</option>
            <option value="">2 bedroom</option>
            <option value="">3 bedroom</option>
            <option value="">4 bedroom or more</option>
          </select>
        </div>
        <div>
          <select
            name="Price range"
            id=""
            className="w-[150px] p-2 border-2  text-lg"
          >
            <option value="">Price Range</option>
            <option value="">100k - 350k</option>
            <option value="">400k - 650k</option>
            <option value="">700k - 1m</option>
            <option value="">1.2m - 2m</option>
            <option value="">2.4m - 4m</option>
          </select>
        </div>

        <button
          className=" text-xl border-2 w-[150px]
         bg-green-900 px-4 py-1 text-white rounded-md"
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
