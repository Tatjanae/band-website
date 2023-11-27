import './Members.css'
import SINGER from '../../Images/IMG_20190924_175016.jpg'
import DRUMMER from '../../Images/Art steeg 2022.jpg'
import GUITARIST from '../../Images/IMG_1464-1.jpg'
import BASSIST from '../../Images/IMG_1476.jpg'
import { GiMicrophone } from "react-icons/gi";
import { GiGuitar } from "react-icons/gi";
import { GiDrumKit } from "react-icons/gi";


// Members to map through
const members = [
  {
    name: 'Name1', 
    image: SINGER,
    title: 'Singer',
    icon: <GiMicrophone />,
  }, 
  {
    name: 'Name2', 
    image: DRUMMER,
    title: 'Drummer',
    icon: <GiDrumKit />,
  },
  {
    name: 'Name3', 
    image: GUITARIST,
    title: 'Guitarist',
    icon: <GiGuitar />,
  },
  {
    name: 'Name4', 
    image: BASSIST,
    title: 'Bassist',
    icon: <GiGuitar />,
  } 
]

const Members = () => {
  return (
    <section id='members'>
      <h1>JellyFish Band Members</h1>
<div className="container members_container">

{
          members.map(({name, image, title, icon}, index) => {
            return (
              <article key={index} className="members_item">
          <div className="members_item-image">
            <img className='members_image' src={image} alt={name} />
          </div>
          <h3>{icon} {title}</h3>
          <p>{name}</p>
        </article>
            )
          })}
          
    </div>
    </section>
  )
}

export default Members