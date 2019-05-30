import React, { Component } from "react";
import hash from "object-hash";
import styled from "styled-components/macro";
import Token from "./Token";

const StyledLine = styled.div`
  display: flex;
  border-bottom: 1px solid #fff;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

interface Props {
  lineKey: string;
  lineText: string;
  typedLineText: string;
  isCurrentLine: boolean;
}

class Line extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props): boolean {
    return (
      this.props.typedLineText !== nextProps.typedLineText ||
      this.props.isCurrentLine !== nextProps.isCurrentLine
    );
  }

  private renderTokens = (): React.ReactElement[] => {
    const re = /\S+[\s\S]?/g;
    const originalTokens = this.props.lineText.match(re);
    const { typedLineText, isCurrentLine } = this.props;
    let totalLength = 0;

    if (originalTokens) {
      return originalTokens.map((originalToken: string, ind) => {
        const key = hash(`${this.props.lineKey}${ind}${originalToken}`);

        const typedToken = typedLineText.slice(
          totalLength,
          totalLength + originalToken.length,
        );

        const isCurrent =
          typedLineText.length >= totalLength &&
          typedLineText.length <= totalLength + originalToken.length - 1 &&
          isCurrentLine;

        totalLength += originalToken.length;

        return (
          <Token
            key={key}
            tokenKey={key}
            originalToken={originalToken}
            typedToken={typedToken}
            isCurrentToken={isCurrent}
          />
        );
      });
    }

    return [];
  };

  public render(): React.ReactElement {
    return <StyledLine>{this.renderTokens()}</StyledLine>;
  }
}

export default Line;
