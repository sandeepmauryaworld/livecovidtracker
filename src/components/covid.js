import React,{useEffect, useState } from 'react'
import './covid.css';

const Covid = () => {

const [data ,setdata]=useState([]);


    const getCovidData=async ()=>{
        try{

            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setdata(actualData.statewise[0]);
        }catch (err)   {
            console.log(err);
        }
    
    }
    useEffect(() => {
      getCovidData();
    }, []);

    return (
        <>
        <section>
        <h1 style={{background:"#000"}}> 🔴 LIVE  </h1>
        
        <h2 style={{Color:"#000"}}> COVID-19 CORONAVIRUS TRACKER </h2>


        <ul>


            <li className="card" style={{backgroundColor:"#000"}}>
                <div className="card__main">
                <div className="card_inner">


                    <p className="class__name"><span> OUR </span> COUNTRY </p>
                    <p className="card__Total card_small"> INDIA </p>
                </div>


                </div>

            </li>


            <li className="card" style={{background:"#000"}}>
                <div className="card__main">
                <div className="card_inner">


                    <p className="class__name"><span> TOTAL</span>  RECOVERD </p>
                    <p className="card__Total card_small"> {data.recovered} </p>
                </div>


                </div>

            </li>



            <li className="card" style={{background:"#000"}}>
                <div className="card__main">
                <div className="card_inner">


                    <p className="class__name"><span> TOTAL </span> CONFIRMED </p>
                    <p className="card__Total card_small"> {data.confirmed} </p>
                </div>


                </div>

            </li>
 

            <li className="card" style={{background:"#000"}}>
                <div className="card__main">
                <div className="card_inner">


                    <p className="class__name"><span> TOTAL </span> DEATH </p>
                    <p className="card__Total card_small"> {data.deaths}  </p>
                </div>


                </div>

            </li>


            <li className="card" style={{background:"#000"}}>
                <div className="card__main">
                <div className="card_inner">


                    <p className="class__name"><span> TOTAL </span> ACTIVE</p>
                    <p className="card__Total card_small"> {data.active} </p>
                </div>


                </div>

            </li>


            <li className="card" style={{background:"#000"}}>
                <div className="card__main">
                <div className="card_inner">


                    <p className="class__name"><span> LAST </span> UPDATED</p>
                    <p className="card__Total card_small"> {data.lastupdatetime} </p>
                </div>


                </div>

            </li>

        </ul>
            </section>
        </>
    )
}

export default Covid
