// import PropTypes from "prop-types";
// import {
//   Col,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
// } from "reactstrap";
// import { useTheme } from "../../hooks/use-theme";
// import { ThemeButton } from "./ThemeButton";

// function ModalStandard(props) {
//   const {
//     theme
//   } = useTheme();

//   return (
//     <Modal
//       isOpen={props.isOpen}
//       toggle={props.toggle}
//       centered
//       size={props.size}      
//     >
//       <ModalHeader                
//         style={{
//           backgroundColor: theme.tertiaryVariantColor,          
//         }}
//         toggle={props.toggle}
//       >
        
//       </ModalHeader>
//       <ModalBody
//         className="text-center"
//         style={{
//           color: theme.primaryColor
//         }}
//       >
//         {props.children}
//       </ModalBody>
//       {props.haveFooter && (
//         <ModalFooter>
//           <Col className="d-grid">
//             <ThemeButton
//               className="rounded"
//               themeConfig={{
//                 background: {
//                   color: "transparent",
//                   onHoverColor: theme.tertiaryColor
//                 },
//                 border: {
//                   color: theme.tertiaryColor
//                 },
//                 text: {
//                   color: theme.tertiaryColor
//                 }
//               }}
//               onClick={props.toggle}>
//                 Cerrar
//             </ThemeButton>
//           </Col>
//           <Col className="d-grid">
//             {props.submit !== undefined && (
//               <ThemeButton
//                 onClick={props.submit}
//                 className="rounded"
//                 themeConfig={{
//                   background: {
//                     color: theme.secondaryColor
//                   }
//                 }}
//               >
//                 Aceptar
//               </ThemeButton>
//             )}
//           </Col>
//         </ModalFooter>
//       )}
//     </Modal>
//   );
// }

// ModalStandard.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toogle: PropTypes.func.isRequired,
//   title: PropTypes.string,
//   size: PropTypes.oneOf(["sm", "lg", "xl"]),
//   submit: PropTypes.func,
//   haveFooter: PropTypes.bool,
// };

// ModalStandard.defaultProps = {
//   haveFooter: true,
//   size: "md",
// };

// export default ModalStandard;
