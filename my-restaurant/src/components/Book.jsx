import React, { useState } from "react";

const Book = () => {
  const [selectedPersons, setSelectedPersons] = useState("");

  const handleSelectChange = (e) => {
    setSelectedPersons(e.target.value);
  };

  return (
    <section className="book_section layout_padding">
      <div className="container">
        <div className="heading_container">
          <h2>Book A Table</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form_container">
              <form>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <select
                    className="form-control nice-select wide"
                    value={selectedPersons}
                    onChange={handleSelectChange}
                  >
                    <option value="" disabled>
                      How many persons?
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div>
                  <input type="date" className="form-control" />
                </div>
                <div className="btn_box">
                  <button type="submit">Book Now</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6">
            <div className="map_container">
             {/* google map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=your_map_embed_code"
                allowFullScreen
                loading="lazy"
                style={{ width: "100%", height: "400px", border: "0" }}
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
