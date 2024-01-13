import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '../../assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        // Nếu có Fallback thì sẽ dùng Fallback => mặc định Fallback đang là chuỗi rỗng => lần đầu tiên nó sẽ ưu tiên src để lấy link , nếu src lỗi thì sẽ set Fallback bằng images.noImage
        // setFallBack(images.noImage);

        // Nếu src lỗi và k truyền Fallback từ ngoài vào thì sẽ lấy images.noImage
        // Nếu truyền Fallback thì noImage sẽ k đc sử dụng nữa => Fallback sẽ lấy link từ bên ngoài nếu src lỗi
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
export default Image;
