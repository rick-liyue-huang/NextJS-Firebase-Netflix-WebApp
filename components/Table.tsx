import { CheckIcon } from '@heroicons/react/outline';
import { Product } from '@stripe/firestore-stripe-payments';
import React from 'react';

interface Props {
  products: Product[];
  selectedPlan: Product | null;
}

export const Table: React.FC<Props> = ({ products, selectedPlan }) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-gray-400'
              }`}
            >
              AUD{product.prices[0].unit_amount! / 100}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Video Quality</td>
          {products.map((product) => (
            <td
              key={product.id}
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#e50914]'
                  : 'text-gray-400'
              }`}
            >
              {product.metadata.VideoQuality}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.Resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableData ${
                selectedPlan?.id === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.metadata.Portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
