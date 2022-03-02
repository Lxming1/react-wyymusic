import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 2px solid #c20c0c;
  position: relative;
  width: 100%;
  /* line-height: 35px; */
  padding-bottom: 2px;

  .headLeft{
    height: 33px;
    width: 100%;
    
    .title {
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      font-size: 20px;
    }
    .count {
      color: #666;
      margin-left: 20px;
    }
  }
`