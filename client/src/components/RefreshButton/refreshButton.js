import react  from "react";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import axios from "axios";

import { addImages } from "../../actions/addImages"

class RefreshButton extends react.Component {

    constructor(props) {
        super(props);
        this.getImages = this.getImages.bind(this);
        this.state = { hash: undefined }
    }

    getImages() {
        axios.get("http://localhost:5000/get")
            .then((res) => {
                const data = res.data;

                if (this.state.hash === undefined) {
                    this.setState({
                        hash: data.hash
                    });
                } else {
                    if (this.state.hash === data.hash) {
                        return;
                    }
                }

                const images = data.files.map(image => {
                    return {
                        src: `http://localhost:5000/images/${image}`,
                        title: image,
                    }
                });
                
                this.props.addImages(images);
            });
    }

    render() {
        return (
            <div className="RefreshButton">
                <Button color="primary" onClick={this.getImages}>Refresh</Button>
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
        addImages
    }
)(RefreshButton);