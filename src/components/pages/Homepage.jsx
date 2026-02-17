import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { PiSpeakerSlash } from "react-icons/pi";
import { A11y, Navigation } from "swiper/modules";
import Button from "../atoms/Button";

// import Swiper core and required modules
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import MovieCard from "../molecules/MovieCard";
import MovieListPortrait from "../templates/MovieListPortrait";

const movies = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/img/poster/landscape/landscape10.png",
    rating: "4.5/5",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/landscape/landscape9.png",
    rating: "4.2/5",
  },
  {
    id: 3,
    title: "A Man Called Otto",
    image: "/img/poster/landscape/landscape8.png",
    rating: "4.6/5",
  },
  {
    id: 4,
    title: "Blue Lock",
    image: "/img/poster/landscape/landscape4.png",
    rating: "4.4/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/landscape/landscape1.png",
    rating: "4.5/5",
  },
];

const MovieTopToday = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/img/poster/portrait/p1.png",
    rating: "4.5/5",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/portrait/p2.png",
    rating: "4.2/5",
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "/img/poster/portrait/p3.png",
    rating: "4.6/5",
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "/img/poster/portrait/p4.png",
    rating: "4.4/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/portrait/p5.png",
    rating: "4.5/5",
  },
];
const MovieTrends = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/img/poster/portrait/p6.png",
    rating: "4.5/5",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/portrait/p7.png",
    rating: "4.2/5",
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "/img/poster/portrait/p11.png",
    rating: "4.6/5",
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "/img/poster/portrait/p8.png",
    rating: "4.4/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/portrait/p9.png",
    rating: "4.5/5",
  },
];
const MovieNews = [
  {
    id: 1,
    title: "Don't Look Up",
    image: "/img/poster/portrait/p9.png",
    rating: "4.5/5",
  },
  {
    id: 2,
    title: "The Batman",
    image: "/img/poster/portrait/p10.png",
    rating: "4.2/5",
  },
  {
    id: 3,
    title: "Blue Lock",
    image: "/img/poster/portrait/p5.png",
    rating: "4.6/5",
  },
  {
    id: 4,
    title: "A Man Called Otto",
    image: "/img/poster/portrait/p4.png",
    rating: "4.4/5",
  },
  {
    id: 5,
    title: "Shazam!",
    image: "/img/poster/portrait/p12.png",
    rating: "4.5/5",
  },
];
const Homepage = () => {
  return (
    <main className="flex flex-col flex-wrap w-full bg-[#181A1C] gap-15">
      {/* Hero Section */}
      <section className="hero-section w-full h-[360px] lg:h-[587px] flex justify-center align-center relative gap-4">
        <img
          className="hero-image w-full  object-cover"
          src="/img/poster/landscape/hero.png"
          alt=""
        />
        <div className="gradient-overlay absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-[#181A1C] z-10"></div>
        <div className="hero-text text-white absolute top-8 left-0 bottom-0 z-20 w-full h-full flex flex-col justify-center items-start gap-6 px-5 py-2 lg:px-[80px] lg:py-[25px]">
          <div className="hero-text flex flex-col gap-[12px] lg:gap-[20px]">
            <h1 className="hero-title text-[24px] lg:text-[48px] font-bold">
              Duty After School
            </h1>
            <p className="hero-description text-[12px] lg:text-[18px] font-medium line-clamp-3 lg:w-4xl">
              Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan,
              Departemen Pertahanan mulai merekrut lebih banyak tentara,
              termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang
              garis depan dalam perang.
            </p>
          </div>
          <div className="hero-button flex flex-row w-full justify-between items-center">
            <div className="button-left flex flex-row gap-2">
              <Button type="button" variant="primary">
                Mulai
              </Button>
              <Button
                type="button"
                variant="secondary"
                iconLeft={<IoMdInformationCircleOutline />}
              >
                Selengkapnya
              </Button>
              <Button type="button" variant="outlined">
                18+
              </Button>
            </div>
            <div className="button-right">
              <Button type="button" variant="outlined" className="rounded-full">
                <PiSpeakerSlash className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* Film Section */}
      <section className="film-section w-full flex flex-col gap-10 overflow-hidden">
        {/* Film Slider Landscape 1 */}
        <section className="film-slider-section w-full pl-5 pr-0 lg:px-[80px] relative">
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
            Melanjutkan Tonton Film
          </h2>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={16}
            slidesPerView={"auto"}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            grabCursor={true}
            breakpoints={{
              // Konfigurasi responsif
              320: {
                slidesPerView: 1.2,
                spaceBetween: 16,
              },
              // saat layar >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // saat layar >= 1024px
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  image={movie.image}
                  title={movie.title}
                  rating={movie.rating}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol prev dan next */}
          {/* Tombol Prev */}
          <div className="swiper-button-prev-custom hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] left-2 lg:left-15 -translate-y-1/2 z-10">
            <FaArrowLeft />
          </div>
          {/* Tombol Next */}
          <div className="swiper-button-next-custom hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] right-2 lg:right-15 -translate-y-1/2 z-10">
            <FaArrowRight />
          </div>
        </section>
        {/* Film Slider Landscape 1 End */}

        {/* Film Slider Portrait 1*/}
        <section className="film-slider-section w-full pl-5 pr-0 lg:px-[80px] relative">
          <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">
            Top Rating Film dan Series Hari ini
          </h2>
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={16}
            slidesPerView={"auto"}
            loop={true}
            navigation={{
              nextEl: ".swiper-button-next-custom-portrait",
              prevEl: ".swiper-button-prev-custom-portrait",
            }}
            grabCursor={true}
            breakpoints={{
              // Konfigurasi responsif
              320: {
                slidesPerView: 3.2,
                spaceBetween: 16,
              },
              // saat layar >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // saat layar >= 1024px
              1024: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {MovieTopToday.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieCard
                  image={movie.image}
                  title={movie.title}
                  rating={movie.rating}
                  isPortrait={true}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol prev dan next */}
          {/* Tombol Prev */}
          <div className="swiper-button-prev-custom-portrait hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] left-2 lg:left-15 -translate-y-1/2 z-10">
            <FaArrowLeft />
          </div>
          {/* Tombol Next */}
          <div className="swiper-button-next-custom-portrait hidden lg:flex items-center justify-center bg-[#2F3334] hover:bg-[#000000] active:bg-[#2F3334] border-[#E7E3FC3B] text-white rounded-full w-10 h-10 cursor-pointer absolute top-[55%] right-2 lg:right-15 -translate-y-1/2 z-10">
            <FaArrowRight />
          </div>
        </section>
        {/* Film Slider Portrait 1 End */}

        <MovieListPortrait
          sectionTitle="Film Trending"
          moviesPortrait={MovieTrends}
        />
        <MovieListPortrait
          sectionTitle="Rilis Baru"
          moviesPortrait={MovieNews}
        />
      </section>
      {/* Film Section End */}
    </main>
  );
};

export default Homepage;
