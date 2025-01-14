import React, { useState, useRef, useEffect } from 'react';
import { FaMoon, FaSun, FaGoogle, FaApple } from 'react-icons/fa';  // Import the icons from react-icons
import Transformer1 from "./assets/transformer1.jpg";
import Transformer2 from "./assets/transformer2.jpg";
import Transformer3 from "./assets/transformer3.jpg";
import Transformer4 from "./assets/transformer4.jpg";
import Transhelmet from "./assets/transhelmet.jpg";
import Transformer5 from "./assets/transformer5.jpg";  // Add Transformer5
import 'animate.css';  

const products = [
  { id: 1, name: 'Optimus Prime Action Figure', price: 49.99, description: 'Highly detailed action figure of Optimus Prime.', image: Transformer1 },
  { id: 2, name: 'Bumblebee Helmet', price: 79.99, description: 'Wearable helmet inspired by Bumblebee.', image: Transformer2 },
  { id: 2, name: 'Bumblebee Helmet', price: 79.99, description: 'Wearable helmet inspired by Bumblebee.', image: Transhelmet },
  { id: 3, name: 'Megatron Blaster', price: 99.99, description: 'Replica of Megatron\'s blaster.', image: Transformer3 },
  { id: 4, name: 'Transformers T-shirt', price: 19.99, description: 'Comfortable T-shirt with Transformers print.', image: Transformer4 },
  { id: 5, name: 'Optimus Prime Action Figure', price: 49.99, description: 'Highly detailed action figure of Optimus Prime.', image: Transformer1 },
  { id: 6, name: 'Bumblebee Helmet', price: 79.99, description: 'Wearable helmet inspired by Bumblebee.', image: Transformer2 },

  { id: 8, name: 'Transformers T-shirt', price: 19.99, description: 'Comfortable T-shirt with Transformers print.', image: Transformer4 },
];

const ProductsPage = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const modalRef = useRef(null);  // Create a ref for the modal

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to open the login modal
  const handleBuyOrAddToCart = () => {
    setShowModal(true);
  };

  // Close modal handler
  const closeModal = () => {
    setShowModal(false);
  };

  // Dummy login function
  const handleLogin = () => {
    // Perform login logic here (e.g., API call)
    alert(`Logged in with email: ${email}`);
    closeModal();
  };

  // Close modal if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col items-center ${darkTheme ? 'bg-white text-black' : 'bg-black text-white'} transition-all duration-500`}>
      {/* Modal for Login */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white text-black p-8 rounded-lg shadow-lg transform transition-all duration-500 scale-100 animate__animated animate__slideInLeft animate__delay-0.3s w-96 sm:w-2/3 md:w-1/2">
            <div className="flex">
              {/* Left Side Image */}
              <div className="w-1/2 h-90 bg-cover bg-center rounded-l-lg" style={{ backgroundImage: `url(${Transformer5})` }}></div>

              {/* Right Side Login Form */}
              <div className="w-1/2 p-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Please Log In</h2>
                
                {/* Login Form */}
                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                {/* Login Buttons */}
                <div className="mt-4 space-y-3">
                  <button
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  <button
                    className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition duration-300"
                    onClick={handleLogin}
                  >
                    <div className="flex items-center justify-center">
                      <FaGoogle size={18} className="mr-2" />
                      Log In with Google
                    </div>
                  </button>
                  <button
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <FaApple size={18} className="mr-2" />
                      Log In with Apple
                    </div>
                  </button>
                </div>
                
                {/* Close Button */}
                <div className="mt-6 text-center">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="w-full p-6 px-20 flex justify-between items-center">
        <input 
          type="text" 
          placeholder="Search for products..." 
          className={`w-1/2 p-2 rounded border ${darkTheme ? 'border-gray-400 bg-white text-black' : 'border-gray-700 bg-black text-white'}`}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="ml-4 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-600 dark:bg-gray-300 dark:text-black dark:hover:bg-gray-400 transition"
          onClick={toggleTheme}
        >
          {darkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
        </button>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProducts.map((product) => (
          <div 
            key={product.id} 
            className={`flex flex-col p-6 rounded-lg shadow-lg w-80 transform transition-transform hover:scale-105 duration-300 
              ${darkTheme ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
          >
            <div className="h-56 w-full overflow-hidden rounded-t-lg">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <div>
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg mb-4">${product.price.toFixed(2)}</p>
                <p className="text-sm mb-4">{product.description}</p>
              </div>
              <div className="flex gap-4">
                <button 
                  className="flex-1 px-2 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
                  onClick={handleBuyOrAddToCart}
                >
                  Buy
                </button>
                <button 
                  className="flex-1 px-2 py-2 bg-green-600 text-white rounded hover:bg-green-500 transition duration-300"
                  onClick={handleBuyOrAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
