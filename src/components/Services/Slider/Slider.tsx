import { sliderDataImages } from "./Slider.data";
import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

export function Slider() {
  return (
    <Swiper
      slidesPerView={2.0}
      spaceBetween={15}
      freeMode={true}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[Navigation, Scrollbar]}
      className="h-[240px] md:h-[390px] w-full"
      grabCursor
    >
      {sliderDataImages.map(({ id, urlImage, name }) => (
        <SwiperSlide key={id}>
          <div className="flex flex-col items-center p-5 h-full">
            <Image
              src={`/assets/servicios/${urlImage}`}
              alt={name}
              width={300}
              height={700}
              className="w-full h-full rounded-lg object-cover"
            />
            <div className="mt-1 text-center font-ligth font-medium text-sm w-full">{name}</div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
