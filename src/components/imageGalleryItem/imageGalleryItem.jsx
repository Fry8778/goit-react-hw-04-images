import styles from './imageGalleryItem.module.css';

const ImageGalleryItem = ({ data, onModal }) => {
  return data.map(el => (
    <li className={styles.imageGalleryItem} key={el.id}>
      <img
        src={el.webformatURL}
        className={styles.imageGalleryItemImage}
        alt={el.tags}
        onClick={() => onModal(el.largeImageURL, el.tags)}
      />
    </li>
  ));
};
export default ImageGalleryItem;