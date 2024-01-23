// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type Project = {
  id: string;
  name: string;
  title: string;
  image_url: string;
};


export type CustomersTableType = {
  id: string;
  name: string;
  title: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  title: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type ProjectField = {
  id: string;
  name: string;
};


