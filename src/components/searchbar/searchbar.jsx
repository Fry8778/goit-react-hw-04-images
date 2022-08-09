import { useState } from 'react';
import styles from './searchbar.module.css';

const SerchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const value = e.target.value.trimStart();
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (query.length === 0) return;
    onSubmit(query);
  };
  return (
    <header className={styles.searchbar}>
      <form className={styles.searchForm} onSubmit={handleSubmit}>
        <input
          value={query}
          className={styles.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}></span>
        </button>
      </form>
    </header>
  );
};
export default SerchBar;