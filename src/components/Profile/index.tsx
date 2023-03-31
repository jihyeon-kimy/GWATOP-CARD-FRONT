import styled from "styled-components";
import { flexBox } from "../../styles/postion";
import Card from "../Common/Card";

const Profile = () => {
  return (
    <ProfileContainer>
      <Card>
        <CardContent></CardContent>
      </Card>
    </ProfileContainer>
  );
};

export default Profile;

const ProfileContainer = styled.div`
  ${flexBox}
  height: 100%;
`;

const CardContent = styled.div`
  ${flexBox({ direction: "column" })}
  width: 816px;
  height: 640px;
`;
