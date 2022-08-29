import CustomCard from "../../components/Card";
import TextWithSelect from "../../components/TextWithSelect/TextWithSelect";
import './Home.scss';

interface Card {
  id: number;
  src: string;
  text: string;
}

const cards: Card[] = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/706352/pexels-photo-706352.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'custom text'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/3488382/pexels-photo-3488382.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'custom text'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/3488382/pexels-photo-3488382.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'custom text'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/4525358/pexels-photo-4525358.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'custom text'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/5544034/pexels-photo-5544034.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'custom text'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/11287048/pexels-photo-11287048.jpeg?auto=compress&cs=tinysrgb&w=1600',
    text: 'custom text'
  },
]

const Home = () => {
  return (
    <>
      home
      <div className="cardsContainer">
        {
          cards.map(({ id, src, text }, index) => (
            <CustomCard
              key={id}
              src={src}
              index={index}
              text={text}
            />
          ))
        }
      </div>
      {/* <div>
        <TextWithSelect text="saddasd" options={[ { key: '1', value: 'saasa' }, { key: '2', value: '44444444' } ]} />
      </div> */}
    </>
  )
}

export default Home;