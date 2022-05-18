import { useEffect } from "react";
import { TemplateType } from "./def";

export const DefaultTemplate: TemplateType = ({
  base,
  name,
  folders,
  files,
  isLoading,
  isFolder,
  isOpen,
  taggle,
  error,
  reload,
  level
}) => {
  useEffect(() => {
    if (!name) reload();
  }, [name, reload]);

  if (!isFolder) return <a onClick={() => alert(base)}>🗎{name}</a>;

  return (
    <div>
      {level === 0 && !name ? null : (
        <div onDoubleClick={taggle}>
          📁{name}
          <a onClick={reload}>⟳</a>
          <a onClick={taggle}>{isOpen ? "⏷" : "⏴"}</a>
        </div>
      )}
      {!isOpen ? null : error ? (
        <div>
          error happen! <button onClick={reload}>reload</button>
        </div>
      ) : isLoading ? (
        <div>loading...</div>
      ) : folders.length === 0 && files.length == 0 ? (
        <div>empty folder</div>
      ) : (
        <ul>
          {folders.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
          {files.map((x, i) => (
            <li key={i}>{x}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DefaultTemplate;
