import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import UserOne from "../Images/workingProfessional.jpg";

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [dropdownOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (dropdownOpen && keyCode === 27) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [dropdownOpen]);

  return (
    <div className="relative">
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
        to="#"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            Thomas Anree
          </span>
          <span className="block text-xs">UX Designer</span>
        </span>

        <span className="h-5 w-5 rounded-full">
          <img src={UserOne} alt="User" />
        </span>

        <svg
          className="hidden fill-current sm:block"
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
            fill=""
          />
        </svg>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark">
          <li>
            <Link
              to="/dashboard/profile"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 9.62499C8.42188 9.62499 6.35938 7.59687 6.35938 5.12187C6.35938 2.64687 8.42188 0.618744 11 0.618744C13.5781 0.618744 15.6406 2.64687 15.6406 5.12187C15.6406 7.59687 13.5781 9.62499 11 9.62499ZM11 2.16562C9.28125 2.16562 7.90625 3.50624 7.90625 5.12187C7.90625 6.73749 9.28125 8.07812 11 8.07812C12.7188 8.07812 14.0938 6.73749 14.0938 5.12187C14.0938 3.50624 12.7188 2.16562 11 2.16562Z"
                  fill=""
                />
                <path
                  d="M17.7719 21.4156H4.2281C3.5406 21.4156 2.9906 20.8656 2.9906 20.1781V17.0844C2.9906 13.7156 5.7406 10.9656 9.10935 10.9656H12.925C16.2937 10.9656 19.0437 13.7156 19.0437 17.0844V20.1781C19.0094 20.8312 18.4594 21.4156 17.7719 21.4156ZM4.53748 19.8687H17.4969V17.0844C17.4969 14.575 15.4344 12.5125 12.925 12.5125H9.07498C6.5656 12.5125 4.5031 14.575 4.5031 17.0844V19.8687H4.53748Z"
                  fill=""
                />
              </svg>
              My Profile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6687 1.44374C17.1187 0.893744 16.4312 0.618744 15.675 0.618744H7.42498C6.25623 0.618744 5.25935 1.58124 5.25935 2.78437V4.12499H4.29685C3.88435 4.12499 3.50623 4.46874 3.50623 4.91562C3.50623 5.36249 3.84998 5.70624 4.29685 5.70624H5.25935V10.2781H4.29685C3.88435 10.2781 3.50623 10.6219 3.50623 11.0687C3.50623 11.4812 3.84998 11.8594 4.29685 11.8594H5.25935V16.4312H4.29685C3.88435 16.4312 3.50623 16.775 3.50623 17.2219C3.50623 17.6687 3.84998 18.0125 4.29685 18.0125H5.25935V19.25C5.25935 20.4187 6.22185 21.4156 7.42498 21.4156H15.675C17.2218 21.4156 18.4937 20.1437 18.5281 18.5969V3.47187C18.4937 2.68124 18.2187 1.95937 17.6687 1.44374ZM16.9469 18.5625C16.9469 19.2844 16.3625 19.8344 15.6406 19.8344H7.3906C7.04685 19.8344 6.77185 19.5594 6.77185 19.2156V17.875H8.6281C9.0406 17.875 9.41873 17.5312 9.41873 17.0844C9.41873 16.6375 9.07498 16.2937 8.6281 16.2937H6.77185V11.7906H8.6281C9.0406 11.7906 9.41873 11.4469 9.41873 11C9.41873 10.5875 9.07498 10.2094 8.6281 10.2094H6.77185V5.63749H8.6281C9.0406 5.63749 9.41873 5.29374 9.41873 4.84687C9.41873 4.39999 9.07498 4.05624 8.6281 4.05624H6.77185V2.74999C6.77185 2.40624 7.04685 2.13124 7.3906 2.13124H15.6406C15.9844 2.13124 16.2937 2.26874 16.5687 2.50937C16.8094 2.74999 16.9469 3.09374 16.9469 3.43749V18.5625Z"
                  fill=""
                />
              </svg>
              My Contacts
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.25 14.0024H13.9792C14.6055 14.0024 15.1146 13.4932 15.1146 12.8669V10.4499C15.1146 10.1234 14.8482 9.85706 14.5217 9.85706H12.25V8.57054C12.25 7.94422 11.7409 7.43511 11.1146 7.43511H9.11457C8.88849 7.43511 8.67822 7.29429 8.53803 7.06819L6.09686 3.32491C5.92626 3.05028 6.02111 2.70807 6.29573 2.53747C6.57036 2.36688 6.91257 2.46173 7.08317 2.73636L9.52434 6.47964C9.65439 6.67981 9.93017 6.81005 10.2312 6.81005H12.25V6.09586C12.25 5.46954 12.7591 4.96043 13.3854 4.96043H14.5217C14.8482 4.96043 15.1146 4.69406 15.1146 4.36758V2.13918C15.1146 1.51286 14.6055 1.00375 13.9792 1.00375H12.6752C12.4686 0.99996 12.2722 1.07578 12.1302 1.21777L9.68907 4.96105C9.55902 5.16067 9.28324 5.29068 8.98228 5.29068H6.96511C6.33879 5.29068 5.82968 5.79979 5.82968 6.42611V6.81005H3.11459C2.48827 6.81005 1.97916 7.31916 1.97916 7.94548V9.85706C1.97916 10.4834 2.48827 10.9925 3.11459 10.9925H5.82968V12.8669C5.82968 13.4932 6.33879 14.0024 6.96511 14.0024H8.98228C9.28324 14.0024 9.55902 14.1324 9.68907 14.3326L12.1302 18.0759C12.2722 18.2179 12.4686 18.2937 12.6752 18.2899H13.9792C14.6055 18.2899 15.1146 17.7808 15.1146 17.1545V14.7375C15.1146 14.4146 14.8482 14.1483 14.5217 14.1483H12.25V14.0024Z"
                  fill=""
                />
              </svg>
              Settings
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-5 px-6 py-4">
          <li onClick={logoutHandler}>
            <Link
              to="/"
              className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
            >
              <svg
                className="fill-current"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6813 0H6.31877C3.2365 0 0.681274 2.55523 0.681274 5.6375V16.8625C0.681274 19.9448 3.2365 22.5 6.31877 22.5H17.6813C20.7635 22.5 23.3188 19.9448 23.3188 16.8625V5.6375C23.3188 2.55523 20.7635 0 17.6813 0ZM18.3503 16.8625C18.3503 18.8374 16.8391 20.3486 14.8642 20.3486H9.13585C7.16099 20.3486 5.64977 18.8374 5.64977 16.8625V14.625H7.42267V16.8625C7.42267 17.5997 8.01426 18.1913 8.75138 18.1913H15.2486C15.9857 18.1913 16.5773 17.5997 16.5773 16.8625V14.625H18.3503V16.8625ZM18.3503 13.125H16.5773V11.1949C16.5773 9.21999 15.0661 7.70874 13.0912 7.70874H8.90886C6.93401 7.70874 5.42277 9.21999 5.42277 11.1949V13.125H3.64987V5.6375C3.64987 3.66265 5.16111 2.15142 7.13596 2.15142H14.8642C16.8391 2.15142 18.3503 3.66265 18.3503 5.6375V13.125Z"
                  fill=""
                />
              </svg>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
