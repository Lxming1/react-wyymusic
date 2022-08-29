import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { formatDate } from "utils/format-utils";
import { parseLyric } from "../../../../utils/parse-lyric";
import { changeSongList, getCurrentSong } from "../../store/actionCreater";
import { SongListWrapper, MianWrapper } from "./style";

const SongList = memo(
  ({ song, songList, currentBg, closeSongList, songIndex, currentTime }) => {
    const dispatch = useDispatch();
    const arName = (ar) => {
      let name = "";
      ar.forEach((item, index, arr) => {
        name += item.name + (index !== arr.length - 1 ? "/" : "");
      });
      return name;
    };
    const songTime = (value) => formatDate(new Date(value), "mm:ss");
    const activeSong = (index) =>
      songIndex === index ? { color: "#fff" } : {};

    const playSong = (id, e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
      dispatch(getCurrentSong(id, true));
    };

    const scrollRef = useRef();
    const pRef = useRef();

    // 给当前播放的歌词添加ref
    const getActiveRef = useCallback((item, index, arr) => {
      if (item?.time <= currentTime && arr[index + 1]?.time >= currentTime) {
        return pRef;
      }
      return null;
    }, [currentTime]);

    const delSong = (i, e) => {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();

      const newSonglist = songList.filter((_, index) => index !== i);
      dispatch(changeSongList(newSonglist));
      if (i === songIndex) {
        const ind = songIndex === songList.length - 1 ? 0 : i;
        dispatch(getCurrentSong(newSonglist[ind].id, true));
      }
    };

    const lyric = parseLyric(song?.lyric).filter(
      (item) => !Object.is(item.time, NaN)
    );

    const activeLyricStyle = (item, index, arr) => {
      // 当前时间在两条歌词之间，就添加active的样式
      const style =
        item?.time <= currentTime && arr[index + 1]?.time >= currentTime
          ? { color: "#fff", fontSize: "14px" } : {};
      const noContentAddHeight = item.content === "" ? { height: "32px" } : {};
      return { ...style, ...noContentAddHeight };
    };

    const [autoLoad, setAutoLoad] = useState(true);
    const [timeoutEve, setTimeoutEve] = useState(null);

    // 手动滚动歌词，2秒后歌词回到当前状态
    const scrollWords = (e) => {
      setAutoLoad(false);
      clearTimeout(timeoutEve);
      setTimeoutEve(
        setTimeout(() => {
          setAutoLoad(true);
        }, 2000)
      );
    };

    const clearAll = () => {
      dispatch(changeSongList([]));
    };

    const showLyric = () => {
      const mes =
        Object.keys(song).length !== 0
          ? lyric.length !== 0
            ? lyric.map((item, index, arr) => (
                <p
                  key={index}
                  ref={getActiveRef(item, index, arr)}
                  style={activeLyricStyle(item, index, arr)}
                >
                  {item.content}
                </p>
              ))
            : "当前歌曲没有歌词"
          : "当前没有播放音乐";

      return <div className="noLyricStyle">{mes}</div>;
    };

    useEffect(() => {
      if (autoLoad) {
        // 拿到当前播放的歌词的高度来设置歌词列表的高度
        scrollRef.current.scrollTop = pRef.current?.offsetTop - 115;
      }
    }, [currentTime]);

    // 组件销毁时清除事件
    useEffect(() => {
      return () => {
        clearTimeout(timeoutEve);
      };
    }, []);

    return (
      <SongListWrapper>
        <header>
          <div className="head-box">
            <div className="left">
              <span className="showCount">播放列表({songList.length})</span>
              <div className="mainCenter">
                <span className="leftIc">
                  <i className="sprite_songlist col"></i>
                  <span className="first">收藏全部</span>
                </span>
                <span className="line"></span>
                <span className="rightIc">
                  <i className="sprite_songlist del"></i>
                  <span className="second" onClick={(e) => clearAll()}>
                    清除
                  </span>
                </span>
              </div>
            </div>
            <div className="right">
              <span>{song.name}</span>
            </div>
            <span
              className="close sprite_songlist"
              onClick={(e) => closeSongList(false)}
            ></span>
          </div>
        </header>
        <MianWrapper>
          <img src={currentBg} alt="" className="bgImg" />
          <div className="mskLeft"></div>
          <div className="mainLeft">
            <ul>
              {songList.map((item, index) => (
                <li
                  key={item.id}
                  className="songItem"
                  onClick={(e) => playSong(item.id, e)}
                >
                  <div className="listLeft">
                    {songIndex === index && (
                      <i className="playIcon sprite_songlist"></i>
                    )}
                    <span className="songName" style={activeSong(index)}>
                      {item.name}
                    </span>
                  </div>
                  <div
                    className="fourIcon"
                    style={songIndex === index ? { display: "flex" } : {}}
                  >
                    <i className="sprite_songlist collectIcon"></i>
                    <i className="sprite_songlist shareIcon"></i>
                    <i className="sprite_songlist downloadIcon"></i>
                    <i
                      className="sprite_songlist delIcon"
                      onClick={(e) => delSong(index, e)}
                    ></i>
                  </div>
                  <div className="listRight">
                    <span className="author" style={activeSong(index)}>
                      {arName(item.ar)}
                    </span>
                    <span className="songTime" style={activeSong(index)}>
                      {songTime(item.dt)}
                    </span>
                    <a className="link sprite_songlist" title="来自歌单"></a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mskRight"></div>
          <div
            className="mainRight"
            ref={scrollRef}
            onScroll={(e) => scrollWords(e)}
          >
            {showLyric()}
          </div>
        </MianWrapper>
      </SongListWrapper>
    );
  }
);

export default SongList;
