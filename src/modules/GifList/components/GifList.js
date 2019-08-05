import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { paths } from '../../../routes/paths';
import './GifList.css';
import Image from '../../../common/components/Image';

const GifList = (props) => {

    return (
        <div className='preview-container'>
            {
                props.gifs.map(item => 
                    <Link to={`${paths.gif}/${item.id}`} key={item.id}>
                        <Image class={'grid-item'} title={item.title} imageSource={item.previewImgUrl} />
                    </Link>
                )
            }
        </div>
    );    
};

GifList.propTypes = {
    gifs: PropTypes.array,
};


export default GifList;