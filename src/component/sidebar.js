import React from 'react';
import SidebarItems from './sidebarItems';



function Sidebar() {
    return (
        // <div className='container' style={{ paddingTop: '40px' }}>
        //     <div className='row'>
        //         <h3>Sizes:</h3>
        //     </div>
        //     <div className='row' style={{marginTop:'10px', marginBottom:'10px'}}>
        //         <div className='col-md-3'>
        //             <SidebarItems text='XS' />
        //         </div>
        //         <div className='col-md-3'>
        //             <SidebarItems text='S' />
        //         </div>
        //         <div className='col-md-3'>
        //             <SidebarItems text='M' />
        //         </div>
        //         <div className='col-md-3'>
        //             <SidebarItems text='ML' />
        //         </div>
        //         <div className='col-md-3'>
        //             <SidebarItems text='L' />
        //         </div>
        //         <div className='col-md-3'>
        //             <SidebarItems text='XL' />
        //         </div>
        //         <div className='col-md-3'>
        //             <SidebarItems text='XXL' />
        //         </div>
        //     </div>
        //     <div className='row' style={{textAlign:'center'}}>
        //        <h5> Leave a comment on Github if this repository was useful</h5> 
        //     </div>
        //     <button type="button" class="btn btn-default btn lg ">star
		// 			<span class="glyphicon glyphicon-star"></span>
		// 		</button>
		// 		<button className="btn1">848</button>
        // 	</div>
        <div className="container">
		<div className="row">
			<div class=" sidebar">
				<h3>sizes</h3>
				<button className="btn btn-default size-button" type="submit">XS</button>
				<button className="btn btn-default size-button2" type="submit" value="Input">S</button>
				<button className="btn btn-default size-button3" type="submit" value="Submit">M</button>
				<button className="btn btn-default size-button4" type="submit" value="Submit">ML</button>
				<button className="btn btn-default size-button5" type="submit" value="Submit">L</button>
				<button className="btn btn-default size-button6" type="submit" value="Submit">XL</button>
				<button className="btn btn-default size-button7" type="submit" value="Submit">XXL</button>
				
				<h5>leave a star on Github
				if this responsitory was useful</h5>
               
        <div className="star-button">
            <button className="star"> <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14.053" height="12.956" viewBox="0 0 14.053 12.956">
                    <path id="Path_11" data-name="Path 11" d="M14962.708,1720.052l-1.8,4.584h-5.383l3.889,3.688-1.1,4.684,4.391-2.691,4.281,2.691-1-4.684,3.588-3.688h-4.984Z" transform="translate(-14955.528 -1720.051)"/>
                  </svg>
                  
            </span> Star</button>
            
				<button className="848">848</button>
			</div>
            </div>
            </div>
            </div>
           

        
    )
}

export default Sidebar;