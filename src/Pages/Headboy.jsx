import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Heading from '../Components/HeroHeading/Heading';
import ImageComp from '../Components/ImageComp/Image';
import './css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { query, getDocs, db, collection, doc, updateDoc, increment } from '../assets/Firebase/Firebase';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const Headboy = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this state

  const navigate = useNavigate();

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const next = async () => {
    if (selectedImageIndex !== null && !isSubmitting) {
      setIsSubmitting(true); // Disable the button
      const selectedCandidate = data[selectedImageIndex];
      const candidateDoc = doc(db, "Headboy", selectedCandidate.name);
      await updateDoc(candidateDoc, {
        votes: increment(1)
      });
      navigate('/headgirl');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "Headboy"));
      const querySnapshot = await getDocs(q);
      const storage = getStorage();

      const promises = querySnapshot.docs.map(async (doc) => {
        const name = doc.data().Name;
        const symbol = doc.data().Symbol;
        const imageRef = ref(storage, `Headboy/${name}`);
        const img = await getDownloadURL(imageRef);
        return {
          id: doc.id,
          name,
          symbol,
          img,
          votes: doc.data().votes || 0
        };
      });

      const results = await Promise.all(promises);
      setData(results);
      setLoading(false);
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Heading post="Head Boy" />
      <div className='row'>
        {loading
          ? Array.from({ length: 4 }).map((_, index) => (
              <ImageComp key={index} isLoading={true} />
            ))
          : data.map((item, index) => (
              <ImageComp
                key={index}
                img={item.img}
                name={item.name}
                symbol={item.symbol}
                isSelected={index === selectedImageIndex}
                onClick={() => handleImageSelect(index)}
                isLoading={false}
              />
            ))}
      </div>
      <button 
        className='vote' 
        id='btn' 
        onClick={next} 
        disabled={selectedImageIndex === null || isSubmitting} // Disable button if no selection or submitting
      >
        {isSubmitting ? 'Submitting...' : 'Confirm Your Vote'} <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Headboy;
