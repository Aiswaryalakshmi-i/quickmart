import { addViewToListingRoute } from "./addViewToListing";
import { createNewListingRoute } from "./createNewListing";
import { deleteListingRoute } from "./deleteList";
import { getAllListingsRoute } from "./getAllList";
import { getListingsRoute } from "./getList";
import { getUserListingRoute } from "./getUserListings";
import { updateListingRoute } from "./updateList";

export default [
    getAllListingsRoute,
    getListingsRoute,
    addViewToListingRoute,
    getUserListingRoute,
    createNewListingRoute,
    updateListingRoute,
    deleteListingRoute

];