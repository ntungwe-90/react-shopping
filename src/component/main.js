import React from 'react';
import Item from './item';
import image1 from '../assets/imgs/shirt1.jpg';
import image2 from '../assets/imgs/shirt2.jpg';
import image3 from '../assets/imgs/shirt4.jpg';
import image4 from '../assets/imgs/shirt5.jpg';
import image5 from '../assets/imgs/shirt6.jpg';
import image6 from '../assets/imgs/shirt7.jpg';
import image7 from '../assets/imgs/shirt8.jpg';
import image8 from '../assets/imgs/shirt9.jpg';
import image9 from '../assets/imgs/shirt12.jpg';
import image10 from '../assets/imgs/shirt10.jpg';
import image11 from '../assets/imgs/shirt11.jpg';
import image12 from '../assets/imgs/shirt12.jpg';


function Tshirt() {
    return (
        <div className='container-main'>
            <div className='row'>
                <div className='col-md-6'>
                    <h4>16 products found</h4>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-3'></div>
                        <div className='col-md-3'></div>
                        <h5> Order by</h5>
                        <div className='col-md-3'>
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="www.select.com" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Select
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-3'><Item image={image1} type='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image2} type='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image3} type='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image8} type='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>

            <div className='row'>
                <div className='col-md-3'><Item image={image5} type='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image6} type='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image12} type='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image4} type='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>

            <div className='row'>
                <div className='col-md-3'><Item image={image9} type='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image3} type='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image2} type='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image1} type='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>

            <div className='row'>
                <div className='col-md-3'><Item image={image8} type='Zara TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image7} type='Armani TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image11} type='Levis TShirt' price='$20' discount='or 5 x$5.89' /></div>
                <div className='col-md-3'><Item image={image10} type='Chanel TShirt' price='$20' discount='or 5 x$5.89' /></div>
            </div>
        </div>
    )
}

export default Tshirt;