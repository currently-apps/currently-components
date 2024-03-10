import "../../tailwind.css";
import { createRef, RefObject } from "react";

interface IToolbarAction {
  name: string;
  icon: JSX.Element;
  title: string;
  action: () => void;
}

export interface IToolbarActions {
  left: IToolbarAction[];
  right: IToolbarAction[];
}

export interface IToolbarProps {
  textAreaRef: RefObject<HTMLTextAreaElement>;
  lastStartPos: number;
  lastEndPos: number;
}

const toolbarActions = {
  textAreaRef: createRef<HTMLTextAreaElement>(),
  left: [
    {
      name: "bold",
      icon: <strong>Bold</strong>,
      title: "Bold",
      action: (
        textAreaRef: RefObject<HTMLTextAreaElement>,
        lastStartPos: number,
        lastEndPos: number
      ) => {
        if (!textAreaRef.current) return;
        const value = textAreaRef.current.value;
        textAreaRef.current.value =
          value.substring(0, lastStartPos) +
          "**" +
          value.substring(lastStartPos, lastEndPos) +
          "**" +
          value.substring(lastEndPos, value.length);
        // focus the textarea
        textAreaRef.current.focus();
        textAreaRef.current.selectionStart = lastStartPos + 2;
        textAreaRef.current.selectionEnd = lastEndPos + 2;
      },
    },
    {
      name: "italic",
      icon: <em>Italic</em>,
      title: "Italic",
      action: () => {},
    },
  ],
  right: [
    {
      name: "save",
      icon: <span>💾</span>,
      title: "Save",
      action: () => {},
    },
  ],
};

export const Toolbar = ({
  textAreaRef,
  lastStartPos,
  lastEndPos,
}: IToolbarProps) => {
  return (
    <div className="navbar bg-base-200 rounded-2xl shadow">
      <div className="flex flex-1 space-x-2">
        {toolbarActions.left.map((action) => (
          <button
            key={action.name}
            onClick={() => action.action(textAreaRef, lastStartPos, lastEndPos)}
            className="btn"
            title={action.title}
          >
            {action.icon}
          </button>
        ))}
      </div>
      <div>
        {toolbarActions.right.map((action) => (
          <button
            key={action.name}
            onClick={action.action}
            className="btn"
            title={action.title}
          >
            {action.icon}
          </button>
        ))}
      </div>
    </div>
  );
};
