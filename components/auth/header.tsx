interface HeaderProps {
    label: string
}

export const Header = ({ label }: HeaderProps) => {
    return (
        <div className="text-center text-3xl">
            <h1 className="text-4xl font-semibold">Auth</h1>
            <p className="text-muted-foreground text-sm">{label}</p>
        </div>
    )
}