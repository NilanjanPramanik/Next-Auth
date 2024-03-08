import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    messege: string | undefined
}

export const FormSuccess = ({messege}: FormSuccessProps) => {
    if (!messege) return null

    return (
        <div className=" bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
            <CheckCircledIcon className="w-4 h-4"/>
            <p>{messege}</p>
        </div>
    )
}