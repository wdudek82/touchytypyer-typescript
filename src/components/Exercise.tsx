import React, { BaseSyntheticEvent, Component } from 'react';
import { Link } from 'react-router-dom';
import hash from 'object-hash';

interface Props {
  exercise: { id: number; title: string; text: string };
}

interface State {
  typedText: string;
  textLines: React.ReactElement[];
}

class Exercise extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      typedText: '',
      textLines: [],
    };

    this.inputRef = React.createRef();
  }

  public componentDidMount(): void {
    const textLines = this.renderLines();
    this.setState(() => ({ textLines }));

    this.refocusMainInput();
  }

  private refocusMainInput = (): void => {
    const refInput = this.inputRef.current;

    if (refInput) {
      refInput.focus();
    }
  };

  private splitTextToLines = (): string[] => {
    const re = /[\w\W]{1,55}[.!?\s]/gm;
    return this.props.exercise.text.match(re) || [];
  };

  private renderLines = (): React.ReactElement[] => {
    const { exercise } = this.props;

    return this.splitTextToLines().map((line, ind) => {
      const key = hash(`${exercise.id}${ind}${line}`);
      return <p key={key}>{line}</p>;
    });
  };

  private handleOnChange = (e: BaseSyntheticEvent): void => {
    const typedText = e.currentTarget.value;

    this.setState(() => ({ typedText }));
  };

  private readonly inputRef: React.RefObject<HTMLInputElement>;

  public render(): React.ReactElement {
    const { title } = this.props.exercise;
    const { typedText, textLines } = this.state;

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

        <p>{typedText}</p>
        <article>{textLines}</article>

        <section />

        <Link to="/">Go Back</Link>
      </section>
    );
  }
}

export default Exercise;
