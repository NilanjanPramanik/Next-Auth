import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    messege: string | undefined
}

export const FormError = ({messege}: FormErrorProps) => {
    if (!messege) return null

    return (
        <div className=" bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
            <ExclamationTriangleIcon className="w-4 h-4"/>
            <p>{messege}</p>
        </div>
    )
}