import React from "react";

const LanguagesAndFrameworks = ({ languagesAndFrameworks }) => {
  return (
    <>
      {languagesAndFrameworks.map((language) => {
        return (
          <div className={language.column_size}>
            <i class={language.icon_class}></i>
            <p>
              <small>{language.description}</small>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default LanguagesAndFrameworks;
