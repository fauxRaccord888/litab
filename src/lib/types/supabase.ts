export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      artists: {
        Row: {
          abstract: string | null
          bio: string | null
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          abstract?: string | null
          bio?: string | null
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          abstract?: string | null
          bio?: string | null
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      cosmos: {
        Row: {
          created_at: string
          id: string
          name: string
          shooting_star_colors: string[]
          shooting_star_count: number
          size_param: number
          speed_param: number
          star_count: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          shooting_star_colors: string[]
          shooting_star_count: number
          size_param: number
          speed_param: number
          star_count: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          shooting_star_colors?: string[]
          shooting_star_count?: number
          size_param?: number
          speed_param?: number
          star_count?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Cosmos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Cosmos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      followings: {
        Row: {
          follower_id: string
          following_id: string
        }
        Insert: {
          follower_id: string
          following_id: string
        }
        Update: {
          follower_id?: string
          following_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_followings_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_followings_follower_id_fkey"
            columns: ["follower_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_followings_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_followings_following_id_fkey"
            columns: ["following_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      genres: {
        Row: {
          abstract: string | null
          description: string | null
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          abstract?: string | null
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          abstract?: string | null
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      oeuvres: {
        Row: {
          description: string | null
          id: string
          release_date: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          release_date?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          release_date?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      oeuvres_artists: {
        Row: {
          artist_id: string
          oeuvre_id: string
        }
        Insert: {
          artist_id: string
          oeuvre_id: string
        }
        Update: {
          artist_id?: string
          oeuvre_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_oeuvres_artists_artist_id_fkey"
            columns: ["artist_id"]
            isOneToOne: false
            referencedRelation: "artists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_oeuvres_artists_oeuvre_id_fkey"
            columns: ["oeuvre_id"]
            isOneToOne: false
            referencedRelation: "oeuvres"
            referencedColumns: ["id"]
          },
        ]
      }
      oeuvres_genres: {
        Row: {
          genre_id: string
          oeuvre_id: string
        }
        Insert: {
          genre_id: string
          oeuvre_id: string
        }
        Update: {
          genre_id?: string
          oeuvre_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_oeuvres_genres_genre_id_fkey"
            columns: ["genre_id"]
            isOneToOne: false
            referencedRelation: "genres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_oeuvres_genres_oeuvre_id_fkey"
            columns: ["oeuvre_id"]
            isOneToOne: false
            referencedRelation: "oeuvres"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagram_nodes: {
        Row: {
          created_at: string
          id: string
          oeuvre_id: string
          pentagram_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          oeuvre_id: string
          pentagram_id: string
        }
        Update: {
          created_at?: string
          id?: string
          oeuvre_id?: string
          pentagram_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagrams_nodes_oeuvre_id_fkey"
            columns: ["oeuvre_id"]
            isOneToOne: false
            referencedRelation: "oeuvres"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagrams_nodes_pentagram_id_fkey"
            columns: ["pentagram_id"]
            isOneToOne: false
            referencedRelation: "pentagrams"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagram_revision_recover_records: {
        Row: {
          current_angle: number
          current_distance: number
          id: string
          pentagram_node_id: string
          revision_id: string
        }
        Insert: {
          current_angle?: number
          current_distance?: number
          id?: string
          pentagram_node_id: string
          revision_id: string
        }
        Update: {
          current_angle?: number
          current_distance?: number
          id?: string
          pentagram_node_id?: string
          revision_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_node_id_fkey"
            columns: ["pentagram_node_id"]
            isOneToOne: false
            referencedRelation: "pentagram_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_revision_id_fkey"
            columns: ["revision_id"]
            isOneToOne: false
            referencedRelation: "pentagram_revisions"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagram_revision_remove_records: {
        Row: {
          id: string
          pentagram_node_id: string
          previous_angle: number
          previous_distance: number
          revision_id: string
        }
        Insert: {
          id?: string
          pentagram_node_id: string
          previous_angle?: number
          previous_distance?: number
          revision_id: string
        }
        Update: {
          id?: string
          pentagram_node_id?: string
          previous_angle?: number
          previous_distance?: number
          revision_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_node_id_fkey"
            columns: ["pentagram_node_id"]
            isOneToOne: false
            referencedRelation: "pentagram_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_revision_id_fkey"
            columns: ["revision_id"]
            isOneToOne: false
            referencedRelation: "pentagram_revisions"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagram_revision_update_records: {
        Row: {
          current_angle: number
          current_distance: number
          id: string
          pentagram_node_id: string
          previous_angle: number
          previous_distance: number
          revision_id: string
        }
        Insert: {
          current_angle?: number
          current_distance?: number
          id?: string
          pentagram_node_id: string
          previous_angle?: number
          previous_distance?: number
          revision_id: string
        }
        Update: {
          current_angle?: number
          current_distance?: number
          id?: string
          pentagram_node_id?: string
          previous_angle?: number
          previous_distance?: number
          revision_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_node_id_fkey"
            columns: ["pentagram_node_id"]
            isOneToOne: false
            referencedRelation: "pentagram_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_revision_id_fkey"
            columns: ["revision_id"]
            isOneToOne: false
            referencedRelation: "pentagram_revisions"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagram_revision_upsert_records: {
        Row: {
          current_angle: number
          current_distance: number
          id: string
          pentagram_node_id: string
          revision_id: string
        }
        Insert: {
          current_angle?: number
          current_distance?: number
          id?: string
          pentagram_node_id: string
          revision_id: string
        }
        Update: {
          current_angle?: number
          current_distance?: number
          id?: string
          pentagram_node_id?: string
          revision_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_node_id_fkey"
            columns: ["pentagram_node_id"]
            isOneToOne: false
            referencedRelation: "pentagram_nodes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagram_revision_upsert_records_revision_id_fkey"
            columns: ["revision_id"]
            isOneToOne: false
            referencedRelation: "pentagram_revisions"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagram_revisions: {
        Row: {
          created_at: string
          id: string
          pentagram_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          pentagram_id: string
          user_id?: string
        }
        Update: {
          created_at?: string
          id?: string
          pentagram_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagram_revision_pentagram_id_fkey"
            columns: ["pentagram_id"]
            isOneToOne: false
            referencedRelation: "pentagrams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagram_revision_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagram_revision_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      pentagrams: {
        Row: {
          created_at: string
          description: string | null
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          user_id?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_pentagrams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_pentagrams_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      shadows: {
        Row: {
          avoid_factor: number
          body_length: number
          centering_factor: number
          color: string
          created_at: string
          id: string
          matching_factor: number
          min_distance: number
          name: string
          speed_limit: number
          turn_factor: number
          user_id: string
          visual_range: number
        }
        Insert: {
          avoid_factor: number
          body_length: number
          centering_factor: number
          color: string
          created_at?: string
          id?: string
          matching_factor: number
          min_distance: number
          name: string
          speed_limit: number
          turn_factor: number
          user_id: string
          visual_range: number
        }
        Update: {
          avoid_factor?: number
          body_length?: number
          centering_factor?: number
          color?: string
          created_at?: string
          id?: string
          matching_factor?: number
          min_distance?: number
          name?: string
          speed_limit?: number
          turn_factor?: number
          user_id?: string
          visual_range?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_shadow_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_shadow_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          description: string | null
          id: string
          mutable_id: string
          nickname: string | null
          updated_at: string | null
        }
        Insert: {
          description?: string | null
          id?: string
          mutable_id?: string
          nickname?: string | null
          updated_at?: string | null
        }
        Update: {
          description?: string | null
          id?: string
          mutable_id?: string
          nickname?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      worley: {
        Row: {
          color: string
          created_at: string
          grid_count: number
          id: string
          limit: number
          movement_param: number
          name: string
          user_id: string
        }
        Insert: {
          color: string
          created_at?: string
          grid_count: number
          id?: string
          limit: number
          movement_param: number
          name: string
          user_id: string
        }
        Update: {
          color?: string
          created_at?: string
          grid_count?: number
          id?: string
          limit?: number
          movement_param?: number
          name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_worley_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "feed"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_worley_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      feed: {
        Row: {
          id: string | null
        }
        Insert: {
          id?: string | null
        }
        Update: {
          id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Functions: {
      _insert_node:
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              upsert: Database["public"]["CompositeTypes"]["pentagrams_upsert_changes"][]
            }
            Returns: undefined
          }
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              upsert_changes: Database["public"]["CompositeTypes"]["pentagram_upsert_changes"][]
            }
            Returns: undefined
          }
      _recover_node:
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              recover: Database["public"]["Tables"]["pentagram_revision_recover_records"]["Row"][]
            }
            Returns: undefined
          }
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              recover_changes: Database["public"]["CompositeTypes"]["pentagram_recover_changes"][]
            }
            Returns: undefined
          }
      _remove_node:
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              remove: Database["public"]["CompositeTypes"]["pentagrams_recover_changes"][]
            }
            Returns: undefined
          }
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              remove_changes: Database["public"]["CompositeTypes"]["pentagram_remove_changes"][]
            }
            Returns: undefined
          }
      _update_node:
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              update: Database["public"]["CompositeTypes"]["pentagrams_update_changes"][]
            }
            Returns: undefined
          }
        | {
            Args: {
              pentagram_id: string
              revision_id: string
              update_changes: Database["public"]["CompositeTypes"]["pentagram_update_changes"][]
            }
            Returns: undefined
          }
      batched_insert_pentagram: {
        Args: {
          upsert_changes: Database["public"]["CompositeTypes"]["pentagrams_upsert_changes"][]
        }
        Returns: string
      }
      batched_update_pentagram: {
        Args: {
          pentagram_id: string
          upsert_changes: Database["public"]["CompositeTypes"]["pentagram_upsert_changes"][]
          update_changes: Database["public"]["CompositeTypes"]["pentagram_update_changes"][]
          remove_changes: Database["public"]["CompositeTypes"]["pentagram_remove_changes"][]
          recover_changes: Database["public"]["CompositeTypes"]["pentagram_recover_changes"][]
        }
        Returns: string
      }
      get_followings: {
        Args: {
          uid: string
        }
        Returns: string[]
      }
      items: {
        Args: {
          "": unknown
        }
        Returns: {
          created_at: string
          id: string
          pentagram_id: string
          user_id: string
        }[]
      }
      recommendation: {
        Args: {
          "": unknown
        }
        Returns: {
          description: string | null
          id: string
          mutable_id: string
          nickname: string | null
          updated_at: string | null
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      pentagram_recover_changes: {
        node_id: string | null
        current_angle: number | null
        current_distance: number | null
      }
      pentagram_remove_changes: {
        node_id: string | null
        previous_angle: number | null
        previous_distance: number | null
      }
      pentagram_update_changes: {
        node_id: string | null
        previous_angle: number | null
        previous_distance: number | null
        current_angle: number | null
        current_distance: number | null
      }
      pentagram_upsert_changes: {
        current_angle: number | null
        current_distance: number | null
        oeuvre_id: string | null
      }
      pentagrams_recover_changes: {
        node_id: string | null
        current_angle: number | null
        current_distance: number | null
      }
      pentagrams_remove_changes: {
        node_id: string | null
        previous_angle: number | null
        previous_distance: number | null
      }
      pentagrams_update_changes: {
        node_id: string | null
        previous_angle: number | null
        previous_distance: number | null
        current_angle: number | null
        current_distance: number | null
      }
      pentagrams_upsert_changes: {
        current_angle: number | null
        current_distance: number | null
        oeuvre_id: string | null
      }
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

