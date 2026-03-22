export interface ComboEvent {
    device: number;
    index: number;
    pressed: boolean;
    timestamp: number;
    type: 'axis' | 'button';
    value: number;
}

export interface DojoFileContent {
    combo: ComboEvent[];
    description: string;
}

// Representación en la base de datos (Supabase)
export interface ComboDB {
    id: string;
    name: string;
    json_data_url: string;
    image_url: string;
    video_url: string;
    user_id: string;
    created_at: string;
}
