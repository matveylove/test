import "./ProductCard.scss";
import { Heart } from "lucide-react";
import Counter from "../../components/Counter/Counter";
import Button from "../../components/Button/Button";
import StarRating from "../../components/StarRating/StarRating";
import { icon1, icon2, icon3, icon4, icon5 } from "../../assets/productIcons";

const ProductCard = ({ product }) => {
  const { image, title, rating, reviews, feature, price } = product;

  return (
    <article
      className="product-card"
      itemScope
      itemType="https://schema.org/Product"
    >
      {/* Блок иконок */}
      <div className="product-card__top">
        <div className="product-card__icons">
          {[icon1, icon2, icon3, icon4, icon5].map((icon, index) => (
            <div key={index} className="product-card__circle">
              <img src={icon} alt={`Иконка ${index + 1}`} />
            </div>
          ))}
        </div>
        {/* Картинка продукта */}
        <figure>
          <img src={image} alt={title} className="product-card__image" />
        </figure>
      </div>

      <div className="product-card__bottom">
        <div className="product-card__info">
          {/* Название */}
          <h3 itemProp="name" className="medium product-card__title">
            {title}
          </h3>

          {/* Рейтинг */}
          <div
            itemProp="aggregateRating"
            itemScope
            itemType="https://schema.org/AggregateRating"
            className="product-card__rating"
          >
            <meta itemProp="reviewCount" content={reviews} />
            <StarRating rating={rating} />
            <span className="small">{reviews} отзывов</span>
          </div>

          {/* Список характеристик */}
          <ul className="product-card__list">
            {feature?.map(({ icon, title }, index) => (
              <li key={index} className="product-card__item">
                <img src={icon} alt={`Характеристика ${index + 1}`} />
                <p className="normal">{title}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Блок цены и действий */}
        <div className="product-card__inter">
          <p className="product-card__price">
            <span className="product-card__old-price">{price.oldPrice}</span>
            <data
              value={price.currentPrice}
              itemProp="price"
              itemScope
              itemType="https://schema.org/Offer"
              className="product-card__current-price"
            >
              {price.currentPrice} ₽
              <meta itemProp="priceCurrency" content="RUB" />
            </data>
          </p>

          <div className="product-card__option">
            <Counter />
            <div className="product-card__right">
              <Button title="В корзину" option="red" />
              <Heart />
            </div>
          </div>

          <Button title="Купить в 1 клик" option="gray" />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
