import React from 'react'

export default function Ngolist() {
    return (
        <div>
            
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action listbox" aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 ngoname">Amitabh Bacchan</h5>
                        <small>Ratings: 5</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small>And some small print.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action listbox">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 ngoname">Bill Gates</h5>
                        <small className="text-muted">Ratings: 5</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action listbox">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 ngoname">Nirmala Sitharaman</h5>
                        <small className="text-muted">Ratings: 5</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action listbox">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1 ngoname">Virat Kohli</h5>
                        <small className="text-muted">Ratings: 5</small>
                    </div>
                    <p className="mb-1">Some placeholder content in a paragraph.</p>
                    <small className="text-muted">And some muted small print.</small>
                </a>

            </div>
        </div>
    )
}
