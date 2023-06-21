import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

export default function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    function handleClick() {
        setShowModal(true);
    }

    function handleClose() {
        setShowModal(false);
    }

    const actionBar = (
        <div>
            <Button onClick={handleClose} success>I Accept</Button>
        </div>
    )
    const renderModal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    )
    return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante metus. Nam iaculis, risus nec eleifend bibendum, ligula felis semper nisi, id iaculis mauris orci eu erat. Phasellus sed purus dui. Integer molestie vitae purus sed venenatis. Phasellus eget ante iaculis, fermentum nisl at, efficitur felis. Morbi vel ultricies felis. Etiam et arcu eu lectus finibus dictum. Duis nec sagittis risus. Sed viverra convallis turpis, nec facilisis quam eleifend non. Vivamus rutrum a elit at condimentum. Mauris eget congue quam. Sed id diam vitae ex interdum semper. Quisque facilisis vestibulum libero, vel elementum orci iaculis quis. Quisque interdum aliquam erat et sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.                Fusce cursus porta pulvinar. Nam at posuere elit. Ut sit amet finibus mi. Proin eleifend libero ut placerat efficitur. Curabitur cursus, nunc eu viverra pharetra, elit leo finibus mi, ut fermentum tortor risus at sem. Etiam leo orci, egestas at efficitur sit amet, blandit eu metus. Aenean iaculis justo at ullamcorper tincidunt. Aenean nec mauris et orci ultrices sodales. Nullam enim tellus, ornare at consequat a, pulvinar eget lectus. Praesent ullamcorper ipsum sed tellus molestie dapibus. Donec feugiat leo nunc. Donec ac nibh porta turpis rutrum pellentesque nec non risus. Sed imperdiet molestie lacus, eget pretium urna tempus in. Pellentesque condimentum egestas ante nec porta. Nulla viverra metus a varius eleifend.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante metus. Nam iaculis, risus nec eleifend bibendum, ligula felis semper nisi, id iaculis mauris orci eu erat. Phasellus sed purus dui. Integer molestie vitae purus sed venenatis. Phasellus eget ante iaculis, fermentum nisl at, efficitur felis. Morbi vel ultricies felis. Etiam et arcu eu lectus finibus dictum. Duis nec sagittis risus. Sed viverra convallis turpis, nec facilisis quam eleifend non. Vivamus rutrum a elit at condimentum. Mauris eget congue quam. Sed id diam vitae ex interdum semper. Quisque facilisis vestibulum libero, vel elementum orci iaculis quis. Quisque interdum aliquam erat et sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.                Fusce cursus porta pulvinar. Nam at posuere elit. Ut sit amet finibus mi. Proin eleifend libero ut placerat efficitur. Curabitur cursus, nunc eu viverra pharetra, elit leo finibus mi, ut fermentum tortor risus at sem. Etiam leo orci, egestas at efficitur sit amet, blandit eu metus. Aenean iaculis justo at ullamcorper tincidunt. Aenean nec mauris et orci ultrices sodales. Nullam enim tellus, ornare at consequat a, pulvinar eget lectus. Praesent ullamcorper ipsum sed tellus molestie dapibus. Donec feugiat leo nunc. Donec ac nibh porta turpis rutrum pellentesque nec non risus. Sed imperdiet molestie lacus, eget pretium urna tempus in. Pellentesque condimentum egestas ante nec porta. Nulla viverra metus a varius eleifend.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante metus. Nam iaculis, risus nec eleifend bibendum, ligula felis semper nisi, id iaculis mauris orci eu erat. Phasellus sed purus dui. Integer molestie vitae purus sed venenatis. Phasellus eget ante iaculis, fermentum nisl at, efficitur felis. Morbi vel ultricies felis. Etiam et arcu eu lectus finibus dictum. Duis nec sagittis risus. Sed viverra convallis turpis, nec facilisis quam eleifend non. Vivamus rutrum a elit at condimentum. Mauris eget congue quam. Sed id diam vitae ex interdum semper. Quisque facilisis vestibulum libero, vel elementum orci iaculis quis. Quisque interdum aliquam erat et sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.                Fusce cursus porta pulvinar. Nam at posuere elit. Ut sit amet finibus mi. Proin eleifend libero ut placerat efficitur. Curabitur cursus, nunc eu viverra pharetra, elit leo finibus mi, ut fermentum tortor risus at sem. Etiam leo orci, egestas at efficitur sit amet, blandit eu metus. Aenean iaculis justo at ullamcorper tincidunt. Aenean nec mauris et orci ultrices sodales. Nullam enim tellus, ornare at consequat a, pulvinar eget lectus. Praesent ullamcorper ipsum sed tellus molestie dapibus. Donec feugiat leo nunc. Donec ac nibh porta turpis rutrum pellentesque nec non risus. Sed imperdiet molestie lacus, eget pretium urna tempus in. Pellentesque condimentum egestas ante nec porta. Nulla viverra metus a varius eleifend.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta ante metus. Nam iaculis, risus nec eleifend bibendum, ligula felis semper nisi, id iaculis mauris orci eu erat. Phasellus sed purus dui. Integer molestie vitae purus sed venenatis. Phasellus eget ante iaculis, fermentum nisl at, efficitur felis. Morbi vel ultricies felis. Etiam et arcu eu lectus finibus dictum. Duis nec sagittis risus. Sed viverra convallis turpis, nec facilisis quam eleifend non. Vivamus rutrum a elit at condimentum. Mauris eget congue quam. Sed id diam vitae ex interdum semper. Quisque facilisis vestibulum libero, vel elementum orci iaculis quis. Quisque interdum aliquam erat et sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.                Fusce cursus porta pulvinar. Nam at posuere elit. Ut sit amet finibus mi. Proin eleifend libero ut placerat efficitur. Curabitur cursus, nunc eu viverra pharetra, elit leo finibus mi, ut fermentum tortor risus at sem. Etiam leo orci, egestas at efficitur sit amet, blandit eu metus. Aenean iaculis justo at ullamcorper tincidunt. Aenean nec mauris et orci ultrices sodales. Nullam enim tellus, ornare at consequat a, pulvinar eget lectus. Praesent ullamcorper ipsum sed tellus molestie dapibus. Donec feugiat leo nunc. Donec ac nibh porta turpis rutrum pellentesque nec non risus. Sed imperdiet molestie lacus, eget pretium urna tempus in. Pellentesque condimentum egestas ante nec porta. Nulla viverra metus a varius eleifend.</p>
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal && renderModal}
        </div>
    )
}