import styled from "styled-components";
import playlistBg from 'assets/img/playlist_bg.png'

export const SongListWrapper = styled.div`
  position: absolute;
  width: 986px;
  height: 301px;
  left: 50%;
  top: -295px;
  transform: translate(-50%);

  header{
    height: 41px;
    padding: 0 5px;
    background: url(${playlistBg});

    .head-box{
      height: 40px;
      display: flex;
      position: relative;
      

      .left{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 552px;

        .showCount{
          color: #e2e2e2;
          font-size: 14px;
          font-weight: bolder;
          margin-left: 28px;
        }
        .mainCenter {
          display: inline-block;
          height: 100%;
          display: flex;
          align-items: center;
          font-size: 12px;
          
          .leftIc{
            display: flex;
            align-items: center;
            color: #ccc;
            cursor: pointer;

            :hover{
              color: #e2e2e2;
              text-decoration: underline;
              .col{
                background-position: -24px -20px;
              }
            }

            .col{
              display: inline-block;
              width: 16px;  
              height: 16px;
              background-position: -24px 0;
              margin-right: 5px;
            }
          }

          .line{
            height: 15px;
            border-left: 1px solid #000;
            border-right: 1px solid #2c2c2c;
            margin: 0 10px;
          }

          .rightIc{
            display: flex;
            align-items: center;
            color: #ccc;
            margin-right: 18px;
            cursor: pointer;

            :hover{
              color: #e2e2e2;
              text-decoration: underline;
              .del{
                background-position: -51px -20px;
              }
            }

            .del{
              display: inline-block;
              width: 13px;  
              height: 16px;
              background-position: -51px 0;
              margin-right: 5px;
            }
          }
        }
      }
      .right{
        flex: 1;
        font-size: 14px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #fff;
      }
      .close{
        background-position: -195px 9px;
        position: absolute;
        width: 30px;
        height: 30px;
        cursor: pointer;
        left: calc(100% - 36px);
        top: 6px;

        :hover{
          background-position: -195px -21px;
        }
      }
    }

    
  }
`

export const MianWrapper = styled.div`
  height: 260px;
  width: 984px;
  padding: 0 3px;
  position: absolute;
  position: relative;
  overflow: hidden;

  .bgImg{
    width: 980px;
    position: absolute;
    left: 8px;
    top: -140%;
    filter: blur(10px);
    z-index: 1;
    overflow: hidden;
  }

  .mskLeft{
    position: absolute;
    top: 0;
    left: 2px;
    z-index: 2;
    width: 558px;
    height: 260px;
    background: #121212;
    opacity: .98;
  }

  .mainLeft{
    width: 558px;
    z-index: 4;
    position: absolute;
    height: 260px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 6px;
      height: 260px;
      background: #000;
    }
    ::-webkit-scrollbar-thumb{
      width: 4px;
      border-radius: 5px;
      height: 100px;
      background: #474849;
      border: 1px solid #5a5c5f;
    }
    

    ul{
      z-index: 5;
      height: 288px;

      .songItem{
        height: 28px;
        display: flex;
        align-items: center;
        color: #ccc;
        justify-content: space-between;
        cursor: pointer;

        :hover{
          background-color: rgba(0,0,0,0.4);
          color: #ffffff;

          .fourIcon{
            display: flex;
          }

          .songTime{
            color: #ffffff !important;
          }

          .author{
            color: #ffffff !important;
          }
        }
        
        div{
          display: flex;
          align-items: center;
        }

        .listLeft{

          .playIcon{
            display: inline-block;
            width: 10px;
            height: 13px;
            background-position: -182px 0;
            margin-left: 10px;
            position: absolute;
          }

          .songName{
            padding-left: 30px;
            width: 286px;
            overflow: hidden; // 文本溢出隐藏
            text-overflow: ellipsis; // 显示省略号
            white-space: nowrap; // 设置文本不换行
          }
        }

        .fourIcon{
          position: absolute;
          height: 23px;
          width: 100px;
          left: 279px;
          display: none;

          i{
            height: 16px;
            margin-left: 10px;
          }

          .collectIcon{
            width: 16px;
            background-position: -24px 0;
            :hover{
              background-position: -24px -20px;
            }
          }
          .shareIcon{
            width: 14px;
            background-position: 0 0;
            :hover{
              background-position: 0 -20px;
            }
          }
          .downloadIcon{
            width: 14px;
            background-position: -57px -50px;
            :hover{
              background-position: -80px -50px;
            }
          }
          .delIcon{
            width: 13px;
            background-position: -51px 0;
            :hover{
              background-position: -51px -20px;
            }
          }
        }

        .listRight{

          .author{
            display: inline-block;
            color: #9b9b9b;
            width: 70px;
            overflow: hidden;
            text-overflow: ellipsis; // 显示省略号
            white-space: nowrap; // 设置文本不换行
            margin-right: 10px;

            :hover{
              text-decoration: underline;
            }
          }

          .songTime{
            color: #666666;
            width: 45px;
          }

          .link{
            background-position: -80px 0px;
            display: inline-block;
            margin: 0 11px 0 18px;
            width: 14px;
            height: 16px;

            :hover{
              background-position: -80px -20px;
            }
          }
        }
      }
    }
  }

  .mskRight{
    position: absolute;
    top: 0;
    right: 0px;
    z-index: 2;
    width: 424px;
    height: 260px;
    background: #121212;
    opacity: .9;
  }

  .mainRight{
    width: 424px;
    height: 260px;
    position: absolute;
    padding: 20px 0;
    right: 0;
    z-index: 3;
    overflow-y: scroll;

    .noLyricStyle {
      color: #989898;
      font-size: 12px;
      text-align: center;
      margin-top: 20px;
    }

    ::-webkit-scrollbar {
      width: 6px;
      height: 260px;
      background: #000;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb{
      width: 4px;
      border-radius: 5px;
      height: 45x;
      background: #474849;
      border: 1px solid #5a5c5f;
    }

    p{
      position: relative;
      color: #989898;
      left: 0;
      z-index: 3;
      text-align: center;
      line-height: 32px;
      font-size: 12px;
      transition: color 0.7s linear;
    }
  }
`