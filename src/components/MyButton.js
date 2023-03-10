import React from "react";

function MyButton({ text, type, onClick }) {
  // 이상한 타입이 들어왔을 경우를 대비하여 작성
  const btnType = ["positive", "negative"].includes(type) ? type : "default";

  return (
    <button
      className={["MyButton", `MyButton_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
