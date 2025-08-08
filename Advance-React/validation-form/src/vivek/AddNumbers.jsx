import React, { useState } from "react";

const AddMultipleRows = () => {
  const [rows, setRows] = useState([{ num1: "", num2: "" }]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const handleAddRow = () => {
    setRows([...rows, { num1: "", num2: "" }]);
  };

  const rowSums = rows.map(
    (row) => (Number(row.num1) || 0) + (Number(row.num2) || 0)
  );

  const totalSum = rowSums.reduce((acc, sum) => acc + sum, 0);

  return (
    <div style={styles.container}>
      <h2>Dynamic Row Adder</h2>
      {rows.map((row, index) => (
        <div key={index} style={styles.row}>
          <input
            type="number"
            value={row.num1}
            onChange={(e) => handleInputChange(index, "num1", e.target.value)}
            placeholder="Num 1"
            style={styles.input}
          />
          <input
            type="number"
            value={row.num2}
            onChange={(e) => handleInputChange(index, "num2", e.target.value)}
            placeholder="Num 2"
            style={styles.input}
          />
          <span style={styles.sum}>Sum: {rowSums[index]}</span>
        </div>
      ))}

      <button onClick={handleAddRow} style={styles.button}>Add Row</button>

      <h3>Total Sum: {totalSum}</h3>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    textAlign: "center",
    maxWidth: "600px",
    margin: "auto"
  },
  row: {
    marginBottom: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  input: {
    padding: "8px",
    width: "100px",
    fontSize: "16px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "10px",
    cursor: "pointer",
  },
  sum: {
    fontSize: "18px",
    fontWeight: "bold",
  },
};

export default AddMultipleRows;
