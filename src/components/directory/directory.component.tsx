import { Key } from 'react';
import DirectoryItem from '../directory-item/directory-item.component';

import {DirectoryContainer} from './directory.styles';

export type DirectoryCategory = {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
}

const categories:DirectoryCategory[] = [
  {
    id: 1,
    title: 'Accessories',
    imageUrl: 'https://i.imgur.com/6C7Eo4C.jpg',
    route: 'shop/accessories'
  },
  {
    id: 2,
    title: 'Apparel',
    imageUrl: 'https://img.freepik.com/premium-vector/t-shirt-pixel-art-isolated-white-background_744913-347.jpg',
    route: 'shop/apparel'
  },
  {
    id: 3,
    title: 'Collectibles',
    imageUrl: 'https://assets1.ignimgs.com/2015/06/16/amiibomario30thmodern02png-0e2483.png',
    route: 'shop/collectibles'
  },
  {
    id: 4,
    title: 'Retro Games',
    imageUrl: 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/4f7d0c587ad807f.png',
    route: 'shop/retro%20games'
  },
  {
    id: 5,
    title: 'Retro Systems',
    imageUrl: 'https://img.freepik.com/premium-vector/pixel-art-old-video-game-console-vector-icon-8bit-game-white-background_360488-403.jpg',
    route: 'shop/retro%20systems'
  },
];

const Directory = () => {

  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;