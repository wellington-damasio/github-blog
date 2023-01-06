import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import css from "react-syntax-highlighter/dist/esm/languages/hljs/css";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import remarkGfm from "remark-gfm";
import styles from "./MarkdownRender.module.css";

interface MarkdownRenderProps {
  markdown: string;
}

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("css", css);

export const MarkdownRender = ({ markdown }: MarkdownRenderProps) => {
  return (
    <ReactMarkdown
      children={markdown}
      className={styles.markdownRender}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return match && !inline ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, "")}
              style={atomOneDark}
              language={match[1]}
              PreTag="div"
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      }}
    />
  );
};
