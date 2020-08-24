import React, { useEffect, useState } from 'react';
import Header from '../elements/Header';
import MainText from '../elements/MainText';
import Inputs from '../elements/Inputs';
import Product from '../elements/Product';
import Footer from '../elements/Footer';
import { getProducts } from '../../services/getProducts';
import Label from '../elements/Label';
import Dividers from '../elements/Dividers';
import ListProducts from '../elements/ListProducts';

const Desktop = (props) => {

    const [state, setState] = useState({ products: [] });
    const [statePage, setstatePage] = useState({ url: "https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1" });
    const [stateInputs, { onChangeAmigo }, { onChangeEmail }] = useModel();


    useEffect(() => {
        getProducts(statePage.url).then(res => {
            setState({ ...state, products: res.products })
            setstatePage({ url: res.nextPage })
        })

    }, [])

    return <div className="container">
        <Header />
        <MainText />
        <div>

            <Inputs />
            <Dividers />

            <div className="container_produtos">
                <ListProducts products={state.products} />
            </div>

            <button className="button_more_prod" onClick={() => getProducts(statePage.url)
                .then(res => {
                    setstatePage({ url: res.nextPage });
                    setState({ products: res.products });
                })} />

            <Label class="label_more_prod">Ainda mais produtos aqui!</Label>
            <Label class="title font_end">Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora! </Label>
            <Label class="label_nome font_end">Nome do seu amigo:</Label>
            <Label class="label_email font_end">E-mail:</Label>

            <input className="input amigo" value={stateInputs.textAmigo} onChange={onChangeAmigo} />
            <div className={stateInputs.class_amigo}>{stateInputs.amigo_mes}</div>
           
            <input className="input amigo_email" value={stateInputs.textEmail} onChange={onChangeEmail} />
            <div className={stateInputs.class_email}>{stateInputs.email_mes}</div>
           
            <button className="button_send_now" > </button>

            <Label class="label_send_now font_send_now">Enviar agora</Label>
        </div>

        <Footer text={<>"Testando suas habilidades em HTML, CSS e JS.<br></br> Linx Impulse <br></br> 2019"</>} />

    </div>
}


function useModel() {
    const [stateInputs, setStateInputs] = useState({ textAmigo: '', textEmail: '',class_amigo: '',amigo_mes:'',class_email:'',email_mes:''});

    function onChangeAmigo(e) {
        var regex = /^[A-Za-z]+$/;
        let value_copy = e.target.value;
        let value_anaylse = value_copy.replace(/ /g,'');
        
        if(e.target.value.trim() == ''){
            setStateInputs({ ...stateInputs, textAmigo: '',class_amigo:'',amigo_mes:''});   
        }else{
            if(value_anaylse.match(regex)){
                setStateInputs({ ...stateInputs, textAmigo: e.target.value,class_amigo:'help_success amigo',amigo_mes:"OK"});    
            }else{
                setStateInputs({ ...stateInputs, textAmigo: e.target.value,class_amigo:'help_danger amigo',amigo_mes:"Caracter não alfabético informado"});    
            }
        }
       
    }

    function onChangeEmail(e) {
        var regex = /[a-z A-z 0-9]+[@][a-z A-z 0-9]+[.]([c][o][m]|[b][r]|[c][o][m][.][b][r])$/;
        let value_copy = e.target.value;
        let value_anaylse = value_copy.replace(/ /g,'');

        if(e.target.value.trim() == ''){
            setStateInputs({ ...stateInputs, textEmail: '',class_email:'',email_mes:''});   
        }else if(e.target.value.trim().length > 50){
            setStateInputs({ ...stateInputs, textEmail: e.target.value,class_email:'help_danger email',email_mes:"Máximo de caracteres ultrapassado"});    
        }else if(value_anaylse.match(regex)){
            setStateInputs({ ...stateInputs, textEmail: e.target.value,class_email:'help_success email',email_mes:"OK"});    
        }else{
            setStateInputs({ ...stateInputs, textEmail: e.target.value,class_email:'help_danger email',email_mes:"Email não está no formato correto"});    
        }
    }


    return [stateInputs, { onChangeAmigo }, { onChangeEmail }];
}




export default Desktop;



