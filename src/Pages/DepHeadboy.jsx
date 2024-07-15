import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Heading from '../Components/HeroHeading/Heading';
import ImageComp from '../Components/ImageComp/Image';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { query, getDocs, db, collection } from '../assets/Firebase/Firebase';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const DepHeadboy = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const next = () => {
    navigate('/depheadgirl');
  };

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "Deputy Headboy"));
      const querySnapshot = await getDocs(q);
      const dataArray = [];
      const storage = getStorage();

      const promises = querySnapshot.docs.map(async (doc) => {
        const name = doc.data().Name;
        const symbol = doc.data().Symbol;
        const imageRef = ref(storage, `Deputy Headboy/${name}`);
        const img = await getDownloadURL(imageRef);
        return {
          name,
          symbol,
          img,
        };
      });

      const results = await Promise.all(promises);
      setData(results);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Heading post="Deputy Headboy" />
      <div className='row'>
        {data.map((item, index) => (
          <ImageComp
            key={index}
            img={item.img}
            name={item.name}
            symbol={item.symbol}
            isSelected={index === selectedImageIndex}
            onClick={() => handleImageSelect(index)}
          />
        ))}
      </div>
      <button className='vote' onClick={next} disabled={selectedImageIndex === null}>
        Confirm Your Vote <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default DepHeadboy;
