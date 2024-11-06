import React, { useState } from "react";
import data from "./data";

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId);
        console.log(getCurrentId);
        
    }
    console.log(selected)
    return (
        <div className="wrapper">
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <div className="item" key={index}>
                            <div
                                onClick={() => handleSingleSelection(dataItem.id)}
                                className="title"
                            >
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ? 
                                    <div className="content">{dataItem.answer}
                                    </div>
                                    : null
                                
                            }
                        </div>
                    ))
                ) : (
                    <div>No data found</div>
                )}
            </div>
        </div>
    );
}
  