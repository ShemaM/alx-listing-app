import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ 
  title, 
  description, 
  image, 
  price, 
  location,
  rating 
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base mb-2">
          {location}
        </p>
        <p className="text-gray-600 text-sm mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">${price}</span>
          <span className="flex items-center">
            ⭐ {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;