/* eslint-disable max-len */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "../../store";
import { toggleTheme, toggleDirection } from "../../store/themeConfigSlice";
import { useRouter } from "next/router";

const Header = (props: any) => {
  const router = useRouter();

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    if (window.innerWidth < 1024) {
      setShowMenu(!showMenu);
    } else {
      setShowMenu(false);
    }
  };

  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-black/10 duration-300 ${props.className}`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-5 lg:py-0">
          <Link href="/">
            <img
              src="/assets/images/logo-lafab.png"
              alt="plurk"
              className="h-12"
            />
          </Link>
          <div className="flex items-center">
            <div
              onClick={() => toggleMenu()}
              className={`overlay fixed inset-0 z-[51] bg-black/60 lg:hidden ${
                showMenu ? "" : "hidden"
              }`}
            ></div>
            <div
              className={`menus ${
                showMenu ? "overflow-y-auto ltr:!right-0 rtl:!left-0" : ""
              }`}
            >
              <div className="border-b border-gray/10 ltr:text-right rtl:text-left lg:hidden">
                <button
                  onClick={() => toggleMenu()}
                  type="button"
                  className="p-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 text-black dark:text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul onClick={() => toggleMenu()}>
                <li>
                  <Link
                    href="/"
                    className={router.pathname === "/" ? "active" : ""}
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/reservation"
                    className={
                      router.pathname === "/portfolio" ||
                      router.pathname === "/portfolio-detail"
                        ? "active"
                        : ""
                    }
                  >
                    Reservez la salle
                  </Link>
                </li>
                <li className="relative hidden items-center before:absolute before:top-1/2 before:h-[30px] before:w-[2px] before:-translate-y-1/2 before:bg-gray/30 ltr:pl-9 ltr:before:-left-[2px] rtl:pr-9 rtl:before:-right-[2px] lg:inline-flex">
                  <button
                    type="button"
                    onClick={() => toggleSearch()}
                    className="text-white hover:text-primary"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.7363 17.4637L14.6512 13.3785C15.6799 12.0753 16.3 10.4347 16.3 8.65C16.3 4.4317 12.8683 1 8.65 1C4.4317 1 1 4.4317 1 8.65C1 12.8683 4.4317 16.3 8.65 16.3C10.4356 16.3 12.0754 15.6808 13.3786 14.6512L17.4637 18.7363C17.6392 18.9118 17.8696 19 18.1 19C18.3304 19 18.5608 18.9118 18.7363 18.7363C19.0882 18.3844 19.0882 17.8156 18.7363 17.4637ZM2.8 8.65C2.8 5.4244 5.4244 2.8 8.65 2.8C11.8756 2.8 14.5 5.4244 14.5 8.65C14.5 11.8756 11.8756 14.5 8.65 14.5C5.4244 14.5 2.8 11.8756 2.8 8.65Z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </li>
                <li
                  className={`${showSearch ? "!w-full" : ""}
                  search-bar absolute hidden w-0 overflow-hidden bg-black transition-all duration-500 ltr:right-0 rtl:left-0 lg:block`}
                >
                  <form action="" className="relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full border-b border-white bg-transparent py-1 outline-none ltr:pl-2 ltr:pr-8 rtl:pr-2 rtl:pl-8"
                    />
                    <button
                      type="button"
                      className="absolute top-1/2 -translate-y-1/2 hover:text-primary ltr:right-0 rtl:left-0"
                      onClick={() => toggleSearch()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </form>
                </li>
              </ul>
            </div>
            
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary lg:hidden"
              onClick={() => toggleMenu()}
            >
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white"
              >
                <path
                  d="M2 15H11C11.552 15 12 15.447 12 16C12 16.553 11.552 17 11 17H2C1.448 17 1 16.553 1 16C1 15.447 1.448 15 2 15Z"
                  fill="currentColor"
                />
                <path
                  d="M2 8H20C20.552 8 21 8.447 21 9C21 9.553 20.552 10 20 10H2C1.448 10 1 9.553 1 9C1 8.447 1.448 8 2 8Z"
                  fill="currentColor"
                />
                <path
                  d="M21 2C21 1.447 20.552 1 20 1H7C6.448 1 6 1.447 6 2C6 2.553 6.448 3 7 3H20C20.552 3 21 2.553 21 2Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
