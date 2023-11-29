import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import { IRootState } from '../store';
import ClientSlider from '../components/ClientSlider';
import Head from 'next/head';
import Link from 'next/link';

const Gym = () => {
    const isRtl = useSelector((state: IRootState) => state.themeConfig.direction) === 'rtl' ? true : false;

    const feedbacks = [
        {
            id: 1,
            name: 'Marvin McKinney',
            role: 'Founder of Triple IT',
            thumbnail: '/assets/images/gym/man-1.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
        {
            id: 2,
            name: 'Leslie Alexander',
            role: 'Founder of Dope tech',
            thumbnail: '/assets/images/gym/man-2.png',
            message:
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        },
    ];

    const css = `.text-border-gray {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #7780a1;
    }
    .text-border-white {
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #ffffff;
    }`;

    return (
        <div>
            <Head>
                <title>Consulting | Plurk – Tailwind CSS Multipurpose Landing Templates</title>
            </Head>
            <div className="relative overflow-hidden bg-black pt-[106px]">
                <div className="absolute bottom-0 z-[1] h-4 w-[calc(100%_+_100px)] bg-secondary xl:-bottom-44 xl:h-80 ltr:xl:-rotate-6 rtl:xl:rotate-6"></div>
                <img src="/assets/images/gym/fitness-text.svg" alt="" className="absolute top-32 hidden h-4/5 ltr:left-0 rtl:right-0 xl:block" />
                <div className="container">
                    <div className="relative pb-14 pt-10 md:pt-16 xl:pb-52">
                        <img src="/assets/images/gym/banner-gradiant.svg" alt="" className="absolute top-0 ltr:-left-80 rtl:-right-80" />
                        <div className="relative z-[1] text-center xl:w-3/5 xl:ltr:text-left xl:rtl:text-right">
                            <h2 className="text-border-white pr-3 text-3xl font-black uppercase italic tracking-[0.06em] sm:text-5xl sm:leading-normal lg:text-[80px]">
                                <span className="inline-flex">Nothing but&nbsp;</span>
                                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">gains here.</span>
                            </h2>
                            <p className="text-lg leading-8">
                                Accumsan vulputate sed id blandit duis pellentesque nullam diam purus. Quisque diam pharetra, tristique non arcu eu. Integer.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-8 xl:justify-start">
                                <Link
                                    href="#"
                                    className="rounded-full border-2 border-white py-4 px-6 text-sm font-extrabold uppercase tracking-[4px] text-white transition hover:bg-white hover:text-black"
                                >
                                    start now
                                </Link>
                                <Link href="#" className="group flex items-center gap-2.5 text-sm font-extrabold text-white">
                                    <span>LEARN MORE</span>
                                    <span className="relative transition-all ltr:left-0 ltr:group-hover:left-2 rtl:right-0 rtl:group-hover:right-2">
                                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                                            <path
                                                d="M2 11.0001L11.0909 1.90918"
                                                stroke="white"
                                                strokeWidth="1.8"
                                                strokeLinecap="square"
                                                strokeLinejoin="round"
                                            />
                                            <path d="M4.61365 1H12V8.38636" stroke="white" strokeWidth="1.8" strokeLinecap="square" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div className="mt-12 uppercase text-white xl:mt-20">
                                <h4 className="text-xl font-extrabold tracking-[1px]">what you get</h4>
                                <div className="mt-7 grid gap-4 text-xs leading-5 tracking-[1px] sm:grid-cols-2 md:grid-cols-3">
                                    <div className="flex items-center gap-4 rounded-full bg-gray-dark py-4 px-6">
                                        <img src="/assets/images/gym/customized-icon.svg" alt="" />
                                        <p>Customised fitness plan</p>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-full bg-gray-dark py-4 px-6">
                                        <img src="/assets/images/gym/bettery-icon.svg" alt="" />
                                        <p>keep you feet and strong</p>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-full bg-gray-dark py-4 px-6">
                                        <img src="/assets/images/gym/training-icon.svg" alt="" />
                                        <p>High Intensity Training</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-0 z-[1] mx-auto mt-10 h-[93%] ltr:-right-56 rtl:-left-56 rtl:rotate-y-180 sm:w-1/2 xl:absolute xl:mx-0 xl:mt-0 xl:w-auto">
                            <img src="/assets/images/gym/runner-girl.png" alt="" className="h-full" data-aos="fade-left" data-aos-duration="1000" />
                        </div>
                        <div className="absolute top-0 hidden h-full w-[690px] ltr:-right-52 rtl:-left-52 rtl:rotate-y-180 xl:block">
                            <img src="/assets/images/gym/banner-line.png" alt="" className="h-full w-full" />
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-white py-14 dark:bg-gray-dark md:py-24">
                <div className="container">
                    <div className="flex flex-col justify-between gap-x-4 lg:flex-row">
                        <div className="font-semibold uppercase italic lg:w-1/2">
                            <img src="/assets/images/gym/01.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                            <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                                <span className="text-black dark:text-white">our </span>
                                <span className="text-border-gray tracking-wider">popular </span>
                                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">classes</span>
                            </h2>
                            <p className="leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="mt-10 text-center lg:mt-20 lg:ltr:text-left lg:rtl:text-right">
                            <Link
                                href="#"
                                className="rounded-full border-2 border-black py-4 px-6 text-sm font-extrabold uppercase tracking-[4px] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                more services
                            </Link>
                        </div>
                    </div>
                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="group">
                            <div className="overflow-hidden rounded-t-full bg-gradient-to-b from-gray/20 to-transparent p-1 pb-0 sm:h-96">
                                <img
                                    src="/assets/images/gym/service1.jpg"
                                    alt=""
                                    className="h-full w-full rounded-t-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-5 italic">
                                <h5 className="text-lg font-black text-black dark:text-white">Pilates Training</h5>
                                <p className="mb-4 mt-2 font-semibold line-clamp-2">
                                    Controlled movements that enhance your balance, core strength, flexibility.
                                </p>
                                <Link href="#" className="text-sm font-extrabold uppercase text-secondary transition hover:text-primary">
                                    read more
                                </Link>
                            </div>
                        </div>
                        <div className="group">
                            <div className="overflow-hidden rounded-t-full bg-gradient-to-b from-gray/20 to-transparent p-1 pb-0 sm:h-96">
                                <img
                                    src="/assets/images/gym/service2.jpg"
                                    alt=""
                                    className="h-full w-full rounded-t-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-5 italic">
                                <h5 className="text-lg font-black text-black dark:text-white">Aerobic Training</h5>
                                <p className="mb-4 mt-2 font-semibold line-clamp-2">
                                    Physical activity that increases the heart rate and the body's use of oxygen.
                                </p>
                                <Link href="#" className="text-sm font-extrabold uppercase text-secondary transition hover:text-primary">
                                    read more
                                </Link>
                            </div>
                        </div>
                        <div className="group">
                            <div className="overflow-hidden rounded-t-full bg-gradient-to-b from-gray/20 to-transparent p-1 pb-0 sm:h-96">
                                <img
                                    src="/assets/images/gym/service3.jpg"
                                    alt=""
                                    className="h-full w-full rounded-t-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="mt-5 italic">
                                <h5 className="text-lg font-black text-black dark:text-white">CrossFit Workout</h5>
                                <p className="mb-4 mt-2 font-semibold line-clamp-2">
                                    Strength and conditioning workout that is made up of functional movement.
                                </p>
                                <Link href="#" className="text-sm font-extrabold uppercase text-secondary transition hover:text-primary">
                                    read more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 dark:bg-black md:py-20">
                <div className="container">
                    <div className="grid items-center gap-5 lg:grid-cols-2">
                        <div className="group overflow-hidden lg:order-2 lg:h-[500px]" data-aos="fade-left" data-aos-duration="1000">
                            <img
                                src="/assets/images/gym/02-image.jpg"
                                alt=""
                                className="h-full w-full object-cover transition duration-500 group-hover:rotate-6 group-hover:scale-125"
                            />
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="font-semibold uppercase italic">
                                <img src="/assets/images/gym/02.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                                <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                                    <span className="text-black dark:text-white">why </span>
                                    <span className="text-border-gray tracking-wider">choose </span>
                                    <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">plurk</span>
                                </h2>
                                <p className="leading-loose">
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </div>
                            <div className="mt-10">
                                <Link
                                    href="#"
                                    className="rounded-full border-2 border-black py-4 px-6 text-sm font-extrabold uppercase tracking-[4px] text-black transition hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                                >
                                    learn more
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[url(/assets/images/gym/features-bg.png)] bg-cover bg-center bg-no-repeat py-14 md:py-20">
                <div className="container">
                    <div className="grid lg:grid-cols-2">
                        <div className="relative h-[350px]" data-aos="fade-up" data-aos-duration="1000">
                            <span className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></span>
                            <img src="/assets/images/gym/coaches.jpg" alt="" className="h-full w-full object-cover" />
                            <h5 className="absolute bottom-5 text-2xl font-black uppercase italic text-white ltr:left-7 rtl:right-7">best coaches</h5>
                        </div>
                        <div className="relative h-[350px]" data-aos="fade-up" data-aos-duration="1000">
                            <span className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></span>
                            <img src="/assets/images/gym/prices.jpg" alt="" className="h-full w-full object-cover" />
                            <h5 className="absolute bottom-5 text-2xl font-black uppercase italic text-white ltr:left-7 rtl:right-7">nice prices</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className="overflow-x-hidden bg-white dark:bg-black">
                <div className="grid items-center lg:grid-cols-2">
                    <div className="h-full lg:order-2 xl:h-[640px]" data-aos="fade-left" data-aos-duration="1500">
                        <img src="/assets/images/gym/journey.jpg" alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="px-4 py-10 ltr:xl:mr-24 rtl:xl:ml-24">
                        <div className="font-semibold uppercase italic lg:max-w-[610px] ltr:lg:ml-auto rtl:lg:mr-auto">
                            <img src="/assets/images/gym/03.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                            <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                                <span className="text-black dark:text-white">JUMPSTART </span>
                                <span className="text-border-gray tracking-wider">YOUR </span>
                                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">JOURNEY</span>
                            </h2>
                            <p className="leading-loose line-clamp-5">
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
                                desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="grid items-center lg:grid-cols-2">
                    <div className="order-2 px-4 py-10 ltr:xl:ml-24 rtl:xl:mr-24">
                        <div className="font-semibold uppercase italic lg:max-w-[610px]">
                            <img src="/assets/images/gym/04.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                            <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                                <span className="text-black dark:text-white">TRANSFORM </span>
                                <span className="text-border-gray tracking-wider">YOUR </span>
                                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">FITNESS</span>
                            </h2>
                            <p className="leading-loose line-clamp-5">
                                4 rooms, 5 unique workouts, 1 location. plurk offers unrivaled fitness programming. Personal workout stations allow for a safe
                                and comfortable experience. Small class sizes offer a greater level of instructor and group engagement.
                            </p>
                        </div>
                    </div>
                    <div className="h-full xl:h-[640px]" data-aos="fade-right" data-aos-duration="1500">
                        <img src="/assets/images/gym/fitness.jpg" alt="" className="h-full w-full object-cover" />
                    </div>
                </div>
                <div className="grid items-center lg:grid-cols-2">
                    <div className="h-full lg:order-2 xl:h-[640px]" data-aos="fade-left" data-aos-duration="1500">
                        <img src="/assets/images/gym/evolve-togather.jpg" alt="" className="h-full w-full object-cover" />
                    </div>
                    <div className="px-4 py-10 ltr:xl:mr-24 rtl:xl:ml-24">
                        <div className="font-semibold uppercase italic lg:max-w-[610px] ltr:lg:ml-auto rtl:lg:mr-auto">
                            <img src="/assets/images/gym/05.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                            <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                                <span className="text-black dark:text-white">EVOLVE </span>
                                <span className="text-border-gray tracking-wider">TO</span>
                                <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">GETHER</span>
                            </h2>
                            <p className="leading-loose line-clamp-5">
                                You can push yourself further with plurk. Our coaches are passionate and supportive, and our studio is outfitted with innovative
                                lighting and sound systems to fuel your workout.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 uppercase italic dark:bg-gray-dark md:py-20">
                <div className="container">
                    <div className="font-semibold">
                        <img src="/assets/images/gym/06.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                        <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                            <span className="text-black dark:text-white">OUR </span>
                            <span className="text-border-gray tracking-wider">FITNESS </span>
                            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">COACHES</span>
                        </h2>
                        <p className="leading-loose xl:w-1/2">plurk is more than another workout, it's a comprehensive approach to fitness.</p>
                    </div>
                    <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-1.png" alt="" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">harlan hagen</h3>
                                <span className="text-sm font-bold">Gym Fitness</span>
                            </div>
                        </div>
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-2.png" alt="" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">Susan Bonilla</h3>
                                <span className="text-sm font-bold">Aerobics</span>
                            </div>
                        </div>
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-3.png" alt="" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">Mike Gipson</h3>
                                <span className="text-sm font-bold">Pilates & Stretching</span>
                            </div>
                        </div>
                        <div
                            className="group relative flex h-[300px] items-end justify-center overflow-hidden bg-[rgba(119,128,161,0.1)] px-4 pt-6"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <img src="/assets/images/gym/coach-4.png" alt="" className="h-full object-cover object-top transition group-hover:scale-105" />
                            <div className="absolute bottom-0 w-4/5 bg-black py-2.5 px-5 ltr:left-0 rtl:right-0">
                                <h3 className="font-black text-white">Judy Chu</h3>
                                <span className="text-sm font-bold">Weight Loss</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black bg-[url(/assets/images/gym/counter-bg.png)] bg-cover bg-center bg-no-repeat py-14 md:py-20">
                <div className="container">
                    <div className="grid gap-y-10 gap-x-4 uppercase italic sm:grid-cols-2 lg:grid-cols-4">
                        <div className="space-y-5 text-center">
                            <div className="text-5xl font-black text-white">
                                <CountUp start={0} end={10} duration={10}></CountUp>
                            </div>
                            <p className="text-lg font-semibold">Years of Expertise</p>
                        </div>
                        <div className="space-y-5 text-center">
                            <div className="text-5xl font-black text-white">
                                <CountUp start={0} end={15} duration={10}></CountUp>
                            </div>
                            <p className="text-lg font-semibold">Professional Coaches</p>
                        </div>
                        <div className="space-y-5 text-center">
                            <div className="text-5xl font-black text-white">
                                <CountUp start={0} end={20} duration={10}></CountUp>
                            </div>
                            <p className="text-lg font-semibold">Different Classes</p>
                        </div>
                        <div className="space-y-5 text-center">
                            <div className="text-5xl font-black text-white">
                                <CountUp start={0} end={535} duration={10}></CountUp>
                            </div>
                            <p className="text-lg font-semibold">Club Members</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-t from-white/50 to-transparent py-14 italic dark:bg-gray-dark dark:from-transparent md:py-20">
                <div className="container">
                    <div className="font-semibold uppercase">
                        <img src="/assets/images/gym/07.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                        <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                            <span className="text-black dark:text-white">TOGETHER </span>
                            <span className="text-border-gray tracking-wider">we </span>
                            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">SUCCEED</span>
                        </h2>
                        <p className="leading-loose xl:w-2/3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <div className="mt-12">
                        <ClientSlider feedbacks={feedbacks} type="creative-agency"></ClientSlider>
                    </div>
                </div>
            </section>

            <section className="overflow-hidden py-14 dark:bg-black md:py-20">
                <div className="container">
                    <div className="font-semibold uppercase italic">
                        <img src="/assets/images/gym/08.svg" alt="" data-aos="fade-down" data-aos-duration="1500" />
                        <h2 className="mb-3 -mt-6 text-4xl font-black md:-mt-10 md:text-6xl md:leading-normal">
                            <span className="text-black dark:text-white">Articles </span>
                            <span className="text-border-gray tracking-wider">& </span>
                            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text pr-4 text-transparent">news</span>
                        </h2>
                        <p className="leading-loose xl:w-1/2">Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    </div>
                    <div className="mt-8 grid gap-y-10 gap-x-7 italic sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
                        <div className="group" data-aos="fade-up" data-aos-duration="1000">
                            <div className="overflow-hidden sm:h-64">
                                <img
                                    src="/assets/images/gym/news1.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="pt-5 font-extrabold">
                                <div className="inline-block bg-gray/10 p-2.5 text-sm font-bold">December 25, 2022</div>
                                <Link
                                    href="#"
                                    className="my-3 block text-[22px] leading-9 text-black transition line-clamp-2 hover:text-secondary dark:text-white"
                                >
                                    How to brace and breathe properly for weightlifting
                                </Link>
                                <p className="mb-5 font-semibold line-clamp-3">
                                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <Link href="#" className="text-secondary transition hover:text-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="group" data-aos="fade-up" data-aos-duration="1000">
                            <div className="overflow-hidden sm:h-64">
                                <img
                                    src="/assets/images/gym/news2.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="pt-5 font-extrabold">
                                <div className="inline-block bg-gray/10 p-2.5 text-sm font-bold">December 25, 2022</div>
                                <Link
                                    href="#"
                                    className="my-3 block text-[22px] leading-9 text-black transition line-clamp-2 hover:text-secondary dark:text-white"
                                >
                                    How to brace and breathe properly for weightlifting
                                </Link>
                                <p className="mb-5 font-semibold line-clamp-3">
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                                <Link href="#" className="text-secondary transition hover:text-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className="group" data-aos="fade-up" data-aos-duration="1000">
                            <div className="overflow-hidden sm:h-64">
                                <img
                                    src="/assets/images/gym/news3.jpg"
                                    alt=""
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                />
                            </div>
                            <div className="pt-5 font-extrabold">
                                <div className="inline-block bg-gray/10 p-2.5 text-sm font-bold">December 25, 2022</div>
                                <Link
                                    href="#"
                                    className="my-3 block text-[22px] leading-9 text-black transition line-clamp-2 hover:text-secondary dark:text-white"
                                >
                                    How to brace and breathe properly for weightlifting
                                </Link>
                                <p className="mb-5 font-semibold line-clamp-3">
                                    Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
                                </p>
                                <Link href="#" className="text-secondary transition hover:text-primary">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{css}</style>
        </div>
    );
};

export default Gym;
