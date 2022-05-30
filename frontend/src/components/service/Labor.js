import React, { Fragment, useState, useEffect } from "react";
import MetaData from "../layout/MetaData";

const Labor = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    cinc: "",
    workDescription: "",
    type: "",
    contactNumber: "",
    laborArea: "",
    image: "",
  });
  return (
    <Fragment>
      <MetaData title={"labor"} />
      <div className="row">
        <div className="col-12">
          <Fragment>
            <div className="container container-fluid">
              <div className="wrapper my-5">
                <form className="shadow-lg" encType="multipart/form-data">
                  <h1 className="mb-4">Labor Registration Form</h1>

                  <div className="form-group">
                    <label for="name_field">Name</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="name_field">Date of Birth</label>
                    <input
                      type="date"
                      id="name_field"
                      className="form-control"
                      value={formData.dob}
                      onChange={(e) => {
                        setFormData({ ...formData, dob: e.target.value });
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label for="name_field">CNIC</label>
                    <input
                      type="text"
                      id="name_field"
                      className="form-control"
                      value={formData.cinc}
                      onChange={(e) => {
                        setFormData({ ...formData, cinc: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label for="description_field">Work Description</label>
                    <textarea
                      className="form-control"
                      id="description_field"
                      rows="2"
                      value={formData.workDescription}
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          workDescription: e.target.value,
                        });
                      }}
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <label for="category_field">Type</label>
                    <select
                      className="form-control"
                      id="category_field"
                      onChange={(e) => {
                        setFormData({ ...formData, type: e.target.value });
                      }}
                    >
                      <option value="Plumber">Plumber</option>
                      <option value="Electration">Electration</option>
                      <option value="Civil Engineer">Civil Engineer</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="stock_field">Contact Number</label>
                    <input
                      type="tel"
                      id="stock_field"
                      className="form-control"
                      pattern="[0-9]{4}-[0-9]{7}"
                      onChange={(e) => {
                        setFormData({
                          ...formData,
                          contactNumber: e.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label for="seller_field">Labor Area</label>
                    <input
                      type="text"
                      id="seller_field"
                      className="form-control"
                      value={formData.laborArea}
                      onChange={(e) => {
                        setFormData({ ...formData, laborArea: e.target.value });
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Images</label>

                    <div className="custom-file">
                      <input
                        type="file"
                        name="product_images"
                        className="custom-file-input"
                        id="customFile"
                        multiple
                      />
                      <label className="custom-file-label" for="customFile">
                        Choose Images
                      </label>
                    </div>
                  </div>

                  <button
                    id="login_button"
                    type="submit"
                    class="btn btn-block py-2"
                  >
                    Register
                  </button>
                </form>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Labor;