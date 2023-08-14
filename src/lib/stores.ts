import { writable } from "svelte/store"

export const location = writable("")

export const breadcrumb_items = writable<{ title: string, path: string }[]>([{ title: "Projects", path: "/console/projects" }])

export const show_create_project = writable(false)

export const show_delete_project = writable(false)

export const show_create_entity = writable(false)

export const show_delete_entity = writable(false)

export const targetted_entity = writable<{name:string, project:string}>({name:"", project:""})

export const show_create_api_key = writable(false)

export const show_delete_api_key = writable(false)

export const show_edit_api_key = writable(false)

export const targetted_key = writable<{
    id: string;
    key: string;
    name: string;
    project: string;
    created_at: string;
    permissions: string;
}>({
    id: "",
    key:"",
    name:"",
    project:"",
    created_at:"",
    permissions:'{"write_permission":true,"create_permission":true,"delete_permission":true}'
})

export const api_key_store = writable("")

export const show_create_entry = writable(false)

export const show_delete_entry = writable(false)

export const targetted_entry = writable("")

export const loaded_preview = writable(false)

export const show_edit_project = writable(false)

export const show_share_project = writable(false)

export const show_delete_or_trash_project = writable(false)

export const show_delete_confirmation = writable(false)

export const targetted_project = writable("")

export const show_notifications = writable(false)

export const show_notification_viewer = writable(false)

export const targetted_notification = writable<{
  id:string,
  type:"invitation"|"notification",
  read: boolean,
  notifiee:string,
  message:string,
  invitation?:string
}>({id:"", type:"invitation",notifiee:"", message:"", read:false})

export const invitation_token = writable("")

export const show_invitation_token = writable(false)

export const show_signout = writable(false)

export const show_image_previewer = writable(false)
export const previewer_source = writable("")
