import React, { Component } from 'react';
import hash from 'object-hash';
import Char from './Char';

interface Props {
  tokenKey: string;
  originalToken: string;
  typedToken: string | null;
}

class Token extends Component<Props, {}> {
  public shouldComponentUpdate(nextProps: Props): boolean {
    return this.props.typedToken !== nextProps.typedToken;
  }

  private renderCharacters = (): React.ReactElement[] => {
    const { typedToken } = this.props;

    // console.log('Token:', typedToken);

    return this.props.originalToken
      .split('')
      .map((char, ind) => (
        <Char
          key={hash(`${this.props.tokenKey}${ind}${char}`)}
          char={char}
          typedChar={
            typedToken && typedToken.length >= ind + 1 ? typedToken[ind] : null
          }
        />
      ));
  };

  public render(): React.ReactElement {
    return <div>{this.renderCharacters()}</div>;
  }
}

export default Token;
