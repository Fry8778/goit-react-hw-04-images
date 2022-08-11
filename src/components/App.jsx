import { useState, useEffect } from 'react';
import api from '../api/api';
import SerchBar from './searchbar/searchbar';
import ImageGallery from './imageGallery/imageGallery';
import ImageGalleryItem from './imageGalleryItem/imageGalleryItem';
import Button from './button/button';
import { Watch } from 'react-loader-spinner';
import Modal from './modal/modal';
import styles from './App.module.css';

export const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [objectModal, setObjectModal] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query === '') return;
    const dataRequest = async () => {
      try {
        setLoading(true);
        const data = await api(query, page);
        setData(prev => [...prev, ...data.hits]);
        setLoading(false);
        setTotalHits(data.totalHits);
      } catch (error) {
        alert('error');
      } finally {
        setLoading(false);
      }
    };

    dataRequest();
  }, [page, query]);

  const onSubmit = queryA => {
    if (query === queryA && page === 1) return;
    setQuery(queryA);
    setData([]);
    setPage(1);
    setTotalHits(null);
  };

  const toggleModal = () => {    
    setShowModal(showModal => !showModal);
  };

  const dataModal = (src, alt) => {    
    toggleModal();
    setObjectModal({ src, alt });
  };
  
  const btnLoad = () => {
    setPage(prev => prev + 1);
  };

  const totalPage = Math.ceil(totalHits / 12);
  return (
    <div className={styles.app}>
      <SerchBar onSubmit={onSubmit} />
      {data.length > 0 && (
        <ImageGallery>
          <ImageGalleryItem data={data} onModal={dataModal} />
        </ImageGallery>
      )}

      {loading === true && (
         <div className={styles.loader}>
         <Watch
           color="#3f51b5"
           ariaLabel="watch" />
        </div>
      )}

      {totalPage > page && <Button onClick={btnLoad} />}

      {showModal && (
        <Modal objectModal={objectModal} toggleModal={toggleModal} />
      )}
    </div>
  );
};
