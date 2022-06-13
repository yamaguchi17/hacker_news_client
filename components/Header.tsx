type Props = {
  header:string;
}

export const Header:React.FC<Props> = (props) => {
  return (
    <div>
      <h1>
         {props.header}</h1>
    </div>
  )
}
