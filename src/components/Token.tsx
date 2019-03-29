import React, { Component } from 'react';
import hash from 'object-hash';
import Char from './Char';

interface Props {
  tokenKey: string;
  originalToken: string;
  typedToken: string;
}

class Token extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props) {
    return this.props.typedToken === nextProps.typedToken;
  }

  private renderCharacters = (): React.ReactElement[] => {
    return this.props.originalToken.split('').map((char, ind) => {
      const key = hash(`${this.props.tokenKey}${ind}${char}`);
      return <Char key={key} char={char} />;
    });
  };

  public render(): React.ReactElement {
    return <div>{this.renderCharacters()}</div>;
  }
}

export default Token;
