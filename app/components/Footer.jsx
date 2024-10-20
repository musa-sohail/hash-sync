import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row md:items-start justify-center">
        <div className="w-64 flex-shrink-0 text-center md:text-left mb-10 md:mb-0">
          <a className="flex title-font font-medium items-center justify-center md:justify-start text-black">
            <span className="text-left text-xl">Hash Sync</span>
          </a>
          <p className="mt-2 text-sm text-gray-600">
            Empowering businesses with innovative software solutions.
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 justify-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">Our Pages</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/">Home</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/services">Services</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/about">About</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/contact">Contact</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">Services</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/services">Mobile App Development</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/services">Website Development</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/services">Ecommerce and Shopify</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">About Us</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/about">Our Company</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/about">Our Team</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-800 tracking-widest text-sm mb-3">Contact Us</h2>
            <nav className="list-none mb-10">
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/contact">Book An Appointment</a>
              </li>
              <li>
                <a className="text-gray-700 hover:text-gray-900" href="/contact">Contact Us</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-slate-50">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © 2024 HashSync
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="https://facebook.com" className="text-gray-700 hover:text-gray-900">
              <FaFacebookF className="w-5 h-5 hover:text-gray-900" />
            </a>
            <a href="https://twitter.com" className="ml-3 text-gray-700 hover:text-gray-900">
              <FaTwitter className="w-5 h-5 hover:text-gray-900" />
            </a>
            <a href="https://instagram.com" className="ml-3 text-gray-700 hover:text-gray-900">
              <FaInstagram className="w-5 h-5 hover:text-gray-900" />
            </a>
            <a href="https://linkedin.com" className="ml-3 text-gray-700 hover:text-gray-900">
              <FaLinkedinIn className="w-5 h-5 hover:text-gray-900" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
