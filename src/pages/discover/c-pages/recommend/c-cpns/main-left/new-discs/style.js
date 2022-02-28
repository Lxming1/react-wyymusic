import styled from "styled-components";

export const DiscsMainWrapper = styled.div`
  position: relative;
  zoom: 1;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  background: #f5f5f5;

  .leftBtn{
    display: block;
    position: absolute;
    top: 71px;
    left: 4px;
    width: 17px;
    height: 17px;
    background-position: -260px -75px;
    z-index: 1;
    
    :hover{
      background-position: -280px -75px;
      cursor: pointer;
    }
  }

  .rightBtn{
    display: block;
    position: absolute;
    top: 71px;
    right: 7px;
    width: 17px;
    height: 17px;
    background-position: -300px -75px;

    :hover{
      background-position: -320px -75px;
      cursor: pointer;
    }
  }

  .carousel{
    margin: 28px 20px 0 17px;

    .mainMes{
      display: flex;
      height: 150px;
      width: 650px;

      .discsItem{
        width: 118px;
        height: 150px;
        margin-left: 11px;
        position: relative;
        background-position: -260px 100px;

        .discsImg{
          width: 118px;
          height: 100px;
          margin-bottom: 7px;

          .bag1{
            display: inline-block;
            width: 118px;
            height: 100px;
            position: absolute;
            background-position: 0 -570px;
            top: 0;
          }
        }

        .discsName{
          display: block;
          font-size: 12px;
          color: #000;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .artistName{
          display: block;
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
`