import styled from 'styled-components'

export const StyledBerry = styled.div`
  padding: 10px;
  border: 1px solid #cfcece;
  margin: 5px 0 5px 0;
  width: 70%;
  border-radius: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 450px) {
    flex-direction: column;
  }
`
export const StyledWrapInfo = styled.div`
  display: flex;
  align-items: center;
`
export const StyledName = styled.div`
  font-weight: 600;
`
export const StyledWrapTags = styled.div`
  display: flex;

  @media (max-width: 350px) {
    justify-content: center;
    /* flex-direction: column; */
    flex-wrap: wrap;
  }
`
export const StyledTag = styled.div`
  display: flex;
  margin-left: 10px;
  border: 1px solid #cfcece;
  border-radius: 10px;
  padding: 2px 10px;
  background: #f3f3f3;
  color: #cfcece;
  cursor: pointer;

  @media (max-width: 350px) {
    margin-bottom: 5px;
  }
`

export const StyledWrapImg = styled.div`
  width: 50px;
  height: 35px;
`
export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
`
