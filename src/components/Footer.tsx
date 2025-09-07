import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white mt-8 shadow-inner rounded-t-2xl pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
        {/* About Section */}
        <div className="space-y-4">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold">kapee.</h2>
          </div>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          </p>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span>Lorem Ipsum, 2046 Lorem Ipsum</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>576-245-2478</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>info@kapee.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>Mon - Fri / 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        {/* Information Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">INFORMATION</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Store Location</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Latest News</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Our Sitemap</a></li>
          </ul>
        </div>

        {/* Our Service Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">OUR SERVICE</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Terms of Sale</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Customer Service</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Delivery Information</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Payments</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Saved Cards</a></li>
          </ul>
        </div>

        {/* My Account Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">MY ACCOUNT</h3>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition-colors">My Account</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">My Shop</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">My Cart</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Checkout</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">My Wishlist</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition-colors">Tracking Order</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800">NEWSLETTER</h3>
          <p className="text-sm text-gray-500">
            Subscribe to our mailing list to get the new updates.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow p-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button className="bg-gray-800 text-white p-3 rounded-r-lg font-semibold hover:bg-yellow-500 transition-colors">
              SIGN UP
            </button>
          </div>
          <div className="flex space-x-2 mt-4">
            <a href="#" className="bg-gray-800 text-white p-2 rounded-lg hover:bg-yellow-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.014 4.85.07 3.252.148 4.77 1.674 4.918 4.918.057 1.266.07 1.646.07 4.85s-.014 3.584-.07 4.85c-.148 3.252-1.674 4.77-4.918 4.918-1.266.057-1.646.07-4.85.07s-3.584-.014-4.85-.07c-3.252-.148-4.77-1.674-4.918-4.918-.057-1.266-.07-1.646-.07-4.85s.014-3.584.07-4.85c.148-3.252 1.674-4.77 4.918-4.918 1.266-.057 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.623-6.979 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.623 6.78 6.98 6.979 1.28.059 1.688.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.78-2.623 6.978-6.979.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.199-4.358-2.623-6.78-6.979-6.979-1.28-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm7.5-9.311c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" /></svg>
            </a>
            <a href="#" className="bg-gray-800 text-white p-2 rounded-lg hover:bg-yellow-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-2-7c-.552 0-1-.448-1-1s.448-1 1-1h.083c.552 0 1 .448 1 1s-.448 1-1 1h-.083zm7 7h-2v-6h2v6zm1-7.144c-.394-.282-1.24-.658-2.193-.658-2.31 0-3.155 1.727-3.23 2.502h-1v-4.664h2v1.543c.243-.464 1.139-1.666 2.871-1.666 2.016 0 3.195 1.251 3.195 3.993v5.292h-2v-5.011c0-1.875-.823-2.617-1.875-2.617-.993 0-1.875.875-1.875 1.875v5.753h-2v-6.753z" /></svg>
            </a>
            <a href="#" className="bg-gray-800 text-white p-2 rounded-lg hover:bg-yellow-500 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.064 7.234c.26.24.26.624 0 .864l-1.394 1.394-1.394-1.394c-.26-.24-.68-.24-.94-.001-.26.24-.26.625 0 .864l1.394 1.394-1.394 1.394c-.26.24-.26.624 0 .864l1.394 1.394-1.394 1.394c-.26.24-.26.624 0 .864l1.394 1.394 1.394-1.394 1.394 1.394c.26.24.68.24.94 0 .26-.24.26-.624 0-.864l-1.394-1.394 1.394-1.394c.26-.24.26-.624 0-.864l-1.394-1.394 1.394-1.394c.26-.24-.26-.625 0-.864l-1.394-1.394-1.394 1.394-1.394-1.394c-.26-.24-.68-.24-.94 0-.26.24-.26.625 0 .864l1.394 1.394-1.394 1.394c-.26.24-.26.624 0 .864l1.394 1.394-1.394 1.394c-.26.24-.26.624 0 .864l1.394 1.394 1.394-1.394 1.394 1.394c.26.24.68.24.94 0 .26-.24.26-.624 0-.864l-1.394-1.394 1.394-1.394c.26-.24.26-.624 0-.864l-1.394-1.394 1.394-1.394c.26-.24.26-.624 0-.864z" /></svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6 pt-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
        <p>© Kapee 2025 by PressLayouts All Rights Reserved.</p>
        <div className="flex space-x-2">
          <img src="https://placehold.co/40x25/e5e7eb/6b7280?text=Visa" alt="Visa" className="h-6" />
          <img src="https://placehold.co/40x25/e5e7eb/6b7280?text=Paypal" alt="Paypal" className="h-6" />
          <img src="https://placehold.co/40x25/e5e7eb/6b7280?text=Discover" alt="Discover" className="h-6" />
          <img src="https://placehold.co/40x25/e5e7eb/6b7280?text=Mastercard" alt="Mastercard" className="h-6" />
          <img src="https://placehold.co/40x25/e5e7eb/6b7280?text=Amex" alt="American Express" className="h-6" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
