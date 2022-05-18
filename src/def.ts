import { ComponentType, FC, ReactElement } from "react"

export type TemplateProps = {
  base: string
  name: string
  isFolder: boolean
  folders: ReactElement[]
  files: ReactElement[]
  isLoading: boolean
  isOpen: boolean
  taggle: () => void
  error?: any
  reload: () => void
  level: number
}

export type TemplateType = ComponentType<TemplateProps> | FC<TemplateProps>

export type ContentType = {
  folders: string[],
  files: string[],
}

export type GetContents = (base: string) => Promise<ContentType>
