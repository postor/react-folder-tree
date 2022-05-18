import { FC, useCallback, useEffect, useState } from "react";
import { ContentType, GetContents, TemplateType } from "./def";

export const Wrap: FC<{
  base: string;
  name: string;
  isFolder: boolean;
  rootName?: string;
  Template: TemplateType;
  getContents: GetContents;
  level?: number;
}> = ({ base = "", name, isFolder, Template, getContents, level = 0 }) => {
  let [isOpen, setOpen] = useState(false);
  let [contents, setContents] = useState<ContentType | undefined>();
  let [isLoading, setLoading] = useState(0);
  let [error, setError] = useState();
  useEffect(() => {
    if (!contents && !name) setOpen(true);
  }, [name, contents]);

  let reloadCB = useCallback(() => {
    setLoading((x) => x + 1);
    getContents(base)
      .then((x) => {
        setLoading((x) => x - 1);
        setContents(x);
      })
      .catch((e) => {
        setLoading((x) => x - 1);
        setError(e);
      });
  }, [base, getContents]);

  let taggleCB = useCallback(() => {
    if (!contents && !isOpen) {
      reloadCB();
    }
    setOpen((x) => !x);
  }, [isOpen, contents, reloadCB]);

  let { folders = [], files = [] } = contents || {};

  return (
    <Template
      base={base}
      name={name}
      isFolder={isFolder}
      folders={folders.map((x) => (
        <Wrap
          base={base + "/" + x}
          name={x}
          isFolder={true}
          Template={Template}
          getContents={getContents}
          level={level + 1}
        />
      ))}
      files={files.map((x) => (
        <Wrap
          base={base + "/" + x}
          name={x}
          isFolder={false}
          Template={Template}
          getContents={getContents}
          level={level + 1}
        />
      ))}
      isLoading={!!isLoading}
      isOpen={isOpen}
      taggle={taggleCB}
      error={error}
      reload={reloadCB}
      level={level}
    />
  );
};
