import { FC } from "react"
import { GetContents, TemplateType } from "./def"
import { Wrap } from "./Wrap"

export { DefaultTemplate } from './DefaultTemplate'

export const FolderTree: FC<{
  Template: TemplateType,
  getContents: GetContents,
  base?: string
  rootName?: string
}> = ({
  rootName, Template, getContents, base = ''
}) => {
    if (rootName) return <Wrap base={base} name={rootName} getContents={getContents} isFolder={true} Template={Template} />
    return <Wrap base={base} name="" getContents={getContents} isFolder={true} Template={Template} />
  }

export default FolderTree


