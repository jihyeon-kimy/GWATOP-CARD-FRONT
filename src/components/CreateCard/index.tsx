import { useState } from "react";
import styled from "styled-components";
import { flexBox, posCenterX } from "../../styles/postion";
import Card from "../Common/Card";
import text from "../../styles/text";
import color from "../../styles/color";
import { useForm } from "react-hook-form";
import Button from "../Common/Button";
import FileDropZone from "./FileDropZone";
import PrecautionsModal from "./PrecautionsModal";
import useOverlay from "../../hooks/useOverlay";
import { uploadPDF } from "../../api/cardDeck";
import { useRouter } from "../../hooks/useRouter";
import Loading from "./Loading";

const CreateCard = () => {
  const { overlayVisible, openOverlay, closeOverlay } = useOverlay();
  const { routeTo } = useRouter();
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const [submitedName, setSubmitedNam] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm();

  const onSubmit = (data: any) => {
    openOverlay();
    setSubmitedNam(data.name);
  };

  const onCreateCard = async () => {
    let formData = new FormData();
    formData.append("myfile", selectedFile[0]);
    formData.append("deck_name", submitedName);
    formData.append("enctype", "multipart/form-data");
    setLoading(true);
    try {
      await uploadPDF(formData);
      routeTo("/cardDeckList");
    } catch (e) {
      console.log("PDF업로드 에러", e);
    }
    setLoading(false);
  };

  return (
    <>
      <PrecautionsModal
        visible={overlayVisible}
        onClose={closeOverlay}
        onCreate={onCreateCard}
      />
      {loading && <Loading />}
      <CreateCardContainer>
        <Card className="card-class">
          <Header>
            <img
              src={`${process.env.PUBLIC_URL}/assets/Icons/Create.png`}
              alt="카드생성 아이콘"
            />
            <h3>카드 생성</h3>
            <p>공부하고자 하는 학습자료를 업로드하고, 기출문제를 생성해보세요!</p>
          </Header>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputFile>
              <SubTitle>파일업로드</SubTitle>
              <ul>
                <li>PDF 형식의 파일을 업로드해주세요. (파일 크기 제한 : 최대 20MB)</li>
                <li>서술형 줄글 형태의 문서에 최적화되어 있어요.</li>
              </ul>
              <FileDropZone
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </InputFile>
            <InputText>
              <SubTitle> 카드덱 제목</SubTitle>
              <p>해당 기출문제 모음집의 제목을 입력해주세요</p>
              <input
                type="text"
                {...register("name", { required: true, maxLength: 5 })}
                placeholder="6자 이내 입력"
              />
            </InputText>
            <Button
              className="button-class"
              type="submit"
              disabled={
                !isDirty || !isValid || !selectedFile || selectedFile?.length === 0
              }>
              카드덱 생성하기
            </Button>
          </form>
        </Card>
      </CreateCardContainer>
    </>
  );
};

export default CreateCard;

const CreateCardContainer = styled.div`
  ${flexBox}
  height: 100%;

  .card-class {
    width: 984px;
    height: 758px;
    padding: 66px 133px;
  }

  .button-class {
    ${posCenterX()}
    margin-top:39px;
  }
`;

const Header = styled.div`
  position: relative;
  left: 29px;
  img {
    position: absolute;
    left: -40px;
  }

  h3 {
    ${text.textStyle28(700)};
    display: inline-block;
    position: relative;
    top: -3px;
  }

  p {
    ${text.textStyle20(500)};
    margin-top: 14px;
    color: ${color.primary};
  }
`;

const SubTitle = styled.h5`
  ${text.textStyle24(700)}
  margin-top: 50px;
  &::before {
    content: "• ";
    padding-right: 10px;
  }
`;

const InputFile = styled.div`
  li::before {
    content: "•";
    padding-right: 10px;
  }
  ul {
    margin-top: 14px;
    margin-left: 27px;
  }
  li {
    ${text.textStyle20(400)}
    line-height: 27px;
    color: ${color.primary};
  }
`;

const InputText = styled.div`
  p {
    ${text.textStyle20(400)}
    margin-top: 8px 0 0 27px;
    line-height: 27px;
    color: ${color.primary};
  }

  input {
    display: block;
    width: 280px;
    height: 50px;
    margin: 20px 0 0 27px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 22px;
    font-size: 18px;
    font-weight: 500;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
    }
  }
`;
