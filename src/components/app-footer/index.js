import React, { memo } from 'react';
import { footerLinks } from 'common/local-data';
import { FooterWrapper } from './style';
import { footerRight } from '../../common/local-data';

export default memo(function XMAppFooter() {
  const zhewangwen = `https://p5.music.126.net/obj/wo3DlcOGw6DClTvDisK1/8282703158/452a/ca0c/3a10/caad83bc8ffaa850a9dc1613d74824fc.png`
  const yueB = `https://beian.miit.gov.cn/#/Integrated/index`
  const police = `http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564`

  return (
    <FooterWrapper>
      <div className="wrap-v2 content">
        <div className="footerLeft">
          {
            footerLinks.map((item, index) => {
              return (
                <a href={item.link} key={index} style={{color: "#999"}} target="_blank" rel="noreferrer">
                  {item.title}
                  {index <= 4 && <span style={{padding: "0 11px 0 11px", color: "#ccc"}}>|</span>}
                </a>
              )
            })
          }
          <div style={{color: '#666'}}>
            <span>网易公司版权所有©1997-2022</span>
            <span style={{marginLeft: '14px'}}>杭州乐读科技有限公司运营：</span>
            <a href={zhewangwen} target="_blank" style={{cursor: "pointer"}} rel="noreferrer">
              浙网文[2021] 1186-054号
            </a>
          </div>
          <div style={{color: '#666'}}>
            <span>违法和不良信息举报电话：0571-89853516</span>
            <span style={{marginLeft: '17px'}}>举报邮箱：
              <a style={{color: '#333', cursor: "pointer"}} href="mailto:ncm5990@163.com" rel="noreferrer">ncm5990@163.com</a>
            </span>
          </div>
          <div style={{color: '#666'}}>
            <a href={yueB} style={{cursor: "pointer"}} target="_blank" rel="noreferrer">
              粤B2-20090191-18 &nbsp;工业和信息化部备案管理系统网站
            </a>
            <a target="_blank"  href={police} rel="noreferrer"
              style={{cursor: "pointer", marginLeft: '24px', position: 'relative'}}>
              <span className="police sprite_police"/>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </div>
        </div>
        <div className="footerRight">
          {footerRight.map((item, index) => {
            return (
              <div key={index} className="icon_title">
                <a href={item} target="_blank" className={`icon${index} footer_icon commonCssI`} rel="noreferrer"> </a>
                <span className={`title${index} footer_title commonCssT`}/>
              </div>
            )
          })}
        </div>
      </div>
    </FooterWrapper>
  );
});
