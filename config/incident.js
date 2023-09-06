const rowDataNamFL = [
  [
    "INC23975624",
    "P1",
    "In Progress",
    "Server Down",
    "FLApp1",
    "2",
    "uks-yf738",
    "John Doe",
  ],
  [
    "INC23975634",
    "P2",
    "In Progress",
    "user unable to access",
    "FLApp2",
    "3",
    "nrw-yf738",
    "John Doe",
  ],
  [
    "INC23975644",
    "P3",
    "In Progress",
    "FTP Job Failure",
    "FLApp3",
    "4",
    "nrw-yhdfb",
    "John Doe",
  ],
];

const rowDataNamCslty = [
  [
    "INC23975624",
    "P1",
    "In Progress",
    "Server Down",
    "CSLTYApp1",
    "2",
    "uks-yf738",
    "John Doe",
  ],
  [
    "INC23975634",
    "P2",
    "In Progress",
    "user unable to access",
    "CSLTYApp2",
    "3",
    "nrw-yf738",
    "John Doe",
  ],
  [
    "INC23975644",
    "P3",
    "In Progress",
    "FTP Job Failure",
    "CSLTYApp3",
    "4",
    "nrw-yhdfb",
    "John Doe",
  ],
];

const rowDataLatam = [
  [
    "INC23975624",
    "P1",
    "In Progress",
    "LatamApp1",
    "2",
    "uks-yf738",
    "John Doe",
  ],
  [
    "INC23975634",
    "P2",
    "In Progress",
    "LatamApp2",
    "3",
    "nrw-yf738",
    "John Doe",
  ],
  [
    "INC23975644",
    "P3",
    "In Progress",
    "LatamApp3",
    "4",
    "nrw-yhdfb",
    "John Doe",
  ],
];

const rowDataApac = [
  [
    "INC23975624",
    "P1",
    "In Progress",
    "ApacApp1",
    "2",
    "uks-yf738",
    "John Doe",
  ],
  [
    "INC23975634",
    "P2",
    "In Progress",
    "ApacApp2",
    "3",
    "nrw-yf738",
    "John Doe",
  ],
  [
    "INC23975644",
    "P3",
    "In Progress",
    "ApacApp3",
    "4",
    "nrw-yhdfb",
    "John Doe",
  ],
  [
    "INC23975654",
    "P4",
    "In Progress",
    "ApacApp4",
    "5",
    "nrw-yq2423b",
    "John Doe",
  ],
  [
    "INC23975664",
    "P5",
    "In Progress",
    "ApacApp5",
    "6",
    "nrw-yf738",
    "John Doe",
  ],
];

const cols = [
  "Incident",
  "Severity",
  "Status",
  "Description",
  "Application",
  "Aging Hours",
  "Server Name",
  "Assigned to",
];

export const incidentDataNamFL = {
  rowData: rowDataNamFL,
  cols: cols,
  needsAttention: {
    styleOn: 0,
    checkCol: 1,
    value: "P1",
  },
};

export const incidentDataNamCslty = {
  rowData: rowDataNamCslty,
  cols: cols,
  needsAttention: {
    styleOn: 0,
    checkCol: 1,
    value: "P1",
  },
};

export const incidentDataLatam = {
  rowData: rowDataLatam,
  cols: cols,
  needsAttention: {
    styleOn: 0,
    checkCol: 1,
    value: "P1",
  },
};

export const incidentDataApac = {
  rowData: rowDataApac,
  cols: cols,
  needsAttention: {
    styleOn: 0,
    checkCol: 1,
    value: "P1",
  },
};
