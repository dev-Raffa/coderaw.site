
export interface EmailRequest {
  email: string;
}

export interface ContactEmailRequest extends EmailRequest {
  name: string
}

export interface LeadEmailRequest extends ContactEmailRequest {
  company?: string;
  message: string;
  name: string;
  services: string[];
}

