"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "@/lib/axiosInstance";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { ArrowRight } from "lucide-react";

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

    <ErrorMessage
      name={name}
      component="p"
      className="text-sm text-red-500"
    />
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

const RnaPage = () => {
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
      await axiosInstance.post("/service-request", values);
      resetForm();
    } catch (err) {
      console.error(err);
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

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Field as={Input} name="name" id="name" />
              <ErrorMessage name="name" component="p" className="text-sm text-red-500"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Field as={Input} name="company" id="company" />
              <ErrorMessage name="company" component="p" className="text-sm text-red-500"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerId">Customer ID</Label>
              <Field as={Input} name="customerId" id="customerId" />
              <ErrorMessage name="customerId" component="p" className="text-sm text-red-500"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Field as={Input} name="address" id="address" />
              <ErrorMessage name="address" component="p" className="text-sm text-red-500"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Field as={Input} name="phone" id="phone" />
              <ErrorMessage name="phone" component="p" className="text-sm text-red-500"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Field as={Input} name="email" id="email" type="email" />
              <ErrorMessage name="email" component="p" className="text-sm text-red-500"/>
            </div>

          </div>

          {/* Product Info */}
          <div className="grid md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <Label htmlFor="modelNo">Model No</Label>
              <Field as={Input} name="modelNo" id="modelNo"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="serialNo">Serial No</Label>
              <Field as={Input} name="serialNo" id="serialNo"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfPurchase">Date Of Purchase</Label>
              <Field as={Input} name="dateOfPurchase" type="date"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purchasedFrom">Purchased From</Label>
              <Field as={Input} name="purchasedFrom"/>
            </div>

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
              <Field as={Input} name="otherItem"/>
            </div>
          )}

          {/* Fault */}
          <div className="space-y-2">
            <Label htmlFor="fault">Fault</Label>
            <Field as={Textarea} name="fault"/>
          </div>

          {/* Remarks */}
          <div className="space-y-2">
            <Label htmlFor="remarks">Remarks</Label>
            <Field as={Textarea} name="remarks"/>
          </div>

          {/* Dispatch Info */}
          <div className="grid md:grid-cols-2 gap-6">

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
              <Field as={Input} name="trackingNumber"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dispatchedDate">Dispatched Date</Label>
              <Field as={Input} name="dispatchedDate" type="date"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="dispatchDestination">Dispatch Destination</Label>
              <Field as={Input} name="dispatchDestination"/>
            </div>

          </div>

          {/* Footer */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="space-y-2">
              <Label htmlFor="place">Place</Label>
              <Field as={Input} name="place"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="formDate">Form Date</Label>
              <Field as={Input} name="formDate" type="date"/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="sign">Signature</Label>
              <Field as={Input} name="sign"/>
            </div>

          </div>

          <Button type="submit" className="w-full">
            Submit <ArrowRight className="ml-2 h-4 w-4"/>
          </Button>

        </Form>
      )}
    </Formik>
  );
};

export default RnaPage;
