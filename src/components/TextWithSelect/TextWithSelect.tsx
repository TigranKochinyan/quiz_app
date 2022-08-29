interface Option {
  key: string;
  value: string;
}

interface TextWithSelectProps {
  text: string;    
  options: Option[];
}

const TextWithSelect:React.FC<TextWithSelectProps> = ({ text, options }) => {
  return (
    <div className="textWithSelect" title="asdasddaaddas">
      <p>{text}</p>
    </div>
  )
}

export default TextWithSelect;