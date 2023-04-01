import { useForm } from "react-hook-form";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useAppSelector } from "../../hooks/useRedux";
import { useRouter } from "../../hooks/useRouter";
import { selectRedirectPath } from "../../store/authSlice";
import { flexBox } from "../../styles/postion";
import text from "../../styles/text";
import Button from "../Common/Button";
import Card from "../Common/Card";

const SignUp = () => {
  const { routeTo } = useRouter();
  const { userLogIn } = useAuth();
  const redirectPath = useAppSelector(selectRedirectPath);
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid },
  } = useForm();
  const onSubmit = (data: any) => {
    userLogIn(data.name);
    routeTo(redirectPath);
  };

  return (
    <SignUpContainer>
      <Card>
        <CardContent>
          <SignUpHeader>
            <h3>JOIN</h3>
            <p>반가워요!🙌같이 공부할 준비되셨나요?</p>
          </SignUpHeader>
          <img
            src={`${process.env.PUBLIC_URL}/assets/Icons/User.png`}
            alt="기본 유저 이미지"
          />
          <SignUpInputForm onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="name">이름을 작성해주세요.</label>
            <input
              type="text"
              id="name"
              placeholder="#{소셜계정 이름}"
              {...register("name", { required: true, minLength: 1 })}
            />
            <Button type="submit" disabled={!isDirty || !isValid}>
              회원가입 완료
            </Button>
          </SignUpInputForm>
        </CardContent>
      </Card>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  ${flexBox}
  height: 100%;

  img {
    margin-top: 50px;
  }
`;

const CardContent = styled.div`
  ${flexBox({ direction: "column", justify: "flex-start" })}
  width: 816px;
  height: 640px;
`;

const SignUpHeader = styled.div`
  ${flexBox({ direction: "column", justify: "space-between" })}
  margin-top: 83px;
  height: 86px;
  h3 {
    font-size: 36px;
    font-weight: 700;
  }

  p {
    ${text.textStyle22()}
  }
`;

const SignUpInputForm = styled.form`
  ${flexBox({ direction: "column" })}
  margin-top: 24px;
  label {
    ${text.textStyle22(700)}
  }

  input {
    width: 345px;
    height: 55px;
    margin-top: 14px;
    border: 1px solid #c4c4c4;
    border-radius: 10px;
    padding-left: 22px;
    font-size: 18px;

    &::placeholder {
      font-size: 18px;
    }
  }

  button {
    margin-top: 47px;
  }
`;
