import React from 'react';
import Header from '../elements/Header';
import MainText from '../elements/MainText';
import Inputs from '../elements/Inputs';
import Product from '../elements/Product';


const Desktop = (props)=>{
    return <div className="container">
            <Header/> 
            <MainText/>
            <div>
               
            <Inputs/>
            <hr className="divider_left"/>
            <hr className="divider_right"/>
            
            <hr className="divider_left" style={{marginTop:1430.97}}/>
            <hr className="divider_right" style={{marginTop:1430.97}}/>

            <div className="divider_text">Sua seleção especial</div>
            <div className="divider_text" style={{marginTop:1418.97,width: "204px",height: "22px"}}>Compartilhe a novidade</div>
           
            <div className="container_produtos">
              <Product class_img="img_produto" 
                       class_title="title_produto"
                       class_desc="desc_produto" 
                       class_old="old_price"
                       class_new="new_price"
                       class_split="split_price"
                       class_buy="buy_produto"
                       class_buy_label="buy_label"
                />
              <Product class_img="img_produto_s" 
                       class_title="title_produto_s"
                       class_desc="desc_produto_s" 
                       class_old="old_price_s"
                       class_new="new_price_s"
                       class_split="split_price_s"
                       class_buy="buy_produto_s"
                       class_buy_label="buy_label_s"
                       />
                 <Product class_img="img_produto_t" 
                       class_title="title_produto_t"
                       class_desc="desc_produto_t" 
                       class_old="old_price_t"
                       class_new="new_price_t"
                       class_split="split_price_t"
                       class_buy="buy_produto_t"
                       class_buy_label="buy_label_t"
                       />
                   <Product class_img="img_produto_f" 
                       class_title="title_produto_f"
                       class_desc="desc_produto_f" 
                       class_old="old_price_f"
                       class_new="new_price_f"
                       class_split="split_price_f"
                       class_buy="buy_produto_f"
                       class_buy_label="buy_label_f"
                        />

                    <Product class_img="img_produto_six" 
                       class_title="title_produto_six"
                       class_desc="desc_produto_six" 
                       class_old="old_price_six"
                       class_new="new_price_six"
                       class_split="split_price_six"
                       class_buy="buy_produto_six"
                       class_buy_label="buy_label_six"
                        />
                        
                    <Product class_img="img_produto_sev" 
                       class_title="title_produto_sev"
                       class_desc="desc_produto_sev" 
                       class_old="old_price_sev"
                       class_new="new_price_sev"
                       class_split="split_price_sev"
                       class_buy="buy_produto_sev"
                       class_buy_label="buy_label_sev"
                        />

                    <Product class_img="img_produto_eig" 
                       class_title="title_produto_eig"
                       class_desc="desc_produto_eig" 
                       class_old="old_price_eig"
                       class_new="new_price_eig"
                       class_split="split_price_eig"
                       class_buy="buy_produto_eig"
                       class_buy_label="buy_label_eig"
                        />
                    <Product class_img="img_produto_nin" 
                       class_title="title_produto_nin"
                       class_desc="desc_produto_nin" 
                       class_old="old_price_nin"
                       class_new="new_price_nin"
                       class_split="split_price_nin"
                       class_buy="buy_produto_nin"
                       class_buy_label="buy_label_nin"
                    />
                    
            </div>

                <button className="button_more_prod"/>
                <label className="label_more_prod">Ainda mais produtos aqui!</label>

            
                <div className="title font_end">
                Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
                </div>
                
                <div className="label_nome font_end"> 
                Nome do seu amigo:
                </div>

                <div className="label_email font_end">
                E-mail:
                </div>
                
                <input className="input amigo"/>
                <input className="input amigo_email"/>

                <button className="button_send_now"></button>
                <div className="label_send_now font_send_now">Enviar agora</div>
               
          

             </div>

             <div className="container_footer">
                <div className="text_footer">
                    Testando suas habilidades em HTML, CSS e JS.<br></br> Linx Impulse <br></br> 2019
                </div >
            </div>
           
           </div>
} 

export default Desktop;