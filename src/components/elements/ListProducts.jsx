import React from 'react';
import Product  from './Product';

// Componente que lista 8 Produtos a cada GET
// Poderia ser feito expansível também, para ao invés de 8, adicionar mais e etc.
const ListProducts = (props) => {


    return <>
        {props.products.map(prod =>
            <>
                <Product class_img="img_produto"
                    class_title="title_produto"
                    class_desc="desc_produto"
                    class_old="old_price"
                    class_new="new_price"
                    class_split="split_price"
                    class_buy="buy_produto"
                    class_buy_label="buy_label"
                    src={props.products[0].image}
                    name={props.products[0].name}
                    desc={props.products[0].description}
                    old_price={props.products[0].oldPrice}
                    new_price={props.products[0].price}
                    count={props.products[0].installments.count}
                    value={props.products[0].installments.value}
                />

                <Product class_img="img_produto_s"
                    class_title="title_produto_s"
                    class_desc="desc_produto_s"
                    class_old="old_price_s"
                    class_new="new_price_s"
                    class_split="split_price_s"
                    class_buy="buy_produto_s"
                    class_buy_label="buy_label_s"
                    src={props.products[1].image}
                    name={props.products[1].name}
                    desc={props.products[1].description}
                    old_price={props.products[1].oldPrice}
                    new_price={props.products[1].price}
                    count={props.products[1].installments.count}
                    value={props.products[1].installments.value}
                />
                <Product class_img="img_produto_t"
                    class_title="title_produto_t"
                    class_desc="desc_produto_t"
                    class_old="old_price_t"
                    class_new="new_price_t"
                    class_split="split_price_t"
                    class_buy="buy_produto_t"
                    class_buy_label="buy_label_t"
                    src={props.products[2].image}
                    name={props.products[2].name}
                    desc={props.products[2].description}
                    old_price={props.products[2].oldPrice}
                    new_price={props.products[2].price}
                    count={props.products[2].installments.count}
                    value={props.products[2].installments.value}
                />
                <Product class_img="img_produto_f"
                    class_title="title_produto_f"
                    class_desc="desc_produto_f"
                    class_old="old_price_f"
                    class_new="new_price_f"
                    class_split="split_price_f"
                    class_buy="buy_produto_f"
                    class_buy_label="buy_label_f"
                    src={props.products[3].image}
                    name={props.products[3].name}
                    desc={props.products[3].description}
                    old_price={props.products[3].oldPrice}
                    new_price={props.products[3].price}
                    count={props.products[3].installments.count}
                    value={props.products[3].installments.value}
                />

                <Product class_img="img_produto_six"
                    class_title="title_produto_six"
                    class_desc="desc_produto_six"
                    class_old="old_price_six"
                    class_new="new_price_six"
                    class_split="split_price_six"
                    class_buy="buy_produto_six"
                    class_buy_label="buy_label_six"
                    src={props.products[4].image}
                    name={props.products[4].name}
                    desc={props.products[4].description}
                    old_price={props.products[4].oldPrice}
                    new_price={props.products[4].price}
                    count={props.products[4].installments.count}
                    value={props.products[4].installments.value}
                />

                <Product class_img="img_produto_sev"
                    class_title="title_produto_sev"
                    class_desc="desc_produto_sev"
                    class_old="old_price_sev"
                    class_new="new_price_sev"
                    class_split="split_price_sev"
                    class_buy="buy_produto_sev"
                    class_buy_label="buy_label_sev"
                    src={props.products[5].image}
                    name={props.products[5].name}
                    desc={props.products[5].description}
                    old_price={props.products[5].oldPrice}
                    new_price={props.products[5].price}
                    count={props.products[5].installments.count}
                    value={props.products[5].installments.value}
                />

                <Product class_img="img_produto_eig"
                    class_title="title_produto_eig"
                    class_desc="desc_produto_eig"
                    class_old="old_price_eig"
                    class_new="new_price_eig"
                    class_split="split_price_eig"
                    class_buy="buy_produto_eig"
                    class_buy_label="buy_label_eig"
                    src={props.products[6].image}
                    name={props.products[6].name}
                    desc={props.products[6].description}
                    old_price={props.products[6].oldPrice}
                    new_price={props.products[6].price}
                    count={props.products[6].installments.count}
                    value={props.products[6].installments.value}
                />
                <Product class_img="img_produto_nin"
                    class_title="title_produto_nin"
                    class_desc="desc_produto_nin"
                    class_old="old_price_nin"
                    class_new="new_price_nin"
                    class_split="split_price_nin"
                    class_buy="buy_produto_nin"
                    class_buy_label="buy_label_nin"
                    src={props.products[7].image}
                    name={props.products[7].name}
                    desc={props.products[7].description}
                    old_price={props.products[7].oldPrice}
                    new_price={props.products[7].price}
                    count={props.products[7].installments.count}
                    value={props.products[7].installments.value}
                />
            </>
        )}

    </>
}

export default ListProducts;