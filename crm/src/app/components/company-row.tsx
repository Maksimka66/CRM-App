import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import StatusLabel, { Status } from './status-label';

export interface CompanyRowProps {
  id: number;
  category: string;
  company: string;
  country: string;
  joinedDate: string;
  promotion: boolean;
  status: Status;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not Active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyRow({
  id,
  category,
  company,
  country,
  joinedDate,
  promotion,
  status,
}: CompanyRowProps) {
  return;
}
