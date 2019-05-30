import React, { Component } from "react";
import hash from "object-hash";
import styled, { css } from "styled-components/macro";
import Char from "./Char";

interface StyledTokenProps {
  isCurrent: boolean;
}

const StyledToken = styled.div`
  display: flex;
  border-top: 2px solid transparent;
  border-radius: 5px;

  ${(p: StyledTokenProps) =>
  p.isCurrent &&
  css`
      border-top: 2px solid #444;
    `};
`;

interface Props {
  tokenKey: string;
  originalToken: string;
  typedToken: string | null;
  isCurrentToken: boolean;
}

class Token extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props): boolean {
    return (
      this.props.typedToken !== nextProps.typedToken ||
      this.props.isCurrentToken !== nextProps.isCurrentToken
    );
  }

  private renderCharacters = (): React.ReactElement[] => {
    const { typedToken, isCurrentToken } = this.props;

    return this.props.originalToken.split("").map((char, ind) => {
      const showCaret =
        isCurrentToken && (typedToken === null || typedToken.length === ind);

      return (
        <Char
          key={hash(`${this.props.tokenKey}${ind}${char}`)}
          char={char}
          typedChar={
            typedToken && typedToken.length >= ind + 1 ? typedToken[ind] : null
          }
          showCaret={showCaret}
        />
      );
    });
  };

  public render(): React.ReactElement {
    return (
      <StyledToken isCurrent={this.props.isCurrentToken}>
        {this.renderCharacters()}
      </StyledToken>
    );
  }
}

export default Token;
