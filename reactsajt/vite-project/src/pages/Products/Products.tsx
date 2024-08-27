import React, { useState } from "react";
import { Link } from "react-router-dom";

const productsArray = [
  { id: 1, name: "Fudbal" },
  { id: 2, name: "Kosarka" },
  { id: 3, name: "Tenis" },
];

const Products: React.FC = () => {
  const itemsPerPage = 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<string>("");
  
  const filteredProducts = productsArray.filter(product => 
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by sport name..."
        value={filter}
        onChange={handleFilterChange}
        style={{ marginBottom: "20px", padding: "10px", width: "200px" }}
      />
      <ul>
        {currentItems.map(product => (
          <Link key={product.id} to={`/${product.name.toLowerCase()}`}>
            <h1>{product.name}</h1>
          </Link>
        ))}
      </ul>
      <div>
        <button onClick={handlePrev} disabled={currentPage === 1 || totalPages === 0}>
          Previous
        </button>
        <br />
        <button onClick={handleNext} disabled={currentPage === totalPages || totalPages === 0}>
          Next
        </button>
        <span>{` Page ${currentPage} of ${totalPages > 0 ? totalPages : 1}`}</span>
      </div>
    </div>
  );
};

export default Products;


// const Products: React.FC = () => {
//   return (
//     <ul>
//       <Link to="/fudbal">
//         <h1>Fudbal</h1>
//       </Link>
//       <Link to="/kosarka">
//         <h1>Kosarka</h1>
//       </Link>
//     </ul>
//   );
// };
