import React, { Component } from 'react';
import styled, { css } from 'styled-components/macro';

interface StyledCharProps {
  typedChar: string | null;
  isCorrect: boolean;
  isMistake: boolean;
  showCaret: boolean;
}

const StyledChar = styled.span`
  --height: 3rem;

  display: flex;
  justify-content: center;
  align-content: center;
  background: #eee;
  color: #333;
  width: 1.8rem;
  height: var(--height);
  line-height: var(--height);
  font-size: 2rem;
  border-radius: 3px;
  margin: 1px;

  /* Typed character correct w/o fixed mistake */
  ${(p: StyledCharProps) =>
  p.typedChar &&
  p.isCorrect &&
  css`
      background: ${p.isMistake ? '#feffac' : '#d4ffc3'};
      color: ${p.isMistake ? '#db6b12' : '#006500'};
    `}

  /* Typed character was incorrect */
  ${(p: StyledCharProps) =>
  p.typedChar &&
  !p.isCorrect &&
  css`
      background: #ffd0d0;
      color: #f00;
    `}
  
    /* Caret */
  ${(p: StyledCharProps) =>
  p.showCaret &&
  css`
      background: #b8d8ff;
      color: initial;
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
    console.log(this.props, nextProps);
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
