import React, { useState } from "react";
import "tailwindcss";
const FormContent=()=>{
    const [p,setP]=useState("");
    const [t,setT]=useState("");
    const [r,setR]=useState("");
    const [n,setN]=useState("");
    const [clicked,setClicked]=useState(false);
    const [ans,setAns]=useState(0);
    const [comp,setComp]=useState(false);
    
    const [empty,setEmpty]=useState(false);
    const handleSimple=()=>{
        setClicked(true);
        let a=Number(p)*Number(r)*Number(t);
        setAns(a/100);
         if(typeof ans==NaN)setEmpty(true);
         if(!a)setEmpty(true);
    }
    const handleCompound=()=>{
        if(!p || !r || !t)setEmpty(true);
      else setComp(true);
    }
const handleCompoundFinal=()=>{
    setClicked(true);
    setComp(false);
    let temp=1+(r/100*n);
   let temp1=Math.pow(temp,n*t);
    let temp2=temp1*p;
    let a=Number(temp2-Number(p));
    setAns(a.toFixed(2));
    if(!a)setEmpty(true);
}
if(empty){
    return (
        <div>
            <h1>Please Fill all the required fields</h1>
        </div>
    );
}
if(comp){
    return (
          <div>
        <label >
            Enter Number of times,Intrest is calculated per year: <input name="tn" type="number" value={n} onChange={(e)=>setN(e.target.value)} className="border border-purple-500" required/>
        </label>
        <br /><br />
        <button className="flex w-max gap-4" onClick={handleCompoundFinal} >Submit</button>
          </div>
    );
}
     if(clicked){
            return (
                <div>
                    <h1>Final Ans={ans}</h1>
                </div>
            );
        }
    return (
       
        <div>
        <label>
            Enter Principal Amount(in rupees): <input name="ppl" type="number" value={p} onChange={(e)=>setP(e.target.value)} className="border border-purple-500" required/>
        </label>
        <br /><br />
         <label>
            Enter Time Period(in years): <input name="time" type="number" value={t} onChange={(e)=>setT(e.target.value)} className="border border-purple-500" required/>
        </label>
        <br /><br />
         <label>
            Enter Rate of Intrest(in %): <input name="rate" type="number" value={r} onChange={(e)=>setR(e.target.value)} className="border border-purple-500" required/>
        </label>
        <br /><br />
        <button className="flex w-max gap-4" onClick={handleSimple}>Simple Intrest</button>
        <br />
        <button className="flex w-max gap-4" onClick={handleCompound}>Compount Intrest</button>
        </div>
    );
}
export default FormContent;