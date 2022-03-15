import styled from "styled-components";

export const PlayControWrapper = styled.div`
  position: fixed;
  height: 53px;
  bottom: 0;
  right: 0;
  left: 0;
  background-position: 0 0;
  background-repeat: repeat;
  z-index: 999;

  .wrapper{
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 999;

    .updn{
      position: relative;

      .left{
        position: absolute;
        top: -14px;
        right: 15px;
        width: 52px;
        height: 67px;
        background-position: 0 -380px;

        .btn{
          display: block;
          width: 18px;
          height: 18px;
          margin: 6px 0 0 17px;
          background-position: -80px -380px;
        }
      }

      .right{
        position: absolute;
        top: -1px;
        right: 0;
        width: 15px;
        height: 54px;
        background-position: -52px -393px;
        pointer-events: none;
      }
    }
  
    /* .bg{
      height: 100%;
      zoom: 1;
      margin-right: 67px;
      background-position: 0 0;
      background-repeat: repeat-x;
    } */

    .lock{
      position: absolute;
      top: -10px;
      width: 100%;
      height: 20px;
      cursor: pointer;
    }

    .wrap{
      height: 47px;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      /* top: -47px; */
      bottom: 0;
      margin: 0 auto;
      display: flex;

      .btns{
        height: 100%;
        width: 137px;
        div{
          display: inline-block;
          cursor: pointer;
        }

        .preBtn{
          height: 28px;
          width: 28px;
          background-position: 0 -130px;
          margin-top: 10px;
          :hover{
            background-position: -30px -130px;
          }
        }
        .centerBtn{
          height: 36px;
          width: 36px;
          margin-left: 8px;
          margin-right: 8px;
          position: relative;
          top: 3px;
        }

        .playBtn{
          background-position: 0 -204px;
          :hover{
            background-position: -40px -204px;
          }
        }

        .stopBtn{
          background-position: 0 -165px;
          :hover{
            background-position: -40px -165px;
          }
        }
        .nextBtn{
          height: 28px;
          width: 28px;
          background-position: -80px -130px;
          margin-top: 10px;
          :hover{
            background-position: -110px -130px;
          }
        }
      }

      .picBox{
        width: 34px;
        height: 34px;
        margin-top: 6px;
        margin-right: 15px;
        position: relative;

        img{
          width: 100%;
          height: 100%;
        }

        .picWrapper{
          position: absolute;
          top: 0px;
          left: 0px;
          width: 34px;
          height: 35px;
          background-position: 0 -80px;
        }
      }

      .center{
        width: 581px;

        .playHead{
          height: 28px;
          width: 100%;
          display: flex;
          align-items: center;
          a{
            display: inline-block;
          }
          .songName{
            color: #e8e8e8;
            max-width: 300px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
          }
          .arName{
            color: #9b9b9b;
            cursor: pointer;
            margin-left: 15px;
            :hover{
              text-decoration: underline;
            }
          }
          .link{
            width: 14px;
            height: 15px;
            margin-left: 13px;
            background-position: -110px -103px;
            :hover{
              background-position: -130px -103px;
            }
          }

        }
        .playBar{
          width: 100%;
          position: relative;
          left: 1px;
          top: -4px;
          display: flex;

          .ant-slider {
            width: 466px;
            margin: 0 12px 0 0;
            cursor: default;

            .ant-slider-rail {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) right 0;
            }

            .ant-slider-track {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
            }

            .ant-slider-handle {
              width: 22px;
              height: 24px;
              border: none;
              cursor: default;
              margin-top: -7px;
              background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;

              :focus{
                box-shadow: none;
              }
              :hover{
                background-position: 0 -280px;
              }
            }
          }
          
          .time {
            position: relative;
            top: -1px;
            .now-time {
              color: #a1a1a1;
            }
            .divider {
              color: #797979;
              margin: 0 3px;
            }
            .duration{
              color: #797979;
            }
          }
        }
      }

      .operator{
        height: 100%;
        width: 213px;
        display: flex;

        span{
          display: inline-block;
          height: 25px;
          width: 25px;
          cursor: pointer;
          margin-right: 2px;
        }

        .opLeft{
          width: 87px;
          height: 100%;
          display: flex;
          align-items: center;

          .showState{
            background: url(${require('assets/img/playbar_state.png')}) no-repeat 0 0;;

            :hover{
              background-position-y: -25px;
            }
          }
          .collect{
            background-position: -88px -163px;
            :hover{
              background-position: -88px -189px;
            }
          }
          .tansfer{
            background-position: -114px -163px;
            :hover{
              background-position: -114px -189px;
            }
          }
        }

        .opRight{
          width: 126px;
          height: 100%;
          padding-left: 13px;
          background-position: -147px -238px;
          display: flex;
          align-items: center;

          .sound{
            background-position: -2px -248px;
            :hover{
              background-position: -31px -248px;
            }
          }

          .playState0{
            background-position: -66px -248px;
            :hover{
              background-position: -93px -248px;
            }
          }
          .playState1{
            background-position: -66px -344px;
            :hover{
              background-position: -93px -344px;
            }
          }
          .playState2{
            background-position: -3px -344px;
            :hover{
              background-position: -33px -344px;
            }
          }

          .playlist{
            width: 59px;
            height: 36px;
            /* margin-right: 2px; */
            cursor: pointer;
            line-height: 38px;
            /* margin-left: 2px; */
            
            span{
              display: inline-block;
              width: 59px;
              padding-left: 21px;
              background-position: -42px -68px;
              line-height: 27px;
              text-align: center;
              color: #666;
              text-shadow: 0 1px 0 #080707;
              text-indent: 0;
              text-decoration: none;
            }

            :hover{
              span{
                background-position: -42px -98px;
              }
              
            }
          }
        }
      }
    }

    .tip{
      width: 81px;
      height: 39px;
      position: absolute;
      right: 303px;
      top: -29px;
      line-height: 34px;
      background-position: 0 -457px;
      text-align: center;
      color: #fff;
    }
  }

  .songWrod{
    position: absolute;
    color: #123456;
    left: 50%;
    font-size: 26px;
    transform: translate(-50%);
    top: -140px;
    padding: 18px 50px 16px 50px;
    line-height: 40px;
    display: block;
    font-weight: bolder;
    opacity: 0.9;
    cursor: default;
    white-space: nowrap;

    .lyricMain{
      span{
        /* animation: change 6s; */
        
        /* @keyframes change {
          0% {
              color: #123456;
          }
          100% {
              color: #666;
          }
        } */
      }
    }
    
    :hover{
      background: rgba(102,102,102,0.2);

      .xx{
        display: block;
      }
    }
    .xx{
      display: none;
      position: absolute;
      color: #fff;
      height: 20px;
      width: 20px;
      line-height: 20px;
      right: 0;
      top: 2px;
      font-size: 14px;
      cursor: pointer;

      :hover{
        background: rgba(112,112,112,0.2);
      }
    }
    span{
      display: block;
      text-align: center;
    }
    .small{
      font-size: 20px;
      opacity: 0.8;
    }
  }
`