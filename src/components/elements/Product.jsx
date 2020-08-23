import React from 'react';

const Products = (props)=>{
  return  <>
            <img className={props.class_img} src={props.src}/>
            <div className={props.class_title}>{props.name}</div>
            <div className={props.class_desc}>{props.desc}</div>
            <div className={props.class_old}>De: R${props.old_price}</div>
            <div className={props.class_new}>Por: R${props.new_price}</div>
            <div className={props.class_split}>ou {props.count}x de R${props.value}</div>
            <button className={props.class_buy}></button>
            <div className={props.class_buy_label}>Comprar</div>
          </>
}


export default Products;