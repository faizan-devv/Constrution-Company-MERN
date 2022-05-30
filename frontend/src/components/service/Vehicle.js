import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'


const Vehicle = () => {
  return (

    <Fragment>
            <MetaData title={'vehicle'} />
    <div className="row">
            

                <div className="col-12">
                <Fragment>
    
        <div className="wrapper my-5"> 
        <form className="shadow-lg" encType='multipart/form-data'>
            <h1 className="mb-4">Vehicle Registration Form</h1>

            <div className="form-group">
              <label for="name_field"> Name</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Reg No</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Engine No</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
              
            </div>
            <div className="form-group">
              <label for="name_field">Registeration Date</label>
              <input
                type="date"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>
            <div className="form-group">
              <label for="name_field">Year of manufacture</label>
              <input
                type="text"
                id="name_field"
                className="form-control"
                value=""
              />
            </div>

            <div className="form-group">
                <label for="price_field">Color</label>
                <input
                  type="text"
                  id="price_field"
                  className="form-control"
                  value=""
                />
              </div>

              
              <div className="form-group">
                <label for="stock_field"> chasis Number</label>
                <input
                  type="number"
                  id="stock_field"
                  className="form-control"
                  value=""
                />
              </div>

              <div className="form-group">
                <label for="seller_field">Owner Name</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="seller_field">Owner City</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value=""
                />
              </div>
              <div className="form-group">
                <label for="seller_field">Owner CNIC</label>
                <input
                  type="text"
                  id="seller_field"
                  className="form-control"
                  value=""
                />
              </div>
              
              <div className='form-group'>
                <label>Images</label>
                
                    <div className='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            className='custom-file-input'
                            id='customFile'
                            multiple
                        />
                        <label className='custom-file-label' for='customFile'>
                            Choose Images
                        </label>
                    </div>
            </div>

  
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-2"
            >
              CREATE
            </button>

          </form>
    </div>

</Fragment>
                </div>
            </div>
            

        </Fragment>
  )
}

export default Vehicle
