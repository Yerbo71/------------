import React, {useEffect, useState} from 'react';

const Coin = () => {
    const[coinData,setCoinData] = useState();

    const getCoin = async () =>{
        try{
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1  `);
            const resData = await res.json();
            console.log(resData);
            setCoinData(resData);
        }catch (e){
            console.log("Fetch Error: ", e)
        }
    };
    useEffect(()=>{
        getCoin()
    },[])

    return (
        <div style={{backgroundColor:"#111827",display:"flex", width:"100%",justifyContent:"center"}}>
            <table style={{padding:"5px"}}>
                <thead>
                <tr style={{backgroundColor:"#374151",color:"#cacedb",padding:"3px"}}>
                    <th>ID</th>
                    <th>Symbol</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {coinData && coinData.map((coin, index) => (
                    <tr key={index} style={{ background: coin.symbol === 'usdt' ? '#33823c' : index < 5 ? "#3e68a3" : "#1f2937", color:"#9ca0ac"}}>
                        <td>{coin.id}</td>
                        <td>{coin.symbol}</td>
                        <td>{coin.name}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Coin;