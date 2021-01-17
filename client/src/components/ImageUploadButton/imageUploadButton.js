import react  from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import { openUploadImageModal } from "../../actions"
import { ImageUploadDashboardModal } from "../";

class ImageUploadButton extends react.Component {

    constructor(props) {
        super(props);
        this.toggleUploadModal = this.toggleUploadModal.bind(this);
        this.state = { open: false }
    }

    toggleUploadModal() {
        this.props.openUploadImageModal();
    }

    render() {
        return (
            <div className="ImageUploadButton">
                <Button color="primary" onClick={this.toggleUploadModal}>Upload Image(s)</Button>

                <ImageUploadDashboardModal open={this.props.open} />
            </div>   
        )
    }
}

const mapStateToProps = (state) => {
    return {
        open: state.imageUploadModalReducer.open,
    }
}

export default connect(
    mapStateToProps, {
        openUploadImageModal
    }
)(ImageUploadButton);