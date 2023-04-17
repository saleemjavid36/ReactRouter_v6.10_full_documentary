import { redirect } from "react-router-dom";
import { deleteContact } from "../contacts";

export async function action({ params }) {
    // if u want to throw an error while deleting 
    // instead of deleting li we can add like this

    // throw new Error("oh dang!");
    
    await deleteContact(params.contactId);
    return redirect("/");
}