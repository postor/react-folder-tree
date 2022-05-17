import { TemplateType } from "."

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
  reload
}) => {
  if (!isFolder) return <a onClick={() => alert(base)}>🗎${name}</a>
  return <div>
    <div onDoubleClick={taggle}>📁{name} <a onClick={taggle}>{isOpen ? '⏷' : '⏴'}</a></div>
    {error
      ? <div>error happen! <button onClick={reload}>reload</button></div>
      : isLoading
        ? <div>loading...</div>
        : <ul>
          {folders.map((x, i) => <li key={i}>
            {x}
          </li>)}
          {files.map((x, i) => <li key={i}>
            {x}
          </li>)}
        </ul>
    }
  </div>
}

export default DefaultTemplate