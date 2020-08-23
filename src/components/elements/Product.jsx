import React from 'react';

const Products = (props)=>{
  return  <>
            <img className={props.class_img}/>
            <div className={props.class_title}>Nome do produto</div>
            <div className={props.class_desc}>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</div>
            <div className={props.class_old}>De: R$23,99</div>
            <div className={props.class_new}>Por: R$19,99</div>
            <div className={props.class_split}>ou 2x de R$9,99</div>
            <button className={props.class_buy}></button>
            <div className={props.class_buy_label}>Comprar</div>
          </>
}


export default Products;