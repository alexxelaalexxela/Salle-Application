import Link from 'next/link';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Autoplay, Navigation, Thumbs } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { useState } from 'react';
import Head from 'next/head';

const Nft = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const [thumbsSwiper, setThumbsSwiper] = useState<any | null>(null);
    const [activeTab, setActiveTab] = useState<string>('all');

    return (
        <div>
            <Head>
                <title>Nft | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="relative bg-black bg-[url(/assets/images/nft/nft-banner.png)] bg-cover bg-center bg-no-repeat pt-28 pb-80 md:pb-[400px] xl:pt-48">
                <div className="container relative">
                    <div className="text-center text-4xl font-black text-white sm:text-6xl lg:text-[100px]">
                        <img
                            src="/assets/images/nft/ethereum-logo.svg"
                            alt=""
                            className="absolute -bottom-28 -left-6 hidden md:bottom-0 md:block"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                        <img
                            src="/assets/images/nft/nft-conversion.svg"
                            alt=""
                            className="absolute -bottom-20 -right-5 hidden md:bottom-10 md:block"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        />
                        <div className="inline-flex items-end justify-center gap-4">
                            <div className="relative">
                                <h2 className="z-[1]">change your</h2>
                                <h2 className="gradiant-text-shadow absolute top-1.5 left-1.5 hidden whitespace-nowrap text-transparent sm:block">
                                    change your
                                </h2>
                            </div>
                            <img src="/assets/images/nft/ethereum-icon.svg" alt="" className="h-9 sm:h-12 lg:h-auto" />
                        </div>
                        <div className="relative mt-5 inline-block leading-normal">
                            <h2 className="relative z-[1] bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">digital experience</h2>
                            <h2 className="gradiant-text-shadow absolute top-1.5 left-1.5 hidden whitespace-nowrap text-transparent sm:block">
                                digital experience
                            </h2>
                        </div>
                        <p className="pt-7 text-xl font-semibold">suspends sem deque, acuter a elemental ut, varies vel leo.</p>
                    </div>
                </div>
            </div>

            <section className="bg-white px-4 py-8 dark:bg-gray-dark">
                <div className="mx-auto max-w-[1342px]">
                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={10}
                        speed={2500}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1.7,
                            },
                            600: {
                                slidesPerView: 3,
                            },
                            1000: {
                                slidesPerView: 4,
                            },
                            1600: {
                                slidesPerView: 6,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide>
                            <Link href="#" className="flex h-16 w-64 items-center justify-center p-2 transition hover:scale-110">
                                <img src="/assets/images/nft/logo-1.svg" alt="" />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="#" className="flex h-16 w-64 items-center justify-center p-2 transition hover:scale-110">
                                <img src="/assets/images/nft/logo-2.svg" alt="" />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="#" className="flex h-16 w-64 items-center justify-center p-2 transition hover:scale-110">
                                <img src="/assets/images/nft/logo-3.svg" alt="" />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="#" className="flex h-16 w-64 items-center justify-center p-2 transition hover:scale-110">
                                <img src="/assets/images/nft/logo-4.svg" alt="" />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="#" className="flex h-16 w-64 items-center justify-center p-2 transition hover:scale-110">
                                <img src="/assets/images/nft/logo-5.svg" alt="" />
                            </Link>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Link href="#" className="flex h-16 w-64 items-center justify-center p-2 transition hover:scale-110">
                                <img src="/assets/images/nft/logo-6.svg" alt="" />
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:from-white/5 md:py-20">
                <div className="container">
                    <div className="heading-gradiant xl:w-1/2">
                        <h4>
                            Featured <span>Drops</span>
                        </h4>
                        <p>The World's Largest Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens</p>
                    </div>
                    <div className="grid gap-5 font-bold text-white sm:grid-cols-2 md:gap-[30px] lg:grid-cols-3">
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#653887]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature1.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#aa782d]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature2.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#43832f]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature3.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#9a3458]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature4.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="mb-5 text-center">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2.5 px-7 backdrop-blur-3xl">
                                        <span>
                                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.25 18C10.9782 18 14 15.75 14 11.8125C14 10.125 13.4375 7.3125 11.1875 5.0625C11.4688 6.75 9.78125 7.3125 9.78125 7.3125C10.625 4.5 8.375 0.5625 5 0C5.40163 2.25 5.5625 4.5 2.75 6.75C1.34375 7.875 0.5 9.82012 0.5 11.8125C0.5 15.75 3.52175 18 7.25 18ZM7.25 16.875C5.38588 16.875 3.875 15.75 3.875 13.7812C3.875 12.9375 4.15625 11.5312 5.28125 10.4062C5.14062 11.25 6.125 11.8125 6.125 11.8125C5.70312 10.4062 6.6875 8.15625 8.375 7.875C8.17362 9 8.09375 10.125 9.5 11.25C10.2031 11.8125 10.625 12.7845 10.625 13.7812C10.625 15.75 9.11413 16.875 7.25 16.875Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>05:38:40</span>
                                    </div>
                                </div>
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#3b488c]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature5.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="mb-5 text-center">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2.5 px-7 backdrop-blur-3xl">
                                        <span>
                                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.25 18C10.9782 18 14 15.75 14 11.8125C14 10.125 13.4375 7.3125 11.1875 5.0625C11.4688 6.75 9.78125 7.3125 9.78125 7.3125C10.625 4.5 8.375 0.5625 5 0C5.40163 2.25 5.5625 4.5 2.75 6.75C1.34375 7.875 0.5 9.82012 0.5 11.8125C0.5 15.75 3.52175 18 7.25 18ZM7.25 16.875C5.38588 16.875 3.875 15.75 3.875 13.7812C3.875 12.9375 4.15625 11.5312 5.28125 10.4062C5.14062 11.25 6.125 11.8125 6.125 11.8125C5.70312 10.4062 6.6875 8.15625 8.375 7.875C8.17362 9 8.09375 10.125 9.5 11.25C10.2031 11.8125 10.625 12.7845 10.625 13.7812C10.625 15.75 9.11413 16.875 7.25 16.875Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>05:38:40</span>
                                    </div>
                                </div>
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#3a6872]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature6.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="mb-5 text-center">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2.5 px-7 backdrop-blur-3xl">
                                        <span>
                                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.25 18C10.9782 18 14 15.75 14 11.8125C14 10.125 13.4375 7.3125 11.1875 5.0625C11.4688 6.75 9.78125 7.3125 9.78125 7.3125C10.625 4.5 8.375 0.5625 5 0C5.40163 2.25 5.5625 4.5 2.75 6.75C1.34375 7.875 0.5 9.82012 0.5 11.8125C0.5 15.75 3.52175 18 7.25 18ZM7.25 16.875C5.38588 16.875 3.875 15.75 3.875 13.7812C3.875 12.9375 4.15625 11.5312 5.28125 10.4062C5.14062 11.25 6.125 11.8125 6.125 11.8125C5.70312 10.4062 6.6875 8.15625 8.375 7.875C8.17362 9 8.09375 10.125 9.5 11.25C10.2031 11.8125 10.625 12.7845 10.625 13.7812C10.625 15.75 9.11413 16.875 7.25 16.875Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>05:38:40</span>
                                    </div>
                                </div>
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#aaa39e]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature7.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="mb-5 text-center">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2.5 px-7 backdrop-blur-3xl">
                                        <span>
                                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.25 18C10.9782 18 14 15.75 14 11.8125C14 10.125 13.4375 7.3125 11.1875 5.0625C11.4688 6.75 9.78125 7.3125 9.78125 7.3125C10.625 4.5 8.375 0.5625 5 0C5.40163 2.25 5.5625 4.5 2.75 6.75C1.34375 7.875 0.5 9.82012 0.5 11.8125C0.5 15.75 3.52175 18 7.25 18ZM7.25 16.875C5.38588 16.875 3.875 15.75 3.875 13.7812C3.875 12.9375 4.15625 11.5312 5.28125 10.4062C5.14062 11.25 6.125 11.8125 6.125 11.8125C5.70312 10.4062 6.6875 8.15625 8.375 7.875C8.17362 9 8.09375 10.125 9.5 11.25C10.2031 11.8125 10.625 12.7845 10.625 13.7812C10.625 15.75 9.11413 16.875 7.25 16.875Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>05:38:40</span>
                                    </div>
                                </div>
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#331e3d]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature8.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="mb-5 text-center">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2.5 px-7 backdrop-blur-3xl">
                                        <span>
                                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.25 18C10.9782 18 14 15.75 14 11.8125C14 10.125 13.4375 7.3125 11.1875 5.0625C11.4688 6.75 9.78125 7.3125 9.78125 7.3125C10.625 4.5 8.375 0.5625 5 0C5.40163 2.25 5.5625 4.5 2.75 6.75C1.34375 7.875 0.5 9.82012 0.5 11.8125C0.5 15.75 3.52175 18 7.25 18ZM7.25 16.875C5.38588 16.875 3.875 15.75 3.875 13.7812C3.875 12.9375 4.15625 11.5312 5.28125 10.4062C5.14062 11.25 6.125 11.8125 6.125 11.8125C5.70312 10.4062 6.6875 8.15625 8.375 7.875C8.17362 9 8.09375 10.125 9.5 11.25C10.2031 11.8125 10.625 12.7845 10.625 13.7812C10.625 15.75 9.11413 16.875 7.25 16.875Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>05:38:40</span>
                                    </div>
                                </div>
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-[400px] overflow-hidden rounded-[10px] bg-[#758a8f]">
                            <Link href="#" className="group">
                                <img
                                    src="/assets/images/nft/feature9.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-125"
                                />
                            </Link>
                            <div className="absolute top-4 flex items-center gap-1.5 rounded-full bg-white py-2.5 px-5 ltr:right-4 rtl:left-4">
                                <button type="button" className="group">
                                    <svg
                                        width="20"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="#000000"
                                        className="group-hover:scale-125 group-hover:fill-[#FB5A5A] group-hover:stroke-[#FB5A5A] group-focus:fill-[#FB5A5A] group-focus:stroke-[#FB5A5A]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        />
                                    </svg>
                                </button>
                                <span className="text-black">1.2K</span>
                            </div>
                            <div className="absolute inset-x-0 bottom-0 w-full">
                                <div className="mb-5 text-center">
                                    <div className="inline-flex items-center gap-3 rounded-full bg-white/20 py-2.5 px-7 backdrop-blur-3xl">
                                        <span>
                                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.25 18C10.9782 18 14 15.75 14 11.8125C14 10.125 13.4375 7.3125 11.1875 5.0625C11.4688 6.75 9.78125 7.3125 9.78125 7.3125C10.625 4.5 8.375 0.5625 5 0C5.40163 2.25 5.5625 4.5 2.75 6.75C1.34375 7.875 0.5 9.82012 0.5 11.8125C0.5 15.75 3.52175 18 7.25 18ZM7.25 16.875C5.38588 16.875 3.875 15.75 3.875 13.7812C3.875 12.9375 4.15625 11.5312 5.28125 10.4062C5.14062 11.25 6.125 11.8125 6.125 11.8125C5.70312 10.4062 6.6875 8.15625 8.375 7.875C8.17362 9 8.09375 10.125 9.5 11.25C10.2031 11.8125 10.625 12.7845 10.625 13.7812C10.625 15.75 9.11413 16.875 7.25 16.875Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span>05:38:40</span>
                                    </div>
                                </div>
                                <div className="bg-white/20 p-4 backdrop-blur-3xl">
                                    <div className="mb-4 flex items-center justify-between gap-4">
                                        <h5>Army WW1945</h5>
                                        <img src="/assets/images/nft/eth-icon.png" alt="" />
                                    </div>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center gap-2.5">
                                            <div className="h-8 w-8 overflow-hidden rounded-full">
                                                <img src="/assets/images/nft/creator.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div>
                                                <span className="text-xs opacity-60">Creator</span>
                                                <p className="text-sm">Thappier Fresco</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs opacity-60">Highest Bid</span>
                                            <p>6.38 ETH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="#" className="btn bg-[#00111f0f] dark:bg-white/5 dark:text-white dark:hover:bg-secondary">
                            see all the drops
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:from-white/5 md:py-20">
                <div className="container">
                    <div className="mb-8 flex flex-col items-center gap-5 md:mb-0 md:flex-row md:items-start md:justify-between">
                        <div className="heading-gradiant mb-0 flex-1 md:mb-12">
                            <h4>
                                Explore <span>Collection</span>
                            </h4>
                            <p className="xl:w-2/3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                        <div className="mt-4 flex-none">
                            <Link href="#" className="font-bold text-secondary transition hover:text-primary">
                                View All
                            </Link>
                        </div>
                    </div>
                    <ul className="filters nft-filters flex gap-3 overflow-x-auto whitespace-nowrap pb-3 text-xs font-extrabold uppercase text-black">
                        <li className={`filter ${activeTab === 'all' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('all')}
                            >
                                all nft
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'sports' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('sports')}
                            >
                                sports
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'music' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('music')}
                            >
                                music
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'art' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('art')}
                            >
                                art
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'collectibles' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('collectibles')}
                            >
                                collectibles
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'trading' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('trading')}
                            >
                                trading cards
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'utility' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('utility')}
                            >
                                utility
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'photography' && 'active'}`}>
                            <button
                                type="button"
                                className="rounded-[10px] bg-gray/[0.08] py-3.5 px-5 uppercase transition hover:bg-black hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black"
                                onClick={() => setActiveTab('photography')}
                            >
                                photography
                            </button>
                        </li>
                    </ul>
                    <div className="projects mt-8 grid gap-7 text-sm font-extrabold text-black dark:text-white sm:grid-cols-2 lg:grid-cols-4">
                        <div className={`project ${activeTab === 'all' || activeTab === 'art' ? 'block' : 'hidden'}`}>
                            <div className="rounded-[10px] bg-white p-4 dark:bg-gray-dark">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="relative h-11 w-11">
                                        <img src="/assets/images/nft/nft-1.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 -bottom-0 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4>NextFuture Abstract</h4>
                                        <span className="text-xs font-bold text-gray">SpaceX Club</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 lg:h-60">
                                    <div className="w-7/12 overflow-hidden rounded-[10px]">
                                        <img src="/assets/images/nft/nft-1-one.png" alt="" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex w-5/12 flex-col gap-2">
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-1-two.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-1-three.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-1-four.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'utility' ? 'block' : 'hidden'}`}>
                            <div className="rounded-[10px] bg-white p-4 dark:bg-gray-dark">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="relative h-11 w-11">
                                        <img src="/assets/images/nft/nft-2.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 -bottom-0 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4>NextFuture Abstract</h4>
                                        <span className="text-xs font-bold text-gray">SpaceX Club</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 lg:h-60">
                                    <div className="w-7/12 overflow-hidden rounded-[10px]">
                                        <img src="/assets/images/nft/nft-2-one.png" alt="" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex w-5/12 flex-col gap-2">
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-2-two.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-2-three.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-2-four.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'sports' ? 'block' : 'hidden'}`}>
                            <div className="rounded-[10px] bg-white p-4 dark:bg-gray-dark">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="relative h-11 w-11">
                                        <img src="/assets/images/nft/nft-3.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 -bottom-0 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4>NextFuture Abstract</h4>
                                        <span className="text-xs font-bold text-gray">SpaceX Club</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 lg:h-60">
                                    <div className="w-7/12 overflow-hidden rounded-[10px]">
                                        <img src="/assets/images/nft/nft-3-one.png" alt="" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex w-5/12 flex-col gap-2">
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-3-two.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-3-three.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-3-four.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`project ${activeTab === 'all' || activeTab === 'collectibles' ? 'block' : 'hidden'}`}>
                            <div className="rounded-[10px] bg-white p-4 dark:bg-gray-dark">
                                <div className="mb-5 flex items-center gap-3">
                                    <div className="relative h-11 w-11">
                                        <img src="/assets/images/nft/nft-4.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 -bottom-0 h-5 w-5" />
                                    </div>
                                    <div>
                                        <h4>NextFuture Abstract</h4>
                                        <span className="text-xs font-bold text-gray">SpaceX Club</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 lg:h-60">
                                    <div className="w-7/12 overflow-hidden rounded-[10px]">
                                        <img src="/assets/images/nft/nft-4-one.png" alt="" className="h-full w-full object-cover" />
                                    </div>
                                    <div className="flex w-5/12 flex-col gap-2">
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-4-two.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-4-three.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                        <div className="h-1/3 overflow-hidden rounded-[10px]">
                                            <img src="/assets/images/nft/nft-4-four.png" alt="" className="h-full w-full object-cover" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:bg-none md:py-20">
                <div className="container">
                    <div className="heading-gradiant xl:w-1/2">
                        <h4>
                            Create and sell your <span className="capitalize">NFTs</span>
                        </h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="cursor-pointer rounded-[10px] bg-white p-5 transition duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:bg-gray-dark dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                <h5 className="font-bold uppercase">STEP-1</h5>
                                <div className="mt-7">
                                    <h4 className="font-extrabold text-black dark:text-white">Set your wallet</h4>
                                    <p className="mt-2 text-sm font-semibold leading-7">
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="cursor-pointer rounded-[10px] bg-white p-5 transition duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:bg-gray-dark dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                <h5 className="font-bold uppercase">STEP-2</h5>
                                <div className="mt-7">
                                    <h4 className="font-extrabold text-black dark:text-white">Create your collection</h4>
                                    <p className="mt-2 text-sm font-semibold leading-7">
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="cursor-pointer rounded-[10px] bg-white p-5 transition duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:bg-gray-dark dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                <h5 className="font-bold uppercase">STEP-3</h5>
                                <div className="mt-7">
                                    <h4 className="font-extrabold text-black dark:text-white">Add your NFT's</h4>
                                    <p className="mt-2 text-sm font-semibold leading-7">
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="cursor-pointer rounded-[10px] bg-white p-5 transition duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,0.1)] dark:bg-gray-dark dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                                <h5 className="font-bold uppercase">STEP-4</h5>
                                <div className="mt-7">
                                    <h4 className="font-extrabold text-black dark:text-white">Sell your NFT's</h4>
                                    <p className="mt-2 text-sm font-semibold leading-7">
                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black bg-[url(/assets/images/overlay-noise.png)] bg-cover bg-no-repeat py-14 md:py-20">
                <div className="container">
                    <div className="flex flex-col items-center gap-8 lg:flex-row">
                        <div className="flex-1">
                            <div className="heading-gradiant">
                                <h4 className="!text-white">
                                    Start your own collection <span>today</span>
                                </h4>
                                <p className="xl:w-2/3">The World's Largest Digital Marketplace For Crypto Collectibles And Non-Fungible Tokens</p>
                            </div>
                            <div className="mb-12 grid grid-cols-2 gap-2 text-sm font-bold sm:grid-cols-3 xl:w-3/4">
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="cursor-pointer rounded-[10px] bg-white/[0.06] py-7 px-4 text-center transition duration-500 hover:bg-secondary/30">
                                        <h4 className="mb-4 text-[26px] font-black text-white">11,593</h4>
                                        <span>Collectibles</span>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="cursor-pointer rounded-[10px] bg-white/[0.06] py-7 px-4 text-center transition duration-500 hover:bg-secondary/30">
                                        <h4 className="mb-4 text-[26px] font-black text-white">1,200</h4>
                                        <span>Auctions</span>
                                    </div>
                                </div>
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="cursor-pointer rounded-[10px] bg-white/[0.06] py-7 px-4 text-center transition duration-500 hover:bg-secondary/30">
                                        <h4 className="mb-4 text-[26px] font-black text-white">5,983</h4>
                                        <span>Artists</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center lg:ltr:text-left lg:rtl:text-right">
                                <Link href="#" className="btn bg-white px-9">
                                    create
                                </Link>
                            </div>
                        </div>
                        <div className="max-w-[370px] flex-none" data-aos="fade-up" data-aos-duration="1000">
                            <img src="/assets/images/nft/nft-img.png" alt="" className="h-full w-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:bg-white/[0.02] dark:from-transparent md:py-20">
                <div className="container">
                    <div className="heading-gradiant">
                        <h4>
                            Top <span>Artists</span>
                        </h4>
                        <p className="xl:w-2/3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                </div>
                <Swiper
                    loop={true}
                    slidesPerView="auto"
                    spaceBetween={10}
                    speed={2500}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        520: {
                            slidesPerView: 2,
                        },
                        800: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                        1600: {
                            slidesPerView: 7,
                        },
                    }}
                    dir={isRtl ? 'rtl' : 'ltr'}
                    key={isRtl ? 'true' : 'false'}
                >
                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists1.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@makinzi_jamy</div>
                                <div className="font-bold text-[#45B649]">10.10 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists2.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@mazanov_sky</div>
                                <div className="font-bold text-[#45B649]">25.50 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists3.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@jimmy_dom</div>
                                <div className="font-bold text-[#45B649]">35.98 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists4.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@stivan_rominok</div>
                                <div className="font-bold text-[#45B649]">44.54 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists5.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@mazanov_sky</div>
                                <div className="font-bold text-[#45B649]">54.11 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists6.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@danil_pan</div>
                                <div className="font-bold text-[#45B649]">65.11 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="text-center">
                        <div className="inline-flex w-auto items-center gap-2.5 rounded-full bg-white p-3 pr-8 dark:bg-gray-dark">
                            <div className="h-[60px] w-[60px] overflow-hidden rounded-full bg-[#7780a126]">
                                <img src="/assets/images/nft/artists7.png" alt="" className="h-full w-full object-cover" />
                            </div>
                            <div className="ltr:text-left rtl:text-right">
                                <div className="font-extrabold text-black dark:text-white">@kristian_fel</div>
                                <div className="font-bold text-[#45B649]">87.12 ETH</div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            <section className="bg-gradient-to-t from-white/[55%] to-transparent py-14 dark:from-white/[0.02] md:py-20">
                <div className="container">
                    <div className="mb-8 flex flex-col items-center gap-5 md:mb-0 md:flex-row md:items-start md:justify-between">
                        <div className="heading-gradiant mb-0 flex-1 md:mb-12">
                            <h4>
                                Our clients say <span>24 Hours</span>
                            </h4>
                            <p className="xl:w-2/3">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                        </div>
                        <div className="mt-4 flex-none">
                            <Link href="#" className="font-bold text-secondary transition hover:text-primary">
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 lg:gap-[70px]">
                        <div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">1</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client1.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">Trippin’ Ape Tribe</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">0.32 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-[#45B649]">+67.80%</span>
                                    <div>
                                        <span>365.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">2</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client2.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">The Nice Guy</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">1.23 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span>--</span>
                                    <div>
                                        <span>365.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">3</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client3.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">Banana’s Peel</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">3.6 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-[#45B649]">+36.20%</span>
                                    <div>
                                        <span>655.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">4</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client4.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">Idoitz Fantasy</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">5.6 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-[#E23434]">-24.74%</span>
                                    <div>
                                        <span>210.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">5</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client5.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">Cool Cats</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">0.12 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-[#E23434]">-19.36%</span>
                                    <div>
                                        <span>365.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">6</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client6.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">The Glitch Mon..</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">0.92 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span>--</span>
                                    <div>
                                        <span>375.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">7</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client7.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">Bored Ape Yatc..</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">0.94 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-[#45B649]">+61.72%</span>
                                    <div>
                                        <span>655.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="flex items-center justify-between gap-4 border-b-2 border-gray/10 py-6 font-bold text-black dark:text-white"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="sm:text-lg">8</span>
                                    <div className="relative h-12 w-12 sm:h-14 sm:w-14">
                                        <img src="/assets/images/nft/client8.png" alt="" className="h-full w-full rounded-full object-cover" />
                                        <img src="/assets/images/nft/verify.svg" alt="" className="absolute -right-1 bottom-0" />
                                    </div>
                                    <div>
                                        <h4 className="sm:text-lg">Make A Witch</h4>
                                        <div>
                                            <span className="text-sm font-semibold text-gray">Floor Price:</span>
                                            <span className="text-xs">0.14 ETH</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="ltr:text-right rtl:text-left">
                                    <span className="text-[#E23434]">-54.37%</span>
                                    <div>
                                        <span>210.3</span>
                                        <span className="text-xs">ETH</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black bg-[url(/assets/images/nft/counter-bg.png)] bg-cover bg-no-repeat py-14 md:py-24">
                <div className="container">
                    <div className="grid grid-cols-2 justify-center gap-y-8 gap-x-4 font-bold sm:text-lg lg:grid-cols-4">
                        <div className="text-center">
                            <div className="text-3xl font-black text-white md:text-5xl">
                                <CountUp start={0} end={9999} duration={4} suffix="+"></CountUp>
                            </div>
                            <h6 className="mt-2">Total Items</h6>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-white md:text-5xl">
                                <CountUp start={0} end={4} duration={4} suffix="+"></CountUp>
                            </div>
                            <h6 className="mt-2">Total Owners</h6>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-white md:text-5xl">
                                <CountUp start={0} end={3} duration={4} suffix="+"></CountUp>
                            </div>
                            <h6 className="mt-2">Floor Price (ETH)</h6>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-white md:text-5xl">
                                <CountUp start={0} end={144} duration={4} suffix="k+"></CountUp>
                            </div>
                            <h6 className="mt-2">Volume Traded (ETH)</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 md:py-20">
                <div className="container">
                    <div className="mb-8 flex flex-col items-center gap-5 md:mb-0 md:flex-row md:items-start md:justify-between">
                        <div className="heading-gradiant mb-0 flex-1 md:mb-12">
                            <h4>
                                We value <span>our clients</span>
                            </h4>
                            <p className="xl:w-2/3">Our Clients Say</p>
                        </div>
                        <div className="mt-2 flex items-center justify-end gap-4">
                            <Link
                                href="/blog"
                                className="text-sm font-extrabold text-black transition hover:text-secondary dark:text-white dark:hover:text-secondary"
                            >
                                View All
                            </Link>
                            <button
                                type="button"
                                className="client-slider-button-prev flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition hover:bg-secondary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-secondary"
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                    <path
                                        d="M5.95007 1.2002L1.48924 5.3424C1.06317 5.73803 1.06317 6.41236 1.48924 6.80799L5.95007 10.9502"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                type="button"
                                className="client-slider-button-next flex h-10 w-10 items-center justify-center rounded-full bg-black/5 text-black transition hover:bg-secondary hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-secondary"
                            >
                                <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                    <path
                                        d="M1.05005 10.7998L5.51089 6.6576C5.93695 6.26197 5.93695 5.58764 5.51089 5.19201L1.05005 1.0498"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-7">
                        <div className="hidden w-2/5 space-y-7 text-sm font-bold md:block">
                            <Swiper
                                className="client-slider-slides max-h-[500px]"
                                onSwiper={(e) => setThumbsSwiper(e)}
                                direction="vertical"
                                mousewheel={true}
                                slidesPerView={4}
                                loop={true}
                                freeMode={true}
                                watchSlidesProgress={true}
                                dir={isRtl ? 'rtl' : 'ltr'}
                                key={isRtl ? 'true' : 'false'}
                            >
                                <SwiperSlide>
                                    <div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-1.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Allan Branch</h4>
                                                <h6 className="italic">CEO of Lifted</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-2.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Alistair Clay</h4>
                                                <h6 className="italic">Founder of Class PR</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-3.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Tim Nichols</h4>
                                                <h6 className="italic">CTO of Exact Drive</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="cursor-pointer rounded-[10px] bg-gradient-to-t from-gray/[0.08] to-transparent p-4">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-4.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Mark Colgan</h4>
                                                <h6 className="italic">Founder of Social Media Examiner</h6>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="w-full md:w-3/5">
                            <Swiper
                                loop={true}
                                spaceBetween={10}
                                navigation={{
                                    nextEl: '.client-slider-button-next',
                                    prevEl: '.client-slider-button-prev',
                                }}
                                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                modules={[Navigation, Thumbs]}
                                dir={isRtl ? 'rtl' : 'ltr'}
                                key={isRtl ? 'true' : 'false'}
                            >
                                <SwiperSlide>
                                    <div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-1.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Allan Branch</h4>
                                                <h6 className="text-sm font-bold italic">CEO of Lifted</h6>
                                            </div>
                                        </div>
                                        <div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
                                            <div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
                                                <svg width="100" height="73" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.08">
                                                        <path
                                                            d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                        <path
                                                            d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 className="pb-7 font-extrabold">“Best Design Company”</h6>
                                            <p className="text-sm font-semibold italic">
                                                We partnered with Fluid Studios to design our website. We found them incredibly helpful and patient as we really
                                                didn't know what we wanted. Greg met with us on numerous occasions and we found the whole process a great
                                                experience. We ended up with a website we loved. I would definitely recommend Fluid Studios - you won't be
                                                disappointed.
                                            </p>
                                            <ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
                                                <li>Las Vegas, United States</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-2.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Alistair Clay</h4>
                                                <h6 className="text-sm font-bold italic">Founder of Class PR</h6>
                                            </div>
                                        </div>
                                        <div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
                                            <div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
                                                <svg width="100" height="73" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.08">
                                                        <path
                                                            d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                        <path
                                                            d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 className="pb-7 font-extrabold">“Best Design Company”</h6>
                                            <p className="text-sm font-semibold italic">
                                                We partnered with Fluid Studios to design our website. We found them incredibly helpful and patient as we really
                                                didn't know what we wanted. Greg met with us on numerous occasions and we found the whole process a great
                                                experience. We ended up with a website we loved. I would definitely recommend Fluid Studios - you won't be
                                                disappointed.
                                            </p>
                                            <ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
                                                <li>Las Vegas, United States</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-3.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Tim Nichols</h4>
                                                <h6 className="text-sm font-bold italic">CTO of Exact Drive</h6>
                                            </div>
                                        </div>
                                        <div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
                                            <div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
                                                <svg width="100" height="73" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.08">
                                                        <path
                                                            d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                        <path
                                                            d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 className="pb-7 font-extrabold">“Best Design Company”</h6>
                                            <p className="text-sm font-semibold italic">
                                                We partnered with Fluid Studios to design our website. We found them incredibly helpful and patient as we really
                                                didn't know what we wanted. Greg met with us on numerous occasions and we found the whole process a great
                                                experience. We ended up with a website we loved. I would definitely recommend Fluid Studios - you won't be
                                                disappointed.
                                            </p>
                                            <ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
                                                <li>Las Vegas, United States</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="rounded-[32px] bg-white px-4 py-8 dark:bg-gray-dark lg:p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="h-16 w-16 flex-none rounded-full">
                                                <img src="/assets/images/nft/testimonial-client-4.png" alt="" className="h-full w-full object-cover" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-xl font-extrabold text-black dark:text-white">Mark Colgan</h4>
                                                <h6 className="text-sm font-bold italic">Founder of Social Media Examiner</h6>
                                            </div>
                                        </div>
                                        <div className="relative mt-12 pl-5 text-black dark:text-white md:mt-20">
                                            <div className="absolute -top-6 ltr:left-0 rtl:right-0 rtl:rotate-y-180">
                                                <svg width="100" height="73" viewBox="0 0 100 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g opacity="0.08">
                                                        <path
                                                            d="M79.5222 0C85.1084 0 89.8948 2.12795 93.8833 6.1167C98.1392 10.1054 100 14.8935 100 20.2128C100 25.2666 98.4045 29.7875 94.9462 33.7764C91.4881 38.0323 85.9039 38.8302 81.3825 39.0952C82.1803 45.7443 85.9037 52.6589 89.3619 57.4472C89.8944 58.245 90.425 59.0427 91.2246 59.5752C92.2876 60.6382 92.2876 62.2356 91.2246 63.2986L83.5126 71.543C82.4495 72.8732 80.3216 72.606 79.2567 71.543C76.0657 68.0849 72.8731 63.831 70.2144 59.5751C62.7675 47.6072 59.044 35.6393 59.044 23.669C59.044 16.7544 61.1719 10.9032 65.1606 6.64734C69.1493 2.39334 74.2029 0.000144939 79.5217 0.000144939L79.5222 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                        <path
                                                            d="M20.4783 0C26.0645 0 30.8509 2.12795 34.8394 6.1167C39.0952 10.1054 40.9561 14.8935 40.9561 20.2128C40.9561 25.2666 39.3606 29.7875 35.9023 33.7764C32.4442 38.0323 26.86 38.8302 22.3386 39.0952C23.1363 45.7443 26.8597 52.6589 30.318 57.4472C30.8504 58.245 31.381 59.0427 32.1806 59.5752C33.2437 60.6382 33.2437 62.2356 32.1806 63.2986L24.4686 71.543C23.4056 72.8732 21.2776 72.606 20.2128 71.543C17.0218 68.0849 13.8292 63.831 11.1705 59.5751C3.7235 47.6072 3.8147e-06 35.6393 3.8147e-06 23.669C3.8147e-06 16.7544 2.12796 10.9032 6.11671 6.64734C10.1054 2.39334 14.8921 0.000144939 20.4778 0.000144939L20.4783 0Z"
                                                            fill="#93A2B2"
                                                        />
                                                    </g>
                                                </svg>
                                            </div>
                                            <h6 className="pb-7 font-extrabold">“Best Design Company”</h6>
                                            <p className="text-sm font-semibold italic">
                                                We partnered with Fluid Studios to design our website. We found them incredibly helpful and patient as we really
                                                didn't know what we wanted. Greg met with us on numerous occasions and we found the whole process a great
                                                experience. We ended up with a website we loved. I would definitely recommend Fluid Studios - you won't be
                                                disappointed.
                                            </p>
                                            <ul className="mt-7 list-inside list-disc text-sm font-bold text-gray ltr:text-right rtl:text-left">
                                                <li>Las Vegas, United States</li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Nft;
