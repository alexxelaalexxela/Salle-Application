import Testimonial from "../components/Testimonial";
import { useState,useEffect } from "react";
import CounterComponent from "../components/CounterComponent";
import Link from "next/link";
import { useSelector } from "react-redux";
import { IRootState } from "../store";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Faq from "../components/Faq";
import Head from "next/head";
import OfficeSwiper from "../components/OfficeSwiper";
import ProjectSlider from "../components/ProjectSlider";
import ClientSlider from "../components/ClientSlider";
import Slider from "../components/home/Slider";
import Calendar from "../components/calendar/calendar";
const Index = (props: any) => {
        // const [activeTab, setActiveTab] = useState<string>("cozy-room");
        const [isOpen, setIsOpen] = useState<any>(false);
  const [activeTab, setActiveTab] = useState<string>("all");
  const isRtl =
    useSelector((state: IRootState) => state.themeConfig.direction) === "rtl"
      ? true
      : false;
    const feedbacks = [
      {
        id: 1,
        name: "Allan Branch",
        role: "CEO of Lifted",
        thumbnail: "/assets/images/modern-saas/client-1.png",
        message:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      },
    ];

    // Gallery
    const [photoIndex, setPhotoIndex] = useState<any>(0);
    useEffect(() => {
      window["global"] = window as never;
    }, []);
    const getItems = () => {
      let imgs: any = items || [];
      if (activeTab.toLowerCase() === "all") {
        imgs = imgs.map((d: any) => d.src);
        return imgs;
      }
      imgs =
        imgs.filter(
          (d: any) => d.type.toLowerCase() === activeTab.toLowerCase()
        ) || [];
      if (imgs.length > 0) {
        imgs = imgs.map((d: any) => d.src);
      }
      return imgs;
    };
  return (
    <div>
      <div className="overflow-hidden bg-[url(/assets/images/restaurent/anniversary.jpeg)] bg-contain bg-center bg-repeat-y">
        <Head>
          <title>
            Restaurent | Plurk – Tailwind CSS Multipurpose Landing Templates
          </title>
        </Head>
        <div className="relative bg-[url(/assets/images/restaurent/salle.jpg)] bg-cover bg-center bg-no-repeat px-4 pt-32 pb-64 md:py-64">
          <span className="absolute inset-0 bg-black/80"></span>
          
          <div className="relative mx-auto max-w-[572px] text-center text-white">
            <h2 className="text-4xl font-black uppercase md:text-6xl md:leading-[75px]">
              <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Réservez votre salle
              </span>
              
            </h2>
            <p className="mx-auto py-6 text-xl font-semibold xl:w-3/4">
              Choissisez votre type de salle et réservez la en ligne en fonction des disponibilités
            </p>
            <Link href="#" className="btn text-white">
              réservez maintenant
            </Link>
          </div>
        </div>

        <section className="relative bg-white pt-20 pb-14 dark:bg-gray-dark md:py-24">
          <img
            src="/assets/images/restaurent/travailleur.png"
            alt=""
            className="absolute -top-[220px] z-[1] w-48 ltr:left-[20%] rtl:right-[20%]"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <img
            src="/assets/images/restaurent/vector-line.svg"
            alt=""
            className="absolute inset-x-0 -top-9 block h-9 w-full object-cover object-top dark:hidden"
          />
          <img
            src="/assets/images/restaurent/vector-line.svg"
            alt=""
            className="absolute inset-x-0 -bottom-9 block h-9 w-full rotate-180 object-cover object-top dark:hidden"
          />
          <img
            src="/assets/images/restaurent/vector-line-dark.svg"
            alt=""
            className="absolute inset-x-0 -top-9 hidden h-9 w-full object-cover object-top dark:block"
          />
          <img
            src="/assets/images/restaurent/vector-line-dark.svg"
            alt=""
            className="absolute inset-x-0 -bottom-9 hidden h-9 w-full rotate-180 object-cover object-top dark:block"
          />
          <div className="container">
            <div className="grid gap-10 text-center font-semibold sm:grid-cols-2 lg:grid-cols-3 xl:gap-16">
              <div className="group space-y-5">
                <div className="relative top-0 transition-all duration-500 group-hover:-top-5">
                  <svg
                    width="95"
                    height="91"
                    viewBox="0 0 95 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      opacity="0.2"
                      d="M31.5185 87.0065C7.82954 75.8675 -6.70646 53.8285 4.33954 30.1415C15.3855 6.45452 54.3145 -7.12147 78.0735 3.86653C101.833 14.8545 95.7475 31.9105 84.5615 55.8995C73.3755 79.8885 55.2075 98.1455 31.5185 87.0065Z"
                      fill="#B476E5"
                    />
                  </svg>
                  <img
                    src="/assets/images/restaurent/Book-icon.svg"
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <h2 className="text-2xl font-bold leading-tight text-black line-clamp-1 dark:text-white md:text-[32px]">
                  Choose your type 
                </h2>
                <p className="line-clamp-3">
                  Select between the different type of room availaible
                </p>
              </div>
              <div className="group space-y-5">
                <div className="relative top-0 transition-all duration-500 group-hover:-top-5">
                  <svg
                    width="95"
                    height="91"
                    viewBox="0 0 95 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      opacity="0.2"
                      d="M31.5185 87.0065C7.82954 75.8675 -6.70646 53.8285 4.33954 30.1415C15.3855 6.45452 54.3145 -7.12147 78.0735 3.86653C101.833 14.8545 95.7475 31.9105 84.5615 55.8995C73.3755 79.8885 55.2075 98.1455 31.5185 87.0065Z"
                      fill="#B476E5"
                    />
                  </svg>
                  <img
                    src="/assets/images/restaurent/heart-icon.svg"
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <h2 className="text-2xl font-bold leading-tight text-black line-clamp-1 dark:text-white md:text-[32px]">
                  Select a slot
                </h2>
                <p className="line-clamp-3">
                  Check the availability of the room and select your favorite slot
                </p>
              </div>
              <div className="group space-y-5">
                <div className="relative top-0 transition-all duration-500 group-hover:-top-5">
                  <svg
                    width="95"
                    height="91"
                    viewBox="0 0 95 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto"
                  >
                    <path
                      opacity="0.2"
                      d="M31.5185 87.0065C7.82954 75.8675 -6.70646 53.8285 4.33954 30.1415C15.3855 6.45452 54.3145 -7.12147 78.0735 3.86653C101.833 14.8545 95.7475 31.9105 84.5615 55.8995C73.3755 79.8885 55.2075 98.1455 31.5185 87.0065Z"
                      fill="#B476E5"
                    />
                  </svg>
                  <img
                    src="/assets/images/restaurent/fire-icon.svg"
                    alt=""
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
                <h2 className="text-2xl font-bold leading-tight text-black line-clamp-1 dark:text-white md:text-[32px]">
                  Book it online 
                </h2>
                <p className="line-clamp-3">
                  Book the room online with your informations
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-b from-white/60 to-transparent py-14 dark:from-white/[0.02] lg:py-[100px]">
                <div className="container">
                    <div className="heading text-center">
                        
                        <h4>Different Type of Room </h4>
                    </div>
                    <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
                        <div className="flex flex-col group rounded-3xl border-2 border-primary bg-white p-6 px-4 transition hover:bg-primary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-8">
                                <h3 className="text-[22px] font-black text-black dark:text-white">Working Space</h3>
                            </div>
                            <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Boissons</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Espace de travail adapté</p>
                                </li>
                                
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-primary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                        L'heure
                                    </div>
                                    <Link href="#" className="btn text-xl text-white group-hover:bg-white group-hover:text-primary dark:text-black xl:w-44">
                                        50,00CHF
                                        <small className="text-xs lowercase">/heure</small>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col group rounded-3xl border-2 border-secondary bg-white p-6 px-4 transition hover:bg-secondary hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative mb-8">
                                <h3 className="text-[22px] font-black text-black dark:text-white">Buisness meeting</h3>
                                
                            </div>
                            <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Boissons </p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Amuse-bouches</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Meeting space organisation </p>
                                </li>
                                
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-secondary group-hover:text-white group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                        L'heure
                                    </div>
                                    <Link
                                        href="#"
                                        className="btn bg-secondary text-xl text-white group-hover:bg-white group-hover:text-secondary dark:text-black xl:w-44"
                                    >
                                        70,00CHF
                                        <small className="text-xs lowercase">/heure</small>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex flex-col group rounded-3xl border-2 border-black bg-white p-6 px-4 transition hover:bg-black hover:drop-shadow-[-10px_30px_70px_rgba(40,38,77,0.25)] dark:border-white/10 dark:bg-transparent dark:bg-gradient-to-b dark:from-white/[0.01] dark:to-transparent dark:drop-shadow-none dark:hover:border-gray-dark dark:hover:bg-gray-dark sm:px-6" data-aos="fade-up" data-aos-duration="1000">
                            <div className="mb-8">
                                <h3 className="text-[22px] font-black text-black group-hover:text-white dark:text-white">Fêtes/anniversaires</h3>
                            </div>
                            <ul className="space-y-5 pb-7 text-sm font-bold group-hover:text-white">
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Repas</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Boisson</p>
                                </li>
                                <li className="flex items-center">
                                    <div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="8" r="8" fill="#45B649" />
                                            <path
                                                d="M5.11438 8.11438L7 10L10.7712 6.22876"
                                                stroke="white"
                                                strokeWidth="1.6"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <p className="ltr:pl-3 rtl:pr-3">Organisation de la salle </p>
                                </li>
                                
                            </ul>
                            <div className="mt-auto border-t-2 border-[#BBC0D0]/50 pt-7">
                                <div className="mb-3 flex flex-col items-center justify-center sm:flex-row sm:justify-between">
                                    <div className="relative mb-2 text-lg font-extrabold before:absolute before:top-1/2 before:h-2.5 before:w-2.5 before:-translate-y-1/2 before:rounded-full before:bg-black group-hover:text-gray group-hover:before:bg-white ltr:pl-5 ltr:before:left-0 rtl:pr-5 rtl:before:right-0 sm:mb-0">
                                        La soirée 
                                    </div>
                                    <Link href="#" className="btn bg-black text-xl text-white group-hover:bg-white group-hover:text-black xl:w-44">
                                        350CHF
                                        <small className="text-xs lowercase">/soirée</small>
                                    </Link>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
        </section>

        <section className="py-[60px] px-5 dark:bg-gray-dark">
          <Testimonial
            className="mx-auto max-w-[1440px] rounded-[32px] py-14 dark:bg-black md:py-20"
            feedbacks={feedbacks}
            type="modern-saas"
          ></Testimonial>
        </section>

        <section className="py-14 lg:py-[100px]">
          <div className="container">
            <div className="relative z-10 lg:flex">
              <div className="heading text-center lg:mb-0 lg:w-1/3 ltr:lg:pr-10 ltr:lg:text-left rtl:lg:pl-10 rtl:lg:text-right">
                <h6>Contactez nous !</h6>
                <h4 className="sm:!leading-[50px]">Ready to Get Started?</h4>
                <div data-aos="fade-right" data-aos-duration="1000">
                  <img
                    src="/assets/images/form-img.png"
                    alt="form-img"
                    className="mx-auto rtl:rotate-y-180"
                  />
                </div>
              </div>
              <form
                action=""
                className="rounded-3xl bg-white px-4 py-12 dark:bg-gray-dark lg:w-2/3 lg:px-8"
              >
                <div className="grid gap-10 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                    />
                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white">
                      Nom/Prenom
                    </label>
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                    >
                      <path
                        d="M5.42855 5.57875C5.42855 8.10348 7.47525 10.1502 9.99998 10.1502C12.5247 10.1502 14.5714 8.10348 14.5714 5.57875C14.5714 3.05402 12.5247 1.00732 9.99998 1.00732"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M2 16.9328C2 15.9495 2.61812 15.0724 3.5441 14.7417V14.7417C7.71891 13.2507 12.2811 13.2507 16.4559 14.7417V14.7417C17.3819 15.0724 18 15.9495 18 16.9328V18.7014C18 19.9185 16.922 20.8535 15.7172 20.6813L13.8184 20.4101C11.2856 20.0483 8.71435 20.0483 6.18162 20.4101L4.28284 20.6813C3.07798 20.8535 2 19.9185 2 18.7014V16.9328Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                    />
                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white">
                      Adresse mail
                    </label>
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                    >
                      <path
                        d="M1 8.00732V7.00732C1 4.2459 3.23858 2.00732 6 2.00732H16C18.7614 2.00732 21 4.2459 21 7.00732V13.0073C21 15.7687 18.7614 18.0073 16 18.0073H6C3.23858 18.0073 1 15.7687 1 13.0073V12.0073"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M5 7.00732L9.8 10.6073C10.5111 11.1407 11.4889 11.1407 12.2 10.6073L17 7.00732"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="mobile"
                      className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                    />
                    <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white">
                      Numero de téléphone
                    </label>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                    >
                      <path
                        d="M6.45241 1.40806C5.45292 0.783702 4.14202 0.887138 3.2983 1.73086L1.86856 3.1606C-0.302899 5.33207 1.73747 10.8931 6.42586 15.5815C11.1142 20.2699 16.6753 22.3102 18.8467 20.1388L20.2765 18.709C21.2635 17.722 21.2374 16.0956 20.2182 15.0764L18.0036 12.8619C16.9844 11.8426 15.358 11.8165 14.371 12.8036L14.0639 13.1107C13.531 13.6436 12.6713 13.6957 12.0713 13.2005C11.4925 12.7229 10.9159 12.208 10.3576 11.6497C9.79933 11.0914 9.28441 10.5149 8.80678 9.93607C8.31161 9.33601 8.36374 8.47631 8.89666 7.9434L9.20375 7.63631C9.98187 6.85819 10.1303 5.68271 9.65898 4.72062"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  
                </div>
                <div className="relative mt-10">
                  <input
                    type="text"
                    name="message"
                    className="w-full rounded-2xl border-2 border-gray/20 bg-transparent p-4 font-bold outline-none transition focus:border-secondary ltr:pr-12 rtl:pl-12"
                  />
                  <label className="absolute -top-3 bg-white px-2 font-bold ltr:left-6 rtl:right-6 dark:bg-gray-dark dark:text-white">
                    Message
                  </label>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 -translate-y-1/2 ltr:right-4 rtl:left-4 dark:text-white"
                  >
                    <path
                      d="M1 11.467V18.9267C1 19.7652 1.96993 20.2314 2.6247 19.7076L5.45217 17.4456C5.8068 17.1619 6.24742 17.0073 6.70156 17.0073H16C18.7614 17.0073 21 14.7687 21 12.0073V6.00732C21 3.2459 18.7614 1.00732 16 1.00732H6C3.23858 1.00732 1 3.2459 1 6.00732V7.62225"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="6.05005"
                      cy="9.05713"
                      r="1.25"
                      fill="currentColor"
                    />
                    <circle
                      cx="11.05"
                      cy="9.05713"
                      r="1.25"
                      fill="currentColor"
                    />
                    <circle
                      cx="16.05"
                      cy="9.05713"
                      r="1.25"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="mt-10 text-center ltr:lg:text-right rtl:lg:text-left">
                  <button
                    type="button"
                    className="btn bg-gray px-12 capitalize text-white dark:bg-white dark:text-black dark:hover:bg-secondary"
                  >
                    Envoyer 
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
