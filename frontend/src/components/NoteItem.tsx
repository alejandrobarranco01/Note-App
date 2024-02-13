import { FC } from 'react';
import AppButton from './AppButton';

interface NoteItemProps {
  title?: string;
}

const NoteItem: FC<NoteItemProps> = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded p-5 text-center">
      <p className="font-semibold text-gray-700 text-lg mb-4">{title}</p>
      <div className="space-x-4">
        <AppButton
          title="View"
          type="regular"
          onClick={() => {
            console.log('View');
          }}
        />
        <AppButton title="Edit" type="normal" />
        <AppButton title="Delete" type="danger" />
      </div>
    </div>
  );
};

export default NoteItem;
