import React from "react";
import "./Filler.scss";

type FillerProps = {
  percentage: number;
};

export class Filler extends React.Component<FillerProps> {
  public render() {
    return <div className="filler" style={{ width: `${this.props.percentage}%` }}></div>;
  }
}

export default Filler;
