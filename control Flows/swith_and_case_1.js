let role = "moderetor"
switch (role) {
    case "guest":
        console.log("Guest user")
        break;   // if we didn't use break it contain next statement
    case "moderetor":
        console.log("Moderator user")
        break;
    default:
        console.log("Unknown user")
}
