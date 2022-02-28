import styled from "styled-components";

export const PlayList = styled.div`
  margin-top: 20px;
  

  .fourPlay{
    display: flex;
    justify-content: space-between;
    
  }
`

export const PlayListItem = styled.div`
  display: inline-block;
  height: 204px;
  width: 140px;
  margin-bottom: 30px;
  line-height: 1.4;

  .pic{
    position: relative;

    img{
      height: 100%;
      width: 100%;
    }
    
    .boli{
      position: absolute;
      left: 0;
      height: 100%;
      width: 100%;
      background-position: 0 0;
    }

    .bottomBar{
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;
      display: flex;
      padding: 0 10px;
      justify-content: space-between;
      align-items: center;

      .bottomLeft{
        display: flex;
        align-items: center;
        height: 100%;

        .leftIcon{
          display: block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
          margin-right: 4px;
          margin-top: 2px;
        }

        .playCount{
          display: block;
          margin-top: 2px;
          font-size: 12px;
        }
      }

      .rightIcon{
        display: inline-block;
        width: 16px;
        height: 17px;
        background-position: 0 0;

        :hover{
          background-position: 0 -60px;
          cursor: pointer;
        }
      }
    }
  }

  .bottomMes{
    display: inline-block;
    font-size: 14px;
    margin-top: 8px;
    color: #000;
  }
`