import React from 'react';

const ServicesPage = () => {
  return (
    <div className="services">
      <h2 className="text-5xl font-bold mb-12 mt-10 text-black text-center">
        <span>What We </span>
        <span className="relative">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00848c]"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
          </svg>
          <span className="relative text-[#00848c]">Offer</span>
        </span>
      </h2>

      {/* First Section: Image Left, Text Right */}
      <section className="bg-white py-16">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2">
          <img
            className="w-full"
            src="/images/s1.jpg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Mobile App Development for Native and Cross-Platforms
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              At Hashsync, we specialize in mobile app development, creating innovative applications for both native and cross-platform environments. Whether you're targeting iOS, Android, or both, we use cutting-edge technologies like Flutter and React Native to ensure a seamless user experience across all devices. Our developers focus on delivering high-performance apps that are scalable, secure, and built to meet your specific business requirements. From ideation to deployment, we manage the entire development lifecycle, ensuring that your app is feature-rich, user-friendly, and designed to meet the demands of today's fast-paced digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Second Section: Text Left, Image Right */}
      <section className="bg-white py-16">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Web Development: From Design to Code
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Our expertise in web development spans across multiple frameworks and technologies. We provide custom website development services that are tailored to your specific needs, whether you're looking to build a complex eCommerce platform, a sleek corporate website, or a content-rich portal. We transform your design ideas into fully functional websites, ensuring that the user experience is smooth, responsive, and engaging. Using the latest development practices, including HTML5, CSS3, JavaScript, and various backend technologies, we create websites that are not only visually stunning but also robust in performance, highly secure, and optimized for search engines.
            </p>
          </div>
          <img
            className="w-full"
            src="/images/s2.jpg"
            alt="dashboard image"
          />
        </div>
      </section>

      {/* Third Section: Image Left, Text Right */}
      <section className="bg-white py-16">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2">
          <img
            className="w-full"
            src="/images/s3.jpg"
            alt="dashboard image"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              E-Commerce Solutions for Modern Businesses
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Hashsync offers comprehensive e-commerce solutions that cater to the unique needs of your business. We design and develop e-commerce platforms that not only look great but also provide a seamless shopping experience for your customers. Our services include shopping cart integration, payment gateway setup, inventory management, and much more. We utilize the latest e-commerce technologies to ensure that your platform is secure, user-friendly, and optimized for conversions. Our goal is to help you establish a strong online presence, increase your sales, and grow your brand in the digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Fourth Section: Text Left, Image Right */}
      <section className="bg-white py-16">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2">
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
              Custom Software Development Tailored to Your Needs
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg">
              Our custom software development services are designed to address the specific challenges faced by your business. We work closely with you to understand your requirements and create tailored solutions that enhance your operational efficiency. From developing enterprise applications to automating business processes, we ensure that our solutions are scalable and can grow with your organization. With a focus on quality and customer satisfaction, our team of experienced developers utilizes the latest technologies and methodologies to deliver software that meets your exact specifications and provides tangible value to your business.
            </p>
          </div>
          <img
            className="w-full"
            src="/images/s4.jpg"
            alt="dashboard image"
          />
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
