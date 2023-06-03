import React from 'react';
import './Options.css';
import OptionsComponent from '../Components/OptionsComponent';
interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return <OptionsComponent />;
};

export default Options;
