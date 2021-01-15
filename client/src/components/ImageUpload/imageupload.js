import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const Uppy = require('@uppy/core')
const XHRUpload = require('@uppy/xhr-upload')
const Tus = require('@uppy/tus')
const { DashboardModal, useUppy } = require('@uppy/react')

export function ImageUpload (props) {
  const uppy = useUppy(() => {
    return new Uppy({
      logger: Uppy.debugLogger,
    })
      .use(XHRUpload, {
        endpoint: "http://localhost:5000/add",
        fieldName: "photo",
        formData: true,
      })
  })

  return <DashboardModal uppy={uppy} open={props.open} />
}