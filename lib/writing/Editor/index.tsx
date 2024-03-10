import "../../component-styles.css";
import { Toolbar } from "../Toolbar";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { useRef, useState } from "react";

export const Editor = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [cursorStart, setCursorStart] = useState(0);
  const [cursorEnd, setCursorEnd] = useState(0);

  const handleCursorPosition = function () {
    if (textAreaRef.current) {
      setCursorStart(textAreaRef.current?.selectionStart);
      setCursorEnd(textAreaRef.current?.selectionEnd);
    }
  };

  return (
    <div className="flex flex-grow flex-col h-[90vh] w-full">
      <Toolbar
        textAreaRef={textAreaRef}
        lastStartPos={cursorStart}
        lastEndPos={cursorEnd}
      />
      <div className="flex h-full flex-col md:flex-row lg:space-x-4 ">
        <textarea
          ref={textAreaRef}
          onKeyUp={handleCursorPosition}
          className="w-full basis-1/2 border-none resize-none outline-none p-4 rounded-lg mt-4 bg-base-200 md:w-1/2  grow md:grow-0"
        />
        <div className="w-full basis-1/2 border-none p-4 rounded-lg md:w-1/2 h-1/2 md:h-full mt-4 bg-base-200">
          <MarkdownRenderer content={textAreaRef.current?.value || ""} />
        </div>
      </div>
    </div>
  );
};
