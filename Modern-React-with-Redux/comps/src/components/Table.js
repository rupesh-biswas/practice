import { Fragment } from "react";

export default function Table({ data, config, KeyFn }) {

    const renderedTheads = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }
        return <th key={column.label}>{column.label}</th>
    })

    const renderedTbody = data.map((item) => {
        return (
            <tr key={KeyFn(item)} className="border-b">
                {
                    config.map((column) => {
                        return (
                            <td key={column.label} className="p-2">
                                {column.render(item)}
                            </td>
                        )
                    })
                }
            </tr>
        )
    })

    return (
        <table className=" border-spacing-2 table-auto">
            <thead>
                <tr className="border-b-2">
                    {renderedTheads}
                </tr>
            </thead>
            <tbody>
                {renderedTbody}
            </tbody>
        </table>
    );
}