import React, { useEffect, useState } from 'react';

import './Gallery.css';

const data = [
  {
    video: 'https://www.youtube.com/embed/7OQkG-XiJN0?si=MH2G1ICkok_sclwT',
    name: 'Back to black - Optreden de Steeg - Den Haag 2019',
  },
  {
    video: 'https://www.youtube.com/embed/1O7vcOanIfI?si=xLe6oF3pCb9cABBD',
    name: 'Heroes - Boerderij Café - Zoetermeer 2018',
  },
  {
    video: 'https://www.youtube.com/embed/kiKxOGrnV4I?si=Vb4KRakKRBG5T_MC',
    name: 'Rain - Zoetermeer 2022',
  }
];

const Gallery = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [randomVideo, setRandomVideo] = useState({ video: '', name: '' });

  useEffect(() => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);

    setCurrentVideoIndex(0);

    setRandomVideo(shuffledData[0]);
  }, []);

  const nextVideo = () => {
    const nextIndex = (currentVideoIndex + 1) % data.length;

    setCurrentVideoIndex(nextIndex);
    setRandomVideo(data[nextIndex]);
  };

  return (
    <section id='gallery'>
      
      <h1>Videos of Performances</h1>

      <div className='container video_gallery'>
        <iframe
          width={560}
          height={315}
          src={randomVideo.video}
          title={randomVideo.name}
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        />
      </div>
      <h5 className='video_name'>{randomVideo.name}</h5>

      {data.length > 1 && (
        <button onClick={nextVideo} className='btn next_btn'>
          Next Video
        </button>
      )}
    </section>
  );
};

export default Gallery;