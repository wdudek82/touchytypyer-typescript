import React, { Component } from "react";
import styled, { css, keyframes } from "styled-components/macro";

const fadeInError = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`;

const blink = keyframes`
  from { border-color: #5500cc }
  50% { border-color: #f7e6ff }
  to { border-color: #5500cc }
`;

interface StyledCharProps {
  typedChar: string | null;
  isCorrect: boolean;
  isMistake: boolean;
  showCaret: boolean;
}

const StyledChar = styled.span`
  --height: 3.5rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  background: none;
  color: #3c3c3c;
  width: 1.5rem;
  height: var(--height);
  line-height: var(--height);
  font-size: 3rem;
  font-family: 'Ubuntu Mono', sans-serif;
  border-radius: 2px;
  margin: 3px 1px 2px 0;

  /* Typed character correct w/o fixed mistake */
  ${(p: StyledCharProps) =>
    p.typedChar &&
    p.isCorrect &&
    css`
      background: ${p.isMistake ? "#ffffa8" : "#ceffea"};
      color: ${p.isMistake ? "#734000" : "#01401e"};
    `}

  /* Typed character was incorrect */
  ${(p: StyledCharProps) =>
    p.typedChar &&
    !p.isCorrect &&
    css`
      background: #ffc3c3;
      color: #6b000c;
      
      &::before {
        position: absolute;
        content: '${p.typedChar}';
        color: #ff0022;
        animation: ${fadeInError} 800ms ease-in-out forwards;
      }
    `}

  /* Caret */
  ${(p: StyledCharProps) =>
    p.showCaret &&
    css`
      background: #f7e6ff;
      border-bottom: 3px solid #5500cc;
      border-radius: 0;
      animation: ${blink} 1000ms ease-in-out infinite;
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
        {char === " " ? <i>&nbsp;</i> : char}
      </StyledChar>
    );
  }
}

export default Char;
