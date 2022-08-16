import ContentLoader from "react-content-loader";

const CardLoading = (props:any) => {
  return(
    <ContentLoader 
    speed={2}
    width={200}
    height={300}
    viewBox="0 0 200 410"
    backgroundColor="#959697"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect width="200" height="300" />
    <rect y="310" width="200" height="10" className="mt-1"/> 
    </ContentLoader>
  )
}

export default CardLoading;