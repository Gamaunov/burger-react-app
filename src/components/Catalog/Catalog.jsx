import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productRqquestAsync } from "../../store/product/productSlice";
import CatalogProduct from "../CatalogProduct/CatalogProduct";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";
import style from "./Catalog.module.css";

export const Catalog = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const {category, activeCategory} = useSelector((state) => state.category);


  useEffect(() => {
    if(category.length){
      dispatch(productRqquestAsync(category[activeCategory].title))
    }
  }, [category, activeCategory]);

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>

          <div className={style.wrap_list}>
            <ul className={style.list}>
              {products.map(item => (
                <li key={item.id} className={style.item}>
                  <CatalogProduct item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
