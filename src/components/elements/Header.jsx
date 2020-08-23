import React from 'react';

const Header = (props)=>{
    return <div className="header">
                <div className="p_first">uma seleção de produtos</div>
                <div className="p_second">especial para você</div>
                <div className="p_third">Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</div>

                <div style={{marginTop:"50px"}}>
                    <div className="tag_first">
                        <p className="tag_text_first">
                        Conheça a Linx
                        </p>
                    </div>

                    <div className="tag_second">
                        <p className="tag_text_second">
                            Ajude o algorítimo
                        </p>
                    </div>

                    <div className="tag_third">
                        <p className="tag_text_third">
                        Seus produtos
                        </p>
                    </div>

                    <div className="tag_fourth">
                        <p className="tag_text_fourth">
                        Compartilhe
                        </p>
                    </div>

                </div>
        </div>;
}

export default Header;