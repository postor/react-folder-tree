import { FC,  ComponentType, ReactElement } from "react"
import { Wrap } from "./Wrap"

export type TemplateProps = {
  base: string,
  name: string,
  isFolder: boolean,
  folders: ReactElement[],
  files: ReactElement[],
  isLoading: boolean,
  isOpen: boolean,
  taggle: () => void
  error?:any
  reload:()=>void
}

export type TemplateType = ComponentType<TemplateProps> | FC<TemplateProps>

export type ContentType = {
  folders: string[],
  files: string[],
}

export type GetContents = (base: string) => Promise<ContentType>

export const FolderTree: FC<{
  Template: TemplateType,
  getContents: GetContents,
  base?: string
  rootName?: string
}> = ({
  rootName,Template,getContents,base=''
}) => {
  if(rootName) return  <Wrap base={base} name={rootName} getContents={getContents} isFolder={true} Template={Template} />
  return 
}

export default FolderTree


