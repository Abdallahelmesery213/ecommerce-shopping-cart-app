import React from 'react'

export default function Filter(props) {
    const {count,sort,size,handleChangeSort,handleChangeSize} = props;
    return (
        <div className="row">
            <div className="col-md-4 text-center">
                {count} products found.
            </div>
            <div className="col-md-4 text-center">
                <label>
                    Order By
                    <select className="form-select" value={sort} onChange={handleChangeSort}> 
                        <option value="">Select</option>
                        <option value="lowest">lowest to highest</option>
                        <option value="highest">highest to lowest</option>
                    </select>
                </label>
            </div>
            <div className="col-md-4 text-center">
                <label>
                    Filter Size
                    <select className="form-select" value={size} onChange={handleChangeSize}> 
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </label>
            </div>
        </div>
    )
}
