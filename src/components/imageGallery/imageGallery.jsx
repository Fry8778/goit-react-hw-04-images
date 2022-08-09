import PropTypes from 'prop-types';
import styles from './imageGallery.module.css';

const ImageGallery = ({ children }) => {
  return <ul className={styles.imageGallery}>{children}</ul>;
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.object,
};