import React, { Component } from 'react';
import hash from 'object-hash';
import Token from './Token';

interface Props {
  lineKey: string;
  lineText: string;
  typedLineText: string;
  exerciseTextLength: number;
  typedTextLength: number;
}

class Line extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props): boolean {
    return this.props.typedLineText !== nextProps.typedLineText;
  }

  private renderTokens = (): React.ReactElement[] => {
    const re = /\S+[\s\S]?/g;
    const originalTokens = this.props.lineText.match(re);
    let totalLength = 0;

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
    return <div>{this.renderTokens()}</div>;
  }
}

export default Line;
