import React, { Component } from 'react';

class TargetRange extends Component {
  render() {
    return (
<div className="col-sm-4">
      <form>

          //  <label htmlFor="InputRangeDialHeight">Range and Dial Height</label>
          <div className="form-inline">
              <div className="form-group">
                  <input type="email" className="form-control" id="InputRangeHeight" placeholder="Range Height">
                  </input>
                  <select className="form-control">
            <option>Feet</option>
            <option>Yards</option>
          </select>
              </div>
          </div>

          //  <label htmlFor="InputDialHeight">Dial/Hold Height</label>
          <div className="form-inline">
              <div className="form-group">
                  <input type="email" className="form-control" id="InputDialHeight" placeholder="Dial/Hold Height">
</input>

                  <select className="form-control">
            <option>Mil</option>
            <option>MOA</option>
          </select>
              </div>
          </div>
          </form>
</div>
          // <br />
      // </div>
    );
  }
}
export default TargetRange;
