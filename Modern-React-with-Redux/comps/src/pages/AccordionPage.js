import Accordion from "../components/Accordion";



export default function AccordionPage() {

    const items = [
        {
            id: 1,
            label: 'Can I use React on a project?',
            content: 'You can React on any project you want. You can React on any project you want. You can React on any project you want.'
        },
        {
            id: 2,
            label: 'Can I use Javascript on a project?',
            content: 'You can Javascript on any project you want. You can Javascript on any project you want. You can Javascript on any project you want.'
        },
        {
            id: 3,
            label: 'Can I use CSS on a project?',
            content: 'You can CSS on any project you want. You can CSS on any project you want. You can CSS on any project you want.'
        },

    ]


    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}
