import SortableTable from "../components/SortableTable";

export default function TablePage() {

    const data = [
        { name: 'Orange', color: 'bg-orange-500', score: 5 },
        { name: 'Apple', color: 'bg-red-500', score: 3 },
        { name: 'Banana', color: 'bg-yellow-500', score: 1 },
        { name: 'Lime', color: 'bg-green-500', score: 1 },
        { name: 'Cherry', color: 'bg-red-500', score: 2.5 }
    ];

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        },
        {
            label: 'Score Squared',
            render: (fruit) => fruit.score ** 2,
            sortValue: (fruit) => fruit.score ** 2
        }
    ];

    const keyFn = (fruit) => fruit.name;

    return (
        <div>
            <SortableTable data={data} config={config} KeyFn={keyFn} />
        </div>
    )
}