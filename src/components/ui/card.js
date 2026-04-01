export function Card({children, className}){
    return (
        <div className={`bg-white p-6 rounded-2xl shadow-xl ${className}`}>
            {children}
        </div>
    );
}

export function CardContent({children, className}){
    return (
        <div className={`p-6 text-center ${className}`}>
            {children}
        </div>
    );
}