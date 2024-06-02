import { fileDTO } from 'src/modules/users/dto/user.dto';
import { IStorage } from './storage';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SuapabaseStorage implements IStorage {
  private client: SupabaseClient;
  constructor() {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_KEY;
    this.client = createClient(supabaseUrl ?? '', supabaseKey ?? '');
  }
  async upload(file: fileDTO, folder: string): Promise<any> {
    const data = await this.client.storage
      .from(process.env.SUPABASE_BUCKET ?? '')
      .upload(`${folder}/` + file.originalname, file.buffer, { upsert: true });
    return data;
  }
}
