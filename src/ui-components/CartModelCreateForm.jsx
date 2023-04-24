/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CartModel } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CartModelCreateForm(props) {
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
    product_name: "",
    product_price: "",
    product_qty: "",
    product_subtotal: "",
    email: "",
  };
  const [product_name, setProduct_name] = React.useState(
    initialValues.product_name
  );
  const [product_price, setProduct_price] = React.useState(
    initialValues.product_price
  );
  const [product_qty, setProduct_qty] = React.useState(
    initialValues.product_qty
  );
  const [product_subtotal, setProduct_subtotal] = React.useState(
    initialValues.product_subtotal
  );
  const [email, setEmail] = React.useState(initialValues.email);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProduct_name(initialValues.product_name);
    setProduct_price(initialValues.product_price);
    setProduct_qty(initialValues.product_qty);
    setProduct_subtotal(initialValues.product_subtotal);
    setEmail(initialValues.email);
    setErrors({});
  };
  const validations = {
    product_name: [{ type: "Required" }],
    product_price: [{ type: "Required" }],
    product_qty: [{ type: "Required" }],
    product_subtotal: [],
    email: [],
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
          product_name,
          product_price,
          product_qty,
          product_subtotal,
          email,
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
          await DataStore.save(new CartModel(modelFields));
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
      {...getOverrideProps(overrides, "CartModelCreateForm")}
      {...rest}
    >
      <TextField
        label="Product name"
        isRequired={true}
        isReadOnly={false}
        value={product_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              product_name: value,
              product_price,
              product_qty,
              product_subtotal,
              email,
            };
            const result = onChange(modelFields);
            value = result?.product_name ?? value;
          }
          if (errors.product_name?.hasError) {
            runValidationTasks("product_name", value);
          }
          setProduct_name(value);
        }}
        onBlur={() => runValidationTasks("product_name", product_name)}
        errorMessage={errors.product_name?.errorMessage}
        hasError={errors.product_name?.hasError}
        {...getOverrideProps(overrides, "product_name")}
      ></TextField>
      <TextField
        label="Product price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={product_price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              product_name,
              product_price: value,
              product_qty,
              product_subtotal,
              email,
            };
            const result = onChange(modelFields);
            value = result?.product_price ?? value;
          }
          if (errors.product_price?.hasError) {
            runValidationTasks("product_price", value);
          }
          setProduct_price(value);
        }}
        onBlur={() => runValidationTasks("product_price", product_price)}
        errorMessage={errors.product_price?.errorMessage}
        hasError={errors.product_price?.hasError}
        {...getOverrideProps(overrides, "product_price")}
      ></TextField>
      <TextField
        label="Product qty"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={product_qty}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              product_name,
              product_price,
              product_qty: value,
              product_subtotal,
              email,
            };
            const result = onChange(modelFields);
            value = result?.product_qty ?? value;
          }
          if (errors.product_qty?.hasError) {
            runValidationTasks("product_qty", value);
          }
          setProduct_qty(value);
        }}
        onBlur={() => runValidationTasks("product_qty", product_qty)}
        errorMessage={errors.product_qty?.errorMessage}
        hasError={errors.product_qty?.hasError}
        {...getOverrideProps(overrides, "product_qty")}
      ></TextField>
      <TextField
        label="Product subtotal"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={product_subtotal}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              product_name,
              product_price,
              product_qty,
              product_subtotal: value,
              email,
            };
            const result = onChange(modelFields);
            value = result?.product_subtotal ?? value;
          }
          if (errors.product_subtotal?.hasError) {
            runValidationTasks("product_subtotal", value);
          }
          setProduct_subtotal(value);
        }}
        onBlur={() => runValidationTasks("product_subtotal", product_subtotal)}
        errorMessage={errors.product_subtotal?.errorMessage}
        hasError={errors.product_subtotal?.hasError}
        {...getOverrideProps(overrides, "product_subtotal")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              product_name,
              product_price,
              product_qty,
              product_subtotal,
              email: value,
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
