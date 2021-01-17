import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import react from "react";
import { connect } from "react-redux";
import { closeUploadImageModal } from "../../actions/imageUploadModal"

const Uppy = require('@uppy/core')
const XHRUpload = require('@uppy/xhr-upload')
const { DashboardModal } = require('@uppy/react')


class ImageUploadDashboardModal extends react.Component {
  constructor(props) {
    super(props);
    this.onRequestClose = this.onRequestClose.bind(this);
    this.uppy = new Uppy()
      .use(XHRUpload, {
        endpoint: "http://localhost:5000/add",
        fieldName: "photo",
        formData: true,
      });
  }

  // componentWillUnmount() {
  //   this.props.closeUploadImageModal();
  // }
  onRequestClose() {
    this.props.closeUploadImageModal();
  }
  
  render() {
    return <DashboardModal uppy={this.uppy} open={this.props.open} onRequestClose={this.onRequestClose} />;
  }
}

const mapStateToProps = (state) => {
  return {
      open: state.imageUploadModalReducer.open,
  }
}

export default connect(
  mapStateToProps,
  {
    closeUploadImageModal
  }
)(ImageUploadDashboardModal);