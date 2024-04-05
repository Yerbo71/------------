import React from 'react';
import star from "../assets/star.png"

const Footer = () => {
    return (
        <div style={{width:"100%",display:"flex",backgroundColor:"#FDD446",padding:"30px 16px",marginTop:"90px"}}>
            <div style={{width:"80%",display:"flex",flexWrap:"wrap",gap:4}}>
                <a style={{width:"100%",fontWeight:400,fontSize:17}}>Что такое NFT</a>
                <a style={{width:"100%",fontWeight:400,fontSize:17}}>Создайте NFT с нами</a>
                <a style={{width:"100%",fontWeight:400,fontSize:17}}>О нас</a>
                <a style={{width:"100%",fontWeight:400,fontSize:17}}>Отправить запрос</a>
                <a style={{width:"100%",fontWeight:400,fontSize:17}}>Условия использования</a>
                <a style={{width:"100%",fontWeight:400,fontSize:17}}>Политика конфиденциальности</a>
            </div>
            <div style={{width:"20%"}} >
                <img src={star}/>
            </div>

        </div>
    );
};

export default Footer;