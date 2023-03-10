import React, { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

function New() {
  useEffect(() => {
    // title태그 바꾸기
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `일기장 - 새 일기`;
  }, []);

  return <DiaryEditor />;
}

export default New;
