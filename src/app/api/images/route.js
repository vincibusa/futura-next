// app/api/images/route.ts
import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  const { data, error } = await supabase
    .storage
    .from('catanzaroepartners')
    .list('', { sortBy: { column: 'name', order: 'asc' } });

  if (error) return NextResponse.json({ error }, { status: 500 });

  const files = data.map(f => ({
    name: f.name,
    url: `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/catanzaroepartners/${f.name}`
  }));

  return NextResponse.json(files);
}