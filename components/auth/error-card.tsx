import { CardWrapper } from "./card-wrapper"
import { ExclamationTriangleIcon } from "@radix-ui/react-icons"

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Opps! Something went wrong!"
      backButtonLabel="Back to login page"
      backButtonHref="/auth/login"
    >
      <div className=" w-full flex justify-center items-center">
        <ExclamationTriangleIcon className=" text-destructive" />
      </div>
    </CardWrapper>
  )
}

export default ErrorCard