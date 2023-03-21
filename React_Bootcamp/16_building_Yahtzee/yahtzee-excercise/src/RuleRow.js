import './RuleRow.css'

function RuleRow(props) {
    const { score, name, doScore, description, rolling } = props;
    const disabled = score !== undefined;
    return (
        <tr className={`RuleRow RuleRow-${score === undefined ? 'active' : 'disabled'}`}
            onClick={disabled || rolling ? null : doScore}
        >
            <td className='RuleRow-name'>{name}</td>
            <td className='RuleRow-score'>{disabled ? score : description}</td>
        </tr>
    )
}

export default RuleRow;