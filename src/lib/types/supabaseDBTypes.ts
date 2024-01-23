// https://dev.to/nasheomirro/handling-view-types-from-supabase-with-typescript-41hj
// views는 접근하기 어려우므로 DBTypes를 경유하는 것으로 통일

import type { Database } from "./supabase";

export type DBTypes = 
    { [P in keyof Database['public']['Tables']]: Database['public']['Tables'][P]['Row'] } & 
    { [P in keyof Database['public']['Views']]: Database['public']['Views'][P]['Row'] }