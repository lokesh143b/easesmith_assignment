import React from 'react'
import './Home.css'
import { CgSearch } from "react-icons/cg";
import Nursery from '../../components/Nursery/Nursery';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div>
      {/* search bar */}
      <div className='search-bar'>
        <CgSearch size={27} />
        <input placeholder='Search plant' type="text" />
        <img src="https://s3-alpha-sig.figma.com/img/3a30/d80e/594c268f203b8704f61985100fae62d6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECIAJtsSLBVXgl2YF31TxKtq5s0LuX-WtEAzq6FqsAwtmZqiS-DsBkPIwI7mmd0ENoIRLeFKfIjRs5lPiIOarypWJhPEpdI2MHEdJkN1xO7rPxfi6Fivh6LStPxif7cKgwH6k8~PerjWx0Mh5He89Sd3dhBBzSoVHJbRu3RrNjEiGdnLBB7zqjdkw-G736mL7wI656dFi0pWcNGgWTzpC8Gx8DZC4Xf34jdHqhDOfR4kbBMTDGR6JUiDdCwChwHow27J6anCaHgCGyxB2hSvt1vhj2sGVI2cstk7qHKKBVKVoJwELI3jKy9S17QquNjtZWTSwgOnlOFdC1vmzV3X6w__" alt="" />
      </div>

      {/* buttons container and description */}

      <div className='buttons-container'>
        <button className='button-1'>Plants</button>
        <button className='button-2'>Pots</button>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut necessitatibus enim ut internos accusantium a numquam autem ab rerum omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius. Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.</p>
      </div>

      {/* Nursery block */}
      <Nursery/>
      {/* Filter block */}
      <Filter/>
      {/* footer  block */}
      <Footer/>
    </div>
  )
}

export default Home