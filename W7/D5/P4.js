//Basics of RBAC
const routePermissions={
    "/admin":["admin"],
    "/reports":["admin","manager"],
    "/profile":["admin","manager","user"]
};
function canAccess(route,role){
    const allowedRoles=routePermissions[route] || [];
    return allowedRoles.includes(role);
}
console.log("Useraccess to /admin:",canAccess("/admin","user"));
console.log("Admin to /admin:",canAccess("/admin","admin"));
console.log("Manager to /reports:",canAccess("/reports","manager"));
console.log("Useraccess to /profile:",canAccess("/profile","user"));