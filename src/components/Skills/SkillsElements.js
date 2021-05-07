

export const IconWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  width: 100%;
`

export const IconWrapper = styled.div`
  /* margin-top: 14px; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* margin: 0 10px; */

  width: 240px;

  @media screen and (max-width: 1000px) {
    width: 100% !important;
  }
`


export const TechIcon = styled.div`
  color: white;
  font-size: 40px;
  display: flex;
  margin-top: 5px;
  align-items: center;
  width: 130px;
  height: 60px;
  transition: all 0.2s ease-ease-in-out;
  padding-left: 5px;
  flex-grow: 1;

  /* margin-left: 10px; */

  &:hover {
    background-color: #45a29e;
    cursor: pointer;
    border-radius: 5px;
  }
`

export const IconLabel = styled.p`
  color: white;
  font-size: 16px;
  margin-left: 5px;
`
