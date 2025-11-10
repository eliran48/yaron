import React, { useMemo } from 'react';
import { INITIAL_SERVICES } from '../constants';
import Intro from './Intro';
import Scope from './Scope';
import Investment from './Investment';
import Terms from './Terms';
import ApprovalForm from './ApprovalForm';
import PlatformsAndCosts from './PlatformsAndCosts';
import ProcessFlow from './ProcessFlow';
import DemoVideo from './DemoVideo';

const HomePage: React.FC = () => {
  const totalPrice = useMemo(() => {
    return INITIAL_SERVICES.reduce((sum, service) => sum + service.price, 0);
  }, []);

  return (
    <div>
      <Intro />
      <Scope services={INITIAL_SERVICES} />
      <ProcessFlow />
      <Investment totalPrice={totalPrice} />
      <DemoVideo />
      <PlatformsAndCosts />
      <Terms />
      <ApprovalForm />
    </div>
  );
};

export default HomePage;