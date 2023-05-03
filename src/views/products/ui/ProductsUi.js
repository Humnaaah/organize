import React,{useState} from 'react';
import {Link} from 'react-router-dom';


const ProductsUi =()=>{
    const [colorOption, setColorOption] = useState("");
    const [quantity, setQuantity] = useState(0);
   
    const setColor =(e)=>{
        console.log('Color Selected',e.target.value);
        setColorOption(e.target.value);
    }
    const setQuant =(quant)=>{
        console.log('Quanity Selected',quant);
    }
    const setMax =()=>{
        console.log('Max Quanity Selected',quantity + 1);
        setQuantity(quantity + 1)
    }
    const setMin =()=>{
        if (quantity !== 0){
            console.log('Max Quanity Selected',quantity- 1);
            setQuantity(quantity- 1)
        }
        else {
            alert("Quantity cannot be negative")
        }
       
    }
    return(
        
        <div className="main">
             <section className="h-100 h-custom" >
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card shopping-cart" >
                        <div className="card-body text-black">
                            <div className="row">
                                <div className="col-lg-6 px-5 py-4">
                                    <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>

                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-shrink-0">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
                                                className="img-fluid"
                                                style={{width: "150px"}}
                                                alt="Generic placeholder image"
                                            />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <a href="#!" className="float-end text-black"><i className="fas fa-times"></i></a>
                                            <h5 className="text-primary">iPad 9.7 6-gen WiFi 32GB</h5>
                                            <select className="select" onChange={setColor} value={colorOption}>
                                                <option>Please Select</option>
                                                <option value="black">Jet Black</option>
                                                <option value="pink">Rose Pink</option>
                                                <option value="rose">Rose Red</option>
                                            </select>
                                            <div className="d-flex align-items-center">
                                                <p className="fw-bold mb-0 me-5 pe-3">659$</p>
                                                <div className="def-number-input number-input safari_only">
                                                    <button className="minus" onClick={()=>setMin()}></button>
                                                    <input className="quantity fw-bold text-black" min="0" name="quantity" value={quantity} type="number" onChange={e=>setQuant(e.target.value)} />
                                                    <button className="plus" onClick={()=>setMax()}></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link type="button" className="btn btn-primary btn-block btn-lg" to="/cart"> Add To Cart</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                </div>
            </section>
        </div>
    )
}


export default ProductsUi