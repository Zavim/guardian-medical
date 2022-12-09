import { useState } from "react";

export default function HeaderTab(props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-button-container">
      <button
        className="header-button"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1.2em"
            fill="#ffffff"
          >
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1.2em"
            fill="#ffffff"
          >
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg>
        )}
      </button>
      {open ? props.children : <></>}
    </div>
  );
}
