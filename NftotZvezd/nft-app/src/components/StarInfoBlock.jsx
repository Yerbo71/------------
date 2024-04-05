import React from 'react';
import ivleeva from "../assets/Ivleeva.png"
import accessUser from "../assets/accessuser.png"
const StarInfoBlock = () => {
    return (
        <div style={{
            marginTop:"30px",
            padding:"7px",
            border:"2px solid #fdd446",
            borderRadius:"15px",
            fontFamily:"Rubik, sans-serif",
        }}>
            <div style={{
                width:"100%",
                display:"flex",
                gap:"7px"
            }}>
                <div>
                    <img src={ivleeva} width={75} height={110}/>
                </div>
                <div>
                    <div style={{fontWeight:"500",fontSize:"10px"}}>
                        Ивлеева Анастасия
                    </div>
                    <div style={{display:"flex",width:"100%", alignItems:"center",marginTop:"-5px"}}>
                        <div style={{fontSize:"7px", fontWeight:"400",color:"#FF9900",marginRight:"3px"}}>проверено</div>
                        <div>
                            <img src={accessUser} width={7} height={7} style={{marginBottom:"1px"}}/>
                        </div>
                    </div>
                    <div style={{fontWeight:"400",fontSize:"10px"}}>
                        История о звезде. История о звезде.
                        История о звезде. История о звезде.
                        История о звезде. История о звезде.
                        История о звезде. История о звезде.
                        История о звезде. История о звезде.
                        История о звезде. История о звезде.
                    </div>
                    <div style={{display:"flex",width:"100%",fontWeight:"400",fontSize:"7px",flexWrap:"wrap",marginTop:"4px",gap:"2px"}}>
                        <div style={{width:"100%",display:"flex",gap:"2px"}}>
                            <div>Всего коллекций:</div>
                            <div style={{fontWeight:"500",textDecoration:"underline"}}>10</div>
                        </div>
                        <div style={{width:"100%",display:"flex",gap:"2px"}}>
                            <div>Стоимость: </div>
                            <div> от </div>
                            <div style={{fontWeight:"500",textDecoration:"underline"}}>500 ₽</div>
                            <div> до </div>
                            <div style={{fontWeight:"500",textDecoration:"underline"}}>1000000 ₽</div>
                        </div>
                    </div>
                    <div style={{fontWeight:"500",textDecoration:"underline",fontSize:"7px"}} >
                        Топовые коллекционеры
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarInfoBlock;