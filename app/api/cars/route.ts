import { NextResponse } from 'next/server';

import { readCarJson } from './utils';

export async function GET() {
  return NextResponse.json({ cars: readCarJson() });
}
