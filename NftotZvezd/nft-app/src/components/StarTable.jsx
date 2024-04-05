import React from 'react';
import zvezda_1 from "../assets/Zvezda_1.png"
import zvezda_3 from "../assets/zvezda_3.png"
import zvezda_5 from "../assets/zvezda_5.png"
import left from "../assets/left.svg"
import right from "../assets/right.svg"
const StarTable = () => {
    return (
        <div style={{position: "relative"}}>
            <div style={{position: "absolute", top: 0, left: 0, right: 0, zIndex: 2}}>
                <div style={{border:"2px solid #fdd446",borderRadius:"15px",marginTop:"-6px",backgroundColor:"white"}}>
                    <div>
                        <table style={{width:"100%",textAlign:"center"}}>
                            <thead>
                            <tr style={{fontSize:8,fontWeight:700}}>
                                <th style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",padding:"5px 0px"}}>Рейтинг</th>
                                <th style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",padding:"5px 0px"}}>ID/nickname</th>
                                <th style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",padding:"5px 0px"}}>Имя</th>
                                <th style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",padding:"5px 0px"}}>Сумма баллов</th>
                                <th style={{borderBottom:"1px solid gray"}}></th>
                            </tr>
                            </thead>
                            <tbody style={{width:"100%"}}>
                            <tr style={{fontSize:"8px",fontWeight:"500",width:"100%"}}>
                                <td style={{fontSize:10,fontWeight:700,borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>#1</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",width:"97%",display:"flex",justifyContent:"center",alignItems:"center",gap:4}}>
                                    <img src={zvezda_1}/>
                                    <div>@zwezda123</div>
                                </td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Варветкина Ангелина</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>845</td>
                                <td style={{borderBottom:"1px solid gray"}}><button style={{
                                    background:"linear-gradient(90deg, rgba(253,212,70,1) 0%, rgba(246,155,71,1) 100%)",
                                    border:"none",
                                    borderRadius:"15px",
                                    fontWeight:"400",
                                    fontSize:7,
                                    padding:"2px 10px"
                                }}>Подробнее</button></td>
                            </tr>
                            <tr style={{fontSize:"8px",fontWeight:"500"}}>
                                <td style={{fontSize:10,fontWeight:700,borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>#2</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Пользователь скрыт</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Пользователь скрыт</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>800</td>
                                <td style={{borderBottom:"1px solid gray"}}></td>
                            </tr>
                            <tr style={{fontSize:"8px",fontWeight:"500"}}>
                                <td style={{fontSize:10,fontWeight:700,borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>#3</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",width:"97%",display:"flex",justifyContent:"center",alignItems:"center",gap:4}}><img src={zvezda_3}/>1234654846130</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Пучкова Анастасия</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>787</td>
                                <td style={{borderBottom:"1px solid gray"}}><button style={{
                                    background:"linear-gradient(90deg, rgba(253,212,70,1) 0%, rgba(246,155,71,1) 100%)",
                                    border:"none",
                                    borderRadius:"15px",
                                    fontWeight:"400",
                                    fontSize:7,
                                    padding:"2px 10px"
                                }}>Подробнее</button></td>
                            </tr>
                            <tr style={{fontSize:"8px",fontWeight:"500"}}>
                                <td style={{fontSize:10,fontWeight:700,borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>#4</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Пользователь скрыт</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Пользователь скрыт</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>781</td>
                                <td style={{borderBottom:"1px solid gray",}}></td>
                            </tr>
                            <tr style={{fontSize:"8px",fontWeight:"500"}}>
                                <td style={{fontSize:10,fontWeight:700,borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>#5</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray",width:"97%",display:"flex",justifyContent:"center",alignItems:"center",gap:4}}><img src={zvezda_5}/>124к948</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>Мацуев Илья</td>
                                <td style={{borderBottom:"1px solid gray",borderRight:"1px solid gray"}}>743</td>
                                <td style={{borderBottom:"1px solid gray",}}><button style={{
                                    background:"linear-gradient(90deg, rgba(253,212,70,1) 0%, rgba(246,155,71,1) 100%)",
                                    border:"none",
                                    borderRadius:"15px",
                                    fontWeight:"400",
                                    fontSize:7,
                                    padding:"2px 10px"
                                }}>Подробнее</button></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",gap:"5px",marginTop:"8px",marginBottom:"8px"}}>
                        <img src={left} style={{padding:"4px"}}/>
                        <div style={{fontWeight:700,fontSize:7,backgroundColor:"#FDD446",borderRadius:"50%",padding:"5px 7px"}}>1</div>
                        <div style={{fontWeight:700,fontSize:7,padding:"5px 7px"}}>2</div>
                        <div style={{fontWeight:700,fontSize:7,padding:"5px 7px"}}>3</div>
                        <div style={{fontWeight:700,fontSize:7,padding:"5px 7px"}}>4</div>
                        <div style={{fontWeight:700,fontSize:7,padding:"5px 7px"}}>5</div>
                        <img src={right} style={{padding:"4px"}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default StarTable;