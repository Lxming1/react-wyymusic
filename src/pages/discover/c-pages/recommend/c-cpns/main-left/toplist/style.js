import styled from "styled-components";
import recommendToplistBg from 'assets/img/recommend-top-bg.png'

export const ToplistWrapper = styled.div`
  width: 689px;
  height: 527px;

  .toplistMain{
    height: 472px;
    width: 100%;
    margin-top: 20px;
    background: url(${recommendToplistBg});
    display: flex;

    .toplistItem{
      width: 230px;
      height: 100%;

      .top{
        height: 120px;

        .imgWrapper{
          width: 80px;
          height: 80px;
          margin-top: 20px;
          display: inline-block;
          position: relative;

          a{
            display: block;
            background-position: -145px -57px;
            position: absolute;
            top: 0;
            left: 0;
            width: 80px;
            height: 80px;
          }
        }

        .rightMes{
          display: inline-block;
          margin-left: 10px;

          .title{
            position: relative;
            top: 5px;
            color: #333;
            display: block;
            font-size: 14px;
            font-weight: bold;
          }

          .rightIcon{
            position: relative;
            top: 13px;

            .icon{
              display: inline-block;
              height: 22px;
              width: 22px;
              margin-right: 10px;
            }

            .playIcon{
              background-position: -267px -205px;
              :hover{
                background-position: -267px -235px;
              }
            }

            .collectIcon{
              background-position: -300px -205px;
              :hover{
                background-position: -300px -235px;
              }
            }
          }
        }
      }

      .main{
        height: 352px;
        padding-left: 16px;
        position: relative;

        .mainItem{
          height: 32px;
          display: flex;
          align-items: center;
          font-size: 12px;
          position: relative;

          :hover{
            .name{
              width: 95px;
            }
            .oper{
              display: flex;
            }
          }

          span{
            font-size: 16px;
            width: 35px;
            display: flex;
            justify-content: center;
          }

          .name{
            color: #000;
            width: 170px;
            overflow: hidden; // 文本溢出隐藏
            text-overflow: ellipsis; // 显示省略号
            white-space: nowrap; // 设置文本不换行
          }

          .oper{
            width: 82px;
            height: 19px;
            position: relative;
            display: none;
            right: 0;

            a{
              display: inline-block;
              width: 17px;
              height: 17px;
              margin-right: 10px;
            }

            .play{
              background-position: -267px -268px;
              margin-right: 10px;
              :hover{
                background-position: -267px -288px;
              }
            }

            .addToList{
              background-position: 0 -698px;
              margin-right: 6px;
              :hover{
                background-position: -22px -698px;
              }
            }

            .collect{
              background-position: -297px -268px;
              :hover{
                background-position: -297px -288px;
              }
              
            }
          }
        }

        .all{
          color: #000;
          height: 32px;
          line-height: 32px;
          position: absolute;
          right: 30px;
        }
      }
    }
  }

  
`