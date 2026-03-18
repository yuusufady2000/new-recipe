const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-4">
        
       
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Tasty<span className="text-orange-500">Bites</span>
          </h2>
          <p className="text-sm leading-relaxed">
            Discover delicious recipes from around the world. 
            Breakfast, lunch, dinner and everything in between.
          </p>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Breakfast</li>
            <li className="hover:text-orange-500 cursor-pointer">Lunch</li>
            <li className="hover:text-orange-500 cursor-pointer">Dinner</li>
            <li className="hover:text-orange-500 cursor-pointer">Desserts</li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-white font-semibold mb-4">Cuisines</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Italian</li>
            <li className="hover:text-orange-500 cursor-pointer">Mexican</li>
            <li className="hover:text-orange-500 cursor-pointer">Nigerian</li>
            <li className="hover:text-orange-500 cursor-pointer">British</li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Get the latest recipes straight to your inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-md text-sm text-gray-800 focus:outline-none"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r-md text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

     
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TastyBites. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;