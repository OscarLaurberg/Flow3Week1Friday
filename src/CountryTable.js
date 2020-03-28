import React from "react";

const CountryTable = ({countries, labels}) => {
  const tableRows = countries.map((country, index) =>
  <TableRows key={country.name} country={country}/>
  )
    return (
      <div>
      <p>Replace the thead section with a row generated from the Labels endpoint</p>
      <p>Replace the tbody section with rows generated from the countries endpoint</p>
      <table className="table">
        <thead>
          <tr>
            {labels.map((label, index) => <th key={index}>{label}</th>) }
          </tr>
        </thead>
        
        <tbody>
          {tableRows}
        </tbody>
      </table>
      </div>
    );
};

function TableCell({value}){
  return <td>{value}</td>;
}

function TableRows({country}){
  const checkValue = value => {
    if(Array.isArray(value)){
      if(value.length > 1){
        return `${value[0]}(+${value.length-1})`
      }else{
        return value[0];
      }
    }else{
      return value;
    }
  }
  const propValues = Object.values(country).map((val,index) =>

  <TableCell key={index} value={checkValue(val)}/>
  )
  return(
    <tr>{propValues}</tr>
  )
}
export default CountryTable;