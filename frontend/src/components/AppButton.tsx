import { FC } from 'react';

interface AppButtonProps {
  title?: string;
  type?: 'danger' | 'normal' | 'regular';
  onClick?(): void;
}

const AppButton: FC<AppButtonProps> = ({ title, type, onClick }) => {
  let color = '';
  switch (type) {
    case 'danger':
      color = 'bg-red-500';
      break;
    case 'normal':
      color = 'bg-blue-500';
      break;
    case 'regular':
      color = 'bg-gray-700';
      break;
  }

  return (
    <button className={color + ' text-white p-2 rounded'} onClick={onClick}>
      {title}
    </button>
  );
};

export default AppButton;
