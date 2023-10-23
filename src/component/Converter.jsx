import React, { useCallback, useEffect, useState } from "react";
import "./Converter.css"

function Converter({ heading, list_one, list_two }) {
    
    // const [option, setOption] = useState("Hello")

    // const handleOption = useCallback(()=>{
    //     const option1 = document.querySelector(".option1")
    //     console.log(option1.value);
    //     setOption(option1.value)
    // }, [setOption])


    // useEffect(()=>{handleOption()}, [setOption])

    return (
        <>

        {/* Main Box */}
            <div className="main">

                <h1 className="head">{ heading }</h1>
                <hr />

                {/* Currency Change Form */}
                    <div className="form">
                        <div className="option-box">
                            <label htmlFor="firstip" className="firstinput">Convert from :</label>                         

                            <select className="option1">
                                {list_one.map((el, idx)=>{
                                    return <option  key={idx}>{el}</option>
                                })}
                            </select>
                        </div>
                        
                        <br />

                       <div className="option-box">
                            <label  htmlFor="firstip" className="secondinput">Convert to : </label>

                            <select className="option2">
                            {list_two.map((el, idx)=>{
                                    return <option value={el} key={idx}>{el}</option>
                                })}
                            </select>
                        </div>
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
