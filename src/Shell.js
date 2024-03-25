import  Parcel from 'single-spa-react/parcel'
import React, { useState } from 'react';
import './Shell.css';

const Shell = () => {
    const [showCatalog, setShowCatalog] = useState(false);
    const [showCart, setShowCart] = useState(false);

    return (
        <>
        <div className='container-shell'>
            {showCatalog && (
                <div style={{ width: '75%', height: '100%', backgroundColor: 'blue', position: 'fixed', left: 0 }}>
                    <Parcel config={() => System.import('@experian/exp-catalog-mf')} />
                </div>
            )}

            {showCart && (
                <div style={{ width: '75%', height: '100%', backgroundColor: 'white', position: 'fixed', left: 0 }}>
                    <Parcel config={() => System.import('@experian/exp-cart-mf')} />
                </div>
            )}

            <div>
                <Parcel config={() => System.import('@experian/exp-checkout-mf')} />
            </div>
        </div>
        </>
    );
};

export default Shell