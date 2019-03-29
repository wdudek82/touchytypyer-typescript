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
    return !(
      nextProps.typedLineText === this.props.typedLineText ||
      !nextProps.typedLineText
    );
  }

  private renderTokens = (): React.ReactElement[] => {
    const re = /\S+[\s\S]?/g;
    const originalTokens = this.props.lineText.match(re);
    const typedTokens = this.props.typedLineText.match(re);

    console.log(originalTokens, typedTokens);

    if (originalTokens) {
      return originalTokens.map((originalToken: string, ind) => {
        const key = hash(`${this.props.lineKey}${ind}${originalToken}`);

        return (
          <Token
            key={key}
            tokenKey={key}
            originalToken={originalToken}
            typedToken={typedTokens ? typedTokens[ind] : ''}
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
