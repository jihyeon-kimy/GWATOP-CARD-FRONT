import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import color from "../../styles/color";

interface fileDropZoneProps {
  selectedFile: any;
  setSelectedFile: (value: any) => void;
}
const FileDropZone: React.FC<fileDropZoneProps> = ({ selectedFile, setSelectedFile }) => {
  const [rejectedFile, setRejectedFile] = useState<any>(null);
  const onDrop = useCallback((acceptedFiles: any, rejectedFiles: any) => {
    setSelectedFile(acceptedFiles);
    setRejectedFile(rejectedFiles);
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
        <>
          <DropBox className="selected rejected">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setRejectedFile(null);
                setSelectedFile(null);
              }}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/Icons/DeleteRed.png`}
                alt="파일 삭제 아이콘"
              />
              <span>{rejectedFile?.[0]?.file?.path}</span>
            </button>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/UploadRed.png`}
              alt="업로드 아이콘"
            />
          </DropBox>
          <RejectText>*올바른 형식의 파일을 업로드해주세요</RejectText>
        </>
      )}
      {!selectedFile && (
        <DropBox>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/UploadYellow.png`}
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
            src={`${process.env.PUBLIC_URL}/assets/Icons/UploadYellow.png`}
            alt="업로드 아이콘"
          />
        </DropBox>
      )}
    </DropZoneContainer>
  );
};

export default FileDropZone;
const DropZoneContainer = styled.div`
  height: 143px;
  margin-top: 20px;
`;

const DropBox = styled.div`
  ${flexBox({ direction: "column", justify: "center" })}
  width: 300px;
  height: 120px;
  margin: 0 auto;
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
    border: 1px solid ${color.red};
    background-color: ${color.redLight};
    button {
      color: ${color.red};
    }
  }
`;

const RejectText = styled.p`
  margin-top: 7px;
  font-size: 18px;
  font-weight: 700;
  line-height: 21px;
  text-align: center;
  color: ${color.red};
`;
