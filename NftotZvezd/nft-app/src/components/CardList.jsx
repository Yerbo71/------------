import React from 'react';
import {data} from "../data/data.js";
import left from "../assets/largeleft.svg";
import right from "../assets/largeright.svg";

const CardList = () => {
    return (
        <div style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"16px",marginTop:"140px"}}>
            {data.map((item, index) => (
                <div key={index} style={{border:"1px solid gray",padding:"5px",width:165}}>
                    <div>
                        <img src={item.img} width={165} height={180}/>
                        <div style={{fontWeight:700,fontSize:12,marginBottom:5}}>
                            {item.title}
                        </div>
                        <div style={{width:"100%",display:'flex'}}>
                            <div style={{marginRight:3}}>
                                <img src={item.img_2} width={40} height={40}/>
                            </div>
                            <div>
                                <div style={{fontWeight:400,fontSize:12,width:"100%"}}>{item.name}</div>
                                <div style={{width:"100%",display:"flex",alignItems:"center",gap:3}}>
                                    <div style={{fontWeight:400,fontSize:8,color:"#FF9900"}}>
                                        {item.status}
                                    </div>
                                    <img src={item.status_image}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:8}}>
                        <div style={{fontWeight:400,fontSize:12}}>Редкость: </div>
                        <div style={{border:"1px solid #FDD446",borderRadius:7,fontSize:9,fontWeight:400,paddingRight:8,paddingLeft:8,paddingTop:2,paddingBottom:2}}>{item.rarity}</div>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"space-between",marginTop:6}}>
                        <div style={{fontWeight:400,fontSize:12}}>Цена: </div>
                        <div style={{backgroundColor:"#FDD446",borderRadius:7,fontSize:9,fontWeight:400,paddingRight:8,paddingLeft:8,paddingTop:3,paddingBottom:2}}>от {item.cost}</div>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",marginTop:8,marginBottom:5}}>
                        <button style={{fontWeight:400,fontSize:12,width:"90%",paddingBottom:"5px",paddingTop:"5px",border:"none",background:"linear-gradient(90deg, rgba(253,212,70,1) 0%, rgba(246,155,71,1) 100%)",borderRadius:8}}>
                            Купить
                        </button>
                    </div>
                </div>
            ))}

            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:"8px",marginBottom:"8px",marginTop:"10px"}}>
                <img src={left} style={{padding:"8px"}}/>
                <div style={{fontWeight:700,fontSize:22,backgroundColor:"#FDD446",borderRadius:"50%",padding:"6px 12px"}}>1</div>
                <div style={{fontWeight:700,fontSize:22,padding:"6px 12px"}}>2</div>
                <div style={{fontWeight:700,fontSize:22,padding:"6px 12px"}}>3</div>
                <div style={{fontWeight:700,fontSize:22,padding:"6px 12px"}}>4</div>
                <div style={{fontWeight:700,fontSize:22,padding:"6px 12px"}}>5</div>
                <img src={right} style={{padding:"8px"}}/>
            </div>
        </div>
    );
};

export default CardList;
