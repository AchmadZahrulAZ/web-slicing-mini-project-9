import React from 'react';
import Hand1 from '../assets/images/Hand1.png';
import Hand2 from '../assets/images/Hand2.png';
import Hand3 from '../assets/images/Hand3.png';

const BookBanner = () => {
  return (
    <div className="bg-[#FEC00A] py-8 px-16 mt-8" style={{ width: '1785px', height: '343px' }}>
      <div className="flex justify-between items-center h-full">
        {/* Kiri: dsgnr. */}
        <div className="text-white font-bold text-5xl">
          dsgnr.
        </div>

        {/* Tengah: Grow Your Business */}
        <div className="text-white text-2xl text-center mx-8">
          Grow Your Business. Build Great Products
        </div>

        {/* Kanan: Button & Gambar Tangan */}
        <div className="flex flex-col items-center">
          <button className="bg-black text-white text-lg font-semibold py-3 px-6 mb-4" style={{ width: '286px', height: '83px' }}>
            Book a free call
          </button>
          <div className="flex space-x-4">
            <img src={Hand1} alt="Hand 1" className="w-12 h-12" />
            <img src={Hand2} alt="Hand 2" className="w-12 h-12" />
            <img src={Hand3} alt="Hand 3" className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookBanner;
