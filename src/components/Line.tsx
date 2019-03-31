import React, { Component } from 'react';
import hash from 'object-hash';
import styled from 'styled-components/macro';
import Token from './Token';

const StyledLine = styled.div`
  display: flex;
`;

interface Props {
  lineKey: string;
  lineText: string;
  typedLineText: string;
}

class Line extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props): boolean {
    return this.props.typedLineText !== nextProps.typedLineText;
  }

  private renderTokens = (): React.ReactElement[] => {
    const re = /\S+[\s\S]?/g;
    const originalTokens = this.props.lineText.match(re);
    let totalLength = 0;

    console.log('Typed line length:', this.props.typedLineText.length);
    console.log('typedLineText: ', this.props.typedLineText);

    if (originalTokens) {
      return originalTokens.map((originalToken: string, ind) => {
        const key = hash(`${this.props.lineKey}${ind}${originalToken}`);

        const typedToken = this.props.typedLineText.slice(
          totalLength,
          totalLength + originalToken.length,
        );

        totalLength += originalToken.length;

        return (
          <Token
            key={key}
            tokenKey={key}
            originalToken={originalToken}
            typedToken={typedToken}
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
