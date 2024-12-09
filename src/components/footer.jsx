import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../index.css'; 
import { Image } from '@chakra-ui/react'
const Footer = () => {
    return (
        <div className="footer d-flex justify-content-between align-items-center bg-dark p-3">
            <div className="company-info d-flex align-items-center">
            <Image
  borderRadius='full'
  boxSize='50px'
  src='https://bit.ly/dan-abramov'
  alt='Dan Abramov'//dffdc
/>
                <span className="company-name text-white">Hey Sam!!!</span>
            </div>
            <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mr-5">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
    );
}

export default Footer;