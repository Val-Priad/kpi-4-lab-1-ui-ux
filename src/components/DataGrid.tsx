import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (_, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function dataGrid() {
  return (
    <div className="table-box card">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        sx={{
          margin: "1.56rem 0",
          backgroundColor: "var(--text)",
          borderColor: "var(--brand-color)",
        }}
      />
      <p className="card-text">
        A data grid is an advanced table component designed to display and
        manage large sets of structured data. It supports features like
        sorting, filtering, pagination, inline editing, and row selection,
        making it useful for dashboards, admin panels, and any interface where
        users need to view and interact with tabular information efficiently.
      </p>
    </div>
  );
}
