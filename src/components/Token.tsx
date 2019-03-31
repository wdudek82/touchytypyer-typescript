import React, { Component } from 'react';
import hash from 'object-hash';
import styled from 'styled-components/macro';
import Char from './Char';

const StyledToken = styled.div`
  display: flex;
`;

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

    return this.props.originalToken.split('').map((char, ind) => {
      let showCaret = false;
      if (typedToken) {
        showCaret = typedToken.length === ind;
      }

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
    return <StyledToken>{this.renderCharacters()}</StyledToken>;
  }
}

export default Token;
