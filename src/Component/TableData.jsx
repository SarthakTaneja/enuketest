import React, { useState } from "react";
import { useEffect } from "react";

function TableData() {

    useEffect(()=>{
        getData();
    },[]);

    const [tableData, setTableData]= useState([]);
    const getData = async ()=>{
        const api = await fetch(
            'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=JK9YE26NZ531TPGO');
    
            const data = await api.json();
            const object = data['Time Series (5min)'];
            const tableArray = Object.entries(object);
            setTableData(tableArray);
        };

        return <div>
               
                <table className="table">
                <thead>
                    <tr>
                          <th scope="col">DateTime</th>
                          <th scope="col">Open</th>
                          <th scope="col">High</th>
                          <th scope="col">Low</th>
                          <th scope="col">Close</th>
                          <th scope="col">Volume</th>
                    </tr>
                </thead>
                    
                
                {tableData?.map((table)=>{
                    console.log(table[1]);
    
                    return (                    
                        <tr >
                        <td>{table[0]}</td>
                        <td>{table[1]['1. open']}</td>
                        <td>{table[1]['2. high']}</td>
                        <td>{table[1]['3. low']}</td>
                        <td>{table[1]['4. close']}</td>
                        <td>{table[1]['5. volume']}</td>
                    </tr>)
                   
                })}
                 </table>
        </div>;
}
export default TableData;