import React, { useCallback, useEffect, useState } from "react";
import "./Converter.css"

function Converter({ heading, list_one, list_two }) {
    
    let newOption = list_one[0];
    
    const [option, setOption] = useState(newOption)
    
    let findOption = useCallback(async ()=>{
        let optionUpdate =document.querySelector(".option1").value
        console.log(optionUpdate);
        setOption(optionUpdate)
    }, [option, setOption])


    useEffect(()=>{ findOption() }, [option, setOption, findOption])

    return (
        <>

        {/* Main Box */}
            <div className="main">

                <h1 className="head">{ heading }</h1>
                <hr />

                {/* Currency Change Form */}
                    <div className="form">
                        <label htmlFor="firstip" className="firstinput">Convert from : {option}</label>
                        <br />

                        <select className="option1">
                            {list_one.map((el, idx)=>{
                                return <option key={idx}>{el}</option>
                            })}
                        </select>
                        <br />

                        <label htmlFor="firstip" className="secondinput">Convert to : </label>
                        <br />

                        <select  className="option2">
                        {list_two.map((el, idx)=>{
                                return <option key={idx}>{el}</option>
                            })}
                        </select>
                        <br />


                        {/* Form for Amount and Result */}
                        <div className="form2">

                            {/* Amount-Box */}
                            <div className="amount-box">
                                <label htmlFor="ip2" className="quantity">Amount</label>
                                <br />
                                <input type="text" />
                                <br />
                            </div>

                            {/* Result-Box */}
                            <div className="result-box">
                                <label className="get" >Result</label>
                            <p className="result"></p>
                            </div>

                            {/* Amount and Result Ends */}
                        </div>


                        {/* Currency Change Box  Ends */}
                    </div>
                <button className="submit">Convert</button>

                <h2>100 GBP is equal to NaN USD</h2>
        
        {/* Main-Box Ends */}
            </div>
        </>
    )
}

export default Converter
