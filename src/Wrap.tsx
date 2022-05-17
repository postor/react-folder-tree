import { FC, useCallback, useEffect, useState } from "react"
import { ContentType, GetContents, TemplateType } from "."

export const Wrap: FC<{
  base: string
  name: string
  isFolder: boolean
  initOpen?: boolean
  Template: TemplateType
  getContents: GetContents
}> = ({
  initOpen = false,
  base = '',
  name,
  isFolder,
  Template,
  getContents
}) => {
    let [isOpen, setOpen] = useState(false)
    let [contents, setContents] = useState<ContentType | undefined>()
    let [isLoading, setLoading] = useState(false)
    let [error, setError] = useState()
    let [reload, setReload] = useState(0)
    useEffect(() => {
      if (!contents && initOpen) setOpen(true)
    }, [initOpen, contents])

    useEffect(() => {
      getContents(base).then(x => {
        setLoading(false)
        setContents(x)
      }).catch(e => {
        setLoading(false)
        setError(e)
      })
    }, [reload, base])

    useEffect(() => {
      if (!contents && isOpen) {
        setReload(x => x + 1)
      }
    }, [isOpen, contents])

    let taggleCB = useCallback(() => setOpen(x => !x), [])
    let reloadCB = useCallback(() => setReload(x => x + 1), [])
    let { folders = [], files = [] } = contents || {}

    return <Template
      base={base}
      name={name}
      isFolder={isFolder}
      folders={folders.map(x => <Wrap
        base={base + '/' + x}
        name={x}
        isFolder={true}
        Template={Template}
        getContents={getContents}
      />)}
      files={files.map(x => <Wrap
        base={base + '/' + x}
        name={x}
        isFolder={false}
        Template={Template}
        getContents={getContents}
      />)}
      isLoading={isLoading}
      isOpen={isOpen}
      taggle={taggleCB}
      error={error}
      reload={reloadCB}
    />
  } 