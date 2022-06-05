import styled from '@emotion/styled'

const white = '#FFFFFF'
const neutral1 = '#EAEFED'
const neutral2 = '#97ABA3'
const background = '#E5E5E5'
const active_green = '#20D096'
const active_gray = '#34423D'
const minicard = '#f5faf8'
const minicard_border = '#cad6d1'
const minicard_txt = '#587169;'

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
    width: 100%;
    height: 62px;
    flex-flow: row wrap;
    background: ${white};
    border-top: 1px solid ${neutral1};
    border-bottom: 1px solid ${neutral1};
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
    border-left: 1px solid ${neutral1};
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
    margin-top: 3px;

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

    color: #34423d;

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
    .header {
      justify-content: center;
      background: ${white};
      border: 1px solid ${neutral1};
    }

    .brand {
      border-right: 0px solid ${white};
      margin: 0px;
    }

    .avatarName {
      display: none;
    }
    .avatarDados {
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
    display: flex-column;
    width: 100%;
    display: flex-column;
    justify-content: center;
    background: ${background};
  }
  .voltar {
    text-align: left;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 56px;
    margin-bottom: 24px;
    min-width: 841px;
    display: flex;
    align-items: center;
  }
  .voltah1 {
    padding-left: 16px;
    text-align: left;
  }

  .colab {
    background: '#F8FAF9';
  }
  .h1init {
    text-align: left;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-top: 56px;
    margin-bottom: 24px;
    min-width: 841px;
  }
  .card {
    display: flex-column;

    padding-left: 24px;
    padding-right: 24px;
    padding-top: 40px;
    padding-bottom: 40px;
    min-width: 793px;
    min-height: 70vh;

    margin-top: 10px;
    margin-left: 10vw;
    margin-right: 10vw;
    margin-bottom: 20px;
    background: #f8faf9;
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(165, 171, 179, 0.16);
  }
  .tab {
    background: ${white};
    display: flex;
    flex-direction: row;
  }

  .tab button {
    background: ${white};
    color: ${neutral2};
    border: none;
    border-bottom: 2px solid ${neutral1};
    bottom: 2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 16px;

    width: 196px;
    height: 30px;
  }

  .tab button:hover {
    border-bottom: 2px solid ${active_green};
  }

  .tab button.active {
    color: ${active_gray};
    border-bottom: 2px solid ${active_green};
  }

  .tab .line {
    width: 100%;
    background: ${white};
    border: none;
    border-bottom: 2px solid ${neutral1};
    bottom: 2px;
  }

  #listColab {
    text-align: left;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  table {
    border: 1px solid ${neutral1};
    border-radius: 8px;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }

  table th:first-child {
    border-radius: 10px 0 0 10px;

    border: 1px solid ${neutral1};
    background: ${neutral1};
  }

  th,
  td,
  tr {
    border-bottom: 1px solid #ddd;
  }

  .perfil {
    display: flex;
    height: 82px;
    width: 100%;
  }
  .perfilName {
    padding-left: 24px;
  }

  .perfilName h1 {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .perfilName p {
    margin-top: 0px;
  }
  .infoname {
    margin-top: 19px;
    margin-bottom: 4px;
  }

  .h2infor {
    margin-top: 40px;
    margin-bottom: 24px;
  }
  .h2info {
    color: ${active_gray};
  }
  .perfilName p {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 120%;
    /* identical to box height, or 17px */

    display: flex;
    align-items: center;

    /* Neutral Colors/Neutral5 */

    color: #587169;
  }
  .flow_minicard {
    display: flex;
    justify-content: between;
  }

  .miniCard {
    display: flex;
    background: ${minicard};
    border-radius: 8px;
    border: 2px solid ${minicard_border};
    padding: 16px;
    max-height: 70px;
    width: 286px;
  }

  #mini {
    margin-left: 24px;
    margin-right: 24px;
  }

  .miniCard img {
    padding-right: 8px;
  }

  .miniCard h3 {
    width: 23px;
    height: 14px;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 120%;
    /* or 14px */

    display: flex;
    align-items: center;
    color: ${minicard_txt};
    margin: 0px;
    margin-top: 5px;
  }

  .miniCard p {
    width: 100px;
    height: 14px;

    /* Heading/14 SB XXS */

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 100%;
    color: ${minicard_txt};
    /* identical to box height, or 14px */

    align-items: center;
    margin: 0px;
    margin-bottom: 5px;
  }

  .menus {
    display: flex-row;
    justify-content: between;
    background: ${white};
    border-radius: 8px;
    border: 2px solid ${neutral1};
    height: 235px;
    padding: 24px;
    gap: 24px;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .menus h2 {
    margin-top: 0px;
    margin-bottom: 24px;
  }

  .menuSelect {
    font-family: 'Poppins';
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    /* identical to box height, or 24px */

    /* Neutral Colors/Neutral5 */

    color: #587169;
    width: 390px;
    height: 56px;
    margin-right: 24px;

    border: 2px solid ${minicard_border};
    border-radius: 8px;
    background: ${minicard};
  }

  legend {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 1px;
    /* identical to box height, or 7% */

    display: block;
    align-items: center;
    text-align: center;

    /* Neutral Colors/Neutral3 */

    color: #a3b8b0;

    position: fixed;

    width: 80px;
    border: 0px;
    margin: 0px;
    background-color: white;
    border-radius: 8px;

    padding-left: 6px;

    text-align: center;
  }

  .limit {
    display: flex;
    width: 772px;
    margin-bottom: 24px;
  }
`
