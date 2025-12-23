import React from 'react';
import { useFadeInOnScroll } from '../Hook';
import essensaLogo from '../assets/essensalogo.png';

const Intership = () => {
  const [ref, visible] = useFadeInOnScroll();

  return (
    <section id="intership" className="w-full py-12">
      <div className="container-max mx-auto">
        <div ref={ref} className={`panel p-6 flex gap-6 items-center ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <img src={essensaLogo} alt="Essensa logo" className="w-20 h-20 object-contain" />
          <div>
            <h3 className="h2">About Toyota Marilao Bulacan</h3>
            <p className="small-muted mt-2">
              Toyota Marilao, Bulacan is a major authorized Toyota car dealership and service center located along MacArthur Highway in Marilao, Bulacan. It offers new Toyota vehicles, sales support, and comprehensive after-sales services including maintenance, repairs, and appointments, all delivered with a focus on customer satisfaction and quality care. The dealership is also known for embracing environmentally friendly design and modern, energy-efficient facilities as part of its commitment to sustainable automotive service.
            </p>

            <p className="small-muted mt-2">
              Guided by its advocacy for environmental sustainability and community growth by setting new standards in eco-friendly automotive practices, using renewable energy and low-carbon facilities to reduce environmental impact, and promoting green initiatives that benefit customers and the local community. The dealership also supports local economic development by providing quality jobs, excellent customer service, and opportunities that help enrich the lives of people in Bulacan and nearby areas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intership;
