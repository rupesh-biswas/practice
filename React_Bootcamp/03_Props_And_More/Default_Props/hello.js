class Hello extends React.Component {
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }
    render() {
        const props = this.props;
        let bangs = "!".repeat(props.bangs);
        return (
            <div>
                <p>Hi {props.to} from {props.from}{bangs}</p>
            </div>
        )
    }
}

