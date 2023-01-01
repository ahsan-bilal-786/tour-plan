import React from 'react';


const Row = ({ isOdd, title, value }) => {
  return (
    <div className={`md:min-w-[500px] ${isOdd ? "bg-tp-bluish-300/50" : ""}`}>
      <div className={`max-w-[1080px] mx-auto`}>
        <div className='flex md:text-left xs:text-15 md:text-18 xs:gap-3 py-3 xs:pl-6 md:pl-0'>
          <div className={`w-1/2`}>{title}</div>
          <div className={`w-1/2 flex justify-center items-center`}>{value}</div>
        </div>
      </div>
    </div>
  );
};


const Table = () => {
  return (
    <section className="bg-tp-neutral">
      <div className="mx-auto bg-tp-neutral py-20">
        <section className='mb-14'>
          <div className='overflow-auto'>
            <div className='table-header '>
              <div className='md:min-w-[500px] max-w-[1080px] mx-auto'>
                <div className="flex font-eucliarBold mb-3 xs:text-15 md:text-18 font-bold text-tp-bluish-300 text-left  xs:pl-6 md:pl-0">
                  <div className={`w-1/2 flex items-end`}>Attraction</div>
                  <div className={`w-1/2 flex justify-center`}>Height Requirement</div>
                </div>
              </div>
            </div>
            <Row
              isOdd={true}
              title="Tomorrowland Speedway"
              value="32"
            />
            <Row
              isOdd={false}
              title="The Barnstormer"
              value="35"
            />
            <Row
              isOdd={true}
              title="Seven Dwarfs Mine Train"
              value="38"
            />
            <Row
              isOdd={false}
              title="Big Thunder Mountain Railroad"
              value="40"
            />
            <Row
              isOdd={true}
              title="Splash Mountain"
              value="40"
            />
            <Row
              isOdd={false}
              title="Space Mountain"
              value="44"
            />
            <Row
              isOdd={true}
              title="Tron Lightcycle Power Run"
              value="48"
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Table;