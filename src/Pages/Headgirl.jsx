import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Heading from '../Components/HeroHeading/Heading'
import ImageComp from '../Components/ImageComp/Image'
import './css.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const Headgirl = () => {
  const navigate = useNavigate()
  function next(){
    navigate('/depheadboy')
  }
  return (
    <div>
      <Navbar />
      <Heading post="Head Girl"/>
      <div className='row'>
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" />
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" />
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" />
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" />
      </div>
      <button className='vote' onClick={next}>Confirm Your Vote <FontAwesomeIcon icon={faArrowRight} /></button>
    </div>
  )
}

export default Headgirl