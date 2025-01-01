import React, { useState } from "react";
import "./accordian.css";

import aboutUsContent from "../../data/about-us-content.json";

const Accordian = () => {
  // Initialize with the first subsection open
  const [openIndexes, setOpenIndexes] = useState(["2-0"]);

  const toggleAccordion = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // console.log(openIndexes);

  return (
    <div className="accordian_jsx">
      {aboutUsContent.sections.map((section, index) => (
        <div key={index} className="accordian_container">
          {section.subSections &&
            section.subSections.map((subSection, subIndex) => {
              const accordionKey = `${index}-${subIndex}`;
              const isOpen = openIndexes.includes(accordionKey);

              // console.log(accordionKey);
              return (
                <div key={subIndex} className="accordian_content">
                  <div
                    className="accordian_title"
                    onClick={() => toggleAccordion(accordionKey)}
                  >
                    <h4>{subSection.title}</h4>
                    <button>{isOpen ? "−" : "+"}</button>
                  </div>
                  <div className={`accordian_para ${isOpen ? "show" : ""}`}>
                    {subSection.description ? (
                      <p>{subSection.description}</p>
                    ) : (
                      <ul>
                        {subSection.list &&
                          subSection.list.map((listItem, listIndex) => (
                            <li key={listIndex}>{listItem}</li>
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
