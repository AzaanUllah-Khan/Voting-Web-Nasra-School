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

const Headgirl = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  const next = async () => {
    if (selectedImageIndex !== null) {
      const selectedCandidate = data[selectedImageIndex];
      const candidateDoc = doc(db, "Headgirl", selectedCandidate.name);
      await updateDoc(candidateDoc, {
        votes: increment(1)
      });
      navigate('/depheadboy');
    }
  };

  useEffect(() => {
    const getData = async () => {
      const q = query(collection(db, "Headgirl"));
      const querySnapshot = await getDocs(q);
      const dataArray = [];
      const storage = getStorage();

      const promises = querySnapshot.docs.map(async (doc) => {
        const name = doc.data().Name;
        const symbol = doc.data().Symbol;
        const imageRef = ref(storage, `Headgirl/${name}`);
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
    };
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <Heading post="Head Girl" />
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

export default Headgirl;