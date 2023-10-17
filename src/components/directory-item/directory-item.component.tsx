import { FC } from 'react';
import {DirectoryItemContainer, Body, BackgroundImage}from'./directory-item.styles';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../directory/directory.component'


type DirectoryItemProps = {
  category: DirectoryCategory;
}
const DirectoryItem:FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage data-testid="background-image" imageUrl={imageUrl}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;