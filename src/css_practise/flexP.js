import React from 'react';

function FlexP(props) {
    return (
        <div style={{background:"black",height: "500px",}}>
           <div style={{height: "100px",width:"100px",color:"green",background:"blue"}}>one</div> 
           <div style={{height: "100px",width:"100px",color:"green",background:"orange"}}>two</div> 
           <div style={{height: "100px",width:"100px",color:"green",background:"yellow"}}>three</div> 
           <div style={{height: "100px",width:"100px",color:"green",background:"purple"}}>four</div> 
           <div style={{height: "100px",width:"100px",color:"green",background:"pink"}}>five</div> 
           <div style={{height: "100px",width:"100px",color:"green",background:"blue"}}></div> 
        </div>
    );
}

export default FlexP;