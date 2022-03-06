import styled from "styled-components";

export const MainLeft = styled.div`
  width: 709px;

  .songIntro {
    display: flex;
    .pic{
      width: 206px;
      height: 205px;
      position: relative;
      top: -14px;
      left: -5px;

      img{
        width: 130px;
        height: 130px;  
        margin: 38px;
      }

      span{
        position: absolute;
        width: 206px;
        height: 205px;
        background-position: -140px -580px;
      }
    }

    .intro{
      margin-left: 21px;
      position: relative;
      top: -12px;
      left: -2px;
      width: 410px;
      height: auto;

      .smallTitle{
        color: #999999;
      }
      .introColor{
        color: #0c73c2;
      }

      .title{

        margin-top: 2px;
        font-size: 20px;
        font-weight: normal;
        height: auto;
        display: flex;
        margin-bottom: 12px;

        .titleIcon{
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -463px;
        }

        .itemName{
          font-size: 24px;
          line-height: 20px;
          margin-left: 10px;
          width: 346px;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
          position: relative;

          .mvIcon{
            display: inline-block;
            width: 21px;
            height: 18px;
            background-position: 0 -18px;
            margin-left: 15px;
            position: relative;
            left: -2px;
            top: 1px;
            cursor: pointer;
          }

          .tns{
            display: block;
            height: 24px;
            color: #bababa;
            font-size: 14px;
            position: relative;
            top: 7px;
          }
        }
      }

      .author{
        margin-top: 17px;
      }
      
      .album{
        margin-top: 8px;
      }

      .btns{
        margin-top: 7px;
      }

      .songWord{
        margin-top: 38px;
        line-height: 23px;
        /* height: 327px; */
        overflow: hidden;
      }

      .contro{
        color: #0c73c2;
        height: 16px;
        cursor: pointer;
        display: inline-block;
        position: absolute;
        left: 0;
        margin-top: 5px;
        
        i{
          display: inline-block;
          width: 11px;
          height: 8px;
        }
        :hover{
          text-decoration: underline;
        }
      }
      .open{
        i{
          background-position: -65px -520px;
        }
      }
      .close{
        i{
          background-position: -45px -520px;
        }
      }
    }
  }
`