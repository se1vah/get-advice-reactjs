import { useEffect, useState } from "react"

export const Advices = () => 
{
    const [Advice,setAdvice] = useState("");
    async function getAdviceFromAPI(){
        try{
            const url = "https://api.adviceslip.com/advice";
            const data = await fetch(url)
            const json_data = await data.json()
            setAdvice(json_data.slip.advice)
        }
        catch(error)
        {
            setAdvice(error+"")
            console.log(error);
        }
        finally
        {

        }
        
      
    }
    useEffect(function(){getAdviceFromAPI()},[])
    return(
        <div className="advice-container">
            <p>{Advice}</p>
            <button onClick={getAdviceFromAPI}><b>Get Advice</b></button>
        </div>
    )
}