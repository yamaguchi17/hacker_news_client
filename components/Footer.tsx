type Props = {
  footer:string;
}

export const Footer:React.FC<Props> = (props) => {
  return (
    <div className="text-center h6 my-4">
      <div>{props.footer}</div>
    </div>
  )
}