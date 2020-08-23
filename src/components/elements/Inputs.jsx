import React from 'react';


const Inputs = (props)=>{
    return  <>  
                <label className="label_nome">Seu Nome</label>
                <input className="first_input"/>

                <label className="label_email">Email</label>
                <input className="second_input"/> 

                <label className="label_cpf">CPF</label>
                <input className="third_input"/> 

                <input className="radio_masc" type="radio"/>
                <div className="radio_masc_label"> Masculino</div>
                
                <input className="radio_fem" type="radio" />
                <div className="radio_fem_label">Feminino</div>

                
                <button className="button_enviar"/>
                <label className="label_button_enviar">Enviar</label>
            </>;
}

export default Inputs;