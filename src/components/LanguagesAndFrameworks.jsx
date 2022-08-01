import React from "react";

const LanguagesAndFrameworks = ({ languagesAndFrameworks }) => {
  return (
    <>
      {languagesAndFrameworks.map((language) => {
        return (
          <div className={language.column_size}>
            <i class={language.icon_class}></i>
            <p>{language.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default LanguagesAndFrameworks;
