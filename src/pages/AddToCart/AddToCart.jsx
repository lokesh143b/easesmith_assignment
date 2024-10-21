import React from 'react'
import './AddToCart.css'
import { IoClose } from "react-icons/io5";


const AddToCart = () => {
  return (
    <div className='add-cart-container'>
        <div className='add-cart-item-container'>
            <IoClose size={20} className='close' />
            <p>Your Cart</p>
            <hr />
            <h1>Congratulations <br /> Order Placed!</h1>
            <div className='background-shape'></div>
            <img src="https://s3-alpha-sig.figma.com/img/da30/c60d/14d6293522911d4a2548b9b1cf65a33a?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D5pgI9-LPTeyxTAX7Tx4rPMOzg1OIqYmQXrG0HvjoQ5Bzp6MgBC9H2tCXXcDHh36n4rJRXiPF8KIUZ8D9ylzp7G1PXdlx5ZHXP0NgziR0E0RgqEFMhJs56aGzQompLAckBXYbj5hNT9biJmmRUxbVUqamJMOAbJrrbkIsunoLgGQCxCv1uVQZR3zAhBLfRfQccMwyuVA72PQCs2m3trjygjTMtlqTuff7MdWXldWG9waw5FpNeKNklaO5QxaALVQgsurI5Gq1cMIDYnNtD-7kPyfdTgblRmyE0zT096mERgd6FYjzM~MemDnSTIMZf5X20BvZEPgD2mqkjjyPxK2Dg__" alt="" />
            <p>Thank you for choosing Chaperone services. <br />
            We will soon get in touch with you!
            </p>
            <button>CONTINUE SHOPPING</button>
            <div className='background-shape-2'></div>
        </div>
    </div>
  )
}

export default AddToCart