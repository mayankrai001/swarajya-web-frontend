import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-sm">
        <div>
          <h3 className="text-lg font-semibold text-accent mb-3">Contact Us</h3>
          <p className="text-gray-400">
            Ready to start your project or have a question? Reach out to us
            anytime.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-1">Swarajya Consultancy</h4>
          <p className="text-gray-400">
            📞{" "}
            <a href="tel:+91 7219813384" className="hover:underline">
              +91 7219813384
            </a>
            <br />
            📧{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=business.development@swarajyaconsultancy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              business.development@swarajyaconsultancy.in
            </a>
            <br />
            <span className="flex items-center mt-1">
              <img
                src="/linkedin.png"
                alt="LinkedIn logo"
                className="w-4 h-4 drop-shadow-xl rounded-md"
              />
              <a
                href="https://www.linkedin.com/company/swarajya-consultancy"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 hover:underline"
              >
                Follow Us on LinkedIn
              </a>
            </span>
          </p>
        </div>

        {/* <div>
          <h4 className="font-bold mb-1">Vikas Vishwakarma</h4>
          <p className="text-gray-400">
            📞{" "}
            <a href="tel:+918308633377" className="hover:underline">
              +91 8308633377
            </a>
            <br />
            📧{" "}
            <a
              href="mailto:vikascvishwakarma143@gmail.com"
              className="hover:underline"
            >
              vikascvishwakarma143@gmail.com
            </a>
          </p>
        </div> */}
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs">
        📍 Based in Mumbai | Serving PAN India
        <br />© {new Date().getFullYear()} Swarajya Consultancy. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
