import React from 'react';
import { Presentation } from './components/Presentation';
import { CoverSlide } from './slides/CoverSlide';
import { IntroSlide } from './slides/IntroSlide';
import { AnalyticsSlide } from './slides/AnalyticsSlide';
import { QuoteSlide } from './slides/QuoteSlide';
import { OutroSlide } from './slides/OutroSlide';

export default function App() {
  return (
    <Presentation>
      <CoverSlide />
      <IntroSlide />
      <AnalyticsSlide />
      <QuoteSlide />
      <OutroSlide />
    </Presentation>
  );
}
