import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false);
    }

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept.</p>
    </Modal>

    return(
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pulvinar aliquam metus in convallis. Nulla at iaculis ligula. Sed at ex id nisi semper dapibus. Sed et lacus eu risus rutrum fringilla a et felis. Duis dictum erat arcu, sed rutrum mi finibus a. Maecenas lobortis non quam rutrum mattis. Vestibulum congue imperdiet blandit. Pellentesque pretium nibh quis sollicitudin ullamcorper. Fusce nec tellus nec diam aliquet imperdiet sed quis erat.
            </p>
        </div>
    )
}

export default ModalPage;