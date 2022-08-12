import React from 'react';

function TableComp({list}) {
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>SNo</th>
                        <th>Title</th>
                        <th>userId</th>
                    </tr>

                </thead>
                <tbody>
                    {list.map((ele, i) => {
                        return <tr key={i}>
                            <td >{ele.id}</td>
                            <td >{ele.title}</td>
                            <td >{ele.userId}</td>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    );
}

export default TableComp;