import React, { useRef } from "react";
import "../styles/ImageCarousel.scss";

export default function ImageCarousel() {
  const listRef = useRef<HTMLUListElement>(null);

  const scrollToIndex = function (index: number) {
    if (!listRef || !listRef.current) return;
    // const listNode = listRef.current;
    const imgNode = listRef.current.querySelectorAll("li > div> img")[index];
    imgNode.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  return (
    <>
      <nav className="btn-fixed">
        <button onClick={() => scrollToIndex(0)}>Tom</button>
        <button onClick={() => scrollToIndex(1)}>Maru</button>
        <button onClick={() => scrollToIndex(2)}>Jellylorum</button>
      </nav>
      <div>
        <ul ref={listRef} className="carousel-list">
          <li>
            <div>
              <img src="https://placekitten.com/g/200/200" alt="Tom" />
            </div>
          </li>
          <li>
            <div>
              <img src="https://placekitten.com/g/300/200" alt="Maru" />
            </div>
          </li>
          <li>
            <div>
              <img src="https://placekitten.com/g/250/200" alt="Jellylorum" />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}


// https://css-tricks.com/css-only-carousel/