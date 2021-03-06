import React from 'react'
import styled, {
  ThemeProvider as StyledThemeProvider
} from 'styled-components'
import nextTheme from './theme'
import legacyTheme from './legacyTheme'

export const Base = styled.div`
  font-family: ${props => props.theme.font};
`

const ThemeProvider = ({ legacy, ...props }) => {
  const theme = legacy ? legacyTheme : nextTheme

  return (
    <StyledThemeProvider theme={theme}>
      <Base {...props} />
    </StyledThemeProvider>
  )
}

export default ThemeProvider
