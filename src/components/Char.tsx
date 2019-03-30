import React, { Component } from 'react';

interface Props {
  char: string;
  typedChar: string | null;
}

class Char extends Component<Props> {
  public readonly state = {
    correct: 0,
    fixed: 0,
  };

  public shouldComponentUpdate(nextProps: Props): boolean {
    return nextProps.typedChar !== this.props.typedChar;
  }

  private getCharStyles = (): object => {
    const { char, typedChar } = this.props;
    let color = '#333';
    let background = '#fff';

    if (typedChar) {
      color = typedChar === char ? 'green' : 'red';
      background = typedChar === char ? '#d4ffc3' : '#ffd0d0';
    }

    return { color, background };
  };

  public render(): React.ReactElement {
    const { char } = this.props;
    return (
      <span style={this.getCharStyles()}>
        {char === ' ' ? <i>&nbsp;</i> : char}
      </span>
    );
  }
}

export default Char;
