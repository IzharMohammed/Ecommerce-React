import React from "react";

export default function FilterProducts() {
  const minPrice = [0, 10, 20, 50, 100, 200];
  const maxPrice = [300, 400, 500, 600, 700, 800];

  return (
    <>
      <div className="ranges">
        <select name="min-price" class="min-range" id="min-price">
          {minPrice.map((min) => (
            <option value={min}>{min}</option>
          ))}
        </select>
        <select name="max-price" class="max-price" id="max-price">
          {maxPrice.map((max) => (
            <option value={max}>{max}</option>
          ))}
        </select>
      </div>
    </>
  );
}
