import React from 'react';
import { FaMale, FaFemale } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'Aaziq Ali Shah',
      role: 'CEO',
      icon: <FaMale className="w-16 h-16 text-[#00848c] rounded-full bg-gray-200 p-2" />, // Male icon for CEO
      description: 'Aaziq is the driving force behind our company, steering the vision and strategy to ensure we meet the evolving needs of our clients.',
    },
    {
      name: 'Zulkaif Umer Shah',
      role: 'COO',
      icon: <FaMale className="w-16 h-16 text-[#00848c] rounded-full bg-gray-200 p-2" />, // Male icon for COO
      description: 'Zulkaif oversees our daily operations, ensuring that we maintain high standards of service and efficiency in all our processes.',
    },
    {
      name: 'Ammara Hashmi',
      role: 'Manager',
      icon: <FaFemale className="w-16 h-16 text-[#00848c] rounded-full bg-gray-200 p-2" />, // Female icon for Manager
      description: 'Ammara manages our project portfolios, coordinating efforts to deliver timely and effective solutions to our clients.',
    },
    {
      name: 'Shariq Ali Shah',
      role: 'HR Manager',
      icon: <FaMale className="w-16 h-16 text-[#00848c] rounded-full bg-gray-200 p-2" />, // Male icon for HR Manager
      description: 'Shariq is responsible for building a strong team and nurturing a positive workplace culture that fosters collaboration and innovation.',
    },
    {
      name: 'Muhammad Musa',
      role: 'Web Developer',
      icon: <FaMale className="w-16 h-16 text-[#00848c] rounded-full bg-gray-200 p-2" />, // Male icon for Web Developer
      description: 'Muhammad specializes in web development, bringing our clients visions to life through elegant and functional code.',
    }
  ];

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 pt-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-[#00848c] font-bold">OUR SOFTWARE HOUSE</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Empowering Businesses with Innovative Solutions</h1>
            <p className="leading-relaxed mb-4">
              We are a team of passionate developers committed to providing businesses with top-notch software solutions. Our mission is to transform ideas into reality, enabling companies to thrive in a competitive landscape.
            </p>
            <p className="leading-relaxed mb-4">
              Our dedicated approach ensures that we understand your needs and deliver tailored solutions that drive success.
            </p>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Founded</span>
              <span className="ml-auto text-gray-900">2024</span>
            </div>
            <div className="flex border-t border-gray-200 py-2">
              <span className="text-gray-500">Team Size</span>
              <span className="ml-auto text-gray-900">20+ Developers</span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Projects Completed</span>
              <span className="ml-auto text-gray-900">100+</span>
            </div>
            <div className="text-center">
              <span className="title-font font-medium text-center text-2xl text-gray-900">Let us Work Together!</span>
            </div>
          </div>
          <img 
            alt="Coding Banner" 
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" 
            src="/images/ab.jpg" // Placeholder for the coding-related banner image
          />
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="container px-5 pb-24 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-12 mt-10 text-black text-center">
            <span>Meet Our </span>
            <span className="relative">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00848c]"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
              </svg>
              <span className="relative text-[#00848c]">Team</span>
            </span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our team is composed of dedicated professionals who are passionate about technology and innovation. Meet the brilliant minds behind our success.
          </p>
        </div>

        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/3 sm:w-1/2 w-full">
              <div className="h-full bg-gray-100 p-8 rounded flex flex-col items-center">
                {member.icon}
                <h2 className="text-gray-900 text-lg font-medium title-font mb-2">{member.name}</h2>
                <p className="leading-relaxed text-base">{member.role}</p>
                <p className="mt-2 text-gray-600">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
