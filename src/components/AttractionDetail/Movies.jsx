import React from 'react';
import map from "lodash/map";
import range from "lodash/range";
import Container from 'components/ParkLanding/elements/Container';
import movie from "assets/images/movie.png";

const Movies = () => {
  return (
    <Container bg="bg-white" className="xs:pt-[59px] xs:pb-[54px] md:pt-[77px] md:pb-[41px] xs:px-7 md:px-0 ">
      <div className='flex w-full gap-10 xs:flex-col md:flex-row'>
        {map(range(3), (val) => (
          <div key={val} className='flex-1 text-center flex flex-col '>
            <img src={movie} alt="movie" className='xs:max-h-[215px] md:max-h-[210px] object-contain mb-4' />
            <p className='text-tp-purple font-bold xs:mb-0 md:mb-3 xs:text-16 md:text-18'>Ride Through Video</p>
          </div>
        ))}
      </div>

    </Container>
  );
};

export default Movies;