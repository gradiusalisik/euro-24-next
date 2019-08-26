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
  Plus,
  CloseIcon,
  ButtonRemove,
  FieldFilesStyled,
  Error
} from "./FieldFiles.styled";

const FieldFiles = ({ name, error, handleParentFiles }) => {
  const [myFiles, setMyFiles] = useState([]);

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
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
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

    handleParentFiles(myFiles);
    return () => {
      // Make sure to revoke the data uris to avoid memory leaks
      myFiles.forEach(file => URL.revokeObjectURL(file.preview));
    };
  }, [handleParentFiles, myFiles]);

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

export default FieldFiles;
