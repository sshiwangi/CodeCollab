import Breadcrumb from "../components/Breadcrumb";
import userThree from "../Images/user-03.png";
import DefaultLayout from "../components/DefaultLayout";

const Settings = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="fullName"
                      >
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute left-4.5 top-4">
                          <svg
                            className="fill-current"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g opacity="0.8">
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                fill=""
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                fill=""
                              />
                            </g>
                          </svg>
                        </span>
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="fullName"
                          id="fullName"
                          placeholder="Devid Jhon"
                          defaultValue="Devid Jhon"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="phoneNumber"
                      >
                        Phone Number
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="+990 3343 7865"
                        defaultValue="+990 3343 7865"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="emailAddress"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M3.33301 4.16667C2.87658 4.16667 2.49967 4.54357 2.49967 5V15C2.49967 15.4564 2.87658 15.8333 3.33301 15.8333H16.6663C17.1228 15.8333 17.4997 15.4564 17.4997 15V5C17.4997 4.54357 17.1228 4.16667 16.6663 4.16667H3.33301ZM0.833008 5C0.833008 3.6231 1.9561 2.5 3.33301 2.5H16.6663C18.0432 2.5 19.1663 3.6231 19.1663 5V15C19.1663 16.3769 18.0432 17.5 16.6663 17.5H3.33301C1.9561 17.5 0.833008 16.3769 0.833008 15V5Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.983719 4.52215C1.24765 4.1451 1.76726 4.05341 2.1443 4.31734L9.99975 9.81615L17.8552 4.31734C18.2322 4.05341 18.7518 4.1451 19.0158 4.52215C19.2797 4.89919 19.188 5.4188 18.811 5.68272L10.4776 11.5161C10.1907 11.7169 9.80879 11.7169 9.52186 11.5161L1.18853 5.68272C0.811486 5.4188 0.719791 4.89919 0.983719 4.52215Z"
                              fill=""
                            />
                          </g>
                        </svg>
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="email"
                        name="emailAddress"
                        id="emailAddress"
                        placeholder="devidjond45@gmail.com"
                        defaultValue="devidjond45@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      Username
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Username"
                      id="Username"
                      placeholder="devidjhon24"
                      defaultValue="devidjhon24"
                    />
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Username"
                    >
                      BIO
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <svg
                          className="fill-current"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g opacity="0.8" clipPath="url(#clip0_88_10224)">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                              fill=""
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_88_10224">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="bio"
                        id="bio"
                        rows={6}
                        placeholder="Write your bio here"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="submit"
                    >
                      Cancel
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Your Photo
                </h3>
              </div>
              <div className="p-7">
                <form action="#">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-14 w-14 rounded-full">
                      <img src={userThree} alt="User" />
                    </div>
                    <div>
                      <span className="mb-1.5 text-black dark:text-white">
                        Edit your photo
                      </span>
                      <span className="flex gap-2.5">
                        <button className="text-sm hover:text-primary">
                          Delete
                        </button>
                        <button className="text-sm hover:text-primary">
                          Update
                        </button>
                      </span>
                    </div>
                  </div>

                  <div
                    id="FileUpload"
                    className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                  >
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                    />
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.5437 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.89706 1.38032 9.79959 1.47464 9.70527C1.56895 9.61096 1.66642 9.56367 1.76936 9.56367C1.87231 9.56367 1.96978 9.61096 2.0641 9.70527C2.15841 9.79959 2.20572 9.89706 2.20572 10V12.6667C2.20572 12.779 2.25291 12.8885 2.33798 12.9736C2.42305 13.0587 2.53251 13.1059 2.64486 13.1059H11.979V10.6667H3.64601C3.46811 10.6667 3.29816 10.5964 3.17316 10.4714C3.04817 10.3464 2.97792 10.1764 2.97792 9.99921C2.97792 9.82202 3.04817 9.65208 3.17316 9.52708C3.29816 9.40208 3.46811 9.33183 3.64601 9.33183H11.979V7.99921H2.64486C2.47991 7.99921 2.32211 8.06292 2.21147 8.17356C2.10083 8.28421 2.03711 8.44201 2.03711 8.60696C2.03711 8.7719 2.10083 8.9297 2.21147 9.04034C2.32211 9.15099 2.47991 9.21471 2.64486 9.21471H11.979V9.33337H1.99967Z"
                            fill="#687E8C"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.99967 3.3335C5.14912 3.3335 5.2886 3.40802 5.38806 3.5075C5.48754 3.60698 5.56206 3.74646 5.56206 3.89592V5.37508H5.83301C6.15378 5.37508 6.45888 5.49303 6.68762 5.72177C6.91635 5.9505 7.0343 6.2556 7.0343 6.57637V13.5417C7.0343 13.8624 6.91635 14.1675 6.68762 14.3962C6.45888 14.6249 6.15378 14.7429 5.83301 14.7429H2.16634C1.84557 14.7429 1.54047 14.6249 1.31173 14.3962C1.08299 14.1675 0.965042 13.8624 0.965042 13.5417V6.57637C0.965042 6.2556 1.08299 5.9505 1.31173 5.72177C1.54047 5.49303 1.84557 5.37508 2.16634 5.37508H2.43719V3.89592C2.43719 3.74646 2.51171 3.60698 2.61119 3.5075C2.71066 3.40802 2.85014 3.3335 2.99959 3.3335H4.99967ZM5.31299 5.37508V3.54175H2.68799V5.37508H5.31299Z"
                            fill="#687E8C"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.833 0.000335693H12.1663C11.9757 0.000335693 11.7939 0.0794859 11.6621 0.211283C11.5303 0.343081 11.4587 0.517571 11.4587 0.707335V3.66667H11.2507C11.0244 3.66667 10.8173 3.75818 10.6635 3.91201C10.5097 4.06584 10.4182 4.27291 10.4182 4.49917V13.958H5.62467V11.0835C5.62467 10.8548 5.53266 10.6497 5.37883 10.496C5.225 10.3422 5.0199 10.2502 4.79117 10.2502H1.29117C1.06243 10.2502 0.857326 10.3422 0.703496 10.496C0.549666 10.6497 0.457664 10.8548 0.457664 11.0835V15.6252C0.457664 15.854 0.549666 16.0591 0.703496 16.2129C0.857326 16.3667 1.06243 16.4587 1.29117 16.4587H15.833C16.0618 16.4587 16.2669 16.3667 16.4207 16.2129C16.5745 16.0591 16.6665 15.854 16.6665 15.6252V0.707335C16.6665 0.517571 16.5949 0.343081 16.4631 0.211283C16.3313 0.0794859 16.1495 0.000335693 15.9589 0.000335693H15.833ZM11.2507 4.66667H11.4587V4.49917C11.4587 4.30751 11.5299 4.12906 11.6564 4.00258C11.7829 3.8761 11.9614 3.805 12.1507 3.805H15.0007V0.833336H12.5007V3.66667C12.5007 3.85733 12.4294 4.03578 12.3029 4.16226C12.1764 4.28874 11.9979 4.35983 11.8082 4.35983H11.2507V4.66667ZM1.29117 15.2917C1.23678 15.2917 1.18332 15.2749 1.13966 15.2435C1.096 15.2121 1.06406 15.1676 1.04872 15.1167C1.03338 15.0658 1.03586 15.0117 1.05542 14.9629C1.07498 14.9142 1.11014 14.8737 1.15653 14.8489C1.20291 14.8241 1.25855 14.8165 1.31299 14.8267H5.62467V15.6252H1.31299C1.36814 15.6353 1.42327 15.6237 1.47433 15.5912C1.52538 15.5587 1.56929 15.5068 1.59925 15.4417C1.62921 15.3766 1.64455 15.3008 1.64455 15.2235C1.64455 15.1462 1.62921 15.0704 1.59925 15.0053C1.56929 14.9402 1.52538 14.8883 1.47433 14.8559C1.42327 14.8235 1.36814 14.8119 1.31299 14.822C1.25855 14.8322 1.20291 14.8247 1.15653 14.7999C1.11014 14.7751 1.07498 14.7346 1.05542 14.6859C1.03586 14.6371 1.03338 14.5831 1.04872 14.5322C1.06406 14.4813 1.096 14.4368 1.13966 14.4054C1.18332 14.374 1.23678 14.3572 1.29117 14.3572C1.34556 14.3572 1.39902 14.374 1.44267 14.4054C1.48633 14.4368 1.51827 14.4813 1.53361 14.5322C1.54895 14.5831 1.54646 14.6371 1.5269 14.6859C1.50734 14.7346 1.47118 14.7751 1.4248 14.7999C1.37841 14.8247 1.32377 14.8322 1.26933 14.822C1.21489 14.8119 1.15976 14.8235 1.1087 14.8559C1.05765 14.8883 1.01374 14.9402 0.983784 15.0053C0.953826 15.0704 0.938484 15.1462 0.938484 15.2235C0.938484 15.3008 0.953826 15.3766 0.983784 15.4417C1.01374 15.5068 1.05765 15.5587 1.1087 15.5912C1.15976 15.6237 1.21489 15.6353 1.26933 15.6252H5.62467V15.2917H1.29117Z"
                            fill="#687E8C"
                          />
                        </svg>
                      </span>
                      <span className="text-xs leading-4">
                        Drag and drop your photo here or click to browse
                      </span>
                    </div>
                  </div>

                  <button
                    className="block text-center w-full rounded bg-primary py-3 font-medium text-white dark:bg-opacity-90"
                    type="submit"
                  >
                    Upload
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
