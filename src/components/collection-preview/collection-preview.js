import CollectionItem from '../collection-item/collection-item';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h2 className='title'>{title.toUpperCase()}</h2>

      <div className='preview'>
        {items
          .filter((_, idex) => idex < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
export default CollectionPreview;
