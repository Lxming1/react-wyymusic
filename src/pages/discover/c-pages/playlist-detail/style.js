import styled from "styled-components";

export const PlaylistItemWrapper = styled.div`
  .playlistMain{
    background-color: rgb(255,255,255);
    padding: 47px 30px 40px 39px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    display: flex;
  }
`

export const MainLeft = styled.div`
  width: 709px;

  .leftHeader{
    width: 640px;
    height: 361px;
    display: flex;
    position: relative;

    .imgCover{
      position: relative;
      height: 208px;
      width: 208px;

      .imgcover{
        position: absolute;
        top: 0;
        left: -4px;
        top: -4px;
        display: block;
        height: 208px;
        width: 208px;
        background-position: 0 -1285px;
      }
    }

    .playlistIntroduce{
      margin-left: 21px;
      width: 405px;
      height: 301px;

      .title{
        margin-top: 1px;
        font-size: 20px;
        font-weight: normal;
        height: auto;
        display: flex;
        margin-bottom: 12px;

        .titleIcon{
          display: inline-block;
          width: 54px;
          height: 24px;
          background-position: 0 -243px;
          margin-right: 10px;

          .R{
            position: relative;
            display: inline-block;
            height: 8px;
            width: 8px;
            background-size: cover;
            top: -12px;
            left: 34px;
          }
        }

        .itemName{
          line-height: 24px;
          width: 340px;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
      }

      .author{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
      }

      .mark{
        margin-bottom: 4px;
        height: 25px;
        width: 100%;
        color: #666;

        a{
          width: 50px;
          height: 22px;
          display: inline-block;
          margin-right: 10px;
          padding-right: 9px;
          background-position: right -27px;
          text-align: center;
          line-height: 22px;

          i{
            display: inline-block;
            background-position: 0 0;
            padding-left: 9px;
            width: 40px;
            height: 100%;
          }

          :hover{
            background-position: right -1430px;
            i{
              background-position: 0 -1400px;
            }
          }
        }
      }

      .introduce{
        color: #666;
        /* height: 108px;
        width: 410px;
        overflow: hidden; */
        line-height: 18px;
      }

      .open{
        color: #0c73c2;
        height: 16px;
        cursor: pointer;
        display: inline-block;
        position: absolute;
        right: 0;

        span{
          /* overflow: hidden; // 文本溢出隐藏
          text-overflow: ellipsis; // 显示省略号
          white-space: nowrap; // 设置文本不换行 */
        }
        
        i{
          display: inline-block;
          width: 11px;
          height: 8px;
          background-position: -65px -520px;
        }
        :hover{
          text-decoration: underline;
        }
      }
    }

    
  }
`

export const MainRight = styled.div`

`