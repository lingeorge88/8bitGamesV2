import styled from'styled-components';

export const CategoryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 50px;
    @media screen and (max-width: 980px) {
        align-items: center;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 15px;
        grid-row-gap: 25px;
        }
    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        grid-row-gap: 25px;
        }
`

export const CategoryTitle = styled.h2`
font-size: 28px;
    margin-top:25px;
    margin-bottom: 25px;
    cursor: pointer;
    text-align: center;
`
