import React, { useState } from 'react'
import "./Filter.css"
import { FiPlus } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { plant_data } from '../../assets/nursery';
import { CiHeart } from "react-icons/ci";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const Filter = () => {
    const navigate = useNavigate()
    const [plantData , setPlantData] = useState(plant_data.slice(0,9))
    console.log(plantData)

    const viewMoreBtn = () => {
        if(plantData.length <= plant_data.length){
            setPlantData(plant_data.slice(0 , plantData.length+6))
          }
    }
    
  return (
    <div className='filter-container'>
        {/* filter left block */}
        <div className='filter-left'>
            <div className='filter-left-item'>
                <p>Filter</p>
                <p>CLEAR ALL</p>
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Type Of Plants</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Price</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Nursery</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Ideal Plants Location</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Indoor/ Outdoor</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Maintenance</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Plant Size</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Water Schedule</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Color</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Seasonal</p>
                <FiPlus />
            </div>
            <hr />
            <div className='filter-left-item'>
                <p>Light Efficient</p>
                <FiPlus />
            </div>
        </div>
        {/* filter right block */}
        <div className='filter-right'>
            <div className='filter-right-top'>
                <p>300 products</p>
                <button>SORT BY <IoIosArrowDown/> </button>
            </div>
            {/* filter bottom block */}
            <div className='filter-bottom'>
                {
                    plantData.map((item , index) => {
                        return(
                            <div key={index} className='filter-item-container'>
                                <div className='filter-item-img-container'>
                                    <CiHeart className='heart' size={30} />
                                    <img src={item.plant_img} alt="" />
                                    <button onClick={()=> navigate("/add-to-cart")}>View Product</button>
                                </div>
                                <h1>{item.name}</h1>
                                <p className='desc'>{item.desc}</p>
                                <div className='rating-conatiner'>
                                    <img  src={item.rating} alt="" />
                                    <p>4.9</p>
                                </div>
                                <div className='price-container'>
                                    <p className='strike-price'><MdOutlineCurrencyRupee />{item.original_price}</p>
                                    <p className='price'><FaRupeeSign />{item.price}</p>
                                </div>
                                <div className='filter-item-buttons'>
                                    <button onClick={()=> navigate("add-to-cart") } className='add-cart-btn'> <TiMinus /> Add to cart <FaPlus /></button>
                                    <button className='buy-btn'>Buy on Rent</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        <button className='view-more-btn' onClick={viewMoreBtn} >View More</button>
        </div>
        
    </div>
  )
}

export default Filter