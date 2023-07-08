import './Hero.css';

function Hero() {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='grid'>
            <div className='grid-item grid-item-one'>
              <div className='overlay'></div>
              <div className='img'></div>
              <span className='keyword'>Live Comfortably</span>
            </div>
            <div className='grid-item grid-item-two'>
              <div className='overlay'></div>
              <div className='img'></div>
              <span className='keyword'>Skincare</span>
            </div>
            <div className='grid-item grid-item-three'>
              <div className='overlay'></div>
              <div className='img'></div>
              <span className='keyword'>Kitchen</span>
            </div>
            <div className='grid-item grid-item-four'>
              <div className='overlay'></div>
              <div className='img'></div>
              <span className='keyword'>Electronics</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
