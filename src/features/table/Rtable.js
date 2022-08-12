import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import {
    DatatableWrapper,
    Filter,
    Pagination,
    PaginationOptions,
    TableBody,
    TableHeader
} from "react-bs-datatable";


// Create table headers consisting of 4 columns.
const STORY_HEADERS = [
    {
        prop: "name",
        title: "Name",
        isFilterable: true,
        isSortable: true,
    },
    {
        prop: "email",
        title: "Email",
        isFilterable: true,
        isSortable: true,
    },
    {
        prop: "body",
        title: "Body"
    },
    // {
    //     prop: "date",
    //     title: "Last Update"
    // },
    // {
    //     prop: "score",
    //     title: "Score",
    //     isSortable: true
    // }
];

// Then, use it in a component.
export default function Rtable() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const getData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/comments")
            const res1 = await res.json()
            setData(res1)
        }
        getData()

    }, [])
    return (
        <div className="container">
            <DatatableWrapper
                body={data}
                headers={STORY_HEADERS}
                paginationOptionsProps={{
                    initialState: {
                        rowsPerPage: 10,
                        options: [5, 10, 15, 20]
                    }
                }}
            >
                <Row className="mb-4 p-2">
                    <Col
                        xs={12}
                        lg={4}
                        className="d-flex flex-col justify-content-end align-items-end"
                    >
                        <Filter />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="d-flex flex-col justify-content-lg-center align-items-center justify-content-sm-start mb-2 mb-sm-0"
                    >
                        <PaginationOptions />
                    </Col>
                    <Col
                        xs={12}
                        sm={6}
                        lg={4}
                        className="d-flex flex-col justify-content-end align-items-end"
                    >
                        <Pagination />
                    </Col>
                </Row>
                <Table>
                    <TableHeader />
                    <TableBody />
                </Table>
            </DatatableWrapper>
        </div>
    );
}
