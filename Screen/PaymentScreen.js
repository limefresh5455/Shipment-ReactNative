// import React from "react";
// import { View, StyleSheet } from "react-native";
// import { CardForm } from "react-native-stripe-sdk";

// function PaymentScreen() {
//   const handleCardChange = (cardDetails) => {
//     console.log("Card details", cardDetails);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardFormContainer}>
//         <CardForm
//           onCardChange={handleCardChange}
//           style={styles.cardForm}
//           postalCodeEnabled={false}
//           placeholder={{
//             number: "Card Number",
//             expiry: "MM/YY",
//             cvc: "CVC",
//           }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   cardFormContainer: {
//     width: "80%",
//     height: 200,
//     alignItems: "center",
//   },
//   cardForm: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#f7f7f7",
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     fontSize: 16,
//     color: "#333",
//   },
// });

// export default PaymentScreen;
