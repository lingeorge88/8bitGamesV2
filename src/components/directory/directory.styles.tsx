import styled from "styled-components"; 

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 428px) {
    display: grid;
    grid-template-columns: 1fr; // This will make each item take up the full width
    grid-gap: 16px; // Add gaps between grid items if needed
  }
`