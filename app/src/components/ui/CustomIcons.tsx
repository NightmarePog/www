interface Props {
  src?: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties
}

interface PropsLogo {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties
}

const CustomLogo = ({ src, alt = "Logo", className = "w-16 h-16", style }: Props) => {
  return <img src={src} loading={"lazy"} alt={alt} className={className} style={style}/>;
};

export const TourDeApp = ({ className, style }: PropsLogo) => {
  return <CustomLogo src="https://tourdeapp.com/_ipx/_/img/logo.svg" alt="Tour De App" style={style} className={className}/>
}

export default CustomLogo;
