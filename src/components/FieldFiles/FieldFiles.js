import React, { useEffect } from "react";
import { inject } from "mobx-react";
import { useDropzone } from "react-dropzone";

import {
  Container,
  Dropzone,
  Input,
  Files,
  File,
  ImageWrap,
  Image,
  Plus,
  CloseIcon,
  ButtonRemove,
  FieldFilesStyled,
  Error
} from "./FieldFiles.styled";

const FieldFiles = ({
  name,
  error,
  handleParentFiles,
  myFiles,
  setMyFiles,
  removeFile
}) => {
  const onDrop = acceptedFiles => {
    const newFiles = acceptedFiles.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file)
      })
    );
    const resultFiles = [...myFiles, ...newFiles];

    setMyFiles(resultFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop
  });

  const handleRemoveFile = file => () => {
    removeFile(file);
  };

  const renderImage = file => (
    <File key={file.name}>
      <ImageWrap>
        <Image src={file.preview} alt={file.name} />
      </ImageWrap>
      <ButtonRemove onClick={handleRemoveFile(file)}>
        <CloseIcon />
      </ButtonRemove>
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
    if (myFiles.length > 5) {
      const resultFiles = myFiles.slice(0, 5);
      setMyFiles(resultFiles);
    }

    return () => {
      // Make sure to revoke the data uris to avoid memory leaks
      myFiles.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [handleParentFiles, myFiles, setMyFiles]);

  return (
    <FieldFilesStyled error={error}>
      <Container className="container">
        <Dropzone {...getRootProps()}>
          <Input {...getInputProps()} name={name} />
          <Files>{renderShadowImage()}</Files>
        </Dropzone>
        {myFiles.length > 0 && (
          <Files file={true}>{myFiles.map(renderImage)}</Files>
        )}
      </Container>
      {error && <Error>Загрузите один файл</Error>}
    </FieldFilesStyled>
  );
};

export default inject(({ formStore }) => ({
  myFiles: formStore.myFiles,
  setMyFiles: formStore.setMyFiles,
  removieFile: formStore.removieFile
}))(FieldFiles);
