import React from 'react'
import Banner3 from '../../images/baner-card/baner-card-3.jpeg'

export default function ThirdCard() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-md">
      <img className="w-full" src={Banner3} alt="Sala de Estar" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black-2 dark:text-white lg:text-base">
          Casa à Venda, 204m²
        </div>
        <p className="text-gray-400 text-base lg:text-base">
          Cristiano Moreira Sales, Buritis
        </p>
        <p className="text-gray-700 text-base mt-3 dark:text-white lg:text-xs">
          3 Quartos • 2 Banheiros • 4 Vagas
        </p>
        <div className="flex justify-center lg:items-start mt-3 lg:text-xs text-blue-900 lg:text-blue-900">
          <p className="text-center whitespace-nowrap mr-3 bg-gray-200 dark:text-black-2 rounded-full text-sm px-3 py-1">
            Armário Embutido
          </p>
          <p className="text-blue-900 text-center whitespace-nowrap bg-gray-200 dark:text-black-2 rounded-full text-sm px-3 py-1">
            Elevador
          </p>
        </div>
      </div>
      <div className="px-2 pb-2">
        <span className="inline-block text-orange-500 px-3 py-1 text-sm font-semibold text-green-700 mr-2 mb-2">
          R$ 382.000
        </span>
      </div>
    </div>
  )
}
