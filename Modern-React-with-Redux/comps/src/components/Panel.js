import classNames from "classnames";

export default function Panel({ children, className, ...rest }) {

    const finalClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    )
    return (
        <div
            className={finalClassNames}
            {...rest}
        >
            {children}
        </div>
    )
}