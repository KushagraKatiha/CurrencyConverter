import React, { useState } from "react";
import "./Converter.css"

function Converter({ heading, list_one, value_list }) {
    
    const [amount, setAmount] = useState("00")
    const [result, setResult] = useState("00")
    const [curr1, setCurr1] = useState(list_one[0])
    const [curr2, setCurr2] = useState(list_one[0])

    const changeText = () => {
        let inputAmount = document.querySelector(".amount").value
        setAmount(inputAmount)
 
        let chngFrom = document.querySelector(".option1").value
        setCurr1(chngFrom)
 
        let chngTo = document.querySelector(".option2").value
        setCurr2(chngTo)

        // Formula to Change the Rates

        let valueOfFrom = list_one.indexOf(chngFrom)
        let rateOfFrom = value_list[valueOfFrom]
        
        let valueOfTo = list_one.indexOf(chngTo)
        let rateOfTo = value_list[valueOfTo]
        
        let finalResult = ((1/rateOfFrom) * inputAmount ) * rateOfTo

        setResult(finalResult.toPrecision(3));


    }

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
                            {list_one.map((el, idx)=>{
                                    return <option value={el} key={idx}>{el}</option>
                                })}
                            </select>
                        </div>
                        <br />


                        {/* Form for Amount and Result */}
                        <div className="form2">

                            {/* Amount-Box */}
                            <div className="amount-box">
                                <label htmlFor="ip2" className="quantity" >Amount</label>
                                <br />
                                <input type="text" placeholder="00" className="amount"/>
                                <br />
                            </div>

                            {/* Result-Box */}
                            <div className="result-box">
                                <label className="get" >Result</label>
                            <p className="result" >{result}</p>
                            </div>

                            {/* Amount and Result Ends */}
                        </div>


                        {/* Currency Change Box  Ends */}
                    </div>
                <button onClick={changeText} className="submit">Convert</button>
                <hr />

                <h2>{`${amount || "00"} ${curr1} will be ${result} ${curr2}`}</h2>
        
        {/* Main-Box Ends */}
            </div>
        </>
    )
}

export default Converter
