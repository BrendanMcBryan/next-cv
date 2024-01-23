import { sql } from '@vercel/postgres';
import {
  Project,
  
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchProjects() {
  noStore();
  try {
    const data = await sql<Project>`SELECT * FROM projects`;

    const projects = data.rows;
    return projects;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all projects.');
  }
}