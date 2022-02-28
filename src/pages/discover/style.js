import styled from "styled-components";

export const HeaderNav = styled.div`
  height: 34px;
  background-color: #C20C0C;

  .content{
    display: flex;
    justify-content: center;

    .active{
      .title{
        background: #9B0909;
        border-radius: 20px;
        padding: 0 13px;
      }
      .RPadding{
        background: #9B0909;
        border-radius: 20px;
        padding: 0 7px 0 11px;
      }
    }

    a{
      color: #fff;
      text-decoration: none;
      height: 34px;
      display: flex;
      align-items: center;

      .title{
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 0 17px;
      }

      .RPadding{
        height: 20px;
        line-height: 20px;
        padding: 0 7px 0 11px;
        margin: 0 17px;

        .R{
          position: relative;
          display: inline-block;
          height: 8px;
          width: 8px;
          background-size: cover;
          top: -4px;
        }
      }

      :hover{
        .title{
          background: #9B0909;
          border-radius: 20px;
          padding: 0 13px;
        }
        .RPadding{
          background: #9B0909;
          border-radius: 20px;
          padding: 0 7px 0 11px;
        }
      }
    }
  }

  .effect{
    width: 175px;
  }
`