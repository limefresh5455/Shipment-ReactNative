import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import DatePicker from "react-native-modern-datepicker";

const PaymentScreen = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Formik
      initialValues={{
        myDate: date,
      }}
      onSubmit={(values) => console.log(values)}
    >
      {(formikProps) => (
        <View>
          <DatePicker
            style={{ width: "100%" }}
            mode="calendar"
            date={formikProps.values.myDate}
            onDateChange={(value) => {
              setDate(value);
              formikProps.setFieldValue("myDate", value);
            }}
            // dateFormat="YYYY-MM-DD"
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={formikProps.handleChange("myDate")}
            value={formikProps.values.myDate.toISOString().slice(0, 10)}
          />
          <Button title="Submit" onPress={formikProps.handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default PaymentScreen;
