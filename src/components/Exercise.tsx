import React, { BaseSyntheticEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import hash from 'object-hash';
import Line from './Line';

interface Props {
  exercise: { id: number; title: string; text: string };
}

interface State {
  typedText: string;
}

class Exercise extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      typedText: '',
    };

    this.inputRef = React.createRef();
  }

  public componentDidMount(): void {
    this.refocusMainInput();
  }

  private refocusMainInput = (): void => {
    const refInput = this.inputRef.current;

    if (refInput) {
      refInput.focus();
    }
  };

  private splitTextToLines = (): string[] => {
    const re = /[\w\W]{1,55}[.!?\s]/g;
    return this.props.exercise.text.match(re) || [];
  };

  private renderLines = (): React.ReactElement[] => {
    const { exercise } = this.props;
    let totalLength = 0;

    return this.splitTextToLines().map((line, ind) => {
      const key = hash(`${exercise.id}${ind}${line}`);
      const typedLine = this.state.typedText.slice(
        totalLength,
        totalLength + line.length,
      );
      totalLength += line.length;

      return (
        <Line
          key={key}
          lineKey={key}
          lineText={line}
          typedLineText={typedLine}
          exerciseTextLength={this.props.exercise.text.length}
          typedTextLength={this.state.typedText.length}
        />
      );
    });
  };

  private handleOnChange = (e: BaseSyntheticEvent): void => {
    const typedText = e.currentTarget.value;

    this.setState(() => ({ typedText }));
  };

  private readonly inputRef: React.RefObject<HTMLInputElement>;

  public render(): React.ReactElement {
    const { title } = this.props.exercise;
    const { typedText } = this.state;

    return (
      <section>
        <h2>{title}</h2>
        <input
          ref={this.inputRef}
          type="text"
          value={typedText}
          onChange={this.handleOnChange}
          onBlur={this.refocusMainInput}
        />

        <p>{typedText || '-'}</p>
        <hr />
        <article>{this.renderLines()}</article>

        <section />

        <Link to="/">Go Back</Link>
      </section>
    );
  }
}

export default Exercise;
