import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100vh;
  height: 100vh;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media only screen and (max-width: 768px) {
  }
`
