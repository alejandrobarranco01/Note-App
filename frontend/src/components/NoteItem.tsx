import { FC } from 'react';
import AppButton from './AppButton';

interface NoteItemProps {
  title?: string;
  description?: string;
  onEditClick?(): void;
  onDeleteClick?(): void;
  onViewClick?(): void;
}

const NoteItem: FC<NoteItemProps> = ({
  title,
  description,
  onEditClick,
  onDeleteClick,
  onViewClick,
}) => {
  return (
    <div className="bg-white shadow-md rounded p-5 text-center">
      <p className="font-semibold text-gray-700 text-lg mb-4">{title}</p>
      {description ? (
        <p className="ml-2 mt-2 mb-5 text-lg">{description} </p>
      ) : null}
      <div className="space-x-4">
        <AppButton
          title={description ? 'Hide' : 'View'}
          type="regular"
          onClick={onViewClick}
        />
        <AppButton onClick={onEditClick} title="Edit" type="normal" />
        <AppButton onClick={onDeleteClick} title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default NoteItem;
