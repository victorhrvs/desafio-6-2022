import styled from '@emotion/styled'

const white = '#FFFFFF'
const neutral1 = '#EAEFED'
const background = '#E5E5E5'

export const Container = styled.div`


  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  right: 0px;
  bottom: 0px;

  .header {
    display: flex;
    justify-content: space-between;
    width: 99.89vw;
    height: 62px;
    flex-flow: row wrap;
    background: ${white};
    border: 1px solid ${neutral1};
  }

  .brand {
    display: flex;
  
    width: 100px;
    justify-content: center;
    items-align: center;
    /* item on center*/
    background: ${white};
    border-right: 1px solid ${neutral1};
    padding-top: 13.15px;
    padding-bottom: 13.15px;
  }

  .brandname {
    display: flex;
    justify-content: space-between;
    
    width: 9vw;
    min-width: 150px;

    
    items-align: center;
    /* item on center*/
    background: ${white};
    border: 1px solid ${neutral1};
    padding-top: 14.5px;
    padding-bottom: 14.5px;
    padding-left: 32px;
    padding-right: 32px;

  }

  .brandname-img {
    display: flex;
    width: 32px;
    height: 32px;
    min-width: 32px;
    min-height: 32px;

  }

  .avatarName {
    /* Title */


    width: 110px;
    height: 14px;

    /* Heading/14 SB XXS */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    /* identical to box height, or 14px */

    display: flex;
    align-items: center;

    /* Neutral Colors/Black */

    color: #34423D;


    /* Inside auto layout */

    flex: row;

  }
  
  .avatarDados {
    /* Description */


    width: 76px;
    height: 14px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    /* or 14px */

    display: flex;
    align-items: center;

    /* Neutral Colors/Neutral5 */

    color: #587169;


    /* Inside auto layout */

    flex: row;

  }
  
  @media (max-width: 1024px) {
    .header{
      justify-content: center;
      background: ${white};
      border: 1px solid ${neutral1};
    }

    .brand {
      border-right: 0px solid ${white};
      margin: 0px;	
    }

    .avatarName{
      display: none;
    }
    .avatarDados{
      display: none;
    }

    .brandname-img {
      display: absolute;
    }
    .brandname {
      position: absolute;
      justify-content: center;
      top: 0px;
      left: 0px;
      width: 32px;
      height: 32px;
      padding-top: 14.5px;
      padding-bottom: 14.5px;
      padding-left: 14.5px;
      padding-right: 14.5px;
      min-width: 32px;
      border: 0px solid ${neutral1};
    }
  }
  
  .main {
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    background: ${background};
  }
  .card {
    display: flex;

    padding-left: 24px;
    padding-right: 24px;
    padding-top: 40px;
    padding-bottom: 40px;

    margin-top: 10px;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 20px;
    background: ${white};
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);

}

`
