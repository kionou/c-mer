import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import WOW from 'wowjs';
import PropTypes from 'prop-types';


const HeaderOther = ({ titre, home, view, lien, imageUrl }) => {
    useEffect  (()=>{
        // new WOW.WOW().init();
    },[])
    return (
        <>
            <div className="container-fluid position-relative p-0">
                <div className="container-fluid bg-breadcrumb" style={{ background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})` }}>
                    <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
                        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{titre}</h4>
                        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
                            <li className="breadcrumb-item"><Link to="/">{home}</Link></li>
                            <li className="breadcrumb-item"><a href="#">{view}</a></li>
                            <li className="breadcrumb-item active text-primary">{lien}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

HeaderOther.propTypes = {
    titre: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    view: PropTypes.string.isRequired,
    lien: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

export default HeaderOther;