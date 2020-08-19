import React from 'react';




    
        function Item({image,type,price,discount}){
            return (
                <div style={{height:'420px', width:'220px',margin:'30px 2px 0px 2px',marginBottom:'20px'}}>
                    <img src={image} alt='' style={{width:'100%',height:'260px',}}/>
                    <h6 style={{textAlign:'center'}}>{type}</h6>
                    <hr style={{width:'20px', backgroundColor:'orange'}}/> 
                    <h5 style={{textAlign:'center'}}>{price}</h5>
                    <h5 style={{textAlign:'center', color:'gainsboro'}}>{discount}</h5>   
                    <button style={{width:'220px',height:'40px',backgroundColor:'black',color:'white',border:'0px'}}>
                        Add to cart
                    </button>
                </div>
            )
        }
        
        export default Item;
    
       

