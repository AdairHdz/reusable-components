import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const renderLinks = () => {
    // const authenticatedUser = getAuthenticatedUser();
    // const userRole = authenticatedUser?.Roles[0].role;
    const menuLinks = [
        {
            name: "Inicio",
            path: "/",
            icon: (
                <FontAwesomeIcon
                    icon={"fa-solid fa fa-home"}
                    style={{
                        fontSize: "1.2rem",
                    }}
                />
            )
        }
    ];
    // switch (userRole) {
    //     case "Súper usuario":
    //         menuLinks.push({
    //             name: "Mantenedores",
    //             path: "/",
    //             icon: (
    //                 <FontAwesomeIcon
    //                     icon={"fa-solid fa-gears"}
    //                     style={{
    //                         fontSize: "1.2rem",
    //                     }}
    //                 />
    //             ),
    //             elements: [
    //                 {
    //                     name: "Familias de cargos",
    //                     path: "groups"
    //                 },
    //                 {
    //                     name: "Cargos",
    //                     path: "positions"
    //                 },
    //                 {
    //                     name: "Planes",
    //                     path: "plans"
    //                 },
    //                 {
    //                     name: "Usuarios",
    //                     path: "users"
    //                 },
    //             ]
    //         },);
    //         menuLinks.push({
    //             name: "Reportes",
    //             icon: (
    //                 <FontAwesomeIcon
    //                     icon={"fa-solid fa-file"}
    //                     style={{
    //                         fontSize: "1.2rem",
    //                     }}
    //                 />
    //             ),
    //             elements: [
    //                 {
    //                     name: "Resumen",
    //                     path: "reports/overview",
    //                 },
    //             ]
    //         },);
    //         break;
    //     case "Administrador de RRHH":
    //         menuLinks.push(
    //             {
    //                 name: "Administrador de RRHH",
    //                 icon: (
    //                     <FontAwesomeIcon
    //                         icon={"fa-solid fa-gears"}
    //                         style={{
    //                             fontSize: "1.2rem",
    //                         }}
    //                     />
    //                 ),
    //                 elements: [
    //                     {
    //                         name: "Configuración inicial",
    //                         path: "collaborators/initial-setup"
    //                     },
    //                     {
    //                         name: "Lista de colaboradores",
    //                         path: "collaborators"
    //                     },
    //                 ]
    //             },
    //         );
    //         break;
    //     case "Tutor":
    //         menuLinks.push(
    //             {
    //                 name: "Lista de colaboradores",
    //                 icon: (
    //                     <FontAwesomeIcon
    //                         icon={"fa-solid fa-list"}
    //                         style={{
    //                             fontSize: "1.2rem",
    //                         }}
    //                     />
    //                 ),
    //                 path: "collaborators",
    //             }
    //         );
    //         break;
    //     case "Jefe":
    //         menuLinks.push(
    //             {
    //                 name: "Lista de colaboradores",
    //                 icon: (
    //                     <FontAwesomeIcon
    //                         icon={"fa-solid fa-list"}
    //                         style={{
    //                             fontSize: "1.2rem",
    //                         }}
    //                     />
    //                 ),
    //                 path: "collaborators",
    //             }
    //         );
    //         break;
    //     case "Colaborador":
    //         menuLinks.push(
    //             {
    //                 name: "Colaborador",
    //                 icon: (
    //                     <FontAwesomeIcon
    //                         icon={"fa-solid fa-gears"}
    //                         style={{
    //                             fontSize: "1.2rem",
    //                         }}
    //                     />
    //                 ),
    //                 elements: [
    //                     {
    //                         name: "Mi Onboarding",
    //                         path: `collaborators/see/${authenticatedUser?.user_collaborators[0]?.processes[0]?.id}`
    //                     },
    //                     {
    //                         name: "Mis documentos",
    //                         path: `/collaborators/${authenticatedUser?.id}/processes/${authenticatedUser?.user_collaborators[0]?.processes[0]?.id}/documents`
    //                     },
    //                 ]
    //             }
    //         );
    //         break;
    //     case "Root":
    //         menuLinks.push(
    //             {
    //                 name: "Configuración",
    //                 icon: (
    //                     <FontAwesomeIcon
    //                         icon={"fa-solid fa-gears"}
    //                         style={{
    //                             fontSize: "1.2rem",
    //                         }}
    //                     />
    //                 ),
    //                 elements: [
    //                     {
    //                         name: "Tema",
    //                         path: `/themes`
    //                     },
    //                     {
    //                         name: "Servicios",
    //                         path: `/services`
    //                     },
    //                 ]
    //             }
    //         );
    //         break;

    // }
    return menuLinks;
};