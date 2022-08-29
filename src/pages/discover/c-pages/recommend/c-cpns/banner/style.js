import styled from "styled-components";
import downloadPng from 'assets/img/download.png'
import bannerSprite from 'assets/img/banner_sprite.png'

export const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;

  .leftBtn{
    width: 37px;
    height: 63px;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    left: -68px;
    background-position: 0 -360px;
    cursor: pointer;

    :hover{
      background-position: 0 -430px;
    }
  }

  .rightBtn{
    width: 37px;
    height: 63px;
    position: absolute;
    top: 50%;
    margin-top: -31px;
    right: -68px;
    background-position: 0 -508px;
    cursor: pointer;
    z-index: 999;

    :hover{
      background-position: 0 -578px;
    }
  }

  ::after{
    content: '';
    position: absolute;
    top: 0;
    z-index: -1;
    height: 284px;
    width: 100%;
    background: url(${props => props.imageUrl}) center center/6000px;
  }

  .bannerMain{
    .bannerItem{
      cursor: pointer;
      height: 283.888px;

      img{
        display: block;
        height: 100%;
        width: 730px;
      }
    }

    .bannerDots{
      transition: 0s !important;
      display: inline-block !important;
      height: 20px !important;
      width: 20px !important;
      left: -16% !important;
      bottom: -5px !important;
      cursor: pointer;
      background-position: 3px -343px;

      :hover {
        transition: 0s;
        background-position: -16px -343px;
      }
    }

    .active{
      background-position: -16px -343px !important;
    }

    .download{
      background: url(${downloadPng}) no-repeat;
      height: 284px;
      width: 254px;
      position: absolute;
      top: 0;
      right: -2px;

      ::before{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -20px;
        width: 20px;
        height: 285px;
        background: url(${bannerSprite});
        background-position: -1px 0;
      }

      ::after{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: -20px;
        width: 20px;
        height: 285px;
        background: url(${bannerSprite});
        transform: rotateY(180deg);
        background-position: -1px 0;
      }

      p{
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
        position: absolute;
        top: 240px;
        left: 15px;
      }

      .downloadBtn{
        display: block;
        width: 215px;
        height: 56px;
        margin-left: 19.3px;
        margin-top: 185.9px;

        :hover{
          background: url(${downloadPng}) 0 0;
          background-position: 0 63px;
        }
      }
    }
  }
`
