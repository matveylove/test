import { useSelector } from "react-redux";
import { selectProducts } from "../../redux/slices/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import Button from "../../components/Button/Button";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ProductSlider.scss";

const ProductSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const products = useSelector(selectProducts);

  return (
    <div className="product-slider">
      <h1 className="bold product-slider__title">ХИТЫ ПРОДАЖ</h1>
      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        spaceBetween={10}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        keyboard={{ enabled: true }}
        breakpoints={{
          200: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1440: { slidesPerView: 5 },
          1920: { slidesPerView: 5 },
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="product-slider__bottom">
        <div className="product-slider__buttons">
          <button ref={prevRef} className="swiper-button-prev">
            <ChevronLeft size={32} />
          </button>
          <button ref={nextRef} className="swiper-button-next">
            <ChevronRight size={32} />
          </button>
        </div>
        <Button title={"Смотреть все"} option={"big"} />
      </div>
    </div>
  );
};

export default ProductSlider;
