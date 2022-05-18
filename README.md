# react-folder-tree

yet another folder tree component for react | 又一个文件夹结构组件

- 0 dependency | 无依赖
- lazy loaded | 懒加载
- simple api | 接口简单
- fully customizable UI | 可定制 UI

![screenshot](./screenshot.gif)

https://codesandbox.io/s/postor-react-folder-tree-by5stv?file=/src/App.tsx

## useage

```
import {FolderTree,DefaultTemplate} from "@postor/react-folder-tree"

<FolderTree
  Template={DefaultTemplate}
  getContents={async (base)=> await fetch(base) /* your function to fetch */}
  rootName="root"
/>
```
