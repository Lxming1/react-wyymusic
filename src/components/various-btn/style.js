import styled from "styled-components";

export const BtnWrapper = styled.div`
  width: 100%;
  height: 31px;
  display: flex;
  align-items: center;
  margin-bottom: 25px;

  .playSong{
    display: inline-block;
    width: 66px;
    padding-right: 5px;
    height: 32px;
    color: #fff;
    background-position: right -428px;
    position: relative;
    top: 1px;
    cursor: pointer;

    i{
      width: 61px;
      height: 32px;
      display: flex;
      align-items: center;
      background-position: 0 -387px;

      .ply{
        display: inline-block;
        width: 20px;
        height: 20px;
        background-position: 0 -1622px;
        margin: 2px 2px 2px 8px;
      }

      .playT{
        margin-bottom: 2px;
      }
    }

    :hover{
      text-decoration: none;
      background-position: 0 -469px;

      i{
        background-position: 0 -469px;
        .ply{
          background-position: -28px -1622px;
        }
      }
    }
  }

  .addToPlayList{
    display: inline-block;
    position: relative;
    left: -3px;
    top: 1px;
    width: 31px;
    height: 32px;
    background-position: 0 -1588px;

    :hover{
      background-position: -40px -1588px;
    }
  }

  .commonCss{
    display: inline-block;
    font-family: 'SimSun';
    color: #000;
    height: 31px;
    padding: 0 4px 0 0;
    margin-left: 2px;

    i{
      display: block;
      min-width: 23px;
      padding-left: 28px;
      padding-right: 3px;
      height: 32px;
      line-height: 31px;
      
    }

    :hover{
      background-position: right -1106px;
      text-decoration: none;
    }
  }

  .collectToPlayList{
    background-position: right -1020px;
    i{
      background-position: 0 -977px;
    }
    :hover{
      i{
        background-position: 0 -1063px;
      }
    }
  }

  .transfer{
    background-position: right -1020px;
    margin-left: 6px;
    i{
      background-position: 0 -1225px;
    }
    :hover{
      i{
        background-position: 0 -1268px;
      }
    }
  }

  .download{
    background-position: right -1020px;
    margin-left: 6px;
    i{
      background-position: 0 -2761px;
    }
    :hover{
      i{
        background-position: 0 -2805px;
      }
    }
  }

  .comment{
    background-position: right -1020px;
    margin-left: 6px;
    i{
      background-position: 0 -1465px;
    }
    :hover{
      i{
        background-position: 0 -1508px;
      }
    }
  }
`