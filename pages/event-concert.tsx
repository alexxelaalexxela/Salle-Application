import Link from 'next/link';
import CountUp from 'react-countup';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import { useEffect, useState, useRef } from 'react';
import Modal from '../components/Modal';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import Head from 'next/head';

const EventConcert = () => {
    const [activeTab, setActiveTab] = useState<string>('all-events');
    const [isOpen, setIsOpen] = useState<any>(false);
    const [photoIndex, setPhotoIndex] = useState<any>(0);
    const visible = useRef(false);
    const index: any = useRef(null);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;
    const dialog: any = useRef();

    const items = [
        '/assets/images/event-concert/gallery1.jpg',
        '/assets/images/event-concert/gallery2.jpg',
        '/assets/images/event-concert/gallery3.jpg',
        '/assets/images/event-concert/gallery4.jpg',
        '/assets/images/event-concert/gallery5.jpg',
        '/assets/images/event-concert/gallery6.jpg',
    ];

    useEffect(() => {
        window['global'] = window as never;
    }, []);

    return (
        <div className="overflow-hidden">
            <Head>
                <title>Event Concert | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <section className="overflow-hidden bg-black bg-gradient-to-r from-secondary/10 to-primary/10">
                <div className="relative bg-[url(/assets/images/event-concert/banner-bg-img.png)] bg-cover bg-center bg-no-repeat py-32 text-white sm:py-40 lg:py-52">
                    <div className="absolute top-6 ltr:left-0 rtl:right-0 lg:top-14" data-aos="fade-down" data-aos-duration="1000">
                        <img src="/assets/images/event-concert/Light.svg" className="rtl:rotate-y-0 ltr:rotate-y-180" alt="" />
                    </div>
                    <div className="absolute top-6 ltr:right-0 rtl:left-0 lg:top-14" data-aos="fade-down" data-aos-duration="1000">
                        <img src="/assets/images/event-concert/Light.svg" className="rtl:rotate-y-180" alt="" />
                    </div>
                    <div
                        className="absolute bottom-0 hidden w-80 ltr:right-12 rtl:left-12 sm:block lg:bottom-12 lg:w-[580px]"
                        data-aos="fade-up-left"
                        data-aos-duration="1000"
                    >
                        <img src="/assets/images/event-concert/ticket.png" className="rtl:rotate-y-180" alt="" />
                    </div>
                    <div className="container">
                        <div className="relative z-[1px] text-center ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="text-4xl font-black uppercase italic md:text-6xl lg:text-[80px] lg:leading-[100px]">Find amazing events</h2>
                            <img src="/assets/images/event-concert/banner-text.png" className="py-2 sm:py-0" alt="" />
                            <div className="flex items-center justify-center gap-6 sm:justify-start">
                                <h3 className="text-4xl font-black uppercase italic md:text-6xl lg:text-[80px] lg:leading-[100px]">your city</h3>
                                <img src="/assets/images/event-concert/round-text.png" className="w-12 animate-spin-slow duration-1000 md:w-24" alt="" />
                            </div>
                            <button
                                type="button"
                                className="mt-5 border-2 border-white bg-black py-[18px] px-[30px] text-lg font-extrabold italic text-white duration-500 hover:shadow-[4px_4px_0px_rgba(255,255,255,1)] lg:mt-10"
                            >
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative">
                <span className="block h-[200px] w-full bg-white dark:bg-gray-dark"></span>
                <div className="absolute -bottom-7 hidden ltr:left-0 rtl:right-0 lg:block" data-aos="fade-up-right" data-aos-duration="1000">
                    <img src="/assets/images/event-concert/music.png" className="rtl:rotate-y-180" alt="" />
                </div>
                <div className="container">
                    <div className="-mt-80 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-7">
                        <div className="relative bg-primary py-7 px-7 text-white lg:px-10" data-aos="fade-up" data-aos-duration="1000">
                            <span className="absolute inset-0">
                                <img src="/assets/images/event-concert/card.svg" alt="" />
                            </span>
                            <div className="relative z-[1] space-y-5">
                                <div className="flex items-center gap-3 sm:gap-6">
                                    <div>
                                        <p>Friday, 12 August 2023</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M15.728 13.7279L10.4558 19L5.18374 13.7279C4.14103 12.6852 3.43094 11.3567 3.14326 9.91037C2.85558 8.46408 3.00324 6.96497 3.56755 5.60259C4.13187 4.24022 5.08751 3.07578 6.31361 2.25653C7.53972 1.43728 8.98122 1 10.4558 1C11.9305 1 13.372 1.43728 14.5981 2.25653C15.8242 3.07578 16.7798 4.24022 17.3441 5.60259C17.9085 6.96497 18.0561 8.46408 17.7684 9.91037C17.4808 11.3567 16.7707 12.6852 15.728 13.7279ZM10.4558 10.1126C10.8953 10.1126 11.3167 9.93807 11.6274 9.62735C11.9381 9.31663 12.1127 8.8952 12.1127 8.45578C12.1127 8.01635 11.9381 7.59493 11.6274 7.28421C11.3167 6.97349 10.8953 6.79893 10.4558 6.79893C10.0164 6.79893 9.595 6.97349 9.28427 7.28421C8.97355 7.59493 8.79899 8.01635 8.79899 8.45578C8.79899 8.8952 8.97355 9.31663 9.28427 9.62735C9.595 9.93807 10.0164 10.1126 10.4558 10.1126Z"
                                                    fill="#08111F"
                                                />
                                            </svg>
                                        </span>
                                        <p className="font-bold">New York</p>
                                    </div>
                                </div>
                                <h3 className="max-w-[243px] text-3xl font-bold leading-[42px]">Sparkling dance sunday night</h3>
                                <button type="button" className="btn rounded-none bg-white/20 italic text-white hover:bg-secondary">
                                    Book your seat
                                </button>
                            </div>
                        </div>
                        <div className="relative bg-secondary py-7 px-7 text-white lg:px-10" data-aos="fade-up" data-aos-duration="1000">
                            <span className="absolute inset-0">
                                <img src="/assets/images/event-concert/card.svg" alt="" />
                            </span>
                            <div className="relative z-[1] space-y-5">
                                <div className="flex items-center gap-3 sm:gap-6">
                                    <div>
                                        <p>Saturday, 30 May 2023</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <path
                                                    d="M15.728 13.7279L10.4558 19L5.18374 13.7279C4.14103 12.6852 3.43094 11.3567 3.14326 9.91037C2.85558 8.46408 3.00324 6.96497 3.56755 5.60259C4.13187 4.24022 5.08751 3.07578 6.31361 2.25653C7.53972 1.43728 8.98122 1 10.4558 1C11.9305 1 13.372 1.43728 14.5981 2.25653C15.8242 3.07578 16.7798 4.24022 17.3441 5.60259C17.9085 6.96497 18.0561 8.46408 17.7684 9.91037C17.4808 11.3567 16.7707 12.6852 15.728 13.7279ZM10.4558 10.1126C10.8953 10.1126 11.3167 9.93807 11.6274 9.62735C11.9381 9.31663 12.1127 8.8952 12.1127 8.45578C12.1127 8.01635 11.9381 7.59493 11.6274 7.28421C11.3167 6.97349 10.8953 6.79893 10.4558 6.79893C10.0164 6.79893 9.595 6.97349 9.28427 7.28421C8.97355 7.59493 8.79899 8.01635 8.79899 8.45578C8.79899 8.8952 8.97355 9.31663 9.28427 9.62735C9.595 9.93807 10.0164 10.1126 10.4558 10.1126Z"
                                                    fill="#08111F"
                                                />
                                            </svg>
                                        </span>
                                        <p className="font-bold">California</p>
                                    </div>
                                </div>
                                <h3 className="max-w-[243px] text-3xl font-bold leading-[42px]">Musical evening with Elbert</h3>
                                <button type="button" className="btn rounded-none bg-white/20 italic text-white hover:bg-primary">
                                    Book your seat
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-t from-white/50 to-transparent pt-28 pb-12 dark:from-white/[0.02] md:pt-40 lg:pb-20">
                <img src="/assets/images/event-concert/about-text.png" alt="" className="absolute top-12 left-1/2 -translate-x-1/2 md:top-24" />
                <div className="container">
                    <div className="relative text-center">
                        <h4 className="relative inline-block text-3xl font-black italic text-black dark:text-white md:text-6xl md:leading-[90px]">
                            ABOUT US
                            <span className="absolute -top-10 -left-[60px] whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text p-[30px] font-reey text-3xl font-normal text-transparent md:text-[40px]">
                                How we launched
                            </span>
                        </h4>
                        <h6 className="mx-auto mt-2.5 max-w-[610px] text-base font-semibold uppercase italic leading-[32px]">
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45
                            BC, making it over 2000 years old.
                        </h6>
                    </div>
                    <div className="mt-12 flex flex-col items-center lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="relative w-full flex-none lg:max-w-[555px]">
                            <img src="/assets/images/event-concert/gallery1.jpg" className="h-full w-full object-cover" alt="" />
                            <span className="absolute inset-0 bg-black/30"></span>
                            <button
                                type="button"
                                className="absolute top-1/2 left-1/2 flex h-[60px] w-[60px] -translate-y-1/2 -translate-x-1/2 items-center justify-center bg-white/40"
                                onClick={() => dialog.current.open()}
                            >
                                <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
                                    <path
                                        d="M2.40668 1.04988C2.20606 0.916037 1.97291 0.839108 1.73203 0.827287C1.49116 0.815465 1.25159 0.869194 1.03883 0.982755C0.826077 1.09631 0.648107 1.26545 0.523872 1.47216C0.399638 1.67886 0.333789 1.91539 0.333344 2.15655V23.8432C0.333789 24.0844 0.399638 24.3209 0.523872 24.5276C0.648107 24.7343 0.826077 24.9035 1.03883 25.017C1.25159 25.1306 1.49116 25.1843 1.73203 25.1725C1.97291 25.1607 2.20606 25.0837 2.40668 24.9499L18.67 14.1099C18.8529 13.9882 19.0029 13.8232 19.1066 13.6295C19.2104 13.4359 19.2646 13.2196 19.2646 12.9999C19.2646 12.7802 19.2104 12.5639 19.1066 12.3703C19.0029 12.1766 18.8529 12.0116 18.67 11.8899L2.40668 1.04988Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 bg-white p-5 uppercase italic dark:bg-gray-dark sm:p-[30px]">
                            <h4 className="text-2xl font-black leading-10 text-black dark:text-white">Get access to the full conference experience.</h4>
                            <p className="mt-2.5 text-sm font-semibold leading-8">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature
                                fror 45 BC, making it over 2000 years old.
                            </p>
                            <Link href="#" className="btn mt-7 rounded-none bg-secondary italic text-white hover:bg-primary">
                                read more
                            </Link>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col items-center lg:mt-0 lg:flex-row" data-aos="fade-up" data-aos-duration="1000">
                        <div className="order-2 flex-1 bg-white p-5 uppercase italic dark:bg-gray-dark sm:p-[30px] lg:order-1">
                            <h4 className="text-2xl font-black leading-10 text-black dark:text-white">feel the rhythm of your heart's music</h4>
                            <p className="mt-2.5 text-sm font-semibold leading-8">
                                Lorem Ipsum is simply dummy text of the printing and setting industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s.
                            </p>
                            <Link href="#" className="btn mt-7 rounded-none bg-secondary italic text-white hover:bg-primary">
                                read more
                            </Link>
                        </div>
                        <div className="relative order-1 w-full flex-none lg:order-2 lg:max-w-[555px]">
                            <img src="/assets/images/event-concert/gallery3.jpg" className="h-full w-full object-cover" alt="" />
                            <span className="absolute inset-0 bg-black/30"></span>
                            <button
                                type="button"
                                className="absolute top-1/2 left-1/2 flex h-[60px] w-[60px] -translate-y-1/2 -translate-x-1/2 items-center justify-center bg-white/40"
                                onClick={() => dialog.current.open()}
                            >
                                <svg width="20" height="26" viewBox="0 0 20 26" fill="none">
                                    <path
                                        d="M2.40668 1.04988C2.20606 0.916037 1.97291 0.839108 1.73203 0.827287C1.49116 0.815465 1.25159 0.869194 1.03883 0.982755C0.826077 1.09631 0.648107 1.26545 0.523872 1.47216C0.399638 1.67886 0.333789 1.91539 0.333344 2.15655V23.8432C0.333789 24.0844 0.399638 24.3209 0.523872 24.5276C0.648107 24.7343 0.826077 24.9035 1.03883 25.017C1.25159 25.1306 1.49116 25.1843 1.73203 25.1725C1.97291 25.1607 2.20606 25.0837 2.40668 24.9499L18.67 14.1099C18.8529 13.9882 19.0029 13.8232 19.1066 13.6295C19.2104 13.4359 19.2646 13.2196 19.2646 12.9999C19.2646 12.7802 19.2104 12.5639 19.1066 12.3703C19.0029 12.1766 18.8529 12.0116 18.67 11.8899L2.40668 1.04988Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Modal
                ref={dialog}
                width="960"
                closeByOverlay={true}
                closeBtn={true}
                closeStyle="floating"
                contentClass="pt-8 px-0 pb-0 !bg-transparent"
                closeBtnClass="!top-0 ltr:!right-0 rtl:!right-auto rtl:!left-0 !text-white !text-3xl"
                modal={false}
            >
                <div className="bg-black !p-4 dark:bg-gray-dark">
                    <div className="relative">
                        <div className="aspect-video">
                            <iframe
                                className="absolute top-0 left-0 h-full w-full"
                                src="https://www.youtube.com/embed/D0UnqGm_miA"
                                frameBorder="0"
                                allowFullScreen
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </Modal>

            <section className="relative bg-gradient-to-t from-white/50 to-transparent py-14 dark:from-white/[0.02] lg:py-24">
                <img src="/assets/images/event-concert/party-img.png" alt="" className="absolute top-4 left-1/2 -translate-x-1/2 md:top-8" />
                <div className="container">
                    <div className="relative mb-12 text-center">
                        <h4 className="relative inline-block text-3xl font-black italic text-black dark:text-white md:text-6xl md:leading-[90px]">
                            PARTY HOSTS
                            <span className="absolute -top-[50px] -left-[60px] whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text p-[30px] font-reey text-3xl font-normal text-transparent md:-top-10 md:text-[40px]">
                                Meet our
                            </span>
                        </h4>
                        <h6 className="mx-auto mt-2.5 max-w-[610px] text-base font-semibold uppercase italic leading-[32px]">
                            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of
                            text.
                        </h6>
                    </div>
                    <Swiper
                        loop={true}
                        slidesPerView="auto"
                        spaceBetween={30}
                        speed={2500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
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
                            <div className="text-center text-base italic">
                                <div className="overflow-hidden rounded-full shadow-[4px_4px_0px_rgba(180,118,229,1)]">
                                    <img src="/assets/images/event-concert/party1.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <h5 className="mt-5 text-base font-black uppercase text-black dark:text-white">Marty Blum</h5>
                                <p className="mt-2 text-base font-semibold">Owner</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center text-base italic">
                                <div className="overflow-hidden rounded-full shadow-[4px_4px_0px_rgba(180,118,229,1)]">
                                    <img src="/assets/images/event-concert/party2.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <h5 className="mt-5 text-base font-black uppercase text-black dark:text-white">Marty Blum</h5>
                                <p className="mt-2 text-base font-semibold">Owner</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center text-base italic">
                                <div className="overflow-hidden rounded-full shadow-[4px_4px_0px_rgba(180,118,229,1)]">
                                    <img src="/assets/images/event-concert/party3.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <h5 className="mt-5 text-base font-black uppercase text-black dark:text-white">Marty Blum</h5>
                                <p className="mt-2 text-base font-semibold">Owner</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center text-base italic">
                                <div className="overflow-hidden rounded-full shadow-[4px_4px_0px_rgba(180,118,229,1)]">
                                    <img src="/assets/images/event-concert/party4.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <h5 className="mt-5 text-base font-black uppercase text-black dark:text-white">Marty Blum</h5>
                                <p className="mt-2 text-base font-semibold">Owner</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center text-base italic">
                                <div className="overflow-hidden rounded-full shadow-[4px_4px_0px_rgba(180,118,229,1)]">
                                    <img src="/assets/images/event-concert/party5.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <h5 className="mt-5 text-base font-black uppercase text-black dark:text-white">Marty Blum</h5>
                                <p className="mt-2 text-base font-semibold">Owner</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="text-center text-base italic">
                                <div className="overflow-hidden rounded-full shadow-[4px_4px_0px_rgba(180,118,229,1)]">
                                    <img src="/assets/images/event-concert/party6.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <h5 className="mt-5 text-base font-black uppercase text-black dark:text-white">Marty Blum</h5>
                                <p className="mt-2 text-base font-semibold">Owner</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <section className="bg-black bg-[url(/assets/images/event-concert/number-bg.png)] bg-cover bg-center bg-no-repeat py-12 dark:bg-gray-dark lg:py-20">
                <div className="container">
                    <div className="grid grid-cols-2 gap-5 text-center italic md:grid-cols-4">
                        <div>
                            <div className="text-6xl font-black leading-[75px] text-white">
                                <CountUp start={0} end={500} duration={10} suffix="+"></CountUp>
                            </div>
                            <p className="text-lf mt-2.5 font-bold">MUSIC HOURS</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black leading-[75px] text-white">
                                <CountUp start={0} end={48} duration={10} suffix="+"></CountUp>
                            </div>
                            <p className="text-lf mt-2.5 font-bold">ARTISTS</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black leading-[75px] text-white">
                                <CountUp start={0} end={50} duration={10} suffix="+"></CountUp>
                            </div>
                            <p className="text-lf mt-2.5 font-bold">ACRES OF FUN</p>
                        </div>
                        <div>
                            <div className="text-6xl font-black leading-[75px] text-white">
                                <CountUp start={0} end={20} duration={10} suffix="+"></CountUp>
                            </div>
                            <p className="text-lf mt-2.5 font-bold">CAPACITY</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-t from-white/50 to-transparent py-16 dark:from-white/[0.02] lg:py-28">
                <img src="/assets/images/event-concert/photogallery.png" alt="" className="absolute top-4 left-1/2 -translate-x-1/2 md:top-8" />
                <div className="container">
                    <div className="flex flex-col items-center justify-between gap-10 sm:flex-row sm:gap-0">
                        <div className="relative">
                            <h4 className="relative inline-block text-3xl font-black italic text-black dark:text-white md:text-6xl md:leading-[90px]">
                                PHOTOGALLERY
                                <span className="absolute -top-[70px] -left-[60px] whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text p-[50px] font-reey text-3xl font-normal text-transparent md:text-[40px]">
                                    Gallery
                                </span>
                            </h4>
                        </div>
                        <div>
                            <Link
                                href="#"
                                className="mt-5 border-2 border-black bg-white py-[18px] px-[30px] text-lg font-extrabold uppercase italic text-black duration-500 hover:shadow-[4px_4px_0px_rgba(000,000,000,1)] lg:mt-10"
                            >
                                VISIT GALLERY
                            </Link>
                        </div>
                    </div>
                    {isOpen && (
                        <Lightbox
                            mainSrc={items[photoIndex]}
                            nextSrc={items[(photoIndex + 1) % items.length]}
                            prevSrc={items[(photoIndex + items.length - 1) % items.length]}
                            enableZoom
                            onImageLoad={() => {
                                window.dispatchEvent(new Event('resize'));
                            }}
                            onCloseRequest={() => setIsOpen(false)}
                            onMovePrevRequest={() => setPhotoIndex((photoIndex + items.length - 1) % items.length)}
                            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % items.length)}
                        />
                    )}
                    <div className="mt-[50px] grid gap-[2px] sm:grid-cols-2">
                        <div className="group relative overflow-hidden">
                            <img
                                src="/assets/images/event-concert/gallery1.jpg"
                                alt=""
                                className="h-full w-full rotate-0 object-cover duration-500 hover:rotate-2 hover:scale-110"
                            />
                            <div className="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100">
                                <Link
                                    href="#"
                                    scroll={false}
                                    data-fancybox="gallery"
                                    className="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(0);
                                    }}
                                >
                                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.66663V25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.66667 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src="/assets/images/event-concert/gallery2.jpg"
                                alt=""
                                className="h-full w-full rotate-0 object-cover duration-500 hover:rotate-2 hover:scale-110"
                            />
                            <div className="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100">
                                <Link
                                    href="#"
                                    scroll={false}
                                    data-fancybox="gallery"
                                    className="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(1);
                                    }}
                                >
                                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.66663V25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.66667 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src="/assets/images/event-concert/gallery3.jpg"
                                alt=""
                                className="h-full w-full rotate-0 object-cover duration-500 hover:rotate-2 hover:scale-110"
                            />
                            <div className="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100">
                                <Link
                                    href="#"
                                    scroll={false}
                                    data-fancybox="gallery"
                                    className="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(2);
                                    }}
                                >
                                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.66663V25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.66667 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src="/assets/images/event-concert/gallery4.jpg"
                                alt=""
                                className="h-full w-full rotate-0 object-cover duration-500 hover:rotate-2 hover:scale-110"
                            />
                            <div className="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100">
                                <Link
                                    href="#"
                                    scroll={false}
                                    data-fancybox="gallery"
                                    className="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(3);
                                    }}
                                >
                                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.66663V25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.66667 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src="/assets/images/event-concert/gallery5.jpg"
                                alt=""
                                className="h-full w-full rotate-0 object-cover duration-500 hover:rotate-2 hover:scale-110"
                            />
                            <div className="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100">
                                <Link
                                    href="#"
                                    scroll={false}
                                    data-fancybox="gallery"
                                    className="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(4);
                                    }}
                                >
                                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.66663V25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.66667 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden">
                            <img
                                src="/assets/images/event-concert/gallery6.jpg"
                                alt=""
                                className="h-full w-full rotate-0 object-cover duration-500 hover:rotate-2 hover:scale-110"
                            />
                            <div className="absolute inset-0 m-auto flex scale-0 items-center justify-center bg-black/60 text-white transition duration-700 group-hover:scale-100">
                                <Link
                                    href="#"
                                    scroll={false}
                                    data-fancybox="gallery"
                                    className="flex h-[60px] w-[60px] items-center justify-center border border-white text-white"
                                    onClick={() => {
                                        setIsOpen(true);
                                        setPhotoIndex(5);
                                    }}
                                >
                                    <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 6.66663V25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6.66667 16H25.3333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-gradient-to-t from-white/50 to-transparent py-12 dark:from-white/[0.02] lg:py-24">
                <img src="/assets/images/event-concert/upcoming-text.png" alt="" className="absolute top-4 left-1/2 -translate-x-1/2 md:top-8" />
                <div className="container">
                    <div className="relative text-center">
                        <h4 className="relative inline-block text-3xl font-black italic text-black dark:text-white md:text-6xl md:leading-[90px]">
                            UPCOMING PARTES
                            <span className="absolute -top-[50px] -left-[60px] whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text p-[30px] font-reey text-3xl font-normal text-transparent md:-top-10 md:text-[40px]">
                                Dates for our
                            </span>
                        </h4>
                        <p className="mx-auto mt-5 max-w-[616px] text-base font-semibold uppercase">
                            View our event calendar to see upcoming events. Purchase tickets, VIP Bar Cards, or reserve VIP tables with bottle service.
                        </p>
                    </div>
                    <ul className="filters portfolio-filter mt-[50px] flex flex-row gap-[30px] overflow-auto whitespace-nowrap pb-2.5 italic">
                        <li className={`filter ${activeTab === 'all-events' ? 'active' : ''}`}>
                            <button
                                type="button"
                                className="rounded-none bg-gray/[0.06] py-[25px] px-[30px] text-base font-extrabold italic"
                                onClick={() => setActiveTab('all-events')}
                            >
                                All events
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'first-day' ? 'active' : ''}`}>
                            <button
                                type="button"
                                className="group bg-gray/[0.06] py-[15px] px-8 text-center duration-200 hover:bg-secondary"
                                onClick={() => setActiveTab('first-day')}
                            >
                                <h6 className="text-sm font-extrabold group-hover:text-white">FIRST DAY</h6>
                                <span className="mt-[6px] text-[12px] font-bold leading-4 text-black group-hover:text-white dark:text-white">15 Fab, 2023</span>
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'second-day' ? 'active' : ''}`}>
                            <button
                                type="button"
                                className="group bg-gray/[0.06] py-[15px] px-8 text-center duration-200 hover:bg-secondary"
                                onClick={() => setActiveTab('second-day')}
                            >
                                <h6 className="text-sm font-extrabold group-hover:text-white">SECOND DAY</h6>
                                <span className="mt-[6px] text-[12px] font-bold leading-4 text-black group-hover:text-white dark:text-white">16 Fab, 2023</span>
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'third-day' ? 'active' : ''}`}>
                            <button
                                type="button"
                                className="group bg-gray/[0.06] py-[15px] px-8 text-center duration-200 hover:bg-secondary"
                                onClick={() => setActiveTab('third-day')}
                            >
                                <h6 className="text-sm font-extrabold group-hover:text-white">THIRD DAY</h6>
                                <span className="mt-[6px] text-[12px] font-bold leading-4 text-black group-hover:text-white dark:text-white">17 Fab, 2023</span>
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'fourth-day' ? 'active' : ''}`}>
                            <button
                                type="button"
                                className="group bg-gray/[0.06] py-[15px] px-8 text-center duration-200 hover:bg-secondary"
                                onClick={() => setActiveTab('fourth-day')}
                            >
                                <h6 className="text-sm font-extrabold group-hover:text-white">FOURTH DAY</h6>
                                <span className="mt-[6px] text-[12px] font-bold leading-4 text-black group-hover:text-white dark:text-white">18 Fab, 2023</span>
                            </button>
                        </li>
                        <li className={`filter ${activeTab === 'fifty-day' ? 'active' : ''}`}>
                            <button
                                type="button"
                                className="group bg-gray/[0.06] py-[15px] px-8 text-center duration-200 hover:bg-secondary"
                                onClick={() => setActiveTab('fifty-day')}
                            >
                                <span className="block text-sm font-extrabold group-hover:text-white">FIFTY DAY</span>
                                <span className="mt-[6px] text-[12px] font-bold leading-4 text-black group-hover:text-white dark:text-white">19 Fab, 2023</span>
                            </button>
                        </li>
                    </ul>

                    {activeTab === 'all-events' ? (
                        <div className="projects mt-[30px] grid gap-[30px] italic lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                            <div
                                className={`project flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right ${
                                    activeTab === 'all-events' ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="h-20 w-20 flex-none overflow-hidden rounded-[80px] border-[3px] border-gray/30">
                                    <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                        <p>Sat, Feb 11</p>
                                        <span className="font-bold opacity-20">|</span>
                                        <p>11:30 AM</p>
                                        <span className="opacity-20">|</span>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path
                                                        d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                        fill="#47BDFF"
                                                    />
                                                </svg>
                                            </span>
                                            <p>New York</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                    >
                                        Team With At Least Three Conference Titles
                                    </Link>
                                    <p>
                                        By <span className="font-bold text-secondary">Marty Blum</span>, Spark 99 Event Management
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`project flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right ${
                                    activeTab === 'all-events' ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="h-20 w-20 flex-none overflow-hidden rounded-[80px] border-[3px] border-gray/30">
                                    <img src="/assets/images/event-concert/parties2.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                        <p>Sat, Feb 11</p>
                                        <span className="font-bold opacity-20">|</span>
                                        <p>11:30 AM</p>
                                        <span className="opacity-20">|</span>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path
                                                        d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                        fill="#47BDFF"
                                                    />
                                                </svg>
                                            </span>
                                            <p>New York</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                    >
                                        Team With At Least Three Conference Titles
                                    </Link>
                                    <p>
                                        By <span className="font-bold text-secondary">Marty Blum</span>, Spark 99 Event Management
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`project flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right ${
                                    activeTab === 'all-events' ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="h-20 w-20 flex-none overflow-hidden rounded-[80px] border-[3px] border-gray/30">
                                    <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                        <p>Sat, Feb 11</p>
                                        <span className="font-bold opacity-20">|</span>
                                        <p>11:30 AM</p>
                                        <span className="opacity-20">|</span>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path
                                                        d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                        fill="#47BDFF"
                                                    />
                                                </svg>
                                            </span>
                                            <p>New York</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                    >
                                        Team With At Least Three Conference Titles
                                    </Link>
                                    <p>
                                        By <span className="font-bold text-secondary">Marty Blum</span>, Spark 99 Event Management
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`project flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right ${
                                    activeTab === 'all-events' ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="h-20 w-20 flex-none overflow-hidden rounded-[80px] border-[3px] border-gray/30">
                                    <img src="/assets/images/event-concert/parties2.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                        <p>Sat, Feb 11</p>
                                        <span className="font-bold opacity-20">|</span>
                                        <p>11:30 AM</p>
                                        <span className="opacity-20">|</span>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path
                                                        d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                        fill="#47BDFF"
                                                    />
                                                </svg>
                                            </span>
                                            <p>New York</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                    >
                                        Team With At Least Three Conference Titles
                                    </Link>
                                    <p>
                                        By <span className="font-bold text-secondary">Marty Blum</span>, Spark 99 Event Management
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`project flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right ${
                                    activeTab === 'all-events' ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="h-20 w-20 flex-none overflow-hidden rounded-[80px] border-[3px] border-gray/30">
                                    <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                        <p>Sat, Feb 11</p>
                                        <span className="font-bold opacity-20">|</span>
                                        <p>11:30 AM</p>
                                        <span className="opacity-20">|</span>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path
                                                        d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                        fill="#47BDFF"
                                                    />
                                                </svg>
                                            </span>
                                            <p>New York</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                    >
                                        Team With At Least Three Conference Titles
                                    </Link>
                                    <p>
                                        By <span className="font-bold text-secondary">Marty Blum</span>, Spark 99 Event Management
                                    </p>
                                </div>
                            </div>
                            <div
                                className={`project flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right ${
                                    activeTab === 'all-events' ? 'block' : 'hidden'
                                }`}
                            >
                                <div className="h-20 w-20 flex-none overflow-hidden rounded-[80px] border-[3px] border-gray/30">
                                    <img src="/assets/images/event-concert/parties2.jpg" className="h-full w-full object-cover" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                        <p>Sat, Feb 11</p>
                                        <span className="font-bold opacity-20">|</span>
                                        <p>11:30 AM</p>
                                        <span className="opacity-20">|</span>
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path
                                                        d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                        fill="#47BDFF"
                                                    />
                                                </svg>
                                            </span>
                                            <p>New York</p>
                                        </div>
                                    </div>
                                    <Link
                                        href="#"
                                        className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                    >
                                        Team With At Least Three Conference Titles
                                    </Link>
                                    <p>
                                        By <span className="font-bold text-secondary">Marty Blum</span>, Spark 99 Event Management
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {activeTab === 'first-day' ? (
                        <div className="projects mt-[30px] grid gap-[30px] italic lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                            <div className={`project ${activeTab === 'first-day' ? 'block' : 'hidden'}`}>
                                <div className="flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                                    <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-[3px] border-gray/30">
                                        <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                            <p>Sun, Feb 12</p>
                                            <span className="font-bold opacity-20">|</span>
                                            <p>3:30 AM</p>
                                            <span className="opacity-20">|</span>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path
                                                            d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                            fill="#47BDFF"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Seattle</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                        >
                                            FREE Live Jazz Music - Jam session & jazz Open Mic - Sundays!
                                        </Link>
                                        <p>
                                            By <span className="font-bold text-secondary">Vicente Sarmiento</span>, orei Jazz & Company
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className={`project ${activeTab === 'first-day' ? 'block' : 'hidden'}`}>
                                <div className="flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                                    <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-[3px] border-gray/30">
                                        <img src="/assets/images/event-concert/parties2.jpg" className="h-full w-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                            <p>Sun, Feb 12</p>
                                            <span className="font-bold opacity-20">|</span>
                                            <p>3:30 AM</p>
                                            <span className="opacity-20">|</span>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path
                                                            d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                            fill="#47BDFF"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Seattle</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                        >
                                            FREE Live Jazz Music - Jam session & jazz Open Mic - Sundays!
                                        </Link>
                                        <p>
                                            By <span className="font-bold text-secondary">Vicente Sarmiento</span>, orei Jazz & Company
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {activeTab === 'second-day' ? (
                        <div className="projects mt-[30px] grid gap-[30px] italic lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                            <div className={`project ${activeTab === 'second-day' ? 'block' : 'hidden'}`}>
                                <div className="flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                                    <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-[3px] border-gray/30">
                                        <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                            <p>Sun, Feb 12</p>
                                            <span className="font-bold opacity-20">|</span>
                                            <p>3:30 AM</p>
                                            <span className="opacity-20">|</span>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path
                                                            d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                            fill="#47BDFF"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Seattle</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                        >
                                            FREE Live Jazz Music - Jam session & jazz Open Mic - Sundays!
                                        </Link>
                                        <p>
                                            By <span className="font-bold text-secondary">Vicente Sarmiento</span>, orei Jazz & Company
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {activeTab === 'third-day' ? (
                        <div className="projects mt-[30px] grid gap-[30px] italic lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                            <div className={`project ${activeTab === 'third-day' ? 'block' : 'hidden'}`}>
                                <div className="flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                                    <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-[3px] border-gray/30">
                                        <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                            <p>Sun, Feb 12</p>
                                            <span className="font-bold opacity-20">|</span>
                                            <p>3:30 AM</p>
                                            <span className="opacity-20">|</span>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path
                                                            d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                            fill="#47BDFF"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Seattle</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                        >
                                            FREE Live Jazz Music - Jam session & jazz Open Mic - Sundays!
                                        </Link>
                                        <p>
                                            By <span className="font-bold text-secondary">Vicente Sarmiento</span>, orei Jazz & Company
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {activeTab === 'fourth-day' ? (
                        <div className="projects mt-[30px] grid gap-[30px] italic lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                            <div className={`project ${activeTab === 'fourth-day' ? 'block' : 'hidden'}`}>
                                <div className="flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                                    <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-[3px] border-gray/30">
                                        <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                            <p>Sun, Feb 12</p>
                                            <span className="font-bold opacity-20">|</span>
                                            <p>3:30 AM</p>
                                            <span className="opacity-20">|</span>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path
                                                            d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                            fill="#47BDFF"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Seattle</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                        >
                                            FREE Live Jazz Music - Jam session & jazz Open Mic - Sundays!
                                        </Link>
                                        <p>
                                            By <span className="font-bold text-secondary">Vicente Sarmiento</span>, orei Jazz & Company
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}

                    {activeTab === 'fifty-day' ? (
                        <div className="projects mt-[30px] grid gap-[30px] italic lg:grid-cols-2" data-aos="fade-up" data-aos-duration="1000">
                            <div className={`project ${activeTab === 'fifty-day' ? 'block' : 'hidden'}`}>
                                <div className="flex flex-col items-center gap-5 bg-white p-5 text-center dark:bg-gray-dark sm:flex-row ltr:sm:text-left rtl:sm:text-right">
                                    <div className="h-20 w-20 flex-none overflow-hidden rounded-full border-[3px] border-gray/30">
                                        <img src="/assets/images/event-concert/parties1.jpg" className="h-full w-full object-cover" alt="" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-center gap-[14px] text-sm font-semibold text-gray sm:justify-start">
                                            <p>Sun, Feb 12</p>
                                            <span className="font-bold opacity-20">|</span>
                                            <p>3:30 AM</p>
                                            <span className="opacity-20">|</span>
                                            <div className="flex items-center gap-2">
                                                <span>
                                                    <svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path
                                                            d="M12.8995 10.8995L8.79899 15L4.69846 10.8995C3.88747 10.0885 3.33517 9.05518 3.11142 7.93029C2.88767 6.8054 3.00252 5.63942 3.44143 4.5798C3.88035 3.52017 4.62362 2.6145 5.57725 1.9773C6.53089 1.3401 7.65206 1 8.79899 1C9.94592 1 11.0671 1.3401 12.0207 1.9773C12.9744 2.6145 13.7176 3.52017 14.1566 4.5798C14.5955 5.63942 14.7103 6.8054 14.4866 7.93029C14.2628 9.05518 13.7105 10.0885 12.8995 10.8995ZM8.79899 8.0876C9.14077 8.0876 9.46854 7.95183 9.71022 7.71016C9.95189 7.46849 10.0877 7.14071 10.0877 6.79894C10.0877 6.45716 9.95189 6.12939 9.71022 5.88772C9.46854 5.64604 9.14077 5.51027 8.79899 5.51027C8.45722 5.51027 8.12944 5.64604 7.88777 5.88772C7.6461 6.12939 7.51033 6.45716 7.51033 6.79894C7.51033 7.14071 7.6461 7.46849 7.88777 7.71016C8.12944 7.95183 8.45722 8.0876 8.79899 8.0876Z"
                                                            fill="#47BDFF"
                                                        />
                                                    </svg>
                                                </span>
                                                <p>Seattle</p>
                                            </div>
                                        </div>
                                        <Link
                                            href="#"
                                            className="mb-2.5 mt-[14px] block font-black uppercase text-black transition hover:text-secondary dark:text-white sm:text-lg"
                                        >
                                            FREE Live Jazz Music - Jam session & jazz Open Mic - Sundays!
                                        </Link>
                                        <p>
                                            By <span className="font-bold text-secondary">Vicente Sarmiento</span>, orei Jazz & Company
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ''
                    )}
                </div>
            </section>

            <section className="relative bg-[url(/assets/images/event-concert/sponsor-bg.jpg)] bg-cover bg-center bg-no-repeat py-24">
                <div className="absolute inset-0 bg-black/[0.94]"></div>
                <img src="/assets/images/event-concert/sponsors-text.png" className="absolute top-8 left-1/2 -translate-x-1/2" alt="" />
                <div className="container relative z-[1]">
                    <div className="relative text-center">
                        <h4 className="relative inline-block text-3xl font-black italic text-white md:text-6xl md:leading-[90px]">
                            GENERAL SPONSORS
                            <span className="absolute -top-[50px] -left-12 whitespace-nowrap bg-gradient-to-r from-secondary to-primary bg-clip-text p-[30px] font-reey text-3xl font-normal text-transparent sm:-left-[60px] md:-top-10 md:text-[40px]">
                                Our lovely clients
                            </span>
                        </h4>
                    </div>
                    <div
                        className="mt-10 grid grid-cols-2 items-center gap-[30px] sm:grid-cols-3 md:mt-12 md:grid-cols-4"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor1.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor2.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor3.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor4.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor5.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor6.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor7.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor8.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor9.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor10.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor11.png" className="mx-auto" alt="" />
                        </Link>
                        <Link href="#" className="bg-white/[0.04] py-[17px] px-3 duration-500 hover:bg-secondary">
                            <img src="/assets/images/event-concert/sponsor12.png" className="mx-auto" alt="" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="relative bg-[url(/assets/images/event-concert/event-ticket.png)] bg-cover bg-fixed bg-center bg-no-repeat">
                <div className="inset-0 h-1/3 bg-secondary/80 pt-9 xl:absolute xl:h-full xl:w-1/2">
                    <img src="/assets/images/event-concert/buy-tickets-text.png" alt="" />
                    <h3 className="w-4/5 p-5 text-2xl font-black uppercase italic text-white sm:text-4xl md:-mt-14 md:pl-12 lg:text-6xl lg:leading-normal">
                        Buy tickets to attend our event
                    </h3>
                </div>
                <div className="relative z-[1]">
                    <div className="container">
                        <div className="items-center justify-end pt-5 pb-10 xl:flex xl:pt-36">
                            <div className="bg-white py-[30px] px-10 italic dark:bg-black">
                                <h6 className="text-xl font-black text-black dark:text-white">FIND US</h6>
                                <p className="mt-4 text-base font-bold">
                                    401 NE Ravenna Blvd, Seattle,
                                    <br />
                                    Washington -98115
                                </p>
                                <h6 className="mt-2 text-xl font-black text-black dark:text-white sm:mt-[50px]">MESSAGE US</h6>
                                <Link href="mailto:info@plurk.com" className="mt-4 block text-base font-bold transition hover:text-secondary">
                                    info@plurk.com
                                </Link>
                                <Link href="tel:+1-202-555-0146" className="mt-2 text-base font-bold transition hover:text-secondary">
                                    +1-202-555-0146
                                </Link>
                                <div className="mt-12 flex items-center gap-5">
                                    <span className="text-gray-dark transition hover:text-secondary dark:text-gray">
                                        <svg className="h-[22px] w-[22px]" viewBox="0 0 22 22" fill="none">
                                            <path
                                                d="M22 11C22 4.92486 17.0751 0 11 0C4.92486 0 0 4.92486 0 11C0 16.4903 4.02252 21.0412 9.28125 21.8664V14.1797H6.48828V11H9.28125V8.57656C9.28125 5.81969 10.9235 4.29688 13.4361 4.29688C14.6392 4.29688 15.8984 4.51172 15.8984 4.51172V7.21875H14.5114C13.145 7.21875 12.7188 8.06674 12.7188 8.9375V11H15.7695L15.2818 14.1797H12.7188V21.8664C17.9775 21.0412 22 16.4903 22 11Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </span>
                                    <Link href="#" className="text-gray-dark transition hover:text-secondary dark:text-gray">
                                        <svg className="h-[22px] w-[22px]" viewBox="0 0 22 22" fill="none">
                                            <path
                                                d="M6.92098 19.568C15.2208 19.568 19.7618 12.69 19.7618 6.72726C19.7618 6.5339 19.7575 6.33624 19.7489 6.14288C20.6322 5.50406 21.3945 4.71279 22 3.80624C21.1773 4.17227 20.3038 4.41132 19.4094 4.51523C20.3512 3.95072 21.0563 3.0639 21.3941 2.01917C20.5082 2.54423 19.5393 2.91461 18.529 3.11445C17.8483 2.39115 16.9482 1.91224 15.968 1.75177C14.9879 1.59129 13.9821 1.75818 13.1063 2.22664C12.2304 2.6951 11.5333 3.43903 11.1227 4.34342C10.7121 5.24781 10.6108 6.26228 10.8346 7.22999C9.04062 7.13997 7.28561 6.67395 5.68332 5.86214C4.08102 5.05034 2.66722 3.91087 1.53355 2.51761C0.957366 3.51103 0.781052 4.68656 1.04044 5.8053C1.29984 6.92405 1.97547 7.90205 2.93004 8.54054C2.21341 8.51779 1.51248 8.32484 0.885156 7.97765V8.03351C0.884514 9.07602 1.24492 10.0866 1.90512 10.8934C2.56531 11.7003 3.48455 12.2536 4.50656 12.4593C3.84272 12.6409 3.14598 12.6674 2.47027 12.5366C2.75867 13.4332 3.31978 14.2174 4.07529 14.7797C4.8308 15.342 5.74303 15.6544 6.68465 15.6734C5.08606 16.9291 3.11133 17.6102 1.07852 17.6069C0.718013 17.6064 0.357866 17.5843 0 17.5408C2.06512 18.8657 4.4674 19.5693 6.92098 19.568Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </Link>
                                    <Link href="#" className="text-gray-dark transition hover:text-secondary dark:text-gray">
                                        <svg className="h-[22px] w-[22px]" viewBox="0 0 22 22" fill="none">
                                            <path
                                                d="M11.0022 1.98125C13.9418 1.98125 14.2899 1.99414 15.446 2.04571C16.5204 2.09299 17.1006 2.27349 17.4874 2.42391C17.9988 2.62161 18.3684 2.86228 18.7509 3.24477C19.1377 3.63157 19.3741 3.99687 19.5718 4.5083C19.7222 4.8951 19.9027 5.47959 19.95 6.54972C20.0016 7.7101 20.0145 8.05822 20.0145 10.9936C20.0145 13.9332 20.0016 14.2813 19.95 15.4374C19.9027 16.5118 19.7222 17.092 19.5718 17.4788C19.3741 17.9902 19.1334 18.3598 18.7509 18.7423C18.3641 19.1291 17.9988 19.3655 17.4874 19.5632C17.1006 19.7136 16.5161 19.8941 15.446 19.9414C14.2856 19.993 13.9375 20.0059 11.0022 20.0059C8.06251 20.0059 7.7144 19.993 6.55831 19.9414C5.48388 19.8941 4.90369 19.7136 4.5169 19.5632C4.00547 19.3655 3.63587 19.1248 3.25337 18.7423C2.86658 18.3555 2.6302 17.9902 2.43251 17.4788C2.28209 17.092 2.10158 16.5075 2.05431 15.4374C2.00274 14.277 1.98984 13.9289 1.98984 10.9936C1.98984 8.05392 2.00274 7.7058 2.05431 6.54972C2.10158 5.47529 2.28209 4.8951 2.43251 4.5083C2.6302 3.99687 2.87087 3.62727 3.25337 3.24477C3.64016 2.85798 4.00547 2.62161 4.5169 2.42391C4.90369 2.27349 5.48818 2.09299 6.55831 2.04571C7.7144 1.99414 8.06251 1.98125 11.0022 1.98125ZM11.0022 0C8.01524 0 7.64134 0.0128931 6.46806 0.0644657C5.29908 0.116038 4.49541 0.305138 3.79918 0.575894C3.07287 0.859543 2.45829 1.23344 1.84802 1.84802C1.23344 2.45829 0.859543 3.07287 0.575894 3.79488C0.305138 4.49541 0.116038 5.29478 0.0644657 6.46376C0.0128931 7.64134 0 8.01524 0 11.0021C0 13.9891 0.0128931 14.363 0.0644657 15.5362C0.116038 16.7052 0.305138 17.5089 0.575894 18.2051C0.859543 18.9314 1.23344 19.546 1.84802 20.1563C2.45829 20.7666 3.07287 21.1448 3.79488 21.4241C4.49541 21.6949 5.29478 21.884 6.46376 21.9355C7.63704 21.9871 8.01094 22 10.9979 22C13.9848 22 14.3587 21.9871 15.5319 21.9355C16.7009 21.884 17.5046 21.6949 18.2008 21.4241C18.9228 21.1448 19.5374 20.7666 20.1477 20.1563C20.758 19.546 21.1362 18.9314 21.4155 18.2094C21.6863 17.5089 21.8754 16.7095 21.9269 15.5405C21.9785 14.3673 21.9914 13.9934 21.9914 11.0064C21.9914 8.01954 21.9785 7.64563 21.9269 6.47236C21.8754 5.30338 21.6863 4.49971 21.4155 3.80348C21.1448 3.07287 20.7709 2.45829 20.1563 1.84802C19.546 1.23774 18.9314 0.859543 18.2094 0.580191C17.5089 0.309435 16.7095 0.120336 15.5405 0.0687634C14.363 0.0128931 13.9891 0 11.0022 0Z"
                                                fill="currentcolor"
                                            />
                                            <path
                                                d="M11.0022 5.35059C7.88201 5.35059 5.35066 7.88194 5.35066 11.0021C5.35066 14.1222 7.88201 16.6536 11.0022 16.6536C14.1223 16.6536 16.6536 14.1222 16.6536 11.0021C16.6536 7.88194 14.1223 5.35059 11.0022 5.35059ZM11.0022 14.668C8.97793 14.668 7.3362 13.0263 7.3362 11.0021C7.3362 8.97786 8.97793 7.33613 11.0022 7.33613C13.0264 7.33613 14.6681 8.97786 14.6681 11.0021C14.6681 13.0263 13.0264 14.668 11.0022 14.668Z"
                                                fill="currentcolor"
                                            />
                                            <path
                                                d="M18.1965 5.12726C18.1965 5.85787 17.6034 6.44666 16.8771 6.44666C16.1465 6.44666 15.5577 5.85358 15.5577 5.12726C15.5577 4.39665 16.1508 3.80786 16.8771 3.80786C17.6034 3.80786 18.1965 4.40095 18.1965 5.12726Z"
                                                fill="currentcolor"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="h-80">
                                <img src="/assets/images/event-concert/map-image.jpg" className="h-full w-full object-cover xl:w-[400px]" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EventConcert;
