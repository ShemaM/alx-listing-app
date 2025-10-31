@"
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({
  title,
  image,
  price,
  location,
  description,
  rating
}) => {
  return (
    <div className=\"max-w-sm rounded-lg shadow-lg overflow-hidden border border-gray-200 bg-white\">
      <img 
        src={image} 
        alt={title}
        className=\"w-full h-48 object-cover\"
      />
      <div className=\"p-4\">
        <div className=\"flex justify-between items-start mb-2\">
          <h3 className=\"font-semibold text-lg text-gray-900\">{title}</h3>
          <span className=\"font-bold text-gray-900\">${price}/night</span>
        </div>
        <p className=\"text-gray-600 text-sm mb-2\">{location}</p>
        <p className=\"text-gray-500 text-sm mb-3\">{description}</p>
        {rating && (
          <div className=\"flex items-center\">
            <span className=\"text-yellow-500\">⭐</span>
            <span className=\"text-gray-700 ml-1\">{rating}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
"@ | Out-File -FilePath "components\common\Card.tsx" -Encoding utf8