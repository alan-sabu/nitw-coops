/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { PurchaseModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PurchaseModelCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: "",
    roll: "",
    room: "",
    hostel: "",
    subtotal: "",
    total: "",
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [roll, setRoll] = React.useState(initialValues.roll);
  const [room, setRoom] = React.useState(initialValues.room);
  const [hostel, setHostel] = React.useState(initialValues.hostel);
  const [subtotal, setSubtotal] = React.useState(initialValues.subtotal);
  const [total, setTotal] = React.useState(initialValues.total);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmail(initialValues.email);
    setRoll(initialValues.roll);
    setRoom(initialValues.room);
    setHostel(initialValues.hostel);
    setSubtotal(initialValues.subtotal);
    setTotal(initialValues.total);
    setErrors({});
  };
  const validations = {
    email: [],
    roll: [{ type: "Required" }],
    room: [{ type: "Required" }],
    hostel: [{ type: "Required" }],
    subtotal: [],
    total: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          roll,
          room,
          hostel,
          subtotal,
          total,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new PurchaseModel(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PurchaseModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              roll,
              room,
              hostel,
              subtotal,
              total,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Roll"
        isRequired={true}
        isReadOnly={false}
        value={roll}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              roll: value,
              room,
              hostel,
              subtotal,
              total,
            };
            const result = onChange(modelFields);
            value = result?.roll ?? value;
          }
          if (errors.roll?.hasError) {
            runValidationTasks("roll", value);
          }
          setRoll(value);
        }}
        onBlur={() => runValidationTasks("roll", roll)}
        errorMessage={errors.roll?.errorMessage}
        hasError={errors.roll?.hasError}
        {...getOverrideProps(overrides, "roll")}
      ></TextField>
      <TextField
        label="Room"
        isRequired={true}
        isReadOnly={false}
        value={room}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              roll,
              room: value,
              hostel,
              subtotal,
              total,
            };
            const result = onChange(modelFields);
            value = result?.room ?? value;
          }
          if (errors.room?.hasError) {
            runValidationTasks("room", value);
          }
          setRoom(value);
        }}
        onBlur={() => runValidationTasks("room", room)}
        errorMessage={errors.room?.errorMessage}
        hasError={errors.room?.hasError}
        {...getOverrideProps(overrides, "room")}
      ></TextField>
      <TextField
        label="Hostel"
        isRequired={true}
        isReadOnly={false}
        value={hostel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              roll,
              room,
              hostel: value,
              subtotal,
              total,
            };
            const result = onChange(modelFields);
            value = result?.hostel ?? value;
          }
          if (errors.hostel?.hasError) {
            runValidationTasks("hostel", value);
          }
          setHostel(value);
        }}
        onBlur={() => runValidationTasks("hostel", hostel)}
        errorMessage={errors.hostel?.errorMessage}
        hasError={errors.hostel?.hasError}
        {...getOverrideProps(overrides, "hostel")}
      ></TextField>
      <TextField
        label="Subtotal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={subtotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              roll,
              room,
              hostel,
              subtotal: value,
              total,
            };
            const result = onChange(modelFields);
            value = result?.subtotal ?? value;
          }
          if (errors.subtotal?.hasError) {
            runValidationTasks("subtotal", value);
          }
          setSubtotal(value);
        }}
        onBlur={() => runValidationTasks("subtotal", subtotal)}
        errorMessage={errors.subtotal?.errorMessage}
        hasError={errors.subtotal?.hasError}
        {...getOverrideProps(overrides, "subtotal")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              email,
              roll,
              room,
              hostel,
              subtotal,
              total: value,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
