import React from "react";
import app from "./app.css";
import Body from "./Body/body";
import Header from "./Header/header";
import Footer from "./Footer/footer";

export default function App(){
    return(
        <div>
            <Header />
            <Body />
            <Footer />
        </div>
    );
}
































// export default function App(){
//     let count=0;
//     const [number , setnumber]= useState(count);

//     function increse(){
//         setnumber(number+1)
//     }

//     function decrese(){
//         setnumber(number-1)
//     }
//     return(
//         <div className="div">
//             <h1 className="heading">{number}</h1>
//             <button className="btn" onClick={decrese}>-</button>
//             <button className="btn" onClick={increse}>+</button>
//         </div>
        
//     );
// }