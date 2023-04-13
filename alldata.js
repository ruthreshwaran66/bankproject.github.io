import { useContext } from "react";
import { Container, Row } from "react-bootstrap";

import UserContext from "./Context";
export default function AllData() {
  let people = useContext(UserContext);
  function renderTableHeader() {
    let header = Object.keys(people.users[0]);
    return header.map((value, index) => {
      return <th>{value}</th>;
    });
  }
  function renderTableData() {
    return people.users.map((user, index) => {
      const { name, email, password, balance } = user;
      return (
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
          <td>₹ {balance}</td>
        </tr>
      );
    });
  }
  return (
    <>
      <h1 className="text-center">
        ALL<span>TRANSACTION</span>
      </h1>

      <br />
      <table id="users" class="table mt-5">
        <tr class="thead">{renderTableHeader()} </tr>
        {renderTableData()}
      </table>
      <br />
    </>
  );
}
