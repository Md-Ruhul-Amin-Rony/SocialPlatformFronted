import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import userStore from "./userStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import CommentStore from "./commentStore";






interface Store{
    activityStore:ActivityStore,
    commonStore:CommonStore;
    userStore:userStore;
    modalStore:ModalStore;
    profileStore:ProfileStore;
    commentStore:CommentStore;
    
    
}
export const store: Store={
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new userStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    commentStore: new CommentStore()

}
export const StoreContext= createContext(store);

export function useStore(){
    return useContext(StoreContext);
}