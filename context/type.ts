export interface User {
  _id: string;
  name: string;
  username: string;
  email: string;
  password_hash: string;
  login_type: string;
  chips_balance: number;
  total_games_played: number;
  total_wins: number;
  is_admin: boolean;
  version: string;
  last_login: string; // ISO 8601 format
  is_blocked: boolean;
  is_deleted: boolean;
  created_at: string; // ISO 8601 format
  updated_at: string; // ISO 8601 format
  createdAt: string; // ISO 8601 format
  updatedAt: string; // ISO 8601 format
}

export interface AuthContextType {
  user?: User;
  setUser?: any;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error?: any;
  logout: () => void;
  token: string;
  profileDetails?: UserProfile | undefined;
  UserId?: string | number;
}
export interface UserProfile {
  avtar_key?: string | undefined;
  earning?: number;
  email?: string;
  full_name?: string;
  main_bal?: number;
  Profile?: string;
  ref_code?: string;
  status?: string;
  statuswinning: string;
  deposit?: string;
  username?: string;
  winning?: string | any;
  kyc_status: string;
  cash_won?: number;
  battle_played?: number;
  referral_earning?: number;
  profileDetails?: any;
}
export interface ReferalDetail {
  referal_count: string;
  ref_code: string;
  referral: any;
  commission: any;
  referal_earning: number | any;
}

export interface GameList {
  id: string;
  game_name: string;
  game_type: string;
  game_price: string;
  game_img: string;
  event_name: string;
}
