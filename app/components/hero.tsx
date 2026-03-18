

const Hero = () => {
  return (
    <section className="bg-orange-50 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
       
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
            Discover Delicious Recipes
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Find easy, healthy, and mouth-watering meals you can cook today.
          </p>

         
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Search recipes, ingredients..."
              className="px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
              Search
            </button>
          </div>

          
          <button className="mt-6 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition">
            Browse Popular Recipes
          </button>
        </div>

        
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c"
            alt="Delicious food"
            className="rounded-3xl shadow-xl w-full object-cover"
          />

        
          <div className="absolute -bottom-6 -left-6 bg-white px-5 py-3 rounded-2xl shadow-lg">
            <p className="text-sm text-gray-500">Featured</p>
            <p className="font-bold text-gray-900">Healthy Bowl</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
