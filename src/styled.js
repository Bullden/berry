import styled from 'styled-components'

export const StyledApp = styled.div`
  padding: 20px 60px;
  display: flex;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 20px 5px;
  }
`
