export enum ProductType {
  Company = 'company-portal',
  Candidate = 'candidate-portal',
}

export enum ChatStatus {
  online = 'online',
  offline = 'offline',
}

export enum FileExtension {
  pdf = 'pdf',
  doc = 'doc',
  docx = 'docx',
  peng = 'png',
  jpg = 'jpg',
  png = 'png',
  tiff = 'tiff',
  xls = 'xls',
  xlsx = 'xlsx',
  page = 'page',
  mp4 = 'mp4',
  mov = 'mov',
  text = 'text',
}

export enum BotAvatarType {
  CalenderYellow = 'CalenderYellow',
  CalenderCyan = 'CalenderCyan',
  CalenderRed = 'CalenderRed',
  CalenderGreen = 'CalenderGreen',
  ClipYellow = 'ClipYellow',
  ClipCyan = 'ClipCyan',
  ClipRed = 'ClipRed',
  ClipGreen = 'ClipGreen',
  PenYellow = 'PenYellow',
  PenCyan = 'PenCyan',
  PenRed = 'PenRed',
  PenGreen = 'PenGreen',
  LockYellow = 'LockYellow',
  LockCyan = 'LockCyan',
  LockRed = 'LockRed',
  LockGreen = 'LockGreen',
}

// API request error code message
export const ErrorCodeMessage = {
  200: 'Request succeeded',
  201: 'Resource created.',
  202: 'A request has entered the background queue (asynchronous task)',
  204: 'No Content - Request succeeded, but no response body',
  400: 'Bad Request - Could not parse request',
  401: 'Unauthorized - No authentication credentials provided or authentication failed',
  403: 'Forbidden - Authenticated user does not have access',
  404: 'Not Found - Resource not found',
  406: 'The format of the request is not available',
  410: 'The requested resource is permanently deleted and will not be retrieved',
  415: 'Unsupported Media Type - POST/PUT/PATCH request occurred without a "application/json" content type',
  422: 'Data validation failed',
  500: 'An internal server error occurred',
  502: 'Gateway error',
  503: 'Service is unavailable, server is temporarily overloaded or maintained',
  504: 'Gateway timeout',
};

export enum RolesConstants {
  AuroraAdmin = 'aurora-admin',
  Candidate = 'candidate',
  CompanyAdmin = 'company-admin',
  CompanyRecruiter = 'company-recruiter',
  CompanyMember = 'company-member',
  CompanyGuest = 'company-guest',
  Chatbot = 'chatbot',
  CompanyOwner = 'company-owner',
  CompanyBilling = 'company-billing',
}

export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const daysOfTheWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
