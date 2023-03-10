import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
import MyButton from "./MyButton";

const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const filterOptionList = [
  { value: "all", name: "전부 다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "안좋은 감정만" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((item, idx) => (
        <option key={idx} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  );
});

function DiaryList({ diaryList }) {
  const navigate = useNavigate();

  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3; // 문자열이 들어올 수도 있기 때문에 parseInt 사용
      } else {
        return parseInt(item.emotion) > 3;
      }
    };
    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date); // 문자열이 들어올 수도 있기 때문에 parseInt 사용
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    };

    // sort로 정렬해버리면 diaryList 자체가 변경되기 때문에 복사본을 아래와 같이 작성
    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList =
      filter === "all"
        ? copyList
        : copyList.filter((item) => filterCallBack(item));

    const sortedList = filteredList.sort(compare);

    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu
            value={sortType}
            optionList={sortOptionList}
            onChange={setSortType}
          />
          <ControlMenu
            value={filter}
            optionList={filterOptionList}
            onChange={setFilter}
          />
        </div>
        <div className="right_col">
          <MyButton
            text={"새 일기쓰기"}
            type={"positive"}
            onClick={() => navigate("/new")}
          />
        </div>
      </div>

      {getProcessedDiaryList().map((item) => (
        <DiaryItem key={item.id} {...item} />
      ))}
    </div>
  );
}

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
