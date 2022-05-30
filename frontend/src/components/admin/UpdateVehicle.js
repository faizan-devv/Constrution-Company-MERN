import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

const NewVehicle = () => {
  return (
    <Fragment>
    <MetaData title={'Update Vehicle'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div className="wrapper my-5"> 
  <form className="shadow-lg" encType="multipart/form-data">
    <h1 className="mb-4">Update Vehicle</h1>
    <div className="form-group">
      <label htmlFor="name_field">Vehicle Name</label>
      <input type="text" id="name_field" className="form-control"  />
    </div>
    <div className="form-group">
      <label htmlFor="price_field">Owner Name</label>
      <input type="text" id="price_field" className="form-control"  />
    </div>
    <div className="form-group">
      <label htmlFor="description_field">Description</label>
      <textarea className="form-control" id="description_field" rows={8} defaultValue={""} />
    </div>
    <div classname="form-group">
      <label htmlFor="name_field">Year of manufacture</label>
      <input type="text" id="name_field" classname="form-control"  />
    </div>
    <div classname="form-group">
      <label htmlFor="price_field">Color</label>
      <input type="text" id="price_field" classname="form-control"  />
    </div>
    <div className="form-group">
      <label htmlFor="stock_field">chasis Number</label>
      <input type="number" id="stock_field" className="form-control"  />
    </div>
    <div classname="form-group">
      <label htmlFor="name_field">Engine No</label>
      <input type="text" id="name_field" classname="form-control"  />
    </div>
    <div className="form-group">
      <label htmlFor="seller_field">Registeration Date</label>
      <input type="text" id="seller_field" className="form-control"  />
    </div>
    <div className="form-group">
      <label>Images</label>
      <div className="custom-file">
        <input type="file" name="product_images" className="custom-file-input" id="customFile" multiple />
        <label className="custom-file-label" htmlFor="customFile">
          Choose Images
        </label>
      </div>
    </div>
    <button id="login_button" type="submit" className="btn btn-block py-3">
      UPDATE
    </button>
  </form>
</div>

            </Fragment>
        </div>
    </div>

</Fragment>
)
}
export default NewVehicle
