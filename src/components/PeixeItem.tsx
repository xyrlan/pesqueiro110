import Image from 'next/image';
import React from 'react'

const PeixeItem = ({ image, name, scientificName, maxHeight, maxWeight, iscas }: any) => {


  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className='flex gap-2 justify-between items-center'>
        <div className='flex gap-2 h-[150px]'>
          <Image src={image} alt="Peixe" width={200} height={200} className="inline-block mr-2 w-full h-auto"  />
        </div>
      </div>
      <p className="font-medium text-lg mt-5">{name}</p>
      <p className="text-sm mb-2 text-gray-600">{scientificName}</p>
      <p className="text-sm mb-2"><strong>Peso máximo:</strong> {maxHeight}</p>
      <p className="text-sm mb-2"><strong>Peso máximo:</strong> {maxWeight}</p>
      <p className="text-sm mb-2"><strong>Iscas: </strong>{iscas}</p>
      <div className="mt-2">
      </div>
    </div>
  );
}

export default PeixeItem;
