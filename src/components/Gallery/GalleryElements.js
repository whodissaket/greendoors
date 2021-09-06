import styled from "styled-components";

export const CategoryContainer = styled.div`
  text-align: center;
  padding: 20px 0;
  background-color: #ffea;
`;

export const Categories = styled.button`
  outline: none;
  border: 1px solid;
  border-radius: 3px;
  color: black;
  padding: 5;
  margin: 0 5px;
  background-color: transparent;
  cursor: pointer;
`;

export const GalleryContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ImageCard = styled.div`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 2px;

  @media screen and (max-width: 820px) {
    padding: 2.5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media screen and (max-width: 820px) {
    width: 65%;
    height: auto;
  }
`;
