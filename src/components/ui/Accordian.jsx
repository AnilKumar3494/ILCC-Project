import React, { useState } from "react";
import "./accordian.css";

import aboutUsContent from "../../data/about-us-content.json";

const Accordian = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="accordian_jsx">
      {aboutUsContent.sections.map((section, index) => (
        <div key={index} className="accordian_container">
          {section.subSections &&
            section.subSections.map((subSection, subIndex) => {
              const isOpen = openIndexes.includes(`${index}-${subIndex}`);

              return (
                <div key={subIndex} className="accordian_content">
                  <div
                    className="accordian_title"
                    onClick={() => toggleAccordion(`${index}-${subIndex}`)}
                  >
                    <h3>{subSection.title}</h3>
                    <button>{isOpen ? "−" : "+"}</button>
                  </div>
                  <div className={`accordian_para ${isOpen ? "show" : ""}`}>
                    {subSection.description ? (
                      <p>{subSection.description}</p>
                    ) : (
                      <ul>
                        {subSection.list &&
                          subSection.list.map((listItem, listIndex) => (
                            <li key={listIndex}>{`${listItem}`}</li>
                          ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
