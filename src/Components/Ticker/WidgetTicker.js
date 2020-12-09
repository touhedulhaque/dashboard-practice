import React from 'react';
import Ticker from 'react-ticker'

const WidgetTicker = () => {
    return (
        <div className="footer_ticker">
            <Ticker mode="smooth">
                {({ index }) => (
                    <>
                        <h5 style={{ color: "black" }}> VeneZuela &#128640; Saudi Arabia &#128640; Canada &#128640; Iran &#128640; Russia &#128640; </h5>
                    </>
                )}
            </Ticker>
        </div>
    );
};

export default WidgetTicker;