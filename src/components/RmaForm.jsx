"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/lib/axiosInstance";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import EmailSuccessPopup from "./forms/EmailSuccessPopup";

const Select = ({ label, name, children }) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>

    <Field
      as="select"
      name={name}
      id={name}
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
    >
      {children}
    </Field>

    <ErrorMessage name={name} component="p" className="text-sm text-red-500" />
  </div>
);

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  company: Yup.string().required("Required"),
  customerId: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  email: Yup.string().email().required("Required"),

  modelNo: Yup.string().required("Required"),
  serialNo: Yup.string().required("Required"),
  dateOfPurchase: Yup.date().required("Required"),
  purchasedFrom: Yup.string().required("Required"),

  dispatchedItem: Yup.string().required("Required"),
  otherItem: Yup.string().when("dispatchedItem", {
    is: "Other",
    then: (schema) => schema.required("Please specify item"),
  }),

  fault: Yup.string().required("Required"),
  remarks: Yup.string().required("Required"),

  dispatchThrough: Yup.string().required("Required"),
  trackingNumber: Yup.string().required("Required"),
  dispatchedDate: Yup.date().required("Required"),
  dispatchDestination: Yup.string().required("Required"),

  place: Yup.string().required("Required"),
  formDate: Yup.date().required("Required"),
  sign: Yup.string().required("Required"),
});

const RmaForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const initialValues = {
    name: "",
    company: "",
    customerId: "",
    address: "",
    phone: "",
    email: "",

    modelNo: "",
    serialNo: "",
    dateOfPurchase: "",
    purchasedFrom: "",

    dispatchedItem: "",
    otherItem: "",

    fault: "",
    remarks: "",

    dispatchThrough: "",
    trackingNumber: "",
    dispatchedDate: "",
    dispatchDestination: "",

    place: "",
    formDate: "",
    sign: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.post("/form/service-request", values);

      if (res?.status === 201) {
        setTimeout(() => {
          setIsSuccess(true);
          setIsLoading(false);
          resetForm();
        }, 500);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(false);
      }, 1000);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form className="space-y-6">
          {isSuccess && <EmailSuccessPopup />}
          {/* Basic Info */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Field as={Input} name="name" id="name" />
              <ErrorMessage
                name="name"
                component="p"
                className="text-sm text-red-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Field as={Input} name="company" id="company" />
              <ErrorMessage
                name="company"
                component="p"
                className="text-sm text-red-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerId">Customer ID</Label>
              <Field as={Input} name="customerId" id="customerId" />
              <ErrorMessage
                name="customerId"
                component="p"
                className="text-sm text-red-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Field as={Input} name="address" id="address" />
              <ErrorMessage
                name="address"
                component="p"
                className="text-sm text-red-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Field as={Input} name="phone" id="phone" />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-sm text-red-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Field as={Input} name="email" id="email" type="email" />
              <ErrorMessage
                name="email"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
         

          {/* Product Info */}

          <div className="space-y-2">
            <Label htmlFor="modelNo">Model No</Label>
            <Field as={Input} name="modelNo" id="modelNo" />
            <ErrorMessage
              name="modelNo"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="serialNo">Serial No</Label>
            <Field as={Input} name="serialNo" id="serialNo" />
            <ErrorMessage
              name="serialNo"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dateOfPurchase">Date Of Purchase</Label>
            <Field as={Input} name="dateOfPurchase" type="date" />
            <ErrorMessage
              name="dateOfPurchase"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purchasedFrom">Purchased From</Label>
            <Field as={Input} name="purchasedFrom" />
            <ErrorMessage
              name="purchasedFrom"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Dispatched Item */}
          <Select name="dispatchedItem" label="Dispatched Item">
            <option value="">Select</option>
            <option>Device</option>
            <option>Power Adapter</option>
            <option>Back Panel</option>
            <option>Metal Box</option>
            <option>Battery</option>
            <option>GPS Module</option>
            <option>Connector</option>
            <option>USB Cable</option>
            <option>Other</option>
          </Select>

          {values.dispatchedItem === "Other" && (
            <div className="space-y-2">
              <Label htmlFor="otherItem">Other Item</Label>
              <Field as={Input} name="otherItem" />
              <ErrorMessage
                name="otherItem"
                component="p"
                className="text-sm text-red-500"
              />
            </div>
          )}

      

          {/* Dispatch Info */}

          <Select name="dispatchThrough" label="Dispatch Through">
            <option value="">Select</option>
            <option>DHL</option>
            <option>FedEx</option>
            <option>DTDC</option>
            <option>BlueDart</option>
            <option>Other</option>
          </Select>

          <div className="space-y-2">
            <Label htmlFor="trackingNumber">Tracking Number</Label>
            <Field as={Input} name="trackingNumber" />
            <ErrorMessage
              name="trackingNumber"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dispatchedDate">Dispatched Date</Label>
            <Field as={Input} name="dispatchedDate" type="date" />
            <ErrorMessage
              name="dispatchedDate"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dispatchDestination">Dispatch Destination</Label>
            <Field as={Input} name="dispatchDestination" />
            <ErrorMessage
              name="dispatchDestination"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Footer */}

          <div className="space-y-2">
            <Label htmlFor="place">Place</Label>
            <Field as={Input} name="place" />
            <ErrorMessage
              name="place"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="formDate">Form Date</Label>
            <Field as={Input} name="formDate" type="date" />
            <ErrorMessage
              name="formDate"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sign">Signature</Label>
            <Field as={Input} name="sign" />
            <ErrorMessage
              name="sign"
              component="p"
              className="text-sm text-red-500"
            />
          </div>
              {/* Fault */}
          <div className="space-y-2">
            <Label htmlFor="fault">Fault</Label>
            <Field as={Textarea} name="fault" />
            <ErrorMessage
              name="fault"
              component="p"
              className="text-sm text-red-500"
            />
          </div>

          {/* Remarks */}
          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Field as={Textarea} name="remarks" />
            <ErrorMessage
              name="remarks"
              component="p"
              className="text-sm text-red-500"
            />
          </div>
           </div>
          <Button type="submit" className="w-full">
            {isLoading ? "Submitting..." : "Submit"}{" "}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RmaForm;
