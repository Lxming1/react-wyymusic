import styled from "styled-components";

export const MainLeft = styled.div`
  width: 709px;

  .leftHeader{
    width: 640px;
    height: auto;
    display: flex;
    position: relative;

    .imgCover{
      position: relative;
      height: 208px;
      width: 208px;
      left: -1px;

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
      position: relative;
      top: -2px;
      width: 410px;
      height: auto;
      /* margin-bottom: 23px; */

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
          width: 346px;
          font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
        }
      }

      .author{
        display: flex;
        align-items: center;
        margin-bottom: 20px;

        .nicknameIcon {
          height: 13px; 
          width: 13px; 
          margin-right: 3px;
        }
      }

      .mark{
        margin-bottom: 5px;
        height: 25px;
        width: 100%;
        color: #666;

        a{
          height: 22px;
          display: inline-block;
          margin-right: 10px;
          padding-right: 9px;
          background-position: right -27px;
          text-align: center;
          line-height: 22px;

          i{
            color: #777;
            display: inline-block;
            background-position: 0 0;
            padding-left: 13px;
            padding-right: 4px;
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
        height: auto;
        width: 410px;
        line-height: 18px;
        overflow: hidden;
      }

      .contro{
        color: #0c73c2;
        height: 16px;
        cursor: pointer;
        display: inline-block;
        position: absolute;
        right: 0;
        
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

  .leftSonglist{
    width: 640px;

    .songlist{
      width: 100%;
      height: 640px;

      table{
        border-collapse: collapse;
        border-spacing: 0;
        border: 1px solid #d9d9d9;
        table-layout: fixed;
        width: 100%;

        thead{
          width: 639px;
          height: 36px;
          background-color: #f7f7f7;
          
          th{
            text-align: left;
            background-color: #f7f7f7;
            background-position: 0 0;
            background-repeat: repeat-x;
            
            div{
              color: #666 !important;
              height: 34px;
              cursor: default;
              font-weight: 400;
              padding: 8px 10px;
              background-position: 0 -56px;
            }
          }
        }

        tbody{
          tr{
            height: 30px;
            width: 100%;
            td{
              height: 30px;
              width: 100%;
              padding: 6px 10px;
              overflow: hidden; // 文本溢出隐藏
              text-overflow: ellipsis; // 显示省略号
              white-space: nowrap; // 设置文本不换行

              a{
                width: 100%;
              }
            }
            .index{
              width: 5px;
              margin-left: 6px;
              color: #999;
              display: flex;
              justify-content: center;
            }
            .playIcon{
              display: inline-block;
              width: 17px;
              height: 17px;
              cursor: pointer;
              background-position: 0 -103px;
              position: relative;
              right: 0;
              top: 0.5px;
              :hover{
                background-position: 0 -128px;
              }
            }
            .name{
              width: 100%;
              padding-right: 28px;
            }
          }
        }
      }
    }
  }
`