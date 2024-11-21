import styled from 'styled-components'

export const StyledInput = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  padding: 0 15px;
  font-size: 16px;
  outline: none;
  background-color: #f9f9f9;
  color: #555;
  transition: all 0.3s ease;
  margin-top: 20px;
  /* margin-right: 10px; */

  ::placeholder {
    color: #ccc;
    font-style: italic;
  }

  &:focus {
    border-color: #ccc;
    background-color: #fff;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`
