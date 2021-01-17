import react  from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";

import { openUploadImageModal } from "../../actions/imageUploadModal"
import { ImageUploadDashboardModal } from "../ImageUploadDashboardModal";

class ImageUploadButton extends react.Component {

    constructor(props) {
        super(props);
        this.toggleUploadModal = this.toggleUploadModal.bind(this);
        this.state = { open: false }
    }

    toggleUploadModal() {
        this.props.openUploadImageModal();
        console.log(this.props.open);
    }

    render() {
        console.log(this.props.open);
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