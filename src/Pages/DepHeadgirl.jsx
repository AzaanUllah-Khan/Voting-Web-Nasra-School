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

const DepHeadgirl = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const next = async () => {
    if (selectedImageIndex !== null) {
      setIsSubmitting(true);
      const selectedCandidate = data[selectedImageIndex];
      const candidateDoc = doc(db, "Deputy Headgirl", selectedCandidate.name);
      await updateDoc(candidateDoc, {
        votes: increment(1)
      });
      navigate('/finish');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "Deputy Headgirl"));
      const querySnapshot = await getDocs(q);
      const storage = getStorage();

      const promises = querySnapshot.docs.map(async (doc) => {
        const name = doc.data().Name;
        const symbol = doc.data().Symbol;
        const imageRef = ref(storage, `Deputy Headgirl/${name}`);
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
      <Heading post="Deputy Headgirl" />
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
        disabled={selectedImageIndex === null || isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Confirm Your Vote'} <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default DepHeadgirl;
