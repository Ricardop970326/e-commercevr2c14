import React, { useState, useEffect } from 'react';
import "../css/listobjects.css"

const List = ({ filters }) => {
  const [products, setProducts] = useState([]); // Holds the list of all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Holds the list of filtered products based on the applied filters

  useEffect(() => {
    // Fetch the list of products from the API when the component mounts
    fetch('http://localhost:4000/api/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data); // Store the fetched products in the 'products' state variable
        // Initially, set filtered products to all products
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    // Update filtered products when filters change
    const newFilteredProducts = products.filter(product => {
      const matchesProductType = filters.productType ? product.type.includes(filters.productType) : true; // Check if the product type matches the filter criteria
      const matchesPriceRange = filters.priceRange.length === 2
        ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1] // Check if the product price is within the filter price range
        : true; // If no price range is specified, consider all products as a match

      return matchesProductType && matchesPriceRange; // Return true if both filter conditions are met
    });

    setFilteredProducts(newFilteredProducts); // Update the 'filteredProducts' state with the newly filtered products
  }, [filters, products]);

  return (
    <>
      <div className="productbox">
        {/* Input field and filter options go here */}
        <ul className="productlist">
          {filteredProducts.map((product) => (
            <li key={product.id} className="productitem">
              <h3>{product.title}</h3>
              <br/><br/>
              <img
                id={`productImage-${product.id}`} 
                className="productimage"
                src={`${process.env.PUBLIC_URL}${product.image}`}
                alt={product.title}
              />
              <br/><br/>
              <p>{product.description}</p>
              <p className="price">${product.price}</p>
              <button className='addtocart' type="submit">Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default List;























// import React, { useState, useEffect } from 'react';
// import "../css/listobjects.css"


// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => {
//         setProducts(data);
//         // Initially, set filtered products to all products
//         setFilteredProducts(data);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   useEffect(() => {
//     // Update filtered products when filters change
//     const newFilteredProducts = products.filter(product => {
//       const matchesProductType = filters.productType ? product.type.includes(filters.productType) : true;
//       const matchesPriceRange = filters.priceRange.length === 2
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
//         : true;

//       return matchesProductType && matchesPriceRange;
//     });

//     setFilteredProducts(newFilteredProducts);
//   }, [filters, products]);

//   return (
//     <>
//     <div className="productbox">
//     {/* Input field and filter options go here */}
//     <ul className="productlist">
//       {filteredProducts.map((product) => (
//         <li key={product.id} className="productitem">
//           <h3>{product.title}</h3>
//           <br/>          <br/>
//           <img
//             id={`productImage-${product.id}`} 
//             className="productimage"
//             src={`${process.env.PUBLIC_URL}${product.image}`}
//             alt={product.title}
//           />
//           <br/>          <br/>
//           <p>{product.description}</p>
//           <p className="price">${product.price}</p>
//           <button className='addtocart' type="submit">Add to Cart</button>

//         </li>
//       ))}
//     </ul>
//   </div>
// </>

// );
// };

// export default List;
































// const List = ({ filters }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   // Filtering logic based on the received filters
//   const filteredProducts = products.filter(product => {
//     const matchesProductType = filters.productType ? product.type === filters.productType : true;
//     const matchesPriceRange = filters.priceRange
//       ? Array.isArray(filters.priceRange)
//         ? product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
//         : product.price === filters.priceRange
//       : true;

//     return matchesProductType && matchesPriceRange;
//   });

//   return (
//     <div>
//       <h1>List of Products</h1>

//       {/* Display filteredProducts instead of all products */}
//       <ul>
//         {filteredProducts.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img
//               src={`${process.env.PUBLIC_URL}${product.image}`}
//               alt={product.title}
//               style={{ maxWidth: '100px' }}
//             />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default List;
























// const List = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/api/products')
//       .then((response) => response.json())
//       .then((data) => setProducts(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);

//   return (
//     <div>
//       <h1>List of Products</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             <h3>{product.title}</h3>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img
//   src={`${process.env.PUBLIC_URL}${product.image}`}
//   alt={product.title}
//   style={{ maxWidth: '100px' }}
// />

//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default List;



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filterCriteria, setFilterCriteria] = useState({
//     price: '',
//     productType: '',
//   });

//   useEffect(() => {
//     // Fetch data from your server
//     axios.get('http://localhost:4000/api/products')
//       .then(response => {
//         setProducts(response.data);
//         setFilteredProducts(response.data);
//       })
//       .catch(error => console.error('Error fetching data:', error));
//   }, []);

//   const handleFilterChange = (type, value) => {
//     setFilterCriteria({
//       ...filterCriteria,
//       [type]: value,
//     });
//   };

//   useEffect(() => {
//     // Apply filters when filterCriteria changes
//     let filtered = [...products];

//     if (filterCriteria.price !== '') {
//       filtered = filtered.filter(product => product.price <= parseFloat(filterCriteria.price));
//     }

//     if (filterCriteria.productType !== '') {
//       filtered = filtered.filter(product => product.type === filterCriteria.productType);
//     }

//     setFilteredProducts(filtered);
//   }, [filterCriteria, products]);

//   return (
//     <>
//       {/* Render your filter components here */}
//       {/* Example: <PriceFilter onChange={value => handleFilterChange('price', value)} /> */}
//       {/* Example: <TypeFilter onChange={value => handleFilterChange('productType', value)} /> */}

//       <div className="productbox">
//         {/* Map through filteredProducts and render each product */}
//         {filteredProducts.map(product => (
//           <div key={product.id}>
//             <p>{product.title}</p>
//             <p>{product.description}</p>
//             <p>${product.price}</p>
//             <img src={product.image} alt={product.title} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProductsPage;
