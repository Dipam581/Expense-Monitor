// Home.jsx
import React from 'react';
import ChartApp from './ChartApp';
import AllSpends from './CollapsibleTable';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">

        <div className="bg-white p-4 rounded shadow-md sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
          <h1 className="text-5xl font-black mb-4 pb-8">Analysis</h1>
          <ChartApp />
          
        </div>

      </div>
    </div>
  );
}

export default Home;
