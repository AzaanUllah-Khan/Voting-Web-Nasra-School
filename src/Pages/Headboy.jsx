import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Heading from '../Components/HeroHeading/Heading';
import ImageComp from '../Components/ImageComp/Image';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Headboy = () => {
  const [isImageSelected, setIsImageSelected] = useState(false);
  const navigate = useNavigate();

  const handleImageSelect = (selected) => {
    setIsImageSelected(selected);
  };

  function next() {
    navigate('/headgirl');
  }

  return (
    <div>
      <Navbar />
      <Heading post="Head Boy" />
      <div className='row'>
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" onImageSelect={handleImageSelect} />
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" onImageSelect={handleImageSelect} />
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" onImageSelect={handleImageSelect} />
        <ImageComp img="https://i0.wp.com/rollercoasteryears.com/wp-content/uploads/Thrive-During-Finals-.jpg?fit=1000%2C667&ssl=1" name="AzaanUllah Khan" onImageSelect={handleImageSelect} />
      </div>
      <button className='vote' onClick={next} disabled={!isImageSelected}>
        Confirm Your Vote <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Headboy;
