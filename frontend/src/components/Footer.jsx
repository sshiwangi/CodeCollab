const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div class="flex flex-wrap text-left lg:text-left">
          <div class="w-full lg:w-6/12 px-4">
            <h4 class="text-3xl fonat-semibold text-white">
              Let's keep in touch!
            </h4>
            <h5 class="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms
            </h5>
            <div class="mt-6 lg:mb-0 mb-6">
              <button
                class="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-twitter"></i>
              </button>
              <button
                class="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-facebook-square"></i>
              </button>
              <button
                class="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-dribbble"></i>
              </button>
              <button
                class="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i class="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="flex flex-wrap items-top mb-6">
              <div class="w-full lg:w-4/12 px-4 ml-auto">
                <span class="block uppercase text-white text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-white hover:text-voilet font-semibold block pb-2 text-sm"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-voilet font-semibold block pb-2 text-sm"
                      href=""
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-voilet font-semibold block pb-2 text-sm"
                      href=""
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-voilet font-semibold block pb-2 text-sm"
                      href="https://github.com/sshiwangi/Coding-Collaboration-Platform"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              {/* <div class="w-full lg:w-4/12 px-4">
                <span class="block uppercase text-white text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul class="list-unstyled">
                  <li>
                    <a
                      class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms?ref=njs-profile"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy?ref=njs-profile"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us?ref=njs-profile"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <hr class="my-6 border-blueGray-300" />
        <div class="flex flex-wrap items-center md:justify-between justify-center">
          <div class="w-full md:w-4/12 px-4 mx-auto text-center">
            <div class="text-sm text-white font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span>
              <a
                href="https://www.creative-tim.com/product/notus-js"
                class="text-white hover:text-gray-800"
                target="_blank"
              >
                {" "}
                Platform by
              </a>
              <a
                href="https://www.creative-tim.com?ref=njs-profile"
                class="text-white hover:text-blueGray-800"
              >
                Coding Colaboration Team
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
