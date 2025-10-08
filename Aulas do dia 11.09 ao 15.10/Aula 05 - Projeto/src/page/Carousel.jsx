import { useNavigate } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react'
import { Persona } from './Persona';


export function Carousel({ slides, options }) {
  const [emblaRef] = useEmblaCarousel(options); 
  const navigate = useNavigate();          

  const handleClick = (slide) => {
   navigate('/Persona', { state: { Persona: slide } });
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <img
                src={slide.image}
                alt={slide.name}
                className="embla__slide__img w-full h-250 object-cover rounded"
              />
              <div className="text-center text-white mt-2 font-bold"><button
                  onClick={() => handleClick(slide)}
                  className="bg-orange-700 hover:bg-amber-800 text-white font-semibold py-2 px-4 rounded"
                >
                {slide.name}
                </button></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
