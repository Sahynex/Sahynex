import React from 'react';
import Carousel from '@/Components/Carousel';
import Whatwedo from '@/Components/Whatwedo';
import MarketSegments from '@/Components/MarketSegments';
import TestimonialCarousel from '@/Components/TestimonialCarousel';

const Home: React.FC = () => {
  return (
    <div>
      <Carousel/>
      <Whatwedo/>
      <MarketSegments/>
      <TestimonialCarousel/>
    </div>
  );
};

export default Home;
