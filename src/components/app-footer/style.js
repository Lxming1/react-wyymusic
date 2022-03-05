import styled from "styled-components";

export const FooterWrapper = styled.div`
  height: 173px;
  background-color: #f2f2f2;
  position: relative;
  left: 0;
  right: 0;
  border-top: 1px solid #d3d3d3;
  padding-top: 20px;
  box-sizing: border-box;
  z-index: -1;

  .content{
    display: flex;
    justify-content: space-between;

    .footerLeft{
      display: inline-block;

      div{
        margin-top: 10px;
      }
    }
    
    .police{
      display: inline-block;
      position: absolute;
      background-size: contain;
      left: -15px;
      top: -1px;
      height: 14px;
      width: 14px;
    }

    .footerRight{
      display: flex;
      justify-content: center;
      padding-top: 15px;

      .icon_title{
        margin-left: 41px;
        position: relative;

        .commonCssI{
          display: inline-block;
          height: 45px;
          width: 50px;
          background-size: 110px 552px;
        }

        .icon0{
          background-position: -63px -456.5px;
        }

        .icon1{
          background-position: -63px -101px;
        }

        .icon2{
          background-position: 0 0;
        }

        .icon3{
          background-position: -63px -50px;
        }

        .icon4{
          background-position: 0 -101px;
        }

        .commonCssT{
          display: inline-block;
          background-size: 180px 139px;
          height: 14px;
          width: 52px;
          margin-top: 2px;
          position: absolute;
          top: 48px;
        }

        .title0{
          background-position: 0 -108px;
          left: -11px;
          width: 72px !important;
        }

        .title1{
          background-position: -1px -91px;
          left: -1px;
        }

        .title2{
          background-position: 0 0;
          left: -2px;
        }

        .title3{
          background-position: 0 -54px;
          left: -2px;
        }

        .title4{
          background-position: -1px -72px;
          left: -1px;
        }
      }
    }
  }
  
`