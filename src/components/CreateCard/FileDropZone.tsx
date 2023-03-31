import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import color from "../../styles/color";

interface fileDropZoneProps {
  selectedFile: any;
  setSelectedFile: (value: any) => void;
}
const FileDropZone: React.FC<fileDropZoneProps> = ({ selectedFile, setSelectedFile }) => {
  const onDrop = useCallback((acceptedFiles: any) => {
    setSelectedFile(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <DropZoneContainer {...getRootProps()}>
      <input {...getInputProps()} />
      {selectedFile?.length === 0 && (
        <DropBox className="rejected">
          <p>올바른 형식으로 파일을 업로드해주세요.</p>
        </DropBox>
      )}
      {!selectedFile && (
        <DropBox>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/Upload.png`}
            alt="업로드 아이콘"
          />
          <p>이 곳을 클릭 또는 파일을 드래그해주세요.</p>
          <p>
            파일 크기 제한 : 최대 <span>20MB</span>
          </p>
        </DropBox>
      )}
      {selectedFile && selectedFile.length > 0 && (
        <DropBox className="selected">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedFile(null);
            }}>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/DeleteYellow.png`}
              alt="파일 삭제 아이콘"
            />
            <span>{selectedFile[0]?.path}</span>
          </button>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/Upload.png`}
            alt="업로드 아이콘"
          />
        </DropBox>
      )}
    </DropZoneContainer>
  );
};

export default FileDropZone;
const DropZoneContainer = styled.div`
  width: 300px;
  height: 120px;
  margin: 32px auto 9px;
  border-radius: 10px;
`;

const DropBox = styled.div`
  ${flexBox({ direction: "column", justify: "center" })}
  height: 100%;
  border: 1px solid ${color.yellowLight};
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  color: ${color.yellowLight};
  transition: all 300ms ease-in-out;

  span {
    font-weight: 400;
  }

  img {
    margin-bottom: 14px;
  }

  &.selected {
    background-color: #fdf7e3;

    button {
      ${flexBox};
      margin-bottom: 14px;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      color: ${color.yellowLight};
      cursor: pointer;

      img {
        margin: 0 14px 0 0;
      }
    }

    img {
      margin: 0;
    }
  }

  &.rejected {
    color: red;
    border: 1px solid red;
  }
`;
