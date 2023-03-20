import styled from "@emotion/styled";
import { SocialsIconsType, ToolsType } from "./consts";

const ContentBox = styled.div`
  gap: 1.5rem;
  padding: 1em;
  border: 1px solid #028591;
  border-radius: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const useCustomIcons = () => {
  return {
    IconBlock: ({ icon, title, score }: ToolsType) => {
      const IconStyled = styled(icon)`
        height: 3em;
        width: 3em;
      `;
      return (
        <ContentBox>
          <a>
            <IconStyled />
          </a>
          <div>{title}</div>
          <div>{score}</div>
        </ContentBox>
      );
    },
    IconSimple: ({ Icon, url }: SocialsIconsType) => {
      return (
        <a href={url}>
          <Icon />
        </a>
      );
    },
  };
};
