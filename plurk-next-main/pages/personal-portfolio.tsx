import Link from 'next/link';
import CountUp from 'react-countup';
import ClientSlider from '../components/ClientSlider';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css';
import Head from 'next/head';

const PersonalPortfolio = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'amelia smith',
            role: 'Founder of Alpha Design',
            thumbnail: '/assets/images/personal-portfolio/customer-avatar.svg',
            message:
                'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        },
    ];
    return (
        <div className="overflow-hidden">
            <Head>
                <title>Personal Portfolio | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="bg-black pt-[82px] lg:overflow-hidden lg:pt-[106px]">
                <div className="bg-[url(/assets/images/overlay-noise.png)] bg-cover bg-no-repeat pt-14 lg:pt-20">
                    <div className="container">
                        <div className="relative">
                            <div className="text-center lg:w-2/3 lg:ltr:text-left lg:rtl:text-right">
                                <div className="mx-auto mb-5 flex h-[100px] max-w-[255px] items-center lg:float-left lg:mr-7 lg:mb-0">
                                    <img src="/assets/images/personal-portfolio/website-apps.png" alt="" className="w-full" />
                                </div>
                                <h2 className="relative text-3xl font-black text-white sm:text-5xl lg:text-[80px] lg:leading-[100px]">
                                    I make beautiful web site and apps!
                                    <svg
                                        width="59"
                                        height="107"
                                        viewBox="0 0 59 107"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute bottom-5 ltr:-left-8 rtl:-right-8 rtl:rotate-y-180"
                                    >
                                        <path
                                            opacity="0.1"
                                            d="M2.99181 104.456C0.123358 63.6362 48.4681 6.12462 55.7077 39.4953C60.866 63.2729 24.484 67.2303 15.4891 1.9999"
                                            stroke="url(#paint0_linear_1479_14247)"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <defs>
                                            <linearGradient id="paint0_linear_1479_14247" x1="17" y1="113" x2="17" y2="2" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="white" stopOpacity="0" />
                                                <stop offset="1" stopColor="white" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </h2>
                            </div>
                            <div className="relative py-10 text-white md:py-16 lg:max-w-[330px]">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full bg-secondary/10 py-6 pl-7 pr-32 text-left placeholder:font-bold placeholder:text-white focus-within:outline-none"
                                />
                                <button
                                    type="button"
                                    className="absolute right-2.5 top-1/2 -translate-y-1/2 bg-secondary py-3 px-5 text-lg font-extrabold transition hover:bg-primary"
                                >
                                    Join us
                                </button>
                            </div>
                            <div className="grid gap-y-10 gap-x-6 pb-14 text-sm font-extrabold sm:grid-cols-3 lg:max-w-[490px] lg:pb-24">
                                <div className="text-center">
                                    <img src="/assets/images/personal-portfolio/logo-1.svg" alt="" className="mx-auto mb-4" />
                                    <p>Awarded as Best Design & Creative</p>
                                </div>
                                <div className="text-center">
                                    <img src="/assets/images/personal-portfolio/logo-2.svg" alt="" className="mx-auto mb-4" />
                                    <p>Top-1 Trending Team on Dribbble</p>
                                </div>
                                <div className="text-center">
                                    <img src="/assets/images/personal-portfolio/logo-3.svg" alt="" className="mx-auto mb-4" />
                                    <p>Top User Experience Agency</p>
                                </div>
                            </div>
                            <div className="absolute bottom-0 hidden w-3/4 ltr:-right-40 rtl:-left-40 rtl:rotate-y-180 lg:block">
                                <img
                                    src="/assets/images/personal-portfolio/women-banner.png"
                                    alt=""
                                    className="w-full"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                />
                                <div className="absolute top-[32%] left-4">
                                    <img
                                        src="/assets/images/personal-portfolio/enterpreneurship-rocket.png"
                                        alt=""
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                    />
                                    <img src="/assets/images/personal-portfolio/enterpreneurship-text.png" alt="" className="animate-spin-slow" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="overflow-x-hidden bg-white py-14 dark:bg-gray-dark">
                <div className="container">
                    <div className="items-center lg:flex">
                        <h2 className="flex-none border-gray/20 text-center text-xl font-black uppercase text-black dark:text-white lg:ltr:mr-12 lg:ltr:border-r-[3px] lg:ltr:pr-12 lg:ltr:text-left lg:rtl:ml-12 lg:rtl:border-l-[3px] lg:rtl:pl-12 lg:rtl:text-right">
                            PREVIOUSLY WORKED ON
                        </h2>
                        <Swiper
                            className="mt-10 flex-1 lg:mt-0 xl:w-[1200px] xl:flex-none"
                            loop={true}
                            slidesPerView="auto"
                            spaceBetween={10}
                            speed={4000}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.7,
                                },
                                600: {
                                    slidesPerView: 2,
                                },
                                1000: {
                                    slidesPerView: 3,
                                },
                                1142: {
                                    slidesPerView: 5,
                                },
                            }}
                            modules={[Autoplay]}
                            dir={isRtl ? 'rtl' : 'ltr'}
                            key={isRtl ? 'true' : 'false'}
                        >
                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-1.svg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-2.svg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-3.svg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-4.svg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-5.svg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-6.svg" alt="" />
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div>
                                    <img src="/assets/images/logo-7.svg" alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-t from-white/50 to-transparent py-14 dark:bg-none md:py-20">
                <div className="container">
                    <div className="grid items-center gap-y-16 gap-x-8 lg:grid-cols-2">
                        <div className="relative">
                            <img
                                src="/assets/images/personal-portfolio/about-block.png"
                                alt=""
                                className="absolute top-8 hidden ltr:-left-16 rtl:-right-16 dark:hidden md:block"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            />
                            <img
                                src="/assets/images/personal-portfolio/about-block-dark.png"
                                alt=""
                                className="absolute top-8 hidden ltr:-left-16 rtl:-right-16 dark:hidden dark:md:block"
                                data-aos="fade-right"
                                data-aos-duration="1000"
                            />
                            <img src="/assets/images/personal-portfolio/women.jpg" alt="" className="h-full w-full object-cover" />
                            <img
                                src="/assets/images/personal-portfolio/man-about.png"
                                alt=""
                                className="absolute -bottom-10 ltr:-left-10 rtl:-right-10"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            />
                        </div>
                        <div>
                            <div className="mb-2">
                                <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                                    <span className="text-primary">/</span> About ME
                                </h6>
                                <h2 className="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                                    I’ve been designing websites since 2010
                                </h2>
                            </div>
                            <p className="text-lg font-medium">
                                Excerpter sent occaecat cuspidate non provident, sent in culpa qui official deferent mullet anima id est labarum acute inure
                                dolor reprehenderit in voluptate velit esse chillum dolore eu fugit.
                            </p>
                            <div className="my-6 grid gap-4 text-lg font-bold text-black dark:text-white sm:mt-12 sm:mb-8 sm:grid-cols-2">
                                <div className="flex items-center gap-3">
                                    <h2 className="text-4xl font-black text-primary md:text-7xl">12</h2>
                                    <p>Years of experience</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-4xl font-black text-secondary md:text-7xl">150</h2>
                                    <p>Successful projects</p>
                                </div>
                            </div>
                            <p className="text-lg font-medium">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                                enim ad minim veniam, quis nostrud exercitation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white py-14 dark:bg-gray-dark md:py-20">
                <div className="container">
                    <div className="grid rounded-[10px] border-[2px] border-secondary/20 text-center font-semibold text-black dark:text-white sm:grid-cols-3 sm:ltr:text-left sm:rtl:text-right lg:text-xl">
                        <div className="px-5 py-8 md:py-10 md:px-12">
                            <div className="mb-4 text-[40px] font-extrabold text-primary">
                                <CountUp start={0} end={5} duration={10} suffix="+"></CountUp>
                            </div>
                            <h6>Years of experience</h6>
                        </div>
                        <div className="bg-secondary/10 px-5 py-8 md:py-10 md:px-12">
                            <div className="mb-4 text-[40px] font-extrabold text-secondary">
                                <CountUp start={0} end={99} duration={10} suffix="+"></CountUp>
                            </div>
                            <h6>Client Satisfied</h6>
                        </div>
                        <div className="px-5 py-8 md:py-10 md:px-12">
                            <div className="mb-4 text-[40px] font-extrabold text-primary">
                                <CountUp start={0} end={255} duration={10} suffix="+"></CountUp>
                            </div>
                            <h6>Projects complete</h6>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-x-hidden bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20">
                <div className="absolute inset-x-0 top-0 h-[580px] bg-black">
                    <img
                        src="/assets/images/personal-portfolio/star-icon.svg"
                        alt=""
                        className="absolute top-0 ltr:left-0 rtl:right-0 rtl:rotate-y-180"
                        data-aos="fade-down"
                        data-aos-duration="1000"
                    />
                </div>
                <div className="container relative z-[1]">
                    <div className="mb-10 max-w-[410px]">
                        <div className="mb-5 flex items-center gap-10">
                            <h6 className="text-lg font-extrabold uppercase text-secondary">
                                <span className="text-primary">/</span> Portfolios
                            </h6>
                            <div className="flex gap-2.5">
                                <button
                                    type="button"
                                    className="portfolio-slider-button-prev flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
                                >
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path
                                            d="M7 16L1 9L2.5 7.25M7 2L5 4.33333"
                                            stroke="currentcolor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="portfolio-slider-button-next flex h-8 w-8 items-center justify-center bg-white/10 text-white duration-200 after:hidden hover:bg-white/20 hover:text-black"
                                >
                                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-180">
                                        <path
                                            d="M2 2L4 4.33333M2 16L8 9L6.5 7.25"
                                            stroke="currentcolor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h2 className="text-3xl font-black leading-normal text-white md:text-[40px]">Client Talking About My work!</h2>
                    </div>
                    <Swiper
                        className="xl:w-[1680px]"
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            nextEl: '.portfolio-slider-button-next',
                            prevEl: '.portfolio-slider-button-prev',
                        }}
                        modules={[Navigation, Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                            1142: {
                                slidesPerView: 3,
                            },
                        }}
                        dir={isRtl ? 'rtl' : 'ltr'}
                        key={isRtl ? 'true' : 'false'}
                    >
                        <SwiperSlide>
                            <div className="bg-white dark:bg-gray-dark">
                                <div className="h-72 md:h-96">
                                    <img src="/assets/images/personal-portfolio/portfolio-1.jpg" alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                    <div className="font-extrabold">
                                        <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                            Branding
                                        </h6>
                                        <h4 className="py-4 text-xl text-black dark:text-white">Space Landing page</h4>
                                        <Link href="#" className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                            <span>View Project</span>
                                            <span className="transition-all group-hover:pl-2">
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-7">
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/personal-portfolio/sketch-icon.svg" alt="" className="w-full" />
                                        </div>
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/personal-portfolio/figma-icon.svg" alt="" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white dark:bg-gray-dark">
                                <div className="h-72 md:h-96">
                                    <img src="/assets/images/personal-portfolio/portfolio-2.jpg" alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                    <div className="font-extrabold">
                                        <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                            Branding
                                        </h6>
                                        <h4 className="py-4 text-xl text-black dark:text-white">Crypto Game - UX Interface</h4>
                                        <Link href="#" className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                            <span>View Project</span>
                                            <span className="transition-all group-hover:pl-2">
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-7">
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/personal-portfolio/sketch-icon.svg" alt="" className="w-full" />
                                        </div>
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/personal-portfolio/figma-icon.svg" alt="" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bg-white dark:bg-gray-dark">
                                <div className="h-72 md:h-96">
                                    <img src="/assets/images/personal-portfolio/portfolio-3.jpg" alt="" className="h-full w-full object-cover" />
                                </div>
                                <div className="flex items-center justify-between gap-2 p-4 md:p-7">
                                    <div className="font-extrabold">
                                        <h6 className="tex-sm bg-gradient-to-r from-secondary to-primary bg-clip-text uppercase tracking-[10px] text-transparent">
                                            product design
                                        </h6>
                                        <h4 className="py-4 text-xl text-black dark:text-white">Space Landing page</h4>
                                        <Link href="#" className="group flex items-center gap-4 font-semibold transition hover:text-secondary">
                                            <span>View Project</span>
                                            <span className="transition-all group-hover:pl-2">
                                                <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 6.75H0V5.25H12V0L18 6L12 12V6.75Z" fill="currentColor" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="flex items-center gap-3 md:gap-7">
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/personal-portfolio/sketch-icon.svg" alt="" className="w-full" />
                                        </div>
                                        <div className="w-5 md:w-8">
                                            <img src="/assets/images/personal-portfolio/figma-icon.svg" alt="" className="w-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20">
                <div className="container">
                    <div className="mb-10">
                        <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                            <span className="text-primary">/</span> services
                        </h6>
                        <h2 className="text-3xl font-black leading-tight text-black dark:text-white md:text-[40px]">My extensive list of skills</h2>
                    </div>
                    <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                                <Link href="#" className="absolute inset-0 h-full w-full"></Link>
                                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                                    <img src="/assets/images/personal-portfolio/ui-ux-icon.svg" alt="" />
                                </div>
                                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">UI/UX Design</h5>
                                <p className="text-lg leading-loose line-clamp-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                                <Link href="#" className="absolute inset-0 h-full w-full"></Link>
                                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                                    <img src="/assets/images/personal-portfolio/product-icon.svg" alt="" />
                                </div>
                                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">Product Design</h5>
                                <p className="text-lg leading-loose line-clamp-3">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                                <Link href="#" className="absolute inset-0 h-full w-full"></Link>
                                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                                    <img src="/assets/images/personal-portfolio/graphic-icon.svg" alt="" />
                                </div>
                                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">Motion Graphics</h5>
                                <p className="text-lg leading-loose line-clamp-3">
                                    When an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                                <Link href="#" className="absolute inset-0 h-full w-full"></Link>
                                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                                    <img src="/assets/images/personal-portfolio/web-design-icon.svg" alt="" />
                                </div>
                                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">Web Design</h5>
                                <p className="text-lg leading-loose line-clamp-3">
                                    It has survived not only five centuries, but also the leap into electronic typesetting.
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                                <Link href="#" className="absolute inset-0 h-full w-full"></Link>
                                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                                    <img src="/assets/images/personal-portfolio/research-icon.svg" alt="" />
                                </div>
                                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">User Research</h5>
                                <p className="text-lg leading-loose line-clamp-3">
                                    All the Lorem Ipsum generators on the Internet tend to repeat chunks as necessary
                                </p>
                            </div>
                        </div>
                        <div data-aos="fade-up" data-aos-duration="1000">
                            <div className="relative border-[2px] border-white bg-gradient-to-b from-white/50 to-transparent p-5 shadow-[-20px_30px_70px_rgba(219,222,225,0.4)] transition hover:border-secondary/50 hover:bg-secondary/20 dark:border-[rgba(119,128,161,0.15)] dark:bg-black dark:from-transparent dark:shadow-none dark:hover:border-secondary/50 dark:hover:bg-secondary/10 md:p-8">
                                <Link href="#" className="absolute inset-0 h-full w-full"></Link>
                                <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary/10">
                                    <img src="/assets/images/personal-portfolio/app-development-icon.svg" alt="" />
                                </div>
                                <h5 className="pt-7 pb-3 text-[22px] font-bold text-black dark:text-white">App Development</h5>
                                <p className="text-lg leading-loose line-clamp-3">
                                    It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/50 to-transparent py-16 dark:from-white/[0.02]">
                <div className="container">
                    <div className="grid items-center gap-10 md:grid-cols-2">
                        <div className="text-center text-lg font-medium md:ltr:text-left md:rtl:text-right">
                            <h2 className="mb-3 text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                                Making Complex Digital Products
                            </h2>
                            <p>
                                In publishing and graphic design, Lorem ipsum is a text commonly used to demonstrate the visual form of a document or a typeface
                                without relying on meaningful content.
                            </p>
                            <div className="mt-8">
                                <Link href="#" className="bg-secondary py-3 px-5 font-bold text-white transition hover:bg-primary">
                                    Explore
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img
                                src="/assets/images/personal-portfolio/digital-product.png"
                                alt=""
                                className="h-full w-full object-cover rtl:rotate-y-180"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] md:py-20">
                <div className="container">
                    <div className="relative">
                        <div className="grid-cols-2 items-center justify-between gap-8 lg:grid lg:flex-row">
                            <div className="relative mx-auto w-full bg-white dark:bg-gray-dark">
                                <ClientSlider feedbacks={feedbacks}></ClientSlider>
                            </div>
                            <div className="mt-8 lg:mt-0 lg:w-3/4">
                                <div className="mb-2">
                                    <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                                        <span className="text-primary">/</span> Founder Words
                                    </h6>
                                    <h2 className="text-3xl font-black leading-normal text-black dark:text-white md:text-[40px]">
                                        What my clients say My Work
                                    </h2>
                                </div>
                                <p className="text-lg font-medium">Lacus, adipiscing lectus convallis purus aliquet cursus magnaol.</p>
                                <div className="mt-7 flex justify-start gap-16">
                                    <div>
                                        <h2 className="text-3xl font-black text-black dark:text-white">
                                            13M <span className="text-primary">+</span>
                                        </h2>
                                        <p className="mt-1 text-sm font-bold">happy people</p>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-black text-black dark:text-white">4.88</h2>
                                        <p className="mt-1 text-sm font-bold">overall rating</p>
                                        <div className="mt-3">
                                            <svg width="85" height="12" viewBox="0 0 85 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M4.7919 2.04503C5.55189 0.681675 5.93188 0 6.5 0C7.06812 0 7.44811 0.681675 8.2081 2.04502L8.40472 2.39774C8.62069 2.78516 8.72867 2.97887 8.89703 3.10668C9.0654 3.2345 9.27509 3.28194 9.69447 3.37683L10.0763 3.46322C11.5521 3.79713 12.29 3.96409 12.4655 4.52864C12.6411 5.09319 12.1381 5.68144 11.1319 6.85795L10.8716 7.16233C10.5857 7.49666 10.4428 7.66383 10.3785 7.87063C10.3142 8.07743 10.3358 8.30047 10.379 8.74653L10.4184 9.15264C10.5705 10.7224 10.6465 11.5072 10.1869 11.8561C9.72729 12.205 9.0364 11.8869 7.6546 11.2507L7.29711 11.0861C6.90445 10.9053 6.70811 10.8149 6.5 10.8149C6.29189 10.8149 6.09556 10.9053 5.70289 11.0861L5.3454 11.2507C3.96361 11.8869 3.27271 12.205 2.81309 11.8561C2.35347 11.5072 2.42953 10.7224 2.58164 9.15264L2.62099 8.74653C2.66422 8.30047 2.68583 8.07743 2.62152 7.87063C2.55721 7.66383 2.41426 7.49666 2.12835 7.16233L1.86806 6.85796C0.861949 5.68144 0.358895 5.09319 0.534453 4.52864C0.71001 3.96409 1.44791 3.79713 2.92372 3.46322L3.30553 3.37683C3.72491 3.28194 3.9346 3.2345 4.10297 3.10668C4.27133 2.97887 4.37932 2.78516 4.59528 2.39774L4.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    d="M22.7919 2.04503C23.5519 0.681675 23.9319 0 24.5 0C25.0681 0 25.4481 0.681675 26.2081 2.04502L26.4047 2.39774C26.6207 2.78516 26.7287 2.97887 26.897 3.10668C27.0654 3.2345 27.2751 3.28194 27.6945 3.37683L28.0763 3.46322C29.5521 3.79713 30.29 3.96409 30.4655 4.52864C30.6411 5.09319 30.1381 5.68144 29.1319 6.85795L28.8716 7.16233C28.5857 7.49666 28.4428 7.66383 28.3785 7.87063C28.3142 8.07743 28.3358 8.30047 28.379 8.74653L28.4184 9.15264C28.5705 10.7224 28.6465 11.5072 28.1869 11.8561C27.7273 12.205 27.0364 11.8869 25.6546 11.2507L25.2971 11.0861C24.9044 10.9053 24.7081 10.8149 24.5 10.8149C24.2919 10.8149 24.0956 10.9053 23.7029 11.0861L23.3454 11.2507C21.9636 11.8869 21.2727 12.205 20.8131 11.8561C20.3535 11.5072 20.4295 10.7224 20.5816 9.15264L20.621 8.74653C20.6642 8.30047 20.6858 8.07743 20.6215 7.87063C20.5572 7.66383 20.4143 7.49666 20.1284 7.16233L19.8681 6.85796C18.8619 5.68144 18.3589 5.09319 18.5345 4.52864C18.71 3.96409 19.4479 3.79713 20.9237 3.46322L21.3055 3.37683C21.7249 3.28194 21.9346 3.2345 22.103 3.10668C22.2713 2.97887 22.3793 2.78516 22.5953 2.39774L22.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    d="M40.7919 2.04503C41.5519 0.681675 41.9319 0 42.5 0C43.0681 0 43.4481 0.681675 44.2081 2.04502L44.4047 2.39774C44.6207 2.78516 44.7287 2.97887 44.897 3.10668C45.0654 3.2345 45.2751 3.28194 45.6945 3.37683L46.0763 3.46322C47.5521 3.79713 48.29 3.96409 48.4655 4.52864C48.6411 5.09319 48.1381 5.68144 47.1319 6.85795L46.8716 7.16233C46.5857 7.49666 46.4428 7.66383 46.3785 7.87063C46.3142 8.07743 46.3358 8.30047 46.379 8.74653L46.4184 9.15264C46.5705 10.7224 46.6465 11.5072 46.1869 11.8561C45.7273 12.205 45.0364 11.8869 43.6546 11.2507L43.2971 11.0861C42.9044 10.9053 42.7081 10.8149 42.5 10.8149C42.2919 10.8149 42.0956 10.9053 41.7029 11.0861L41.3454 11.2507C39.9636 11.8869 39.2727 12.205 38.8131 11.8561C38.3535 11.5072 38.4295 10.7224 38.5816 9.15264L38.621 8.74653C38.6642 8.30047 38.6858 8.07743 38.6215 7.87063C38.5572 7.66383 38.4143 7.49666 38.1284 7.16233L37.8681 6.85796C36.8619 5.68144 36.3589 5.09319 36.5345 4.52864C36.71 3.96409 37.4479 3.79713 38.9237 3.46322L39.3055 3.37683C39.7249 3.28194 39.9346 3.2345 40.103 3.10668C40.2713 2.97887 40.3793 2.78516 40.5953 2.39774L40.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    d="M58.7919 2.04503C59.5519 0.681675 59.9319 0 60.5 0C61.0681 0 61.4481 0.681675 62.2081 2.04502L62.4047 2.39774C62.6207 2.78516 62.7287 2.97887 62.897 3.10668C63.0654 3.2345 63.2751 3.28194 63.6945 3.37683L64.0763 3.46322C65.5521 3.79713 66.29 3.96409 66.4655 4.52864C66.6411 5.09319 66.1381 5.68144 65.1319 6.85795L64.8716 7.16233C64.5857 7.49666 64.4428 7.66383 64.3785 7.87063C64.3142 8.07743 64.3358 8.30047 64.379 8.74653L64.4184 9.15264C64.5705 10.7224 64.6465 11.5072 64.1869 11.8561C63.7273 12.205 63.0364 11.8869 61.6546 11.2507L61.2971 11.0861C60.9044 10.9053 60.7081 10.8149 60.5 10.8149C60.2919 10.8149 60.0956 10.9053 59.7029 11.0861L59.3454 11.2507C57.9636 11.8869 57.2727 12.205 56.8131 11.8561C56.3535 11.5072 56.4295 10.7224 56.5816 9.15264L56.621 8.74653C56.6642 8.30047 56.6858 8.07743 56.6215 7.87063C56.5572 7.66383 56.4143 7.49666 56.1284 7.16233L55.8681 6.85796C54.8619 5.68144 54.3589 5.09319 54.5345 4.52864C54.71 3.96409 55.4479 3.79713 56.9237 3.46322L57.3055 3.37683C57.7249 3.28194 57.9346 3.2345 58.103 3.10668C58.2713 2.97887 58.3793 2.78516 58.5953 2.39774L58.7919 2.04503Z"
                                                    fill="#F1A501"
                                                />
                                                <path
                                                    opacity="0.3"
                                                    d="M76.7919 2.04503C77.5519 0.681675 77.9319 0 78.5 0C79.0681 0 79.4481 0.681675 80.2081 2.04502L80.4047 2.39774C80.6207 2.78516 80.7287 2.97887 80.897 3.10668C81.0654 3.2345 81.2751 3.28194 81.6945 3.37683L82.0763 3.46322C83.5521 3.79713 84.29 3.96409 84.4655 4.52864C84.6411 5.09319 84.1381 5.68144 83.1319 6.85795L82.8716 7.16233C82.5857 7.49666 82.4428 7.66383 82.3785 7.87063C82.3142 8.07743 82.3358 8.30047 82.379 8.74653L82.4184 9.15264C82.5705 10.7224 82.6465 11.5072 82.1869 11.8561C81.7273 12.205 81.0364 11.8869 79.6546 11.2507L79.2971 11.0861C78.9044 10.9053 78.7081 10.8149 78.5 10.8149C78.2919 10.8149 78.0956 10.9053 77.7029 11.0861L77.3454 11.2507C75.9636 11.8869 75.2727 12.205 74.8131 11.8561C74.3535 11.5072 74.4295 10.7224 74.5816 9.15264L74.621 8.74653C74.6642 8.30047 74.6858 8.07743 74.6215 7.87063C74.5572 7.66383 74.4143 7.49666 74.1284 7.16233L73.8681 6.85796C72.8619 5.68144 72.3589 5.09319 72.5345 4.52864C72.71 3.96409 73.4479 3.79713 74.9237 3.46322L75.3055 3.37683C75.7249 3.28194 75.9346 3.2345 76.103 3.10668C76.2713 2.97887 76.3793 2.78516 76.5953 2.39774L76.7919 2.04503Z"
                                                    fill="#7780A1"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black py-10 md:py-0">
                <div className="container">
                    <div className="grid items-center md:grid-cols-2">
                        <div className="py-5">
                            <div className="text-center md:ltr:text-left md:rtl:text-right lg:w-3/4">
                                <div className="mb-10">
                                    <h6 className="mb-4 text-lg font-extrabold uppercase text-secondary">
                                        <span className="text-primary">/</span> get started
                                    </h6>
                                    <h2 className="text-3xl font-black leading-tight text-white md:text-[40px]">We Help Companies Move Faster</h2>
                                </div>
                                <div className="mt-8">
                                    <Link href="#" className="bg-secondary py-3 px-5 font-bold text-white transition hover:bg-primary">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 pr-4 md:pr-12">
                            <img src="/assets/images/personal-portfolio/contact-email.png" alt="" data-aos="fade-down" data-aos-duration="1000" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PersonalPortfolio;
