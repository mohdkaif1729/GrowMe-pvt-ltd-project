import React from 'react'
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FaRegMinusSquare } from "react-icons/fa";
import { FaRegPlusSquare } from "react-icons/fa";

const Third: React.FC = () => {
  // first 
  const [firstExpend, setFirstExpend] = React.useState(false);
  const [checked1, setChecked1] = React.useState([false, false, false, false, false]);

  const handleExpended1 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFirstExpend((prev) => !prev);
  }
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.id))) {
      e.target.checked ? setChecked1((prev) => prev.map(() => true)) : setChecked1((prev) => prev.map(() => false));
    } else {
      const id: number = Number(e.target.id);
      // console.log(id);
      // console.log(e.target.checked);
      setChecked1((prev) => prev.map((check, index) => index === id ? !check : check));
    }
  }

  const children1: JSX.Element = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Agriculture"
        control={<Checkbox id='0' checked={checked1[0]} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="Crops"
        control={<Checkbox id='1' checked={checked1[1]} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="Farming Animal & Livestock"
        control={<Checkbox id='2' checked={checked1[2]} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="Fishery & Aquaculture"
        control={<Checkbox id='3' checked={checked1[3]} onChange={handleChange1} />}
      />
      <FormControlLabel
        label="Ranching"
        control={<Checkbox id='4' checked={checked1[4]} onChange={handleChange1} />}
      />
    </Box>
  );


  // second 
  const [secondExpend, setSecondExpend] = React.useState(false);
  const [checked2, setChecked2] = React.useState([false, false, false, false, false]);


  const handleExpended2 = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setSecondExpend((prev) => !prev);
  }
  const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
    if (isNaN(Number(e.target.id))) {
      e.target.checked ? setChecked2((prev) => prev.map(() => true)) : setChecked2((prev) => prev.map(() => false));
      // setChecked2((prev) => prev.map(() => true));
    } else {
      const id: number = Number(e.target.id);
      setChecked2((prev) => prev.map((check, index) => index === id ? !check : check));
    }
  }

  const children2: JSX.Element = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Accounting & Accounting Services"
        control={<Checkbox id='0' checked={checked2[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Auctions"
        control={<Checkbox id='1' checked={checked2[1]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Business Service - General"
        control={<Checkbox id='2' checked={checked2[2]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Call Center & Business Center"
        control={<Checkbox id='3' checked={checked2[3]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Career Planning"
        control={<Checkbox id='4' checked={checked2[4]} onChange={handleChange2} />}
      />
    </Box>
  );

  return (
    <div>
      <button onClick={handleExpended1}>{firstExpend ? <FaRegMinusSquare /> : <FaRegPlusSquare />} </button>
      <FormControlLabel
        label="Agriculture & Fishing"
        control={
          <Checkbox
            id="main1"
            checked={checked1[0] && checked1[1] && checked1[2] && checked1[3] && checked1[4]}
            onChange={handleChange1}
          />
        }
      />
      {firstExpend ? children1 : ""}

      {<br />}

      <button onClick={handleExpended2}>{secondExpend ? <FaRegMinusSquare /> : <FaRegPlusSquare />} </button>
      <FormControlLabel
        label="Business & Services"
        control={
          <Checkbox
            id="main2"
            checked={checked2[0] && checked2[1] && checked2[2] && checked2[3] && checked2[4]}
            onChange={handleChange2}
          />
        }
      />
      {secondExpend ? children2 : ""}
      { }
    </div>
  );
}

export default Third;











































// import React from 'react'
// import Box from '@mui/material/Box';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';
// // import Button from '@mui/material/Button';
// import { FaRegMinusSquare } from "react-icons/fa";
// import { FaRegPlusSquare } from "react-icons/fa";
// // import { buttonBaseClasses } from '@mui/material';

// const Third: React.FC = () => {
//   const [firstExpend, setFirstExpend] = React.useState(false);
//   const [checked, setChecked] = React.useState([false, false, false, false, false]);
//   console.log(firstExpend);

//   const handleExpended = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     e.preventDefault();
//     setFirstExpend((prev) => !prev);
//   }

//   const handleChange = () => {
//     console.log();

//     setChecked((prev) => prev.map(() => true));
//   };

//   const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const id = Number(e.target.id);
//     console.log(id);
//     setChecked((prev) => prev.map((check, index) => index === id ? true : check));
//   };

//   const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const id = Number(e.target.id);
//     console.log(id);
//     setChecked((prev) => prev.map((check, index) => index === id ? true : check));
//   };

//   const handleChange3 = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const id = Number(e.target.id);
//     console.log(id);

//     setChecked((prev) => prev.map((check, index) => index === id ? true : check));
//   };

//   const handleChange4 = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const id = Number(e.target.id);
//     console.log(id);

//     setChecked((prev) => prev.map((check, index) => index === id ? true : check));
//   };

//   const handleChange5 = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const id = Number(e.target.id);
//     console.log(id);

//     setChecked((prev) => prev.map((check, index) => index === id ? true : check));
//   };


//   const children: JSX.Element = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
//       <FormControlLabel

//         label="Agriculture"
//         control={<Checkbox id='0' checked={checked[0]} onChange={handleChange1} />}
//       />
//       <FormControlLabel

//         label="Crops"
//         control={<Checkbox id='1' checked={checked[1]} onChange={handleChange2} />}
//       />
//       <FormControlLabel

//         label="Farming Animal & Livestock"
//         control={<Checkbox id='2' checked={checked[2]} onChange={handleChange3} />}
//       />
//       <FormControlLabel

//         label="Fishery & Aquaculture"
//         control={<Checkbox id='3' checked={checked[3]} onChange={handleChange4} />}
//       />
//       <FormControlLabel

//         label="Ranching"
//         control={<Checkbox id='4' checked={checked[4]} onChange={handleChange5} />}
//       />
//     </Box>
//   );

//   return (
//     <div>
//       <button onClick={handleExpended}>{firstExpend ? <FaRegMinusSquare /> : <FaRegPlusSquare />} </button>

//       <FormControlLabel
//         id='Main'
//         label="Agriculture & Fishing"
//         control={
//           <Checkbox
//             checked={checked[0] && checked[1] && checked[2] && checked[3] && checked[4]}
//             // indeterminate={checked[0] !== checked[1] !== checked[2] !== checked[3] !== checked[4]}
//             onChange={handleChange}
//           />
//         }
//       />
//       {firstExpend ? children : ""}
//       { }
//     </div>
//   );
// }

// export default Third;