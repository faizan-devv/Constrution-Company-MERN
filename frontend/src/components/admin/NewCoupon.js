import React, {Fragment} from 'react'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

const NewCoupon = () => {
  return (
    <Fragment>
    <MetaData title={'New Coupon'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div class="wrapper my-5"> 
        <form class="shadow-lg" encType='multipart/form-data'>
            <h1 class="mb-4">New Coupon Create</h1>

            <div class="form-group">
              <label for="name_field">Name</label>
              <input
                type="text"
                id="name_field"
                class="form-control"
                value=""
              />
            </div>

            <div class="form-group">
                <label for="price_field">Discount %</label>
                <input
                  type="text"
                  id="price_field"
                  class="form-control"
                  value=""
                />
              </div>
              
            <div class="form-group">
                <label for="price_field">Expiry Date</label>
                <input
                  type="date"
                  id="price_field"
                  class="form-control"
                  value=""
                />
              </div>

              
            <button
              id="login_button"
              type="submit"
              class="btn btn-block py-3"
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

export default NewCoupon