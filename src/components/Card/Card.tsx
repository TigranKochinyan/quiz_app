// import { 
//     Card,
//     CardActions,
//     CardContent,
//     CardMedia,
//     Button,
//     Typography
// } from '@mui/material';
import { useState } from 'react';

import './Card.scss';

interface CustomCardProps {
  id?: number;
  src: string;
  index: number;
  text: string;
}

const CustomCard:React.FC<CustomCardProps> = ({ src, index, text }) => {

  const [flipped, setFlipped] = useState(false);

  const handleToogle = () => {
    console.log('sadasd');
    
    setFlipped(!flipped);
  }

  return (
    <div className="deck">
      <div className={`card clickcard ${flipped && 'flipped'}`} onClick={handleToogle}>
        <div className="front face" style={{ backgroundImage: `url(${src})` }}>
          <div className="textIndex">{index + 1}</div>
        </div>
        <div className="back face" style={{ backgroundImage: `url(${src})` }}>
          <div className="textBlock">
            <p className="text">{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
};


export default CustomCard;