import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  selectDefaultFoods,
  setDefaultFoods,
} from "../../components/Fitness/fitnessSlice";
import { useEffect } from "react";
import Authenticated, {
  authedApiCall,
} from "../../components/AuthenticatedJwt/Authenticated";

function CustomFoodTable(props) {
  const columns = ["#", "Food", "Calories", "Protein"];
  const dispatch = useDispatch();
  const [rows, setRows] = useState([]);
  const nameClass = "name-input-custom-food";
  const caloriesClass = "calories-input-custom-food";
  const proteinClass = "protein-input-custom-food";

  const fetchCustomFoods = () => {
    const url = "/api/fitness/list_custom_foods";
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        authedApiCall(data, dispatch, props.history, "food-database", () =>
          setRows([...rows, ...data])
        )
      );
  };

  const postDeleteCustomFood = (id) => {
    const url = "/api/fitness/delete_custom_food";
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ id }),
    });
  };

  useEffect(fetchCustomFoods, []);
  const addNutrient = () => {
    const nameValue = document.getElementsByClassName(nameClass)[0].value;
    const caloriesValue =
      document.getElementsByClassName(caloriesClass)[0].value;
    const proteinValue = document.getElementsByClassName(proteinClass)[0].value;

    const calories = parseFloat(caloriesValue);
    const protein = parseFloat(proteinValue);
    setRows([...rows, [nameValue, calories, protein]]);

    fetch("/api/fitness/add_custom_food", {
      method: "POST",
      body: JSON.stringify({ name: nameValue, calories, protein }),
    });
    document.getElementsByClassName(nameClass)[0].value = "";
    document.getElementsByClassName(caloriesClass)[0].value = "";
    document.getElementsByClassName(proteinClass)[0].value = "";
  };

  const deleteNutrient = (id) => {
    var newRows = [...rows];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][3] === id) {
        newRows.splice(i, 1);
        setRows(newRows);
        postDeleteCustomFood(id);
        break;
      }
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <Button variant="danger" onClick={() => deleteNutrient(row[3])}>
                  Delete
                </Button>
              </td>
              {row.slice(0, 3).map((value, index2) => (
                <td className="align-middle" key={`${index}-${index2}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th>
              <Button variant="info" onClick={() => addNutrient()}>
                Add
              </Button>
            </th>
            <td>
              <Form.Control
                className={nameClass}
                as="input"
                placeholder="name"
              ></Form.Control>
            </td>
            <td className="align-middle">
              <Form.Control
                className={caloriesClass}
                as="input"
                placeholder="calories"
              ></Form.Control>
            </td>
            <td className="align-middle">
              <Form.Control
                className={proteinClass}
                as="input"
                placeholder="protein"
              ></Form.Control>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

function MealCalculator() {
  const columns = ["#", "Food", "Grams", "Calories", "Protein"];
  const tableData = [
    ["Beans", 200, 100, 5],
    ["Lettuice", 150, 10, 0.1],
    ["Chicken", 300, 200, 20],
  ];

  const nameClass = "name-input-calculator";
  const gramsClass = "grams-input-calculator";
  const caloriesClass = "calories-input-calculator";
  const proteinClass = "protein-input-calculator";
  const [rows, setRows] = useState(tableData);

  const addNutrient = () => {
    const nameValue = document.getElementsByClassName(nameClass)[0].value;
    const gramsValue = document.getElementsByClassName(gramsClass)[0].value;
    const caloriesValue =
      document.getElementsByClassName(caloriesClass)[0].value;
    const proteinValue = document.getElementsByClassName(proteinClass)[0].value;

    setRows([
      ...rows,
      [
        nameValue,
        parseFloat(gramsValue),
        parseFloat(caloriesValue),
        parseFloat(proteinValue),
      ],
    ]);
    document.getElementsByClassName(nameClass)[0].value = "";
    document.getElementsByClassName(gramsClass)[0].value = "";
    document.getElementsByClassName(caloriesClass)[0].value = "";
    document.getElementsByClassName(proteinClass)[0].value = "";
  };

  const deleteNutrient = (name) => {
    var newRows = [...rows];
    for (let i = 0; i < rows.length; i++) {
      if (rows[i][0] === name) {
        newRows.splice(i, 1);
        setRows(newRows);
        break;
      }
    }
  };

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>
                <Button variant="danger" onClick={() => deleteNutrient(row[0])}>
                  Delete
                </Button>
              </td>
              {row.map((value, index2) => (
                <td className="align-middle" key={`${index}-${index2}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <th>
              <Button variant="info" onClick={() => addNutrient()}>
                Add
              </Button>
            </th>
            <td>
              <Form.Control
                className={nameClass}
                as="input"
                placeholder="name"
              ></Form.Control>
            </td>
            <td>
              <Form.Control
                className={gramsClass}
                as="input"
                placeholder="grams"
              ></Form.Control>
            </td>
            <td className="align-middle">
              <Form.Control
                className={caloriesClass}
                as="input"
                placeholder="calories"
              ></Form.Control>
            </td>
            <td className="align-middle">
              <Form.Control
                className={proteinClass}
                as="input"
                placeholder="protein"
              ></Form.Control>
            </td>
          </tr>
        </tbody>
      </Table>
      <Button>Save</Button>
    </Container>
  );
}

function DefaultFoods(props) {
  const columns = ["Food", "Calories", "Protein"];
  const dispatch = useDispatch();
  const defaultFoods = useSelector(selectDefaultFoods);

  useEffect(() => {
    if (defaultFoods.length === 0) {
      fetch("/api/fitness/default_foods")
        .then((response) => response.json())
        .then((data) => {
          authedApiCall(data, dispatch, props.history, "food-database", () =>
            dispatch(setDefaultFoods({ defaultFoods: data }))
          );
        });
    }
  }, [defaultFoods.length, dispatch]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {columns.map((col) => (
              <td key={col}>{col}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {defaultFoods.map((row, index) => (
            <tr key={index}>
              {row.map((value, index2) => (
                <td className="align-middle" key={`${index}-${index2}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

function FoodDatabase(props) {
  return (
    <Container>
      <Row className="mb-5">
        <h3>Custom Foods</h3>
        <h5>Per 100 grams</h5>
        <CustomFoodTable history={props.history} />
      </Row>
      <Row className="mb-5">
        <h3>Meal Calculator</h3>
        <h5>Define custom meals</h5>
        <MealCalculator />
      </Row>
      <Row className="mb-5">
        <h3>Default Foods</h3>
        <DefaultFoods history={props.history} />
      </Row>
    </Container>
  );
}

export default function AuthenticatedFoodDatabase(props) {
  return (
    <Authenticated
      props={props}
      history={props.history}
      component={FoodDatabase}
      msg="Please login before accessing database"
      redirect="food-database"
    />
  );
}
