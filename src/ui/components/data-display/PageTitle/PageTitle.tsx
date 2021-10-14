import React, { FC } from "react";
import {
  PageSubTitleStyled,
  PageTitleContainer,
  PageTitleStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string | JSX.Element;
}

const PageTitle: FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{title}</PageTitleStyled>
      <PageSubTitleStyled>{subtitle}</PageSubTitleStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
