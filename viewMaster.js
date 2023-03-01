import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMessage } from "../../redux/slices/navslice";

function ViewMaster() {
  const [stateMaster, setStateMaster] = useState({
    menuMasterChecked: false,
    sellUnitChecked: false,
    invoiceChecked: false,
    printersChecked: false,
    taxSlabChecked: false,
    itemsChecked: false,
  });

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    let data = { ...stateMaster };
    if (value === "menuMaster") data.menuMasterChecked = checked;
    if (value === "sellUnit") data.sellUnitChecked = checked;
    if (value === "invoice") data.invoiceChecked = checked;
    if (value === "printers") data.printersChecked = checked;
    if (value === "TaxSlab") data.taxSlabChecked = checked;
    if (value === "Items") data.itemsChecked = checked;
    console.log("onchange", data);
    setStateMaster(data);
  };

  const masters = [
    { value: "menuMaster" },
    { value: "sellUnit" },
    { value: "invoice" },
    { value: "printers" },
    { value: "TaxSlab" },
    { value: "Items" },
  ];

  const onSubmit = () => {
    dispatch(setMessage(stateMaster));
    console.log("onsubmit", stateMaster);
  };
  return (
    <div>
      <Row>
        <Col>
          <h6>Masters Setting</h6>
          <div>
            {masters &&
              masters.map((i, index) => {
                return (
                  <div key={index}>
                    <input
                      className="mx-2"
                      type="checkbox"
                      onChange={handleOnChange}
                      value={i.value}
                    />
                    <label>{i.value}</label>
                    <br />
                  </div>
                );
              })}
          </div>
        </Col>
      </Row>

      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
}

export default ViewMaster;
