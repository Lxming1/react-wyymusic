import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: ${props => props.height};
  background-color: #242424;
  opacity: 1;

  .content{
    height: 70px;
    display: flex;
    justify-content: space-between;
  }

  .divider{
    height: 5px;
    background-color: #c20c0c;
  }

  .discoverDivider{
    height: 34px;
    background-color: #c20c0c;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  position: relative;

  .logo{
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }
  
  .hot{
    position: absolute;
    top: 21px;
    right: -20px;
    width: 28px;
    height: 19px;
    background-position: -190px 0;
  }

  /* select-item style */
  .select-list{
    height: 70px;
    width: 508px;
    line-height: 70px;
    text-align: center;
    font-size: 14px;
    
    a{
      color: #CCCCCC;
      display: inline-block;
      height: 70px;
      padding: 0 19px;
      position: relative;
    }

    .active, a:hover{
      color: #fff;
      text-decoration: none;
      background-color: #000;
    }

    .sub{
      position: absolute;
      width: 12px;
      height: 7px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background-position: -226px 1px;
    }
  }
`

export const HeaderRight = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  margin-right: 30px;

  .search{
    height: 32px;
    width: 158px;
    display: flex;
    align-items: center;
    background-position: 0 -99px;
    background-color: #fff;
    border-radius: 32px;

    input{
      width: 115px;
      background-color: #fff;
      margin-left: 30px;
      position: relative;
      top: 0.5px;
    }
  }

  .creator{
    border: 1px solid #4F4F4F;
    border-radius: 20px;
    margin-left: 8px;

    a{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ccc;
      width: 90px;
      height: 32px;

      :hover{
        text-decoration: none;
      }
    }

    :hover{
      border: 1px solid #f5f5f5;

      a{
        color: #f5f5f5;
      }
    }
  }

  .login{
    margin-left: 20px;

    :hover{
      color: #c5c5c5; 
    }
  }
`