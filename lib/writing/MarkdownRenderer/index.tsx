import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import "../../component-styles.css";

interface IMarkdownRendererProps {
  content: string;
}
export const MarkdownRenderer = ({ content }: IMarkdownRendererProps) => {
  return (
    <div>
      <Markdown
        className="prose "
        children={content}
        remarkPlugins={[remarkGfm]}
        components={{
          code(props) {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { children, className, node, ...rest } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              // @ts-expect-error - SyntaxHighlighter is not typed correctly
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                className="prose neutral"
                children={String(children).replace(/\n$/, "")}
                language={match[1]}
                style={vscDarkPlus}
                customStyle={{ backgroundColor: "transparent" }}
              />
            ) : (
              <code {...rest} className={className}>
                {children}
              </code>
            );
          },
        }}
      />
    </div>
  );
};
