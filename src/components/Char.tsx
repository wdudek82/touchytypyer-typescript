import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';

interface StyledCharProps {
  typedChar: string | null;
  isCorrect: boolean;
  isMistake: boolean;
  showCaret: boolean;
}

const StyledChar = styled.span`
  --height: 3.5rem;

  display: flex;
  justify-content: center;
  align-content: center;
  background: none;
  color: #444;
  width: 1.6rem;
  height: var(--height);
  line-height: var(--height);
  font-size: 2.5rem;
  font-family: 'Ubuntu Condensed', sans-serif;
  border-radius: 2px;
  margin: 3px 1px 0 0;

  /* Typed character correct w/o fixed mistake */
  ${(p: StyledCharProps) =>
  p.typedChar &&
  p.isCorrect &&
  css`
      background: ${p.isMistake ? '#ffffd4' : '#ceffea'};
      color: ${p.isMistake ? '#794300' : '#014b25'};
    `}

  /* Typed character was incorrect */
  ${(p: StyledCharProps) =>
  p.typedChar &&
  !p.isCorrect &&
  css`
      background: #ffd4d4;
      color: #87000e;
    `}
  
  /* Caret */
  ${(p: StyledCharProps) =>
  p.showCaret &&
  css`
      background: #a8d5ff;
      color: initial;
      border-bottom: 3px solid #0077ff;
      border-radius: 0;
    `}
`;

interface Props {
  char: string;
  typedChar: string | null;
  showCaret: boolean;
}

interface State {
  isMistake: boolean;
}

class Char extends Component<Props, State> {
  public readonly state = {
    isMistake: false,
  };

  public shouldComponentUpdate(nextProps: Props): boolean {
    return (
      this.props.typedChar !== nextProps.typedChar ||
      this.props.showCaret !== nextProps.showCaret
    );
  }

  public componentDidUpdate(prevProps: Props): void {
    if (this.props.typedChar) {
      const isCorrect: boolean = this.props.char === this.props.typedChar;

      if (!isCorrect && !this.state.isMistake) {
        this.setState(() => ({
          isMistake: true,
        }));
      }
    }
  }

  public render(): React.ReactElement {
    const { char, typedChar, showCaret } = this.props;

    return (
      <StyledChar
        typedChar={typedChar}
        showCaret={showCaret}
        isCorrect={char === typedChar}
        isMistake={this.state.isMistake}
      >
        {char === ' ' ? <i>&nbsp;</i> : char}
      </StyledChar>
    );
  }
}

export default Char;
