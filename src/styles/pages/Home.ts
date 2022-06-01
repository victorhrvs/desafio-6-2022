import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.onyx};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  .header {
    display: flex;
    height: 62px;
    width: 100%;
    background: ${props => props.theme.colors.cruise};
  }

  .brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.onyx};
    padding: 0px;
    gap: 32px;
    
    width: 67.47px;
    height: 61px;
    
    flex: none;
    order: 0;
    flex-grow: 0;
    line-height: 62px;
  
    margin-right: 1px solid ${props => props.theme.colors.black};

  }

`
