
import React from 'react';

const Partners = () => {
  return (
    <section className="py-10 sm:py-16 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-gray-500 uppercase text-sm font-medium tracking-wider">Trusted by companies worldwide</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Using placeholder logos with gray styling to mimic partner brands */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="flex items-center justify-center">
              <div className="h-8 w-24 bg-gray-200 rounded-md flex items-center justify-center">
                <span className="text-gray-400 font-medium">Partner {item}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
