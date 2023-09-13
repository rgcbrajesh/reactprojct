import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

export default function Contact() {
  return (
    <>
      <div className=" ms-5">
        <table>
          <tr>
            <td>
              <h3>Name =</h3>
            </td>
            <td>
              <h3> Brajesh Rajput </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Email <EmailIcon/> = </h3>
            </td>
            <td>
              <h3> Brajesh12@gmail.com </h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Mobile <AddIcCallIcon/> = </h3>
            </td>
            <td>
              <h3> 6268027181</h3>
            </td>
          </tr>
          <tr>
            <td>
              <h3>Address = </h3>
            </td>
            <td>
              <h3> Harda</h3>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
}
