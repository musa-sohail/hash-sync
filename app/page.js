import Link from "next/link";
import { GiBookshelf, GiEarthAmerica, GiAbacus, GiMoneyStack, GiHealthIncrease, GiCalendar } from "react-icons/gi"; 

const testimonials = [
  {
    name: 'Sophia Davis',
    position: 'Business Owner at Tech Innovations',
    message: 'Hashsync’s team developed a custom website for us, and the results have been phenomenal! Their attention to detail and commitment to delivering high-quality work is unmatched.',
    icon: GiBookshelf,
  },
  {
    name: 'Oliver Brown',
    position: 'Project Manager at E-commerce Solutions',
    message: 'Thanks to Hashsync, our Shopify store setup was seamless. They truly know how to bring a vision to life with professional and functional designs.',
    icon: GiMoneyStack,
  },
  {
    name: 'Isabella Wilson',
    position: 'CTO at StartTech',
    message: 'Our mobile app was built using Flutter, and Hashsync exceeded our expectations. The app is intuitive, fast, and perfectly matches our requirements.',
    icon: GiAbacus,
  },
  {
    name: 'Liam Johnson',
    position: 'Founder of Fintech Startups',
    message: 'Hashsync’s cross-platform app development services helped us save time and resources while maintaining excellent performance across devices.',
    icon: GiEarthAmerica,
  },
  {
    name: 'Mia White',
    position: 'CEO of Creative Digital Agency',
    message: 'We loved working with Hashsync on our web development project. They delivered an exceptional custom website, and their team was professional throughout.',
    icon: GiHealthIncrease,
  },
  {
    name: 'James Green',
    position: 'COO at Innovative Solutions',
    message: 'The team at Hashsync handled our complex web project with expertise and care. Their work has greatly improved our user experience and customer engagement.',
    icon: GiCalendar,
  },
];

export default function Home() {
  return (
    <div className="home">
      <div className="hero flex flex-1 w-full flex-col items-center justify-center text-center px-4 py-20 bg-gradient-to-b from-[#f9f9f9] via-[#e5f7f7] to-[#ffffff]">
        <p className="border border-gray-300 rounded-lg py-2 px-4 text-gray-700 text-sm mb-5 transition duration-300 ease-in-out hover:text-gray-500">
          Empower your business with cutting-edge technology 
        </p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-800 sm:text-7xl">
          Elevate Your Digital Presence with <span className="relative whitespace-nowrap text-gray-800">
             Hashsync
          </span>
          <span className="relative whitespace-nowrap text-[#00848c]">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00848c]"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
            </svg>
            <span className="relative">Solutions</span>
          </span>
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg text-gray-700 leading-7">
          Hashsync specializes in software solutions like app development, custom websites, and Shopify stores. Whether you need native, cross-platform apps, or bespoke web solutions, we deliver quality at every step.
        </h2>
        <Link
          className="bg-[#00848c] rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-[#00696d] transition"
          href="/services"
        >
          Get started
        </Link>
      </div>

      <div className="founder relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:my-12 xl:max-w-6xl">
  <div className="w-full h-80 lg:w-1/2 lg:h-auto"> {/* Adjusted height for small devices */}
    <img
      className="h-full w-full object-contain md:h-96 lg:h-auto" // Changed to object-contain for better visibility
      src="images/ceo.jpeg"
      alt="Winding mountain road"
    />
  </div>

  <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 lg:z-0 xl:mt-24 xl:ml-12">
    <div className="flex flex-col p-12 md:px-16">
      <h2
        className="text-2xl font-medium uppercase"
        style={{ color: "#00848c" }}
      >
        What Our CEO says
      </h2>
      <p className="mt-4">
        "At Hashsync, we believe in the power of technology to transform businesses. Our goal is to provide innovative software solutions that help companies succeed in today’s fast-paced digital world. From mobile apps to complex websites, our dedicated team is here to bring your vision to life. Let us help you navigate the ever-changing tech landscape with confidence."
        <br />
        <br />
        - Aaziq Ali Shah, CEO of Hashsync
      </p>
    </div>
  </div>
</div>





      <div className="testimonials flex flex-col items-center mt justify-center text-center pb-12 px-4 bg-slate-50">
<h2 className="text-5xl font-bold mb-12 mt-10 text-black"> {/* Changed text color to white */}
  <span>What Our Clients </span>
  <span className="relative">
    <svg
      aria-hidden="true"
      viewBox="0 0 418 42"
      className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#00848c]"
      preserveAspectRatio="none"
    >
      <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"></path>
    </svg>
    <span className="relative text-[#00848c]">Say</span>
  </span>
</h2>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
{testimonials.map((testimonial, index) => {
  const Icon = testimonial.icon; // Dynamically set the icon
  return (
    <div
      key={index}
      className="max-w-md mx-auto bg-white shadow-sm rounded-xl p-6 flex items-start space-x-4 transition-colors duration-300 hover:bg-[#00848c] group"
    >
      <Icon className="text-[#00848c] w-12 h-12 transition-colors duration-300 group-hover:text-white" />
      <div>
        <p className="text-lg font-semibold transition-colors duration-300 group-hover:text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-white">{testimonial.position}</p>
        <p className="mt-2 text-gray-700 transition-colors duration-300 group-hover:text-white">{testimonial.message}</p>
      </div>
    </div>
  );
})}
</div>
</div>
    </div>
  );
}







