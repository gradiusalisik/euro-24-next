import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

import {
  Container,
  Dropzone,
  Input,
  Files,
  File,
  ImageWrap,
  Image,
  Plus
} from "./FieldFiles.styled";

const FieldFiles = () => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: acceptedFiles => {
      const newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      );
      const resultFiles = [...files, ...newFiles];

      setFiles(resultFiles);
    }
  });

  const renderImage = file => (
    <File key={file.name}>
      <ImageWrap>
        <Image src={file.preview} alt={file.name} />
      </ImageWrap>
    </File>
  );

  const renderShadowImage = () => {
    const filesShadow = [...Array(5)];
    return filesShadow.map((item, key) => (
      <File key={key}>
        <Plus />
      </File>
    ));
  };

  useEffect(() => {
    if (files.length > 5) {
      const resultFiles = files.slice(0, 5);
      setFiles(resultFiles);
    }
    return () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [files]);

  return (
    <Container className="container">
      <Dropzone {...getRootProps()}>
        <Input {...getInputProps()} />
        <Files>{renderShadowImage()}</Files>
      </Dropzone>
      {files.length > 0 && <Files file={true}>{files.map(renderImage)}</Files>}
    </Container>
  );
};

export default FieldFiles;
