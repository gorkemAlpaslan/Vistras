import React from "react";

const RecursiveComponent = ({ data }) => {
  // Eğer veri yoksa, boş bir <div> döndürürüz
  if (!data) {
    return <div></div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        {data.subcategories &&
          data.subcategories.map((child) => (
            <RecursiveComponent data={child} key="test" />
          ))}
      </ul>
    </div>
  );
};

export default RecursiveComponent;
