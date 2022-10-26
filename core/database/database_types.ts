export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          created_at: string | null;
          name: string;
          discord_username: string;
          id: string;
        };
        Insert: {
          created_at?: string | null;
          name: string;
          discord_username: string;
          id?: string;
        };
        Update: {
          created_at?: string | null;
          name?: string;
          discord_username?: string;
          id?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
