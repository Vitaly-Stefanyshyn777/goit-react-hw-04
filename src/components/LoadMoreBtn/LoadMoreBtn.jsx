import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore, label = 'Load More' }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.loadMoreButton} onClick={onLoadMore} type="button">
        {label}
      </button>
    </div>
  );
};

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  label: PropTypes.string,
};

export default LoadMoreBtn;