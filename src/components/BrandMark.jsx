import PropTypes from 'prop-types';
import '../styles/BrandMark.css';

const BrandMark = ({ className = '' }) => (
  <span className={`brand-mark ${className}`}>
    Instalaciones <span className="brand-mark-jl">JL</span>
  </span>
);

BrandMark.propTypes = {
  className: PropTypes.string,
};

export default BrandMark;
