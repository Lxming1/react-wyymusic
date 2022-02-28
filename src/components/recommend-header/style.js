import styled from "styled-components";

export const SongNav = styled.div`

  .headNav{
    height: 35px;
    padding: 0px 10px 0px 34px;
    background-position: -225px -156px;
    border-bottom: 2px solid rgb(193, 13, 12);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .headLeft{
      display: flex;
      align-items: center;

      .bigTitle{
        display: inline-block;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        bottom: 1px;
        color: #333333;

        :hover{
          text-decoration: none;
        }
      }

      .navItemCpn{
        margin-left: 20px;
        color: #666666;

        .line{
          margin: 0px 13px;
          color: rgb(204, 204, 204);
        }
      }
    }

    .headRight{
      display: flex;
      align-items: center;
      margin-top: 3px;

      .more{
        color: rgb(102, 102, 102);
        font-size: 12px;
        margin-right: 4px;
      }
      span{
        height: 12px;
        width: 12px;
        background-position: 0px -240px;
      }
    }
  }
`