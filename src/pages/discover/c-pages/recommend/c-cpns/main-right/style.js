import styled from "styled-components";

export const MainRightWrapper = styled.div`
  width: 100%;
  height: 1432px;
  border-right: 1px solid #d3d3d3;

  .remindLogin{
    width: 100%;
    height: 126px;
    background-position: 0 0;

    span{
      display: block;
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;
      color: #666;
    }

    .login{
      background-position: 0 -195px;
      display: block;
      width: 100px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      margin: 0 auto;

      :hover{
        text-decoration: none;
        background-position: -110px -195px;;
      }
    }
  }

  .main{
    background-color: #fff;
    height: 1306px;
    padding: 15px 20px;

    .singer{
      width: 100%;
      height: 470px;
      
      .head{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;

        span{
          color: #333;
          font-weight: bolder;
        }

        a{
          color: #666;
        }
      }

      .singerMain{
        margin-top: 20px;

        .singerItem{
          display: flex;
          align-items: center;
          margin: 0 auto;
          width: 210px;
          height: 62px;
          margin-bottom: 14px;
          border: 1px solid #e9e9e9;
          border-left: none;
          background: #fafafa;

          :hover{
            background: #f4f4f4;
            text-decoration: none;
          }

          .singerIntroduce{
            margin-left: 14px;

            .singerName{
              font-size: 14px;
              color: #333;
              font-weight: bolder;
            }

            .singerAlias{
              margin-top: 5px;
            }
          }
        }
      }

      .applyMusician{
        display: block;
        height: 31px;
        color: #333;
        background-position: right -100px;
        text-align: center;
        line-height: 31px;
        overflow: hidden;
        border-radius: 4px;

        :hover{
          text-decoration: none;
          background-position: right -182px;

          i{
            background-position: 0 -141px;
          }
        }

        i{
          display: block;
          height: 100%;
          width: 206px;
          font-weight: bold;
          color: #333;
          background-position: 0 -59px;
          padding-left: 2px;
        }
      }
    }

    .hotAnchor{
      margin-top: 15px;

      .head{
        border-bottom: 1px solid #ccc;
        padding-bottom: 5px;

        span{
          color: #333;
          font-weight: bolder;
        }
      }

      .anchorMain{
        margin-top: 20px;
        
        .anchorItem{
          margin-bottom: 10px;
          height: 40px;
          width: 210px;
          display: flex;

          img{
            margin-right: 10px;
            cursor: pointer;
          }

          .anchorIntroduce{
            a{
              display: block;
              width: 160px;
              color: #000;
            }

            span{
              display: block;
              width: 160px;
              color: #666;
              margin-top: 3px;
            }
          }
          
        }
      }
    }
  }
`